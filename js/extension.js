import { app } from "../../scripts/app.js";
import { MaigcQuillWidget } from "./magicquill_widget.js";

app.registerExtension({
  name: "Comfy.MagicQuill",
  async init(app) {

  },
  async setup(app) {
  },
  async beforeRegisterNodeDef(nodeType, nodeData, app) {
    if (nodeData.name === "MagicQuill") {
      // Create node
      const onNodeCreated = nodeType.prototype.onNodeCreated;
      nodeType.prototype.onNodeCreated = async function () {
        const r = onNodeCreated
          ? onNodeCreated.apply(this, arguments)
          : undefined;

        const node_id = this.id;

        const nodeName = `MagicQuill_${node_id}`;
        const nodeNamePNG = `${nodeName}.png`;

        console.log(`Create MagicQuill Node: ${nodeName}`);

        // Find widgets to hide
        for (const w of this.widgets) {
          if (["collapse_setting", "clear_canvas"].includes(w.name)) {
            // always show these widgets
          } else if (["image", "original_image", "add_color_image", "add_edge_image", "remove_edge_image", "positive_prompt"].includes(w.name)) {
            w.type = "hidden";
            w.value = null;
            w.computeSize = () => [0, -4];
            // never show these widgets
          } else {
            w.computeSize = () => [0, -4];
            // show these widgets on demand
          }
        }

        this.flags["setting_collapsed"] = true;
        MaigcQuillWidget.apply(this, [this, nodeNamePNG, {}, app]);
        return r;
      };
    }
  },
});
