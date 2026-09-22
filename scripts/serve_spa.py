"""
APC Academic Architecture Suite
SPA Development Server with Clean URL Fallback (scripts/serve_spa.py)

Serves static assets, JS, CSS, and images directly.
Any non-file URL path (e.g., /schools, /cpe/flowchart, /school/soe)
is transparently served index.html with HTTP 200, matching Cloudflare Pages'
not_found_handling = "single-page-application" configuration.
"""
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler
try:
    from http.server import ThreadingHTTPServer as ServerClass
except ImportError:
    from http.server import HTTPServer as ServerClass

PORT = 8080
if len(sys.argv) > 1:
    try:
        PORT = int(sys.argv[1])
    except ValueError:
        pass

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class SpaRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)

    def do_GET(self):
        # Determine path without query string
        url_path = self.path.split('?')[0].split('#')[0]
        # Clean leading slash
        clean_rel = url_path.lstrip('/')
        local_path = os.path.join(ROOT_DIR, clean_rel)

        # If it's a real file or directory that exists, serve normally
        if os.path.exists(local_path) and not os.path.isdir(local_path):
            return super().do_GET()
        if os.path.isdir(local_path) and os.path.exists(os.path.join(local_path, 'index.html')):
            return super().do_GET()

        # If it has a file extension (.js, .css, .png, .jpg, .ico, .svg, .json) and wasn't found -> 404
        _, ext = os.path.splitext(url_path)
        if ext and ext not in ['.html', '.htm']:
            return super().do_GET()

        # Otherwise, fall back to index.html for SPA clean deep-linking
        self.path = '/index.html'
        return super().do_GET()

    def do_HEAD(self):
        url_path = self.path.split('?')[0].split('#')[0]
        clean_rel = url_path.lstrip('/')
        local_path = os.path.join(ROOT_DIR, clean_rel)

        if os.path.exists(local_path) and not os.path.isdir(local_path):
            return super().do_HEAD()
        if os.path.isdir(local_path) and os.path.exists(os.path.join(local_path, 'index.html')):
            return super().do_HEAD()

        _, ext = os.path.splitext(url_path)
        if ext and ext not in ['.html', '.htm']:
            return super().do_HEAD()

        self.path = '/index.html'
        return super().do_HEAD()

def run(port=PORT):
    server_address = ('', port)
    try:
        httpd = ServerClass(server_address, SpaRequestHandler)
        print("=" * 70)
        print(f"APC RAMS SPA SERVER running at http://localhost:{port}/")
        print(f"Root: {ROOT_DIR}")
        print("Clean HTML5 Deep-Linking: ACTIVE (routes fall back to index.html)")
        print("Press Ctrl+C to stop.")
        print("=" * 70)
        httpd.serve_forever()
    except OSError as e:
        if port == 8080:
            print(f"[PORT 8080 IN USE] Switching to 8081...")
            run(8081)
        else:
            raise e

if __name__ == '__main__':
    run()
