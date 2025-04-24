import os
import subprocess
from huggingface_hub import snapshot_download, hf_hub_download
parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
models_dir = os.path.abspath(os.path.join(parent_dir, '..', "models"))
print(models_dir)


hugging_face_repos = [
    {
        'repo_id': 'LiuZichen/MagicQuill-models',
        'local_dir': models_dir
    },

    # SDXL
    {
        'repo_id': 'xinsir/controlnet-scribble-sdxl-1.0',
        'local_dir': os.path.join(models_dir, 'controlnet', 'SDXL'),
        'filename': 'diffusion_pytorch_model.safetensors',
        'target_filename': 'sdxl-controlnet-scribble-1.0.safetensors'
    },
    {
        'repo_id': 'briaai/BRIA-2.3-ControlNet-ColorGrid',
        'local_dir': os.path.join(models_dir, 'controlnet', 'SDXL'),
        'filename': 'bria_23_controlnet_colorgrid.safetensors',
        'target_filename': 'bria_23_controlnet_colorgrid.safetensors'
    },
    {
        'repo_id': 'fullnonstop/random_mask_brushnet_ckpt_sdxl_v0',
        'local_dir': os.path.join(models_dir, 'inpaint', 'SDXL'),
        'filename': 'random_mask_brushnet_ckpt_sdxl_v0.safetensors',
        'target_filename': 'random_mask_brushnet_ckpt_sdxl_v0.safetensors'
    }
]

for repo in hugging_face_repos:
    if 'filename' in repo:
       filename = hf_hub_download(repo_id=repo['repo_id'], local_dir=repo['local_dir'], filename=repo['filename'])
       current_path = os.path.join(repo['local_dir'], filename)
       target_path = os.path.join(repo['local_dir'], repo['target_filename'])
       if os.path.exists(current_path):
         if current_path != target_path:
             os.rename(current_path, target_path)
    else:
        snapshot_download(repo_id=repo['repo_id'], local_dir=repo['local_dir'])

repos = {
    'ComfyUI_BrushNet': 'https://github.com/nullquant/ComfyUI-BrushNet',
    'comfyui_controlnet_aux': 'https://github.com/Fannovel16/comfyui_controlnet_aux'
}

for name, url in repos.items():
    target_dir = os.path.join(parent_dir, name)
    if not os.path.exists(target_dir):
        subprocess.run(['git', 'clone', url, target_dir], check=True)
