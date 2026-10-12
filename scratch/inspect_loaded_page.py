import os
import sys
import time
import http.server
import socketserver
import threading
from playwright.sync_api import sync_playwright

PORT = 8095
ROOT_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci"
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
    page = browser.new_page(viewport={"width": 1600, "height": 1000})
    page.goto(f"http://localhost:{PORT}/index.html")
    page.wait_for_timeout(1500)
    
    # Check title, visible text, active elements
    title = page.title()
    visible_views = page.evaluate("""() => {
        const views = Array.from(document.querySelectorAll('[id^="view-"], [id*="View"]'));
        return views.filter(v => v.offsetParent !== null).map(v => v.id);
    }""")
    print("Page Title:", title)
    print("Visible views on load:", visible_views)
    
    browser.close()
