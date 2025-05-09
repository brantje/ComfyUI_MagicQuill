import os
import torch.nn.functional as F
import torch
import sys
import torch.utils._pytree as pytree
import numpy as np
import subprocess
current_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.append(current_dir)
custom_nodes_dir = os.path.abspath(os.path.join(current_dir, '..'))
sys.path.append(custom_nodes_dir)
sys.path.append(os.path.abspath(os.path.join(current_dir, '..', '..', 'comfy_extras')))


brushnet_hyphen_dir = os.path.join(custom_nodes_dir, 'comfyui-brushnet')
brushnet_underscore_dir = os.path.join(custom_nodes_dir, 'comfyui_brushnet')

if not os.path.exists(brushnet_underscore_dir):
    print(f"Creating symlink from {brushnet_hyphen_dir} to {brushnet_underscore_dir}")
    
    # Create the symlink - use different methods based on OS
    if os.name == 'nt':  # Windows
        # Requires admin privileges or developer mode
        subprocess.run(['mklink', '/D', brushnet_underscore_dir, brushnet_hyphen_dir], shell=True)
    else:  # Unix/Linux/Mac
        os.symlink(brushnet_hyphen_dir, brushnet_underscore_dir)
    
    print(f"Symlink created: {os.path.exists(brushnet_underscore_dir)}")

# Now try importing from the symlinked directory
try:
    # Add to path
    sys.path.append(custom_nodes_dir)
    
    # Import from symlinked directory
    from comfyui_brushnet.brushnet_nodes import BrushNetLoader, BrushNet, BlendInpaint, get_files_with_extension
    print("Successfully imported from symlinked directory")
except ImportError as e:
    print(f"Import from symlink failed: {e}")
    try:
        from ComfyUI_BrushNet.brushnet_nodes import BrushNetLoader, BrushNet, BlendInpaint, get_files_with_extension
    except ImportError as e:
        print(f"Import from ComfyUI_BrushNet failed: {e}")
        raise ImportError("Failed to import even with ComfyUI_BrushNet. Please check file permissions and structure.")


from comfyui_controlnet_aux.node_wrappers.lineart import LineArt_Preprocessor
from comfyui_controlnet_aux.node_wrappers.pidinet import PIDINET_Preprocessor
from comfyui_controlnet_aux.node_wrappers.color import Color_Preprocessor

from nodes import ControlNetLoader, ControlNetApplyAdvanced, CLIPTextEncode, KSampler, VAEDecode
from nodes_mask import GrowMask

class ScribbleColorEditModel():
    def __init__(self):
        self.clip_text_encoder = CLIPTextEncode()
        self.mask_processor = GrowMask()
        self.controlnet_loader = ControlNetLoader()
        self.scribble_processor = PIDINET_Preprocessor()
        self.lineart_processor = LineArt_Preprocessor()
        self.color_processor = Color_Preprocessor()
        self.brushnet_loader = BrushNetLoader()
        self.brushnet_node = BrushNet()
        self.controlnet_apply = ControlNetApplyAdvanced()
        self.ksampler = KSampler()
        self.vae_decoder = VAEDecode()
        self.blender = BlendInpaint()
        # self.load_models('SD1.5', 'float16')

    def load_models(self, base_model_version, dtype):
        if base_model_version == "SD1.5":
            edge_controlnet_name = "control_v11p_sd15_scribble.safetensors"
            color_controlnet_name = "color_finetune.safetensors"
            brushnet_name = os.path.join("brushnet", "random_mask_brushnet_ckpt", "diffusion_pytorch_model.safetensors")
        else:
            raise ValueError("Invalid base_model_version, not supported yet!!!: {}".format(base_model_version))
        self.edge_controlnet = self.controlnet_loader.load_controlnet(edge_controlnet_name)[0]
        self.color_controlnet = self.controlnet_loader.load_controlnet(color_controlnet_name)[0]
        self.brushnet_loader.inpaint_files = get_files_with_extension('inpaint')
        print("self.brushnet_loader.inpaint_files: ", get_files_with_extension('inpaint'))
        self.brushnet = self.brushnet_loader.brushnet_loading(brushnet_name, dtype)[0]

    def safe_vae_decode(self, vae, latent_samples):
        """Safe VAE decoding that handles inference tensors correctly."""
        # First, ensure the latent samples are on CPU and detached
        samples = latent_samples["samples"].to(device="cpu").detach().clone()
        
        # Convert to standard float format
        samples = samples.float()
        
        # Disable gradient tracking for this operation
        with torch.no_grad():
            # Create a fresh dictionary with the cloned tensor
            latent_dict = {"samples": samples}
            try:
                # Decode using the VAE
                return self.vae_decoder.decode(vae, latent_dict)
            except RuntimeError as e:
                # If we still encounter an error, try a deeper copy approach
                print(f"First VAE decode attempt failed: {str(e)}")
                
                # Create completely fresh tensors by serializing and deserializing
                serialized = pytree.tree_map(lambda x: x.detach().cpu().numpy() if isinstance(x, torch.Tensor) else x, latent_dict)
                deserialized = pytree.tree_map(lambda x: torch.tensor(x) if isinstance(x, np.ndarray) else x, serialized)
                
                # Try decoding again with the completely new tensors
                return self.vae_decoder.decode(vae, deserialized)

    def process(self, model, vae, clip, image, colored_image, base_model_version, positive_prompt, negative_prompt, dtype, mask, add_mask, remove_mask, grow_size, stroke_as_edge, fine_edge, edge_strength, color_strength, inpaint_strength, seed, steps, cfg, sampler_name, scheduler):
        print("mask.shape", mask.shape)
        print("image.shape", image.shape)
        if not hasattr(self, 'edge_controlnet') or not hasattr(self, 'color_controlnet') or not hasattr(self, 'brushnet'):
            self.load_models(base_model_version, dtype)
        positive = self.clip_text_encoder.encode(clip, positive_prompt)[0]
        negative = self.clip_text_encoder.encode(clip, negative_prompt)[0]        
        mask = self.mask_processor.expand_mask(mask, expand=grow_size, tapered_corners=True)[0]
        image_copy = image.clone()
        if stroke_as_edge == "disable":
            bool_add_mask = add_mask > 0.5
            mean_brightness = image_copy[bool_add_mask].mean()
            if mean_brightness > 0.8:
                image_copy[bool_add_mask] = 0.0
            else:
                image_copy[bool_add_mask] = 1.0

        if not torch.equal(image, colored_image):
            print("Apply color controlnet")
            color_output = self.color_processor.execute(colored_image, resolution=2048)[0]
            lineart_output = self.lineart_processor.execute(image, resolution=512, coarse=False)[0]
            print("edge_map.shape", lineart_output.shape)
            positive, negative = self.controlnet_apply.apply_controlnet(positive, negative, self.color_controlnet, color_output, color_strength, 0.0, 1.0)
            positive, negative = self.controlnet_apply.apply_controlnet(positive, negative, self.edge_controlnet, lineart_output, 0.8, 0.0, 1.0)
        else:
            print("Apply edge controlnet")
            color_output = self.color_processor.execute(colored_image, resolution=2048)[0]
            if fine_edge == "enable":
                lineart_output = self.lineart_processor.execute(image, resolution=512, coarse=False)[0]
            else:
                lineart_output = self.scribble_processor.execute(image, safe='enable',resolution=512)[0]
            add_mask_resized = F.interpolate(add_mask.unsqueeze(0).unsqueeze(0).float(), size=(1, lineart_output.shape[1], lineart_output.shape[2]), mode='nearest').squeeze(0).squeeze(0)
            remove_mask_resized = F.interpolate(remove_mask.unsqueeze(0).unsqueeze(0).float(), size=(1, lineart_output.shape[1], lineart_output.shape[2]), mode='nearest').squeeze(0).squeeze(0)

            bool_add_mask_resized = (add_mask_resized > 0.5)
            bool_remove_mask_resized = (remove_mask_resized > 0.5)

            if stroke_as_edge == "enable":
                lineart_output[bool_remove_mask_resized] = 0.0
                lineart_output[bool_add_mask_resized] = 1.0
            else:
                lineart_output[bool_remove_mask_resized & ~bool_add_mask_resized] = 0.0
            positive, negative = self.controlnet_apply.apply_controlnet(positive, negative, self.edge_controlnet, lineart_output, edge_strength, 0.0, 1.0)

        model, positive, negative, latent = self.brushnet_node.model_update(
            model=model,
            vae=vae,
            image=image,
            mask=mask,
            brushnet=self.brushnet,
            positive=positive,
            negative=negative,
            scale=inpaint_strength,
            start_at=0,
            end_at=10000
        )

        latent_samples = self.ksampler.sample(
            model=model, 
            seed=seed, 
            steps=steps, 
            cfg=cfg, 
            sampler_name=sampler_name, 
            scheduler=scheduler, 
            positive=positive, 
            negative=negative, 
            latent_image=latent,
        )[0]

        # Use the safe VAE decode method instead of direct decoding
        final_image = self.safe_vae_decode(vae, latent_samples)[0]
        
        # Ensure image dimensions match before blending (handle RGB vs RGBA)
        if final_image.shape[-1] != image.shape[-1]:
            print(f"Dimension mismatch: final_image shape: {final_image.shape}, image shape: {image.shape}")
            
            # Handle different dimensions properly
            # First, make sure we understand the tensor shapes
            print(f"final_image.dim() = {final_image.dim()}, image.dim() = {image.dim()}")
            
            # Convert both to 3D (H,W,C) format if they're not already
            if final_image.dim() == 4:
                final_image = final_image.squeeze(0)  # Remove batch dimension if present
            if image.dim() == 4:
                image = image.squeeze(0)  # Remove batch dimension if present
                
            # Now handle channel differences
            if final_image.shape[-1] == 3 and image.shape[-1] == 4:
                # Add an alpha channel (fully opaque) to final_image
                alpha_channel = torch.ones((final_image.shape[0], final_image.shape[1], 1), 
                                          device=final_image.device, dtype=final_image.dtype)
                final_image = torch.cat([final_image, alpha_channel], dim=-1)
            elif final_image.shape[-1] == 4 and image.shape[-1] == 3:
                # Use only RGB channels from final_image or add alpha to image
                final_image = final_image[..., :3]
            else:
                # Just use the first 3 channels for both
                final_image = final_image[..., :3]
                if image.shape[-1] > 3:
                    image = image[..., :3]
        
        # Print shape information before blending
        print(f"Before blending - final_image shape: {final_image.shape}, image shape: {image.shape}, mask shape: {mask.shape}")
        
        # Make sure mask has the right dimensions for blending
        if mask.dim() == 3 and mask.shape[0] == 1:  # If mask is [1, H, W]
            mask_for_blend = mask.squeeze(0)        # Convert to [H, W]
        else:
            mask_for_blend = mask
            
        final_image = self.blender.blend_inpaint(final_image, image, mask_for_blend, kernel=10, sigma=10.0)[0]

        return (latent_samples, final_image, lineart_output, color_output)
