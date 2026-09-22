import os
import time
import http.server
import socketserver
import threading
from playwright.sync_api import sync_playwright

PORT = 8095
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
    
    # 1. Login
    page.goto(f"http://localhost:{PORT}/index.html")
    page.wait_for_timeout(1000)
    page.click("#btnLoginSubmit")
    page.wait_for_timeout(1500)
    
    # Switch to Dark Mode
    page.evaluate("""() => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('apc_theme', 'dark');
    }""")
    page.wait_for_timeout(500)

    views_to_test = [
        ("admin", "window.renderAdminOverview ? window.renderAdminOverview() : null"),
        ("soe_exd", "window.goToSchoolExd('soe')"),
        ("pd_workbench", "window.goToProgramPd('BSCpE')"),
        ("flowchart", "window.selectProgram('BSCpE', 'flowchart')"),
    ]

    for name, nav_code in views_to_test:
        page.evaluate(nav_code)
        page.wait_for_timeout(1000)
        page.screenshot(path=os.path.join(ROOT_DIR, f"scan_dark_{name}.png"))

    browser.close()

server.shutdown()
print("Dark mode scan complete!")
