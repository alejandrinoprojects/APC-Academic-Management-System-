import os
import subprocess
from PIL import Image

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(EDGE_PATH):
    EDGE_PATH = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

SCRATCH_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\scratch"
EXTRACTED_DIR = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Extracted"

def render(html_name, png_name, width, height, dpr=2):
    html_path = os.path.join(SCRATCH_DIR, html_name)
    png_path = os.path.join(SCRATCH_DIR, png_name)
    cmd = [
        EDGE_PATH,
        "--headless",
        "--disable-gpu",
        f"--force-device-scale-factor={dpr}",
        f"--window-size={width},{height}",
        f"--screenshot={png_path}",
        f"file:///{os.path.abspath(html_path).replace(os.sep, '/')}"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error rendering {html_name}: {res.stderr}")
        return None
    
    # Trim excess whitespace from bottom if needed
    img = Image.open(png_path)
    print(f"{png_name} rendered: {img.size}")
    return png_path

render("ia_diagram.html", "ia_test.png", width=1460, height=1380, dpr=2)
render("nav_diagram.html", "nav_test.png", width=1620, height=1150, dpr=2)
