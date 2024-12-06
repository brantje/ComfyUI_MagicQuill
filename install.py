import os
import subprocess

# 获取当前文件所在目录的上级目录
parent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

repos = {
    'repo1': 'https://github.com/nullquant/ComfyUI-BrushNet',
    'repo2': 'https://github.com/Fannovel16/comfyui_controlnet_aux'
}

for name, url in repos.items():
    target_dir = os.path.join(parent_dir, name)
    if not os.path.exists(target_dir):
        subprocess.run(['git', 'clone', url, target_dir], check=True)
    
    # 如果需要安装为包
    subprocess.run(['pip', 'install', '-e', target_dir], check=True)