import hashlib
import os
import json
import random
from server import PromptServer
from PIL import Image, ImageOps
import torch
import numpy as np
import folder_paths
from aiohttp import web
import io
import base64
import time

import comfy.samplers
from .scribble_color_edit import ScribbleColorEditModel
from .llava_new import LLaVAModel
import torch.nn.functional as F

def tensor_to_base64(tensor):
    if isinstance(tensor, dict) and "samples" in tensor:
        # Handle dictionary with 'samples' key (latent)
        # For latent, we'll just return an empty string since latents aren't viewable directly
        return ""  # or implement specific handling for latent samples
    
    # For tensor input, process normally
    tensor = tensor.squeeze(0) * 255.
    pil_image = Image.fromarray(tensor.cpu().byte().numpy())
    buffered = io.BytesIO()
    pil_image.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    
    return img_str

def load_and_preprocess_image(image_path, convert_to='RGB', has_alpha=False):
    """Load and preprocess an image from a given path."""
    image = Image.open(image_path)
    image = ImageOps.exif_transpose(image)
    image = image.convert(convert_to)
    image_array = np.array(image).astype(np.float32) / 255.0
    image_tensor = torch.from_numpy(image_array)[None,]
    return image_tensor

def read_base64_image(base64_image):
    if base64_image.startswith("data:image/png;base64,"):
        base64_image = base64_image.split(",")[1]
    elif base64_image.startswith("data:image/jpeg;base64,"):
        base64_image = base64_image.split(",")[1]
    elif base64_image.startswith("data:image/webp;base64,"):
        base64_image = base64_image.split(",")[1]
    else:
        raise ValueError("Unsupported image format.")
    image_data = base64.b64decode(base64_image)
    image = Image.open(io.BytesIO(image_data))
    image = ImageOps.exif_transpose(image)
    return image

def load_and_resize_image(base64_image, convert_to='RGB', max_size=512):
    """Load and preprocess a base64 image, resize if necessary."""
    image = read_base64_image(base64_image)
    image = image.convert(convert_to)
    width, height = image.size
    if min(width, height) > max_size:
        scaling_factor = max_size / min(width, height)
        new_size = (int(width * scaling_factor), int(height * scaling_factor))
        image = image.resize(new_size, Image.LANCZOS)
    image_array = np.array(image).astype(np.float32) / 255.0
    image_tensor = torch.from_numpy(image_array)[None,]
    return image_tensor

def create_alpha_mask(image_path):
    """Create an alpha mask from the alpha channel of an image."""
    image = Image.open(image_path)
    image = ImageOps.exif_transpose(image)
    mask = torch.zeros((1, image.height, image.width), dtype=torch.float32, device="cpu")
    if 'A' in image.getbands():
        alpha_channel = np.array(image.getchannel('A')).astype(np.float32) / 255.0
        mask[0] = 1.0 - torch.from_numpy(alpha_channel)
    return mask

@PromptServer.instance.routes.post("/magic_quill/process_background_img")
async def process_background_img(request):
    img = await request.json()
    resized_img_tensor = load_and_resize_image(img)
    resized_img_base64 = "data:image/png;base64," + tensor_to_base64(resized_img_tensor)
    # add more processing here

    return web.json_response(resized_img_base64)

@PromptServer.instance.routes.post("/magic_quill/guess_prompt")
async def guess_prompt_handler(request):
    json_data = await request.json()
    add_color_image_data = json_data.get("add_color_image", None)
    original_image_data = json_data.get("original_image", None)
    add_edge_image_data = json_data.get("add_edge_image", None)

    if not original_image_data:
        return web.json_response({"error": "Original image is required."}, status=400)

    temp_files_to_clean = []
    input_dir = folder_paths.get_input_directory()

    def is_base64(s):
        return isinstance(s, str) and s.startswith("data:image/")

    def handle_image_input(image_data, filename_base):
        if is_base64(image_data):
            try:
                image = read_base64_image(image_data)
                timestamp = int(time.time())
                # Use a short hash to minimize collision chance but keep filename reasonable
                hash_part = hashlib.sha1(str(timestamp).encode() + image_data.encode()).hexdigest()[:8]
                filename = f"{filename_base}_{timestamp}_{hash_part}.png"
                filepath = os.path.join(input_dir, filename)
                image.save(filepath)
                print(f"Saved temporary image to {filepath}")
                temp_files_to_clean.append(filepath)
                return filepath
            except Exception as e:
                print(f"Error processing base64 image for {filename_base}: {e}")
                # Raise or return error? For now, let it raise to signal failure.
                raise ValueError(f"Invalid base64 data for {filename_base}") from e
        elif isinstance(image_data, str): # Assume filename
            return folder_paths.get_annotated_filepath(image_data)
        else: # Handle None or other invalid types
            return None

    try:
        original_image_path = handle_image_input(original_image_data, "guess_original")
        if not original_image_path or not os.path.exists(original_image_path):
             return web.json_response({"error": f"Original image not found or invalid: {original_image_data}"}, status=400)
             
        original_image_tensor = load_and_preprocess_image(original_image_path)
        
        add_color_image_path = None
        if add_color_image_data:
            add_color_image_path = handle_image_input(add_color_image_data, "guess_add_color")
            if not add_color_image_path or not os.path.exists(add_color_image_path):
                print(f"Warning: Add color image specified but not found or invalid: {add_color_image_data}. Using original image.")
                add_color_image_path = None # Fallback

        if add_color_image_path:
            add_color_image_tensor = load_and_preprocess_image(add_color_image_path)
        else:
            add_color_image_tensor = original_image_tensor # Fallback to original
        
        add_edge_image_path = None
        if add_edge_image_data:
            add_edge_image_path = handle_image_input(add_edge_image_data, "guess_add_edge")
            if not add_edge_image_path or not os.path.exists(add_edge_image_path):
                 print(f"Warning: Add edge image specified but not found or invalid: {add_edge_image_data}. Ignoring add edge.")
                 add_edge_image_path = None # Ignore if invalid

        width, height = original_image_tensor.shape[2], original_image_tensor.shape[1] # Corrected order W, H
        add_edge_mask = create_alpha_mask(add_edge_image_path) if add_edge_image_path else torch.zeros((1, height, width), dtype=torch.float32, device="cpu")

        # Ensure mask dimensions match original image
        if add_edge_mask.shape[1] != height or add_edge_mask.shape[2] != width:
             add_edge_mask = F.interpolate(add_edge_mask.unsqueeze(0), size=(height, width), mode='nearest').squeeze(0)

        res = MagicQuill.guess_prompt(original_image_tensor, add_color_image_tensor, add_edge_mask)

        return web.json_response({"prompt": res, "error": False})

    except Exception as e:
        import traceback
        traceback_str = traceback.format_exc()
        print(f"Error in guess_prompt_handler: {str(e)}\nTraceback: {traceback_str}")
        return web.json_response({"error": str(e), "traceback": traceback_str}, status=500)
    finally:
        # Cleanup temporary files
        for filepath in temp_files_to_clean:
            try:
                if os.path.exists(filepath):
                    os.remove(filepath)
                    print(f"Cleaned up temporary file: {filepath}")
            except Exception as e:
                print(f"Warning: Error cleaning up temporary file {filepath}: {str(e)}")

@PromptServer.instance.routes.post("/magic_quill/run")
async def run_magic_quill(request):
    try:
        post = await request.json()
        base64_image = post.get("image")
        if not base64_image:
            return web.json_response({"error": "No image provided"}, status=400)

        # Generate a unique prompt ID for this request
        prompt_id = str(hashlib.sha256(str(time.time()).encode()).hexdigest()[:8])
        PromptServer.instance.last_prompt_id = prompt_id
        PromptServer.instance.last_node_id = "magic_quill"
        
        # Get the input directory path
        input_dir = folder_paths.get_input_directory()
        
        # Generate unique filenames for this request
        timestamp = int(time.time())
        if post.get("dynamic_filenames", False):
            main_image_filename = f"api_image_{timestamp}.png"
            original_image_filename = f"api_original_{timestamp}.png"
            add_color_image_filename = f"api_add_color_{timestamp}.png"
            add_edge_image_filename = f"api_add_edge_{timestamp}.png"
            remove_edge_image_filename = f"api_remove_edge_{timestamp}.png"
        else:
            main_image_filename = f"clipspace-mask-MagicQuill_-1.png"
            original_image_filename = f"original_MagicQuill_-1.png"
            add_color_image_filename = f"add_color_MagicQuill_-1.png"
            add_edge_image_filename = f"add_edge_MagicQuill_-1.png"
            remove_edge_image_filename = f"remove_edge_MagicQuill_-1.png"   
        
        # Save main image
        main_image_path = os.path.join(input_dir, main_image_filename)
        image = read_base64_image(base64_image)
        image.save(main_image_path)
        print(f"Saved main image to {main_image_path}")
        
        # Save original image if provided, otherwise use main image
        base64_original = post.get("original_image")
        if base64_original:
            original_image_path = os.path.join(input_dir, original_image_filename)
            original_image = read_base64_image(base64_original)
            original_image.save(original_image_path)
            original_image_file = original_image_filename
        else:
            original_image_file = main_image_filename
        
        # Process and save optional images if provided
        add_color_image_file = None
        add_edge_image_file = None
        remove_edge_image_file = None
        
        # Save add_color_image if provided
        base64_add_color = post.get("add_color_image")
        if base64_add_color:
            add_color_image_path = os.path.join(input_dir, add_color_image_filename)
            add_color_image = read_base64_image(base64_add_color)
            add_color_image.save(add_color_image_path)
            add_color_image_file = add_color_image_filename
            
        # Save add_edge_image if provided
        base64_add_edge = post.get("add_edge_image")
        if base64_add_edge:
            add_edge_image_path = os.path.join(input_dir, add_edge_image_filename)
            add_edge_image = read_base64_image(base64_add_edge)
            add_edge_image.save(add_edge_image_path)
            add_edge_image_file = add_edge_image_filename
            
        # Save remove_edge_image if provided
        base64_remove_edge = post.get("remove_edge_image")
        if base64_remove_edge:
            remove_edge_image_path = os.path.join(input_dir, remove_edge_image_filename)
            remove_edge_image = read_base64_image(base64_remove_edge)
            remove_edge_image.save(remove_edge_image_path)
            remove_edge_image_file = remove_edge_image_filename
        
        # Get other parameters from the request
        checkpoint_name = post.get("checkpoint_name", "SD1.5/DreamShaper.safetensors")
        ckpt_path = folder_paths.get_full_path_or_raise("checkpoints", checkpoint_name)
        out = comfy.sd.load_checkpoint_guess_config(ckpt_path)
        
        model = out[0]
        clip = out[1]
        vae = out[2]
        
        random_seed = random.randint(0, 0xffffffffffffffff)
        
        if not model or not vae or not clip:
            return web.json_response({"error": "Missing required model objects"}, status=400)
            
        base_model_version = post.get("base_model_version", "SD1.5")
        positive_prompt = post.get("positive_prompt", "")
        negative_prompt = post.get("negative_prompt", "")
        dtype = post.get("dtype", "float16")
        grow_size = post.get("grow_size", 15)
        stroke_as_edge = post.get("stroke_as_edge", "enable")
        fine_edge = post.get("fine_edge", "disable")
        edge_strength = post.get("edge_strength", 0.5)
        color_strength = post.get("color_strength", 0.5)
        inpaint_strength = post.get("inpaint_strength", 1.0)
        
        seed = post.get("seed", random_seed) #Random seed
        steps = post.get("steps", 20)
        cfg = post.get("cfg", 4.0)
        sampler_name = post.get("sampler_name", "euler_ancestral")
        scheduler = post.get("scheduler", "exponential")

        print(f"Using files - Main: {main_image_filename}, Original: {original_image_file}, Add Color: {add_color_image_file}, Add Edge: {add_edge_image_file}, Remove Edge: {remove_edge_image_file}")

        # Call painter_execute with file paths instead of tensors
        result = MagicQuill.painter_execute(
            image=main_image_filename,
            original_image=original_image_file,
            add_color_image=add_color_image_file,
            add_edge_image=add_edge_image_file,
            remove_edge_image=remove_edge_image_file,
            model=model,
            vae=vae,
            clip=clip,
            base_model_version=base_model_version,
            positive_prompt=positive_prompt,
            negative_prompt=negative_prompt,
            dtype=dtype,
            grow_size=grow_size,
            stroke_as_edge=stroke_as_edge,
            fine_edge=fine_edge,
            edge_strength=edge_strength,
            color_strength=color_strength,
            inpaint_strength=inpaint_strength,
            seed=seed,
            steps=steps,
            cfg=cfg,
            sampler_name=sampler_name,
            scheduler=scheduler,
        )

        # Convert the result tensors to base64
        latent, image, edge_map, color_palette = result
        
        # Send progress update
        PromptServer.instance.send_sync(
            "progress", {"value": 1, "max": 1, "prompt_id": prompt_id, "node": "magic_quill"}
        )
        
        # Clean up temporary files (optional)
        if post.get("cleanup", False):
            try:
                if os.path.exists(main_image_path):
                    os.remove(main_image_path)
                if base64_original and os.path.exists(os.path.join(input_dir, original_image_filename)):
                    os.remove(os.path.join(input_dir, original_image_filename))
                if base64_add_color and os.path.exists(os.path.join(input_dir, add_color_image_filename)):
                    os.remove(os.path.join(input_dir, add_color_image_filename))
                if base64_add_edge and os.path.exists(os.path.join(input_dir, add_edge_image_filename)):
                    os.remove(os.path.join(input_dir, add_edge_image_filename))
                if base64_remove_edge and os.path.exists(os.path.join(input_dir, remove_edge_image_filename)):
                    os.remove(os.path.join(input_dir, remove_edge_image_filename))
            except Exception as e:
                print(f"Warning: Error cleaning up temporary files: {str(e)}")
        
        return web.json_response({
            "status": "success",
            "result": {
                "latent": tensor_to_base64(latent),
                "image": tensor_to_base64(image),
                "edge_map": tensor_to_base64(edge_map),
                "color_palette": tensor_to_base64(color_palette)
            }
        })
    except Exception as e:
        import traceback
        traceback_str = traceback.format_exc()
        print(f"Error: {str(e)}\nTraceback: {traceback_str}")
        return web.json_response({"error": str(e), "traceback": traceback_str}, status=500)


class MagicQuill(object):
    scribbleColorEditModel = ScribbleColorEditModel()
    llavaModel = LLaVAModel()

    @classmethod
    def INPUT_TYPES(self):
        self.canvas_set = False

        work_dir = folder_paths.get_input_directory()
        imgs = [
            img
            for img in os.listdir(work_dir)
            if os.path.isfile(os.path.join(work_dir, img))
        ]
        imgs.append(None)

        return {
            "required": {
                "image": (imgs, ),
                "original_image": (imgs,),
                "add_color_image": (imgs,),
                "add_edge_image": (imgs,),
                "remove_edge_image": (imgs,),
                "model": ("MODEL",),
                "clip": ("CLIP",),
                "vae": ("VAE",),
                
                "base_model_version": (['SD1.5'], {"default": "SD1.5"}),
                "positive_prompt": ("STRING", {"default": ""}),
                "negative_prompt": ("STRING", {"default": ""}),
                "dtype": (['float16', 'bfloat16', 'float32', 'float64'], {"default": "float16"}),
                "stroke_as_edge": (['enable', 'disable'], {"default": "enable"}),
                "fine_edge": (['enable', 'disable'], {"default": "disable"}),

                "grow_size": ("INT", {"default": 15, "min": 0, "max": 100, "step": 1, "display": "slider"}),
                "edge_strength": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 5.0, "step": 0.01, "display": "slider"}),
                "color_strength": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 5.0, "step": 0.01, "display": "slider"}),
                # "palette_resolution": ("INT", {"default": 2048, "min": 128, "max": 2048, "step": 16, "display": "slider"}),
                "inpaint_strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 5.0, "step": 0.01, "display": "slider"}),
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                "steps": ("INT", {"default": 20, "min": 1, "max": 50, "display": "slider"}),
                "cfg": ("FLOAT", {"default": 4.0, "min": 0.0, "max": 100.0, "step":0.1, "round": 0.01, "display": "slider"}),
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS, {"default": "euler_ancestral"}),
                "scheduler": (comfy.samplers.KSampler.SCHEDULERS, {"default": "exponential"}),
                # "optional_original_image_name": ("STRING", {"default": ""}),
                # "optional_add_color_image_name": ("STRING", {"default": ""}),
                # "optional_add_edge_image_name": ("STRING", {"default": ""}),
                # "optional_remove_edge_image_name": ("STRING", {"default": ""}),
            },
            "optional": {
                "optional_image": ("IMAGE",),
                "optional_image_mask": ("MASK",),
                "optional_original_image": ("IMAGE",),
                "optional_add_color_image": ("IMAGE",),
                "optional_add_edge_mask": ("MASK",),
                "optional_remove_edge_mask": ("MASK",),
            }
        }

    RETURN_TYPES = ("LATENT", "IMAGE", "IMAGE", "IMAGE")
    RETURN_NAMES = ("latent", "image", "edge map", "color palette")

    FUNCTION = "painter_execute"
    CATEGORY = "image"

    @classmethod
    def prepare_images_and_masks(cls, image, original_image, add_color_image, add_edge_image, remove_edge_image):
        # Handle file path inputs
        print(f"image: {image} original_image: {original_image} add_color_image: {add_color_image} add_edge_image: {add_edge_image} remove_edge_image: {remove_edge_image}")
        image_path = folder_paths.get_annotated_filepath(image)
        image_tensor = load_and_preprocess_image(image_path)
        height, width = image_tensor.shape[1], image_tensor.shape[2]
        total_mask = create_alpha_mask(image_path)
        
        original_image_path = folder_paths.get_annotated_filepath(original_image)
        original_image_tensor = load_and_preprocess_image(original_image_path)
        
        if add_color_image:
            add_color_image_path = folder_paths.get_annotated_filepath(add_color_image)
            add_color_image_tensor = load_and_preprocess_image(add_color_image_path)
        else:
            add_color_image_tensor = original_image_tensor
        
        add_edge_mask = create_alpha_mask(folder_paths.get_annotated_filepath(add_edge_image)) if add_edge_image else torch.zeros((1, height, width), dtype=torch.float32, device="cpu")
        remove_edge_mask = create_alpha_mask(folder_paths.get_annotated_filepath(remove_edge_image)) if remove_edge_image else torch.zeros((1, height, width), dtype=torch.float32, device="cpu")
        
        # Ensure all tensors have correct dimensions
        if add_edge_mask.shape[1] != height or add_edge_mask.shape[2] != width:
            add_edge_mask = F.interpolate(add_edge_mask.unsqueeze(0), size=(height, width), mode='nearest').squeeze(0)
            
        if remove_edge_mask.shape[1] != height or remove_edge_mask.shape[2] != width:
            remove_edge_mask = F.interpolate(remove_edge_mask.unsqueeze(0), size=(height, width), mode='nearest').squeeze(0)
            
        if total_mask.shape[1] != height or total_mask.shape[2] != width:
            total_mask = F.interpolate(total_mask.unsqueeze(0), size=(height, width), mode='nearest').squeeze(0)
        
        # Ensure all tensor operations detach gradients
        return add_color_image_tensor.detach(), original_image_tensor.detach(), total_mask.detach(), add_edge_mask.detach(), remove_edge_mask.detach()

    @classmethod
    def guess_prompt(cls, original_image_tensor, add_color_image_tensor, add_edge_mask):
        cls.llavaModel.load_model()
        description, ans1, ans2 = cls.llavaModel.process(original_image_tensor, add_color_image_tensor, add_edge_mask)
        ans_list = []
        if ans1 and ans1 != "":
            ans_list.append(ans1)
        if ans2 and ans2 != "":
            ans_list.append(ans2)
        cls.llavaModel.unload_model()
        return ", ".join(ans_list)

    @classmethod
    def painter_execute(cls, image, original_image, add_color_image, add_edge_image, remove_edge_image, model, vae, clip, base_model_version, positive_prompt, negative_prompt, dtype, grow_size, stroke_as_edge, fine_edge, edge_strength, color_strength, inpaint_strength, seed, steps, cfg, sampler_name, scheduler, optional_image = None, optional_image_mask = None, optional_original_image = None, optional_original_image_mask = None, optional_add_color_image = None, optional_add_color_image_mask = None, optional_add_edge_mask = None, optional_add_edge_mask_mask = None, optional_remove_edge_mask = None, optional_remove_edge_mask_mask = None):
        print(f"model: {model} vae: {vae} clip: {clip} base_model_version: {base_model_version} positive_prompt: {positive_prompt} negative_prompt: {negative_prompt} dtype: {dtype} grow_size: {grow_size} stroke_as_edge: {stroke_as_edge} fine_edge: {fine_edge} edge_strength: {edge_strength} color_strength: {color_strength} inpaint_strength: {inpaint_strength} seed: {seed} steps: {steps} cfg: {cfg} sampler_name: {sampler_name} scheduler: {scheduler}")
        print(f"original_image: {original_image} add_color_image: {add_color_image} add_edge_image: {add_edge_image} remove_edge_image: {remove_edge_image}")
        print(f"optional_image: {optional_image} optional_image_mask: {optional_image_mask} optional_original_image: {optional_original_image} optional_original_image_mask: {optional_original_image_mask} optional_add_color_image: {optional_add_color_image} optional_add_color_image_mask: {optional_add_color_image_mask} optional_add_edge_mask: {optional_add_edge_mask} optional_add_edge_mask_mask: {optional_add_edge_mask_mask} optional_remove_edge_mask: {optional_remove_edge_mask} optional_remove_edge_mask_mask: {optional_remove_edge_mask_mask}")
        # check if optional_original_image is tensor
        if isinstance(optional_image, torch.Tensor):
            image = optional_image
        if isinstance(optional_original_image, torch.Tensor):
            original_image = optional_original_image
        if isinstance(optional_add_color_image, torch.Tensor):
            add_color_image = optional_add_color_image
        if isinstance(optional_add_edge_mask, torch.Tensor):
            add_edge_mask = optional_add_edge_mask
        if isinstance(optional_remove_edge_mask, torch.Tensor):
            remove_edge_mask = optional_remove_edge_mask       
          
        if isinstance(optional_image, torch.Tensor) and isinstance(optional_image_mask, torch.Tensor):
            #if if not the same size, resize the mask
            if optional_image_mask.shape[1] != optional_image.shape[1] or optional_image_mask.shape[2] != optional_image.shape[2]:
                print("resizing mask")
                optional_image_mask = F.interpolate(optional_image_mask.unsqueeze(0), size=(optional_image.shape[1], optional_image.shape[2]), mode='nearest').squeeze(0)
            total_mask = optional_image_mask
          
        if not isinstance(image, torch.Tensor) and not isinstance(original_image, torch.Tensor) and not isinstance(add_color_image, torch.Tensor) and not isinstance(add_edge_image, torch.Tensor) and not isinstance(remove_edge_image, torch.Tensor):
            add_color_image, original_image, total_mask, add_edge_mask, remove_edge_mask = cls.prepare_images_and_masks(image, original_image, add_color_image, add_edge_image, remove_edge_image)

        if torch.sum(remove_edge_mask).item() > 0 and torch.sum(add_edge_mask).item() == 0:
            if positive_prompt == "":
                positive_prompt = "empty scene"
            edge_strength /= 3.

        if not positive_prompt or positive_prompt == "":
            positive_prompt = cls.guess_prompt(original_image, add_color_image, add_edge_mask)

        print("positive prompt: ", positive_prompt)
        latent_samples, final_image, lineart_output, color_output = cls.scribbleColorEditModel.process(model, vae, clip, original_image, add_color_image, base_model_version, positive_prompt, negative_prompt, dtype, total_mask, add_edge_mask, remove_edge_mask, grow_size, stroke_as_edge, fine_edge, edge_strength, color_strength, inpaint_strength, seed, steps, cfg, sampler_name, scheduler)

        # Ensure all data is serializable before sending via JSON
        # Convert tensor to base64 string
        final_image_base64 = tensor_to_base64(final_image)
        
        # Get the string representation of the image path if it's not a tensor
        image_name = image
        if isinstance(image, torch.Tensor):
            image_name = "generated_image"
            
        # Send the serializable data
        PromptServer.instance.send_sync(
            "magic_quill/final_image", {"image": final_image_base64, "image_name": image_name}
        )
        
        return (latent_samples, final_image, lineart_output, color_output)

    @classmethod
    def IS_CHANGED(self, image, original_image, add_color_image, add_edge_image, remove_edge_image, model, vae, clip, base_model_version, positive_prompt, negative_prompt, dtype, grow_size, edge_strength, color_strength, inpaint_strength, seed, steps, cfg, sampler_name, scheduler):
        image_path = folder_paths.get_annotated_filepath(image)
        m = hashlib.sha256()
        with open(image_path, "rb") as f:
            m.update(f.read())

        return m.digest().hex()

    @classmethod
    def VALIDATE_INPUTS(self, image, original_image, add_color_image, add_edge_image, remove_edge_image, model, vae, clip, base_model_version, positive_prompt, negative_prompt, dtype, grow_size, edge_strength, color_strength, inpaint_strength, seed, steps, cfg, sampler_name, scheduler, optional_image = None):
        return True