# 🪶 MagicQuill: An Intelligent Interactive Image Editing System
<a href="https://magicquill.art/demo/"><img src="https://img.shields.io/static/v1?label=Project&message=magicquill.art&color=blue"></a>
<a href="https://arxiv.org/abs/2411.09703"><img src="https://img.shields.io/badge/arXiv-2411.09703-b31b1b.svg"></a>
<a href="https://huggingface.co/spaces/AI4Editing/MagicQuill"><img src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue)"></a>
<a href="https://creativecommons.org/licenses/by-sa/4.0/"><img src="https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg"></a>

https://github.com/user-attachments/assets/8ee9663a-fef2-484a-a0b7-8427ab590424

There is an HD video on [Youtube](https://www.youtube.com/watch?v=5DiKfONMnE4).

[Zichen Liu](https://zliucz.github.io)<sup>\*,1,2</sup>, [Yue Yu](https://bruceyyu.github.io/)<sup>\*,1,2</sup>, [Hao Ouyang](https://ken-ouyang.github.io/)<sup>2</sup>, [Qiuyu Wang](https://github.com/qiuyu96)<sup>2</sup>, [Ka Leong Cheng](https://felixcheng97.github.io/)<sup>1,2</sup>, [Wen Wang](https://github.com/encounter1997)<sup>3,2</sup>, [Zhiheng Liu](https://johanan528.github.io/)<sup>4</sup>, [Qifeng Chen](https://cqf.io/)<sup>†,1</sup>, [Yujun Shen](https://shenyujun.github.io/)<sup>†,2</sup><br>
<sup>1</sup>HKUST <sup>2</sup>Ant Group <sup>3</sup>ZJU <sup>4</sup>HKU <sup>\*</sup>equal contribution <sup>†</sup>corresponding author

> TLDR: MagicQuill is an intelligent and interactive system achieving precise image editing.
>
> Key Features: 😎 User-friendly interface / 🤖 AI-powered suggestions / 🎨 Precise local editing

## MagicQuill ComfyUI Custom Node
MagicQuill is now available in ComfyUI!!!

<img src="docs/comfyui.png" width="100%" >


##  Setup
Follow the following guide to install the custom node. The ComfyUI workflow is available at `MagicQuill.json`

1. clone the repo (comfyui branch) in the `custom_nodes` directory
    ```
    git clone -b comfyui https://github.com/magic-quill/MagicQuill.git ComfyUI_MagicQuill
    cd ComfyUI_MagicQuill
    ```
2. download and unzip checkpoints
    ```
    wget -O models.zip "https://hkustconnect-my.sharepoint.com/:u:/g/personal/zliucz_connect_ust_hk/EWlGF0WfawJIrJ1Hn85_-3gB0MtwImAnYeWXuleVQcukMg?e=Gcjugg&download=1"
    unzip models.zip
    ```
    If the .zip file is not accessible, download it via browser. All checkpoints are about 25 GB in total. It may take some time to download. Alternatively, check our checkpoints at [huggingface](https://huggingface.co/LiuZichen/MagicQuill-models). Please merge the `models` folder with the `ComfyUI/models`.

3. install the environment
    ```
    python install.py
    pip install -r requirements.txt
    ```

## Citation
Don't forget to cite this source if it proves useful in your research!
```bibtex
@article{liu2024magicquill, 
	title={MagicQuill: An Intelligent Interactive Image Editing System}, 
	author={Zichen Liu and Yue Yu and Hao Ouyang and Qiuyu Wang and Ka Leong Cheng and Wen Wang and Zhiheng Liu and Qifeng Chen and Yujun Shen}, 
	year={2024}, 
	eprint={2411.09703}, 
	archivePrefix={arXiv}, 
	primaryClass={cs.CV}}
```

## Acknowledgement
Our implementation is based on 
- [ComfyUI-BrushNet](https://github.com/nullquant/ComfyUI-BrushNet)
- [ComfyUI](https://github.com/comfyanonymous/ComfyUI)
- [LLaVA](https://github.com/haotian-liu/LLaVA)
- [comfyui_controlnet_aux](https://github.com/Fannovel16/comfyui_controlnet_aux)
- [ComfyUI_Custom_Nodes_AlekPet](https://github.com/AlekPet/ComfyUI_Custom_Nodes_AlekPet)
- [fabric.js](https://github.com/fabricjs/fabric.js)

Thanks for their remarkable contribution and released code!

## Note
Note: This repo is governed by the license of CC BY-NC 4.0 We strongly advise users not to knowingly generate or allow others to knowingly generate harmful content, including hate speech, violence, pornography, deception, etc. 

(注：本仓库受CC BY-NC的许可协议限制。我们强烈建议，用户不应传播及不应允许他人传播以下内容，包括但不限于仇恨言论、暴力、色情、欺诈相关的有害信息。)

