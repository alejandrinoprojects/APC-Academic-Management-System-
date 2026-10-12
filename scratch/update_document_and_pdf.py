import os
import shutil
import zipfile
import docx
import subprocess

DOCX_PATH = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Master_Cleaned.docx"
BACKUP_PATH = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Master_Cleaned.backup_before_ianav.docx"
PDF_PATH = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Master.pdf"
HTML_PATH = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Rendered.html"

SCRATCH_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\scratch"
EXTRACTED_DIR = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Extracted"

IA_FINAL = os.path.join(SCRATCH_DIR, "ia_final_test.png")
NAV_FINAL = os.path.join(SCRATCH_DIR, "nav_final_test.png")

# 1. Copy to extracted folder
shutil.copyfile(IA_FINAL, os.path.join(EXTRACTED_DIR, "ia_large_system.png"))
shutil.copyfile(NAV_FINAL, os.path.join(EXTRACTED_DIR, "nav_large_system.png"))
print("Copied images to KapTau_Chapter_3_Extracted.")

# 2. Backup original docx
if not os.path.exists(BACKUP_PATH):
    shutil.copyfile(DOCX_PATH, BACKUP_PATH)
    print("Created backup of docx.")

# 3. Update P[15] text in docx using python-docx
doc = docx.Document(DOCX_PATH)
new_p15_text = (
    "The Navigation Structure outlines the pathways through which academic personnel interact with "
    "system modules. As detailed in Figure 3.2, the structure mirrors the Information Architecture "
    "through a dual-navigation paradigm: a persistent Left Navigation Sidebar that functions as an "
    "institutional file-explorer tree enabling direct random-access hopping across academic schools, "
    "degree programs, curriculum cohorts (e.g., CPE2027 draft, CPE2026 active baseline, historical archives), "
    "and governance tools; and a progressive main-canvas drilldown supported by contextual breadcrumbs, "
    "a zero-reload top view-switcher, modal overlays, and explicit return paths at every level."
)
doc.paragraphs[15].text = new_p15_text
doc.save(DOCX_PATH)
print("Updated P[15] text in docx.")

# 4. Replace media/image144.png and media/image145.png in the docx zip archive
temp_docx = DOCX_PATH + ".temp.docx"
with zipfile.ZipFile(DOCX_PATH, 'r') as zin:
    with zipfile.ZipFile(temp_docx, 'w', compression=zipfile.ZIP_DEFLATED) as zout:
        for item in zin.infolist():
            if item.filename == 'word/media/image144.png':
                with open(IA_FINAL, 'rb') as f:
                    zout.writestr(item, f.read())
                print("Replaced word/media/image144.png in docx.")
            elif item.filename == 'word/media/image145.png':
                with open(NAV_FINAL, 'rb') as f:
                    zout.writestr(item, f.read())
                print("Replaced word/media/image145.png in docx.")
            else:
                zout.writestr(item, zin.read(item.filename))

shutil.move(temp_docx, DOCX_PATH)
print("Updated docx archive successfully.")

# 5. Convert docx to HTML and then PDF using scratch/docx_to_html.py
convert_script = os.path.join(SCRATCH_DIR, "docx_to_html.py")
res = subprocess.run(["python", convert_script], capture_output=True, text=True)
print("docx_to_html output:", res.stdout)
if res.stderr:
    print("docx_to_html stderr:", res.stderr)

# 6. Print HTML to PDF using Edge headless
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(EDGE_PATH):
    EDGE_PATH = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

edge_cmd = [
    EDGE_PATH,
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={PDF_PATH}",
    f"file:///{os.path.abspath(HTML_PATH).replace(os.sep, '/')}"
]
edge_res = subprocess.run(edge_cmd, capture_output=True, text=True)
if edge_res.returncode == 0:
    print(f"Generated PDF successfully at {PDF_PATH}.")
    print("PDF size:", os.path.getsize(PDF_PATH), "bytes")
else:
    print("Edge PDF error:", edge_res.stderr)
