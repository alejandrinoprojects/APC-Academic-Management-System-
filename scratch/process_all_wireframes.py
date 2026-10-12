import os
import shutil
import zipfile
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
    
    # Specific masks for school seal in School Overview card if present
    if 'image146' in src_screen_path or 'image98' in src_screen_path:
        # Mask APC seal circle in center of engineering card
        # Around x: 1000 to 1250, y: 700 to 950
        draw_wf.rectangle([1030, 720, 1200, 890], fill=(245, 247, 250), outline=(0, 0, 0), width=2)
        draw_wf.text((1075, 790), "LOGO", fill=(0, 0, 0), font=font_logo)

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

def main():
    media_dir = r"scratch/docx_media/word/media"
    
    # Wireframe mappings: (target_wf_img, src_screen_img, name)
    wf_mapping = [
        (96, 121, "Authentication and Role-Based Login"),
        (97, 122, "Institutional Dashboard"),
        (98, 146, "School Overview"),
        (99, 147, "Program Management Directory"),
        (101, 148, "Curriculum Workbench Overview"),
        (102, 126, "Interactive Curriculum Flowchart"),
        (103, 127, "Course Details Modal"),
        (104, 149, "Curriculum Spreadsheet Grid"),
        (105, 150, "OBE Hierarchy Hub"),
        (106, 151, "OBE Course-to-SO Matrix"),
        (107, 152, "OBE SO-to-PEO Alignment Schedule"),
        (108, 153, "OBE PEO-to-GA Alignment"),
        (109, 154, "Official Course Catalog Document"),
        (110, 155, "Official Curriculum Flowchart Document"),
        (111, 156, "Official Comparative Summary Report"),
        (112, 157, "Official Program of Study Sheet"),
        (113, 158, "Official Prospectus Sheet"),
        (114, 159, "Batch Excel Data Ingestion Modal"),
        (115, 161, "Data Export and Institutional Backup Modal"),
        (116, 162, "Collaborative Task Delegation Console"),
        (117, 163, "Immutable System Audit Trail"),
        (118, 164, "System Preferences and Settings Modal"),
        (119, 165, "Obsidian Gold Dark Mode Flowchart"),
        (120, 166, "Curriculum Version History and Revision Log")
    ]
    
    print("Generating 24 unbranded black & white wireframes...")
    for wf_id, scr_id, name in wf_mapping:
        src_path = os.path.join(media_dir, f"image{scr_id}.png")
        dst_path = os.path.join(media_dir, f"image{wf_id}.png")
        if not os.path.exists(src_path):
            print(f"ERROR: {src_path} not found!")
            continue
        wf = generate_unbranded_wireframe(src_path)
        wf.save(dst_path, format="PNG")
        print(f" -> Generated wireframe {wf_id} ({name}) from screen {scr_id}")

    # Also replace Figure 3.1, Figure 3.2, Figure 3.3 in media_dir
    graphs_dir = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\generated_graphs"
    # Fig 3.1 is image144.png
    fig3_1_src = os.path.join(graphs_dir, "Figure_3.1_Information_Architecture_Flowchart.png")
    fig3_1_dst = os.path.join(media_dir, "image144.png")
    shutil.copy(fig3_1_src, fig3_1_dst)
    print("Replaced image144.png with Python-generated Figure 3.1")

    # Fig 3.2 is image145.png
    fig3_2_src = os.path.join(graphs_dir, "Figure_3.2_Navigation_Structure_Flowchart.png")
    fig3_2_dst = os.path.join(media_dir, "image145.png")
    shutil.copy(fig3_2_src, fig3_2_dst)
    print("Replaced image145.png with Python-generated Figure 3.2")

    # Fig 3.3 is image167.png
    fig3_3_src = os.path.join(graphs_dir, "Figure_3.3_User_Login_Flow.png")
    fig3_3_dst = os.path.join(media_dir, "image167.png")
    shutil.copy(fig3_3_src, fig3_3_dst)
    print("Replaced image167.png with Python-generated Figure 3.3")

    # Re-pack DOCX
    docx_path = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Master_Cleaned.docx"
    print("Re-packing docx:", docx_path)
    
    # We update the zip file in-place with the new media files
    temp_docx = r"C:\Users\Dean Alejandrino\Downloads\temp_update.docx"
    with zipfile.ZipFile(docx_path, 'r') as zin, zipfile.ZipFile(temp_docx, 'w', compression=zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            if item.filename.startswith("word/media/"):
                media_file = os.path.join("scratch/docx_media", item.filename)
                if os.path.exists(media_file):
                    zout.write(media_file, item.filename)
                else:
                    zout.writestr(item, zin.read(item.filename))
            else:
                zout.writestr(item, zin.read(item.filename))
                
    shutil.move(temp_docx, docx_path)
    print("Successfully updated DOCX!")

if __name__ == '__main__':
    main()
