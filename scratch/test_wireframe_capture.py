import os
import sys
import time
import http.server
import socketserver
import threading
from playwright.sync_api import sync_playwright

PORT = 8092
ROOT_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)
    def log_message(self, format, *args):
        pass

def run_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), QuietHandler) as httpd:
        httpd.serve_forever()

t = threading.Thread(target=run_server, daemon=True)
t.start()
time.sleep(1)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE_PATH, headless=True)
    # 1635 x 1035 gives 3270 x 2070 at device_scale_factor=2!
    page = browser.new_page(viewport={"width": 1635, "height": 1035}, device_scale_factor=2)
    page.goto(f"http://localhost:{PORT}/index.html")
    page.wait_for_timeout(1000)
    page.click("#btnLoginSubmit")
    page.wait_for_timeout(1000)

    # Inject Wireframe CSS
    wireframe_css = """
    /* WIREFRAME BARE-BONES TRANSFORMATION */
    * {
        box-shadow: none !important;
        text-shadow: none !important;
        border-color: #111827 !important;
    }
    body, #app, main, .bg-slate-50, .bg-gray-50, .bg-white {
        background-color: #ffffff !important;
        color: #0f172a !important;
    }
    /* Buttons and active items */
    .bg-blue-600, .bg-blue-700, .bg-indigo-600, .bg-emerald-600, .bg-green-600, .bg-amber-500, .bg-slate-900, .bg-black {
        background-color: #1e293b !important;
        color: #ffffff !important;
        border: 1.5px solid #000000 !important;
    }
    .bg-blue-50, .bg-indigo-50, .bg-emerald-50, .bg-amber-50, .bg-slate-100, .bg-gray-100 {
        background-color: #f8fafc !important;
        color: #000000 !important;
        border: 1px solid #1e293b !important;
    }
    .text-blue-600, .text-blue-700, .text-indigo-600, .text-emerald-600, .text-amber-600, .text-amber-500 {
        color: #000000 !important;
    }
    /* Ensure clear wireframe borders on cards */
    .rounded-xl, .rounded-lg, .rounded-2xl, .card, [class*="border"] {
        border: 1.5px solid #1e293b !important;
    }
    /* Grayscale all badges and icons */
    svg, img {
        filter: grayscale(100%) contrast(200%) !important;
    }
    """
    page.add_style_tag(content=wireframe_css)
    page.wait_for_timeout(500)
    
    os.makedirs(r"scratch\test_wf", exist_ok=True)
    out_file = r"scratch\test_wf\test_dashboard_wf.png"
    page.screenshot(path=out_file)
    print("Screenshot saved to", out_file)
    browser.close()
