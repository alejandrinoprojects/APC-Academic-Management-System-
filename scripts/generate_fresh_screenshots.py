import os
import sys
import time
import threading
import http.server
import socketserver
from playwright.sync_api import sync_playwright

PORT = 8089
ROOT_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\lively-turing"
OUT_DIR = os.path.join(ROOT_DIR, "screenshots", "updated_live_screenshots")
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

os.makedirs(OUT_DIR, exist_ok=True)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)
    def log_message(self, format, *args):
        pass  # Quiet logging

def start_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()

server_thread = threading.Thread(target=start_server, daemon=True)
server_thread.start()
print(f"Local server started on port {PORT}")
time.sleep(1)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE_PATH, headless=True)
    page = browser.new_page(viewport={"width": 1600, "height": 950})

    # 1. Login Portal
    page.goto(f"http://localhost:{PORT}/index.html")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(OUT_DIR, "01_Login_Portal.png"))
    print("Saved: 01_Login_Portal.png")

    # 2. Institutional Admin Hub (click login)
    page.click("#btnLoginSubmit")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(OUT_DIR, "02_Institutional_Admin_Hub.png"))
    print("Saved: 02_Institutional_Admin_Hub.png")

    # 3. School of Engineering Overview
    page.evaluate("window.goToSchoolExd('soe')")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(OUT_DIR, "03_School_Of_Engineering_Overview.png"))
    print("Saved: 03_School_Of_Engineering_Overview.png")

    # 4. Program Director Workbench
    page.evaluate("window.goToProgramPd('BSCpE')")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(OUT_DIR, "04_Program_Director_Workbench.png"))
    print("Saved: 04_Program_Director_Workbench.png")

    # 5. Curriculum Flowchart Table (Light Mode)
    page.evaluate("window.selectProgram('BSCpE', 'flowchart', null, 1)")
    page.wait_for_timeout(1500)
    # Click course to highlight feeder & dependent
    page.evaluate("if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(OUT_DIR, "05_Curriculum_Flowchart_Table.png"))
    print("Saved: 05_Curriculum_Flowchart_Table.png")

    # 6. Master Spreadsheet Workbench
    page.evaluate("window.selectProgram('BSCpE', 'spreadsheet', null, 1)")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(OUT_DIR, "06_Master_Spreadsheet_Workbench.png"))
    print("Saved: 06_Master_Spreadsheet_Workbench.png")

    # 7. Syllabus Management Portal
    page.evaluate("window.navigateView('syllabus')")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(OUT_DIR, "07_Syllabus_Management_Portal.png"))
    print("Saved: 07_Syllabus_Management_Portal.png")

    # 8. Dark Mode Curriculum Flowchart Table
    page.evaluate("window.selectProgram('BSCpE', 'flowchart', null, 1)")
    page.wait_for_timeout(1000)
    page.evaluate("document.documentElement.classList.add('dark')")
    page.wait_for_timeout(800)
    # Trigger active course highlight in dark mode to verify the new colors!
    page.evaluate("if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(OUT_DIR, "08_Dark_Mode_Curriculum_Flowchart.png"))
    print("Saved: 08_Dark_Mode_Curriculum_Flowchart.png")

    # 9. Settings Modal in Dark Mode (Showing Theme Switcher!)
    page.evaluate("window.openLoginModal()")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(OUT_DIR, "09_Settings_Modal_Dark_Mode.png"))
    print("Saved: 09_Settings_Modal_Dark_Mode.png")

    # 10. Settings Modal in Light Mode (Showing Theme Switcher!)
    page.evaluate("document.documentElement.classList.remove('dark')")
    page.wait_for_timeout(800)
    page.screenshot(path=os.path.join(OUT_DIR, "10_Settings_Modal_Light_Mode.png"))
    print("Saved: 10_Settings_Modal_Light_Mode.png")

    browser.close()
    print("All fresh updated screenshots successfully generated!")
