"""
@author: Zichen LIU (zliucz.github.io) and Yue YU (https://bruceyyu.github.io/)
@title: MagicQuill
@nickname: MagicQuill nodes
@description: Official ComfyUI Implementations for Paper - MagicQuill: An Intelligent Interactive Image Editing System
"""

import os
import importlib.util
import subprocess
import sys
import shutil
import __main__
import pkgutil
import re
import threading

python = sys.executable

from .magic_quill import MagicQuill

extension_folder = os.path.dirname(os.path.realpath(__file__))
folder_web = os.path.join(os.path.dirname(os.path.realpath(__main__.__file__)), "web")
folder_comfyui_web_extensions = os.path.join(folder_web, "extensions")
folder__web_lib = os.path.join(folder_web, "lib")

NODE_CLASS_MAPPINGS = {
    "MagicQuill": MagicQuill,
}


NODE_DISPLAY_NAME_MAPPINGS = {
    "MagicQuill": "MagicQuill",
}

web_dir = "web_dir"
WEB_DIRECTORY = os.path.join(".", web_dir)

def installNodes():
    print(f"\n-------> MagicQuill Node Installing [DEBUG] <-------")
    web_extensions_dir = os.path.join(extension_folder, web_dir)

    # Clear old dir folder
    if os.path.exists(web_extensions_dir):
        shutil.rmtree(web_extensions_dir)

    extensions_dirs_copy = ["js", "assets", "lib"]

    for dir_name in extensions_dirs_copy:
        folder_curr = os.path.join(extension_folder, dir_name)
        if os.path.exists(folder_curr):
            folder_curr_dist = os.path.join(
                web_extensions_dir,
                dir_name,
                "" if dir_name != "js" else web_extensions_dir,
            )
            shutil.copytree(folder_curr, folder_curr_dist, dirs_exist_ok=True)

    print(f"\n-------> MagicQuill Node Installed [DEBUG] <-------")

installNodes()