import os
from PIL import Image, ImageOps, ImageFilter, ImageDraw, ImageFont
import numpy as np

def transform_to_wireframe(img_path, browser_url="system://curriculum-management"):
    # Open image
    img = Image.open(img_path).convert('RGB')
    w, h = img.size
    
    # Target size for wireframe is 3270 x 2070
    target_w, target_h = 3270, 2070
    chrome_h = 100 # browser chrome height at 3270x2070
    
    content_h = target_h - chrome_h
    # Resize screenshot to fit target content area
    img_resized = img.resize((target_w, content_h), Image.Resampling.LANCZOS)
    
    # Convert to grayscale numpy array
    arr = np.array(img_resized.convert('L'), dtype=np.float32)
    
    # 1. Detect edges cleanly using Sobel-like gradient or PIL FIND_EDGES
    pil_gray = Image.fromarray(arr.astype(np.uint8))
    edges = np.array(pil_gray.filter(ImageFilter.FIND_EDGES), dtype=np.float32)
    
    # 2. Extract dark content (text, icons, dark buttons)
    # Dark content in original has low intensity
    # Map pixels:
    # If it was very dark (text/buttons), make it dark black.
    # If it was an edge, make it black line.
    # If it was light background or card background, make it pure white or light wireframe gray.
    
    wireframe = np.ones_like(arr) * 255.0 # default white
    
    # Light gray for cards and headers (intensity between 220 and 248)
    card_mask = (arr >= 225) & (arr <= 248)
    wireframe[card_mask] = 250.0
    
    # Edges become clean dark lines
    edge_mask = edges > 25
    wireframe[edge_mask] = np.clip(255.0 - (edges[edge_mask] * 2.2), 0, 80)
    
    # Text and dark elements (arr < 130) stay crisp dark text
    text_mask = arr < 135
    wireframe[text_mask] = np.clip(arr[text_mask] * 0.7, 0, 40)
    
    # Medium dark elements (135 to 200) - e.g. subtle text, badges
    mid_mask = (arr >= 135) & (arr < 210)
    wireframe[mid_mask] = np.clip(arr[mid_mask] * 0.6 + 50, 60, 140)
    
    wireframe_img = Image.fromarray(np.clip(wireframe, 0, 255).astype(np.uint8)).convert('RGB')
    
    # Create final canvas with Browser Chrome
    final_canvas = Image.new('RGB', (target_w, target_h), (255, 255, 255))
    draw = ImageDraw.Draw(final_canvas)
    
    # Draw Chrome Header
    draw.rectangle([0, 0, target_w, chrome_h], fill=(245, 247, 250), outline=(0, 0, 0), width=3)
    
    # Draw 3 Window Circles
    circle_y = chrome_h // 2
    r = 14
    for idx, cx in enumerate([50, 95, 140]):
        draw.ellipse([cx - r, circle_y - r, cx + r, circle_y + r], fill=(255, 255, 255), outline=(0, 0, 0), width=3)
        
    # Draw Address Bar
    bar_x1, bar_y1 = 200, 20
    bar_x2, bar_y2 = 1800, chrome_h - 20
    draw.rounded_rectangle([bar_x1, bar_y1, bar_x2, bar_y2], radius=6, fill=(255, 255, 255), outline=(0, 0, 0), width=3)
    
    # Try to load a clean sans-serif font
    try:
        font = ImageFont.truetype("arial.ttf", 26)
    except:
        font = ImageFont.load_default()
        
    draw.text((bar_x1 + 30, circle_y - 14), browser_url, fill=(0, 0, 0), font=font)
    
    # Paste wireframe content below chrome
    final_canvas.paste(wireframe_img, (0, chrome_h))
    
    # Draw outer border around entire canvas
    draw.rectangle([0, 0, target_w - 1, target_h - 1], outline=(0, 0, 0), width=4)
    
    return final_canvas

# Test on image122.png
out = transform_to_wireframe('scratch/docx_media/word/media/image122.png')
out.save('scratch/test_wireframe_clean.png')
print("Wireframe saved to scratch/test_wireframe_clean.png")
