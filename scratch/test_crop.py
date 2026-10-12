import os
import subprocess
from PIL import Image

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(EDGE_PATH):
    EDGE_PATH = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

SCRATCH_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\scratch"

def render_and_crop(html_path, out_png, width=1500, height=2200):
    cmd = [
        EDGE_PATH,
        "--headless",
        "--disable-gpu",
        "--force-device-scale-factor=2",
        f"--window-size={width},{height}",
        f"--screenshot={out_png}",
        f"file:///{os.path.abspath(html_path).replace(os.sep, '/')}"
    ]
    subprocess.run(cmd, check=True)
    
    # Auto-crop bottom whitespace
    img = Image.open(out_png)
    bg = Image.new(img.mode, img.size, img.getpixel((0,0)))
    diff = Image.frombytes("L", img.size, bytes(a != b for a, b in zip(img.tobytes(), bg.tobytes())))
    bbox = diff.getbbox()
    if bbox:
        # Add a 20px padding around bbox
        padded_bbox = (
            max(0, bbox[0] - 20),
            max(0, bbox[1] - 20),
            min(img.width, bbox[2] + 20),
            min(img.height, bbox[3] + 20)
        )
        img_cropped = img.crop(padded_bbox)
        img_cropped.save(out_png)
        print(f"Saved {out_png} with size {img_cropped.size}")
    else:
        print(f"Saved {out_png} with size {img.size}")

# Test on ia_diagram
render_and_crop(os.path.join(SCRATCH_DIR, "ia_diagram.html"), os.path.join(SCRATCH_DIR, "ia_cropped.png"), width=1460, height=1850)
