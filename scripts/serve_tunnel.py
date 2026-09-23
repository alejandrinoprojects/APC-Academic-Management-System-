"""
APC Academic Architecture Suite
Cloudflare Tunnel + SPA Development Server Launcher (scripts/serve_tunnel.py)

1. Starts or connects to the local SPA server on http://localhost:8080
2. Launches cloudflared tunnel (--protocol http2) to bypass ISP QUIC/UDP blocks
3. Extracts and displays the public https://*.trycloudflare.com URL
4. Copies the live public URL to Windows clipboard automatically
"""
import os
import sys
import time
import subprocess
import re
import socket
import webbrowser
import signal

PORT = 8080
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CLOUDFLARED_PATH = r"C:\Program Files (x86)\cloudflared\cloudflared.exe"
if not os.path.exists(CLOUDFLARED_PATH):
    CLOUDFLARED_PATH = "cloudflared"

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

def copy_to_clipboard(text):
    try:
        p = subprocess.Popen(["clip"], stdin=subprocess.PIPE, shell=True)
        p.communicate(input=text.strip().encode('utf-8'))
    except Exception:
        pass

processes = []

def cleanup(sig=None, frame=None):
    print("\n[*] Stopping Cloudflare Tunnel and local services...", flush=True)
    for p in processes:
        try:
            p.terminate()
            p.kill()
        except Exception:
            pass
    print("[+] Tunnel stopped cleanly. Goodbye!\n", flush=True)
    sys.exit(0)

signal.signal(signal.SIGINT, cleanup)
signal.signal(signal.SIGTERM, cleanup)

def main():
    print("\n" + "=" * 70, flush=True)
    print("   APC RAMS ACADEMIC ARCHITECTURE SUITE - CLOUDFLARE TUNNEL HOST", flush=True)
    print("=" * 70, flush=True)

    # 1. Ensure local SPA server is running on port 8080
    if not is_port_in_use(PORT):
        print(f"[1/2] Starting Local SPA Server on http://localhost:{PORT}...", flush=True)
        spa_script = os.path.join(ROOT_DIR, "scripts", "serve_spa.py")
        spa_proc = subprocess.Popen(
            [sys.executable, spa_script, str(PORT)],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )
        processes.append(spa_proc)
        time.sleep(1.5)
    else:
        print(f"[1/2] Local SPA Server is already running on http://localhost:{PORT}.", flush=True)

    # 2. Launch cloudflared tunnel
    print("[2/2] Connecting to Cloudflare Argo network (HTTP/2 protocol)...", flush=True)
    cf_cmd = [CLOUDFLARED_PATH, "tunnel", "--protocol", "http2", "--url", f"http://localhost:{PORT}"]
    cf_proc = subprocess.Popen(
        cf_cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        bufsize=1
    )
    processes.append(cf_proc)

    public_url = None
    regex = re.compile(r"https://[a-zA-Z0-9-]+\.trycloudflare\.com")

    for line in iter(cf_proc.stdout.readline, ''):
        match = regex.search(line)
        if match:
            public_url = match.group(0)
            break
        if not line and cf_proc.poll() is not None:
            break

    print("\n" + "=" * 70, flush=True)
    print("          CLOUDFLARE TUNNEL IS ACTIVE & ONLINE!", flush=True)
    print("=" * 70, flush=True)

    if public_url:
        copy_to_clipboard(public_url)
        print("\n  >>> PUBLIC CLOUDFLARE TUNNEL LINK (Accessible from any device):", flush=True)
        print(f"      {public_url}\n", flush=True)
        print("      (Link has been copied to your clipboard! Press Ctrl+V to paste)", flush=True)
    else:
        print("[-] Warning: Tunnel established, but URL regex match timed out.", flush=True)

    print("\n  >>> LOCAL ACCESS LINK (Instant, no internet delay):", flush=True)
    print(f"      http://localhost:{PORT}/", flush=True)
    print("=" * 70, flush=True)
    print("\n  [!] Press Ctrl+C in this window at any time to stop the tunnel.\n", flush=True)

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        cleanup()

if __name__ == "__main__":
    main()
