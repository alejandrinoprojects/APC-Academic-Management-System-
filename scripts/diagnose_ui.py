import os
import time
import http.server
import socketserver
import threading
from playwright.sync_api import sync_playwright

PORT = 8092
ROOT_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\lively-turing"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)
    def log_message(self, format, *args):
        pass

server = socketserver.TCPServer(("", PORT), Handler)
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()
time.sleep(1)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE_PATH, headless=True)
    page = browser.new_page(viewport={"width": 1600, "height": 950})
    
    # 1. Login and Admin Page
    page.goto(f"http://localhost:{PORT}/index.html")
    page.wait_for_timeout(1000)
    page.click("#btnLoginSubmit")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(ROOT_DIR, "diag_01_admin.png"))
    
    # 2. Check SoE Overview
    page.evaluate("window.goToSchoolExd('soe')")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(ROOT_DIR, "diag_02_exd.png"))
    
    # 3. Check PD Workbench
    page.evaluate("window.goToProgramPd('BSCpE')")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(ROOT_DIR, "diag_03_pd.png"))

    # 4. Check Flowchart in Light Mode
    page.evaluate("window.selectProgram('BSCpE', 'flowchart')")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(ROOT_DIR, "diag_04_flowchart_light.png"))

    # 5. Check what happens on theme toggle to dark and back to light
    page.evaluate("window.toggleTheme()")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(ROOT_DIR, "diag_05_flowchart_dark.png"))

    page.evaluate("window.toggleTheme()")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(ROOT_DIR, "diag_06_flowchart_back_light.png"))

    # Check SoE overview again after theme toggle
    page.evaluate("window.goToSchoolExd('soe')")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(ROOT_DIR, "diag_07_exd_after_toggle.png"))

    browser.close()

server.shutdown()
print("Diagnosis complete!")
