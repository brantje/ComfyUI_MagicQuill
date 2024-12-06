import webcolors
import random
from collections import Counter
import numpy as np
from torchvision import transforms
import cv2  # OpenCV
import torch

def draw_contour(img, mask):
    mask_np = mask.numpy().astype(np.uint8) * 255
    img_np = img.numpy()
    img_np = img_np.astype(np.uint8)
    img_bgr = cv2.cvtColor(img_np, cv2.COLOR_RGB2BGR)

    kernel = np.ones((5, 5), np.uint8)
    mask_dilated = cv2.dilate(mask_np, kernel, iterations=3)
    contours, _ = cv2.findContours(mask_np, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    for contour in contours:
        cv2.drawContours(img_bgr, [contour], -1, (0, 0, 255), thickness=10)
    img_np = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)
    transform = transforms.ToTensor()
    img_tensor = transform(img_np)

    img_tensor = img_tensor.permute(1, 2, 0)

    return img_tensor.unsqueeze(0)

def get_colored_contour(img1, img2, threshold=10):
    diff = torch.abs(img1 - img2).float()
    diff_gray = torch.mean(diff, dim=-1)
    mask = diff_gray > threshold

    return draw_contour(img2, mask), mask

def closest_colour(requested_colour):
    min_colours = {}
    for key, name in webcolors.CSS3_HEX_TO_NAMES.items():
        r_c, g_c, b_c = webcolors.hex_to_rgb(key)
        rd = (r_c - requested_colour[0].item()) ** 2
        gd = (g_c - requested_colour[1].item()) ** 2
        bd = (b_c - requested_colour[2].item()) ** 2
        min_colours[(rd + gd + bd)] = name
    return min_colours[min(min_colours.keys())]

def rgb_to_name(rgb_tuple):
    try:
        return webcolors.rgb_to_name(rgb_tuple)
    except ValueError:
        closest_name = closest_colour(rgb_tuple)
        return closest_name

def find_different_colors(img1, img2, threshold=10):
    img1 = img1.to(torch.uint8)
    img2 = img2.to(torch.uint8)
    diff = torch.abs(img1 - img2).float().mean(dim=-1)
    diff_mask = diff > threshold
    diff_indices = torch.nonzero(diff_mask, as_tuple=True)

    if len(diff_indices[0]) > 50:
        sampled_indices = random.sample(range(len(diff_indices[0])), 50)
        sampled_diff_indices = (diff_indices[0][sampled_indices], diff_indices[1][sampled_indices])
    else:
        sampled_diff_indices = diff_indices

    diff_colors = img2[sampled_diff_indices[0], sampled_diff_indices[1], :]
    color_names = [rgb_to_name(tuple(color)) for color in diff_colors]
    name_counter = Counter(color_names)
    filtered_colors = {name: count for name, count in name_counter.items() if count > 10}
    sorted_color_names = [name for name, count in sorted(filtered_colors.items(), key=lambda item: item[1], reverse=True)]
    unique_color_names_str = ', '.join(sorted_color_names)
    return unique_color_names_str

def get_bounding_box_from_mask(mask, padded=False):
    mask = mask.squeeze()
    rows, cols = torch.where(mask > 0.5)
    if len(rows) == 0 or len(cols) == 0:
        return (0, 0, 0, 0)
    height, width = mask.shape
    if padded:
        padded_size = max(width, height)
        if width < height:
            offset_x = (padded_size - width) / 2
            offset_y = 0
        else:
            offset_y = (padded_size - height) / 2
            offset_x = 0
        top_left_x = round(float((torch.min(cols).item() + offset_x) / padded_size), 3)
        bottom_right_x = round(float((torch.max(cols).item() + offset_x) / padded_size), 3)
        top_left_y = round(float((torch.min(rows).item() + offset_y) / padded_size), 3)
        bottom_right_y = round(float((torch.max(rows).item() + offset_y) / padded_size), 3)
    else:
        offset_x = 0
        offset_y = 0

        top_left_x = round(float(torch.min(cols).item() / width), 3)
        bottom_right_x = round(float(torch.max(cols).item() / width), 3)
        top_left_y = round(float(torch.min(rows).item() / height), 3)
        bottom_right_y = round(float(torch.max(rows).item() / height), 3)

    
    return (top_left_x, top_left_y, bottom_right_x, bottom_right_y)