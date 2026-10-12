import os
from PIL import Image, ImageOps, ImageFilter, ImageDraw, ImageFont
import numpy as np

def generate_unbranded_wireframe(src_screen_path, browser_url="system://curriculum-management"):
    target_w, target_h = 3270, 2070
    chrome_h = 100
    content_h = target_h - chrome_h

    # 1. Load source screenshot
    src = Image.open(src_screen_path).convert('RGB')
    src_resized = src.resize((target_w, content_h), Image.Resampling.LANCZOS)
    
    # 2. Convert to grayscale array
    arr = np.array(src_resized.convert('L'), dtype=np.float32)
    
    # Clean edge detection
    pil_gray = Image.fromarray(arr.astype(np.uint8))
    edges = np.array(pil_gray.filter(ImageFilter.FIND_EDGES), dtype=np.float32)
    
    # Base white canvas
    wf = np.ones_like(arr) * 255.0
    
    # Cards & section background (light gray #F8FAFC)
    card_mask = (arr >= 225) & (arr <= 248)
    wf[card_mask] = 250.0
    
    # Edges become crisp black lines
    edge_mask = edges > 25
    wf[edge_mask] = np.clip(255.0 - (edges[edge_mask] * 2.3), 0, 0)
    
    # Dark text and dark buttons become solid black
    text_mask = arr < 135
    wf[text_mask] = np.clip(arr[text_mask] * 0.5, 0, 0)
    
    # Mid-tones
    mid_mask = (arr >= 135) & (arr < 210)
    wf[mid_mask] = np.clip(arr[mid_mask] * 0.6 + 40, 50, 120)
    
    wf_img = Image.fromarray(np.clip(wf, 0, 255).astype(np.uint8)).convert('RGB')
    draw_wf = ImageDraw.Draw(wf_img)
    
    # 3. MASK ALL BRANDING
    # Sidebar width is approximately ~540px at 3270 width
    sidebar_w = int(target_w * (300 / 1600)) # ~613px
    
    # Top-Left Logo & Title in Sidebar (replace APC branding with clean unbranded box)
    draw_wf.rectangle([0, 0, sidebar_w, 140], fill=(255, 255, 255), outline=(0, 0, 0), width=2)
    # Logo box
    draw_wf.rectangle([25, 25, 140, 115], fill=(245, 247, 250), outline=(0, 0, 0), width=2)
    try:
        font_logo = ImageFont.truetype("arialbd.ttf", 20)
        font_title = ImageFont.truetype("arialbd.ttf", 22)
        font_sub = ImageFont.truetype("arial.ttf", 16)
        font_chrome = ImageFont.truetype("arial.ttf", 26)
    except:
        font_logo = font_title = font_sub = font_chrome = ImageFont.load_default()
        
    draw_wf.text((50, 58), "LOGO", fill=(0, 0, 0), font=font_logo)
    draw_wf.text((160, 40), "ACADEMIC SYSTEM", fill=(0, 0, 0), font=font_title)
    draw_wf.text((160, 75), "Curriculum Management", fill=(100, 100, 100), font=font_sub)
    
    # Bottom-Left User Profile in Sidebar (remove admin@apc.edu.ph branding)
    user_y1 = content_h - 120
    draw_wf.rectangle([0, user_y1, sidebar_w, content_h], fill=(255, 255, 255), outline=(0, 0, 0), width=2)
    draw_wf.rectangle([25, user_y1 + 20, 95, user_y1 + 95], fill=(30, 41, 59), outline=(0, 0, 0), width=2)
    draw_wf.text((45, user_y1 + 45), "SA", fill=(255, 255, 255), font=font_logo)
    draw_wf.text((115, user_y1 + 35), "System Administrator", fill=(0, 0, 0), font=font_title)
    draw_wf.text((115, user_y1 + 68), "role: administrator", fill=(100, 100, 100), font=font_sub)
    
    # 4. FINAL CANVAS WITH BROWSER CHROME
    final_canvas = Image.new('RGB', (target_w, target_h), (255, 255, 255))
    draw_final = ImageDraw.Draw(final_canvas)
    
    # Draw Chrome Header
    draw_final.rectangle([0, 0, target_w, chrome_h], fill=(245, 247, 250), outline=(0, 0, 0), width=3)
    
    # 3 Window Circles
    circle_y = chrome_h // 2
    r = 14
    for idx, cx in enumerate([50, 95, 140]):
        draw_final.ellipse([cx - r, circle_y - r, cx + r, circle_y + r], fill=(255, 255, 255), outline=(0, 0, 0), width=3)
        
    # Address Bar
    bar_x1, bar_y1 = 200, 20
    bar_x2, bar_y2 = 1800, chrome_h - 20
    draw_final.rounded_rectangle([bar_x1, bar_y1, bar_x2, bar_y2], radius=6, fill=(255, 255, 255), outline=(0, 0, 0), width=3)
    draw_final.text((bar_x1 + 30, circle_y - 14), browser_url, fill=(0, 0, 0), font=font_chrome)
    
    # Paste wireframe content
    final_canvas.paste(wf_img, (0, chrome_h))
    
    # Outer frame border
    draw_final.rectangle([0, 0, target_w - 1, target_h - 1], outline=(0, 0, 0), width=4)
    
    return final_canvas

# Test on Dashboard
res = generate_unbranded_wireframe('scratch/docx_media/word/media/image122.png')
res.save('scratch/test_unbranded_wf.png')
print("Unbranded wireframe test saved.")
