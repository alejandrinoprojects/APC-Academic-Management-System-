import os
import sys
import time
import http.server
import socketserver
import threading
from playwright.sync_api import sync_playwright

PORT = 8098
ROOT_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
OUT_DIR = r"scratch\generated_wireframes"
os.makedirs(OUT_DIR, exist_ok=True)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)
    def log_message(self, format, *args):
        pass

server = socketserver.TCPServer(("", PORT), Handler)
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()
time.sleep(1)

WIREFRAME_JS = """
(() => {
    // 1. Browser Chrome
    if (!document.getElementById('wireframe-browser-chrome')) {
        const chrome = document.createElement('div');
        chrome.id = 'wireframe-browser-chrome';
        chrome.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 52px;
            background: #f8fafc;
            border-bottom: 2px solid #000000;
            display: flex;
            align-items: center;
            padding: 0 20px;
            z-index: 9999999;
            box-sizing: border-box;
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        `;
        chrome.innerHTML = `
            <div style="display: flex; gap: 8px; margin-right: 24px;">
                <div style="width: 14px; height: 14px; border-radius: 50%; border: 1.5px solid #000000; background: #ffffff;"></div>
                <div style="width: 14px; height: 14px; border-radius: 50%; border: 1.5px solid #000000; background: #ffffff;"></div>
                <div style="width: 14px; height: 14px; border-radius: 50%; border: 1.5px solid #000000; background: #ffffff;"></div>
            </div>
            <div style="flex: 1; max-width: 1100px; height: 32px; background: #ffffff; border: 1.5px solid #000000; border-radius: 4px; display: flex; align-items: center; padding: 0 14px; font-size: 13px; font-weight: 500; color: #000000; letter-spacing: 0.5px;">
                system://curriculum-management
            </div>
        `;
        document.body.prepend(chrome);
        document.body.style.paddingTop = '52px';
        document.body.style.boxSizing = 'border-box';
    }

    // 2. Wireframe Stylesheet
    if (!document.getElementById('wireframe-override-css')) {
        const style = document.createElement('style');
        style.id = 'wireframe-override-css';
        style.textContent = `
            * {
                box-shadow: none !important;
                text-shadow: none !important;
                -webkit-filter: grayscale(100%) !important;
                filter: grayscale(100%) !important;
            }
            body, #app, main, .bg-slate-50, .bg-gray-50, .bg-white {
                background: #ffffff !important;
                color: #000000 !important;
            }
            div, section, article, nav, aside, header, footer, main, table, tr, td, th {
                border-color: #000000 !important;
            }
            .bg-blue-600, .bg-blue-700, .bg-indigo-600, .bg-emerald-600, .bg-green-600, .bg-amber-500, .bg-slate-900, .bg-black {
                background-color: #1e293b !important;
                color: #ffffff !important;
                border: 1.5px solid #000000 !important;
            }
            .bg-blue-50, .bg-indigo-50, .bg-emerald-50, .bg-amber-50, .bg-slate-100, .bg-gray-100, .bg-gray-50 {
                background-color: #f8fafc !important;
                color: #000000 !important;
                border: 1.5px solid #000000 !important;
            }
            .text-blue-600, .text-blue-700, .text-indigo-600, .text-emerald-600, .text-green-600, .text-amber-600 {
                color: #000000 !important;
            }
            .rounded-xl, .rounded-lg, .rounded-2xl, .card, [class*="border"] {
                border: 1.5px solid #000000 !important;
            }
            button {
                border: 1.5px solid #000000 !important;
            }
            input, select, textarea {
                border: 1.5px solid #000000 !important;
                background: #ffffff !important;
                color: #000000 !important;
            }
        `;
        document.head.appendChild(style);
    }
})()
"""

# Let's inspect what happens across the 24 targets
print("Setup ready for wireframe capture.")
