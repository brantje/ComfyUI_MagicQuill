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
    {
        'repo_id': 'InstantX/FLUX.1-dev-Controlnet-Union',
        'local_dir': os.path.join(models_dir, 'controlnet', 'FLUX1'),
        'filename': 'diffusion_pytorch_model.safetensors',
        'target_filename': 'FLUX.1-dev-Controlnet-Union.safetensors'
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
