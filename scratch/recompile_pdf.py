import os
import subprocess

html_script = r"scratch\docx_to_html.py"
res = subprocess.run(["python", html_script], capture_output=True, text=True)
print("docx_to_html:", res.stdout)
if res.stderr:
    print("docx_to_html stderr:", res.stderr)

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
PDF_PATH = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Master.pdf"
HTML_PATH = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Rendered.html"

url = "file:///" + os.path.abspath(HTML_PATH).replace("\\", "/")
cmd = [
    EDGE_PATH,
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={PDF_PATH}",
    url
]
edge_res = subprocess.run(cmd, capture_output=True, text=True)
print("Edge returncode:", edge_res.returncode)
if os.path.exists(PDF_PATH):
    print("Generated PDF successfully! Size:", os.path.getsize(PDF_PATH), "bytes")
