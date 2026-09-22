import os
import re
import glob

REPO_DIR = r'c:\Users\aleja\Documents\antigravity\wise-mendel'

def get_dir_size(path, exclude_patterns=None):
    total = 0
    count = 0
    exclude = exclude_patterns or []
    for root, dirs, files in os.walk(path):
        if any(ex in root for ex in exclude):
            continue
        for f in files:
            fp = os.path.join(root, f)
            if not os.path.islink(fp):
                total += os.path.getsize(fp)
                count += 1
    return total, count

# File sizes
print("=" * 70)
print("PRODUCTION ASSETS AND SOURCE CODE METRICS")
print("=" * 70)

# 1. HTML
index_size = os.path.getsize(os.path.join(REPO_DIR, 'index.html'))
print(f"index.html: {index_size:,} bytes ({index_size/1024:.1f} KB)")

# 2. JS Files
js_dir = os.path.join(REPO_DIR, 'js')
js_files = {}
total_js = 0
for f in os.listdir(js_dir):
    fp = os.path.join(js_dir, f)
    if os.path.isfile(fp) and f.endswith('.js'):
        size = os.path.getsize(fp)
        js_files[f] = size
        total_js += size

print(f"\nJavaScript files in /js ({len(js_files)} files, {total_js:,} bytes / {total_js/1024:.1f} KB):")
for f, s in sorted(js_files.items(), key=lambda x: x[1], reverse=True):
    print(f"  {f:25} : {s:10,d} bytes ({s/1024:7.1f} KB)")

# 3. CSS Files
css_path = os.path.join(REPO_DIR, 'css', 'apc_styles.css')
css_size = os.path.getsize(css_path)
print(f"\nCSS (css/apc_styles.css): {css_size:,} bytes ({css_size/1024:.1f} KB)")

# 4. Assets
assets_dir = os.path.join(REPO_DIR, 'assets')
assets = {}
total_assets = 0
for f in os.listdir(assets_dir):
    fp = os.path.join(assets_dir, f)
    if os.path.isfile(fp):
        size = os.path.getsize(fp)
        assets[f] = size
        total_assets += size

print(f"\nAssets in /assets ({len(assets)} files, {total_assets:,} bytes / {total_assets/1024:.1f} KB):")
for f, s in sorted(assets.items(), key=lambda x: x[1], reverse=True):
    print(f"  {f:28} : {s:10,d} bytes ({s/1024:7.1f} KB)")

# 5. html_layers
layers_dir = os.path.join(REPO_DIR, 'html_layers')
layers = {}
total_layers = 0
if os.path.exists(layers_dir):
    for f in os.listdir(layers_dir):
        fp = os.path.join(layers_dir, f)
        if os.path.isfile(fp) and f.endswith('.html'):
            size = os.path.getsize(fp)
            layers[f] = size
            total_layers += size

print(f"\nhtml_layers ({len(layers)} files, {total_layers:,} bytes / {total_layers/1024/1024:.2f} MB):")
for f, s in sorted(layers.items(), key=lambda x: x[1], reverse=True)[:10]:
    print(f"  {f:40} : {s:10,d} bytes ({s/1024:7.1f} KB)")
print(f"  ... and {len(layers)-10} more files")

# 6. Initial Load Payload (Everything referenced directly in index.html)
with open(os.path.join(REPO_DIR, 'index.html'), 'r', encoding='utf-8') as f:
    html_text = f.read()

script_srcs = re.findall(r'<script\s+[^>]*src=["\']([^"\']+)["\']', html_text)
link_hrefs = re.findall(r'<link\s+[^>]*rel=["\']stylesheet["\'][^>]*href=["\']([^"\']+)["\']', html_text)
link_hrefs += re.findall(r'<link\s+[^>]*href=["\']([^"\']+)["\'][^>]*rel=["\']stylesheet["\']', html_text)
images = re.findall(r'<img\s+[^>]*src=["\']([^"\']+)["\']', html_text)
favicon = re.findall(r'<link\s+[^>]*href=["\']([^"\']+)["\'][^>]*icon', html_text)

print("\n" + "=" * 70)
print("INITIAL ROUTE / CRITICAL PAYLOAD MEASUREMENT (What browser downloads on first visit)")
print("=" * 70)

print(f"1. HTML: index.html = {index_size:,} bytes ({index_size/1024:.1f} KB)")

loaded_js_size = 0
print("\n2. Synchronous JavaScript Scripts:")
for src in script_srcs:
    if src.startswith('http'):
        print(f"  [CDN] {src} (~400 KB uncompressed JIT compiler)")
    else:
        lp = os.path.normpath(os.path.join(REPO_DIR, src.replace('/', os.sep)))
        if os.path.exists(lp):
            sz = os.path.getsize(lp)
            loaded_js_size += sz
            print(f"  [Local] {src:28} : {sz:10,d} bytes ({sz/1024:7.1f} KB)")
        else:
            print(f"  [MISSING] {src}")

print(f"  --> Total Synchronous Local JS: {loaded_js_size:,} bytes ({loaded_js_size/1024:.1f} KB / {loaded_js_size/1024/1024:.2f} MB)")

loaded_css_size = 0
print("\n3. Stylesheets:")
for href in set(link_hrefs):
    if href.startswith('http'):
        print(f"  [CDN] {href}")
    else:
        lp = os.path.normpath(os.path.join(REPO_DIR, href.replace('/', os.sep)))
        if os.path.exists(lp):
            sz = os.path.getsize(lp)
            loaded_css_size += sz
            print(f"  [Local] {href:28} : {sz:10,d} bytes ({sz/1024:7.1f} KB)")

print(f"  --> Total Local CSS: {loaded_css_size:,} bytes ({loaded_css_size/1024:.1f} KB)")

initial_total = index_size + loaded_js_size + loaded_css_size
print("\n" + "-" * 70)
print(f"TOTAL INITIAL LOCAL CODE TRANSFER (HTML + CSS + Local JS): {initial_total:,} bytes ({initial_total/1024:.1f} KB / {initial_total/1024/1024:.2f} MB)")
print(f"(Plus Tailwind CDN: ~400 KB uncompressed)")
print("-" * 70)
