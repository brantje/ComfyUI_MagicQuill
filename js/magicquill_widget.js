import { api } from "../../scripts/api.js";
import { ComfyApp } from "../../scripts/app.js";
import { embedMagicQuill } from "./lib/magicquill.es.js";

const formatImagePath = (imageRes, overrideName = null) => {
  const name = overrideName || imageRes.name;
  const subfolder = imageRes.subfolder ? `${imageRes.subfolder}/` : '';
  const type = imageRes.type ? ` [${imageRes.type}]` : '';
  return `${subfolder}${name}${type}`;
}

const setWidgetValue = (node, widgetName, value) => {
  const widget = node.widgets.find((w) => w.name === widgetName);
  if (widget) {
    widget.value = value;
  }
}
const getWidgetValue = (node, widgetName) => {
  const widget = node.widgets.find((w) => w.name === widgetName);
  if (widget) {
    return widget.value;
  }
  return null;
}

export function MaigcQuillWidget(node, inputName, inputData, app) {
  node.name = inputName;
  const widget = {
    type: "magicquill_widget",
    name: `w${inputName}`,
    callback: () => { },
    draw: function (ctx, _, widgetWidth, y, widgetHeight) {
      const margin = 10,
        visible = app.canvas.ds.scale > 0.8 && this.type === "magicquill_widget",
        w = widgetWidth - margin * 2,
        clientRectBound = ctx.canvas.getBoundingClientRect(),
        leftOffset = clientRectBound.left / app.canvas.ds.scale,
        topOffset = clientRectBound.top / app.canvas.ds.scale,
        transform = new DOMMatrix()
          .scaleSelf(
            clientRectBound.width / ctx.canvas.width,
            clientRectBound.height / ctx.canvas.height
          )
          .multiplySelf(ctx.getTransform())
          .translateSelf(margin + leftOffset, margin + y + topOffset);

      let aspectRatio = 1;
      if (node?.imgs && typeof node.imgs !== undefined) {
        aspectRatio = node.imgs[0].naturalHeight / node.imgs[0].naturalWidth;
      }
      Object.assign(this.domContainer.style, {
        left: `${transform.e}px`,
        top: `${transform.f}px`,
        width: `${w * transform.a}px`,
        height: `${w * transform.d}px`,
        position: "absolute",
        zIndex: app.graph._nodes.indexOf(node),
      });
      this.domContainer.hidden = !visible;
    },
  };

  const uploadFile = async (fileName, imageBlob) => {
    const formData = new FormData();
    formData.append("image", imageBlob, fileName);
    formData.append("overwrite", "true");

    const resp = await fetch("/upload/image", {
      method: "POST",
      body: formData,
    });

    if (resp.status === 200) {
      return await resp.json();
    } else {
      throw new Error(`${resp.status} - ${resp.statusText}`);
    }
  }

  const uploadMask = async (fileName, maskBlob) => {
    const maskFileName = "clipspace-mask-" + fileName;
    const formData = new FormData();
    formData.append("image", maskBlob, maskFileName);
    formData.append("original_ref", JSON.stringify({ filename: fileName, subfolder: "", type: "input" }));
    formData.append("type", "input");
    formData.append("subfolder", "clipspace");
    formData.append("overwrite", "true");

    const resp = await fetch("/upload/mask", { method: "POST", body: formData });

    if (resp.status === 200) {
      const data = await resp.json();
      updateClipspace(data);
    } else {
      throw new Error(`${resp.status} - ${resp.statusText}`);
    }
  }

  const updateClipspace = (data) => {
    const { name: maskFileName, subfolder: maskSubFolder, type: maskType } = data;
    const img = new Image();

    ComfyApp.clipspace = {
      'widgets': node.widgets.map(({ type, name, value }) => ({
        type, name, value: name === "image" ? formatImagePath({ name: maskFileName, type: maskType, subfolder: maskSubFolder }) : value
      })),
      'imgs': [img],
      'original_imgs': node.imgs,
      'images': node.images,
      'selectedIndex': 0,
      'img_paste_mode': 'selected'
    };
    img.src = getImageSrc(maskFileName, maskSubFolder);
    ComfyApp.pasteFromClipspace(node);
  }

  const getImageSrc = (fileName, subFolder) => {
    return api.apiURL(`/view?filename=${fileName}&type=input&subfolder=${subFolder}${app.getPreviewFormatParam()}&${Date.now()}`);
  }

  const showImage = (name) => {
    let img = new Image();
    img.onload = () => {
      node.imgs = [img];
      app.graph.setDirtyCanvas(true);
    };

    let folder_separator = name.lastIndexOf("/");
    let subfolder = "";
    if (folder_separator > -1) {
      subfolder = name.substring(0, folder_separator);
      name = name.substring(folder_separator + 1);
    }

    img.src = api.apiURL(
      `/view?filename=${name}&type=input&subfolder=${subfolder}${app.getPreviewFormatParam()}&${new Date().getTime()}`
    );
    node.setSizeForImage?.();
  }

  const changeDimensionCallBack = ({ height, width }) => {
    node.nodeSize = { height, width };
    node.onResize(height, width);
  }
  const uploadImgCallBack = async (img) => {
    const res = await uploadFile(inputName, img);
    showImage(res.name);
    return res;
  }
  const uploadOriginalImgCallBack = async (img) => {
    const res = await uploadFile("original_" + inputName, img);
    setWidgetValue(node, "original_image", formatImagePath(res))
    return res;
  }
  const uploadAddEdgeMaskCallBack = async (img) => {
    const res = await uploadFile("add_edge_" + inputName, img);
    setWidgetValue(node, "add_edge_image", formatImagePath(res))
    return res;
  }
  const uploadRemoveEdgeMaskCallBack = async (img) => {
    const res = await uploadFile("remove_edge_" + inputName, img);
    setWidgetValue(node, "remove_edge_image", formatImagePath(res))
    return res;
  }
  const uploadColoredImgCallBack = async (img) => {
    const res = await uploadFile("add_color_" + inputName, img);
    setWidgetValue(node, "add_color_image", formatImagePath(res))
    return res;
  }
  const uploadTotalMaskCallBack = async (img) => {
    const res = await uploadMask(inputName, img);
    return res;
  }
  const uploadBackgroundImgCallBack = async (img) => {
    const res = await api.fetchApi("/magic_quill/process_background_img", {
      method: "POST",
      body: JSON.stringify(img),
    }).then(res => res.json());
    return res;
  }

  const guessPromptCallBack = async () => {
    const res = await api.fetchApi("/magic_quill/guess_prompt", {
      method: "POST",
      body: JSON.stringify({
        add_color_image: getWidgetValue(node, "add_color_image"),
        original_image: getWidgetValue(node, "original_image"),
        add_edge_image: getWidgetValue(node, "add_edge_image"),
      }),
    }).then(res => res.json());
    setWidgetValue(node, "positive_prompt", res.prompt);
    return res;
  }
  const updatePromptCallBack = (prompt) => {
    setWidgetValue(node, "positive_prompt", prompt);
  }

  api.addEventListener("magic_quill/final_image", async ({ detail }) => {
    const { image, image_name } = detail;
    const selfImageName = getWidgetValue(node, "image");
    if (selfImageName === image_name) {
      if (window.updateGeneratedImg && window.updateGeneratedImg[magicQuillObjID]) {
        const updateGeneratedImg = window.updateGeneratedImg[magicQuillObjID];
        updateGeneratedImg(image);
      }
    }
  });

  const mqDiv = document.createElement('div');
  mqDiv.setAttribute("style", "width: 100%; height: 100%;");
  widget.domContainer = mqDiv;

  const magicQuillObjID = embedMagicQuill(mqDiv, {
    autoAdaptToPhone: false,
    theme: "dark",
    changeDimensionCallBack,
    uploadImgCallBack,
    uploadOriginalImgCallBack,
    uploadAddEdgeMaskCallBack,
    uploadRemoveEdgeMaskCallBack,
    uploadColoredImgCallBack,
    uploadTotalMaskCallBack,
    uploadBackgroundImgCallBack,
    guessPromptCallBack,
    updatePromptCallBack,
  });

  document.body.appendChild(mqDiv);

  node.addWidget("button", "Setting", "collapse_setting", () => {
    this.flags.setting_collapsed = !this.flags.setting_collapsed;
    node.onResize();
  });

  // Add customWidget to node
  node.addCustomWidget(widget);

  node.onRemoved = () => {
    // When removing this node we need to remove the input from the DOM
    for (let y in node.widgets) {
      if (node.widgets[y].domContainer) {
        node.widgets[y].domContainer.remove();
      }
    }
  };

  widget.onRemove = () => {
    widget.domContainer?.remove();
  };

  node.onResize = () => {
    let [w, h] = this.size;
    let aspectRatio;

    if (node.nodeSize) {
      let { height, width } = node.nodeSize;
      aspectRatio = height / width;
      if (isNaN(aspectRatio)) aspectRatio = 0.5;
    }

    let buffer = this.flags.setting_collapsed ? 130 : 450;

    w = 600
    h = w * aspectRatio + buffer;
    this.size = [w, h];
  };

  node.onDrawBackground = (ctx) => {
    const setting_widgets = ["base_model_version","positive_prompt", "negative_prompt", "dtype", "grow_size", "stroke_as_edge", "fine_edge", "edge_strength", "color_strength", "inpaint_strength", "seed", "steps", "cfg", "sampler_name", "scheduler",  "optional_original_image_name", "optional_add_color_image_name", "optional_add_edge_image_name", "optional_remove_edge_image_name"]
    if (!this.flags.setting_collapsed) {
      for (const w of this.widgets) {
        if (setting_widgets.includes(w.name)) {
          w.computeSize = null;
        }
      }
    } else {
      for (const w of this.widgets) {
        if (setting_widgets.includes(w.name)) {
          w.computeSize = () => [0, -4];
        }
      }
    }
  };

  node.onConnectInput = () => console.log(`Connected input ${node.name}`);

  app.canvas.onDrawBackground = function () {
    // Draw node isnt fired once the node is off the screen
    // if it goes off screen quickly, the input may not be removed
    // this shifts it off screen so it can be moved back if the node is visible.
    for (let n in app.graph._nodes) {
      const currnode = app.graph._nodes[n];
      for (let w in currnode.widgets) {
        let wid = currnode.widgets[w];
        if (Object.hasOwn(wid, "magicquill_widget")) {
          wid.domContainer.style.left = -8000 + "px";
          wid.domContainer.style.position = "absolute";
        }
      }
    }
  };

  app.graph.setDirtyCanvas(true, false);
  node.onResize();

  return { widget: widget };
}
