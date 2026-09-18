"""
APC Academic Architecture Suite
Real-Time HTML Layers File Watcher (watch_html_layers.py)
"""
import os, sys, time, subprocess

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WATCH_DIR = os.path.join(BASE_DIR, 'html_layers')
SYNC_SCRIPT = os.path.join(BASE_DIR, 'scripts', 'sync_layers_to_site.py')

def get_mtimes():
    mtimes = {}
    for root, dirs, files in os.walk(WATCH_DIR):
        for f in files:
            if f.endswith('.html'):
                p = os.path.join(root, f)
                try:
                    mtimes[p] = os.path.getmtime(p)
                except OSError:
                    pass
    return mtimes

def watch_loop():
    print("=" * 70)
    print("APC ACADEMIC SUITE: HTML LAYERS WATCHER")
    print("Watching directory:", WATCH_DIR)
    print("Press Ctrl+C to stop.")
    print("=" * 70)
    
    last_mtimes = get_mtimes()
    while True:
        time.sleep(1.5)
        current_mtimes = get_mtimes()
        changed = False
        for p, mtime in current_mtimes.items():
            if p not in last_mtimes or mtime > last_mtimes[p]:
                print(f"[FILE CHANGED] {os.path.basename(p)} -> Triggering sync...")
                changed = True
                break
        if changed:
            subprocess.run([sys.executable, SYNC_SCRIPT], cwd=BASE_DIR)
            last_mtimes = current_mtimes

if __name__ == "__main__":
    try:
        watch_loop()
    except KeyboardInterrupt:
        print("\nWatcher stopped by user.")
