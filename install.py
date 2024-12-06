import os
import subprocess

parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

repos = {
    'ComfyUI_BrushNet': 'https://github.com/nullquant/ComfyUI-BrushNet',
    'comfyui_controlnet_aux': 'https://github.com/Fannovel16/comfyui_controlnet_aux'
}

for name, url in repos.items():
    target_dir = os.path.join(parent_dir, name)
    if not os.path.exists(target_dir):
        subprocess.run(['git', 'clone', url, target_dir], check=True)
    
    subprocess.run(['pip', 'install', '-e', target_dir], check=True)