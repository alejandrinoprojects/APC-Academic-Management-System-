import os
import subprocess
from PIL import Image

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(EDGE_PATH):
    EDGE_PATH = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

OUTPUT_DIR = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Extracted"
SCRATCH_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\scratch"

def render_html_to_png(html_path, output_png, width=1800, height=2600):
    cmd = [
        EDGE_PATH,
        "--headless",
        "--disable-gpu",
        "--force-device-scale-factor=2",
        f"--window-size={width},{height}",
        f"--screenshot={output_png}",
        f"file:///{os.path.abspath(html_path).replace(os.sep, '/')}"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        print(f"Rendered {output_png} successfully.")
        # Open with Pillow and crop white borders if needed, or inspect size
        img = Image.open(output_png)
        print(f"Image size: {img.size}")
    else:
        print(f"Error rendering: {res.stderr}")

print("Rendering utility ready.")
