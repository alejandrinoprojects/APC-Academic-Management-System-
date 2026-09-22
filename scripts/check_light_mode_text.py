import os
import time
import http.server
import socketserver
import threading
from playwright.sync_api import sync_playwright

PORT = 8094
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
    
    # Ensure light mode
    page.evaluate("""() => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('apc_theme', 'light');
    }""")
    page.wait_for_timeout(500)

    # Function to find all elements with white or near-white text on light background
    find_contrast_issues = """() => {
        const issues = [];
        const all = document.querySelectorAll('*');
        function getRgb(col) {
            const m = col.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)/);
            return m ? [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])] : null;
        }
        function getLuminance(r, g, b) {
            return (0.299 * r + 0.587 * g + 0.114 * b);
        }
        function getEffectiveBg(el) {
            let cur = el;
            while (cur && cur !== document.documentElement) {
                const style = window.getComputedStyle(cur);
                const bg = style.backgroundColor;
                const m = bg.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*([\\d.]+))?\\)/);
                if (m) {
                    const alpha = m[4] !== undefined ? parseFloat(m[4]) : 1;
                    if (alpha > 0.1) {
                        return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3])];
                    }
                }
                cur = cur.parentElement;
            }
            return [255, 255, 255]; // default white page bg
        }

        all.forEach(el => {
            // only check visible elements with direct text
            if (el.offsetParent === null) return;
            const style = window.getComputedStyle(el);
            if (style.visibility === 'hidden' || style.display === 'none' || parseFloat(style.opacity) < 0.1) return;
            
            // check text content
            let hasDirectText = false;
            for (let child of el.childNodes) {
                if (child.nodeType === Node.TEXT_NODE && child.textContent.trim().length > 0) {
                    hasDirectText = true;
                    break;
                }
            }
            if (!hasDirectText) return;

            const textRgb = getRgb(style.color);
            if (!textRgb) return;
            const textLum = getLuminance(textRgb[0], textRgb[1], textRgb[2]);

            // If text is white or near-white (luminance > 180)
            if (textLum > 180) {
                const bgRgb = getEffectiveBg(el);
                const bgLum = getLuminance(bgRgb[0], bgRgb[1], bgRgb[2]);
                // If background is also light (luminance > 160)
                if (bgLum > 160) {
                    issues.push({
                        tag: el.tagName,
                        id: el.id,
                        className: el.className,
                        text: el.textContent.trim().substring(0, 60),
                        textColor: style.color,
                        bgColor: `rgb(${bgRgb.join(',')})`,
                        parentClass: el.parentElement ? el.parentElement.className : ''
                    });
                }
            }
        });
        return issues;
    }"""

    views_to_test = [
        ("admin", "window.renderAdminOverview ? window.renderAdminOverview() : null"),
        ("soe_exd", "window.goToSchoolExd('soe')"),
        ("pd_workbench", "window.goToProgramPd('BSCpE')"),
        ("flowchart", "window.selectProgram('BSCpE', 'flowchart')"),
        ("curriculum_home", "window.navigateView('curriculum-home')"),
        ("syllabus", "window.selectProgram('BSCpE', 'syllabus')"),
        ("spreadsheet", "window.selectProgram('BSCpE', 'spreadsheet')"),
    ]

    for name, nav_code in views_to_test:
        page.evaluate(nav_code)
        page.wait_for_timeout(1200)
        issues = page.evaluate(find_contrast_issues)
        print(f"=== VIEW: {name} (Found {len(issues)} white-on-light issues) ===")
        for iss in issues:
            safe_text = iss['text'].encode('ascii', 'replace').decode()
            print(f"  [{iss['tag']}] '{safe_text}' -> Text: {iss['textColor']}, Bg: {iss['bgColor']}, Class: {iss['className'][:50]}")
        page.screenshot(path=os.path.join(ROOT_DIR, f"scan_light_{name}.png"))

    browser.close()

server.shutdown()
print("Scan finished!")
