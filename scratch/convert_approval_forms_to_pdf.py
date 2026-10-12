import os
import subprocess
import mammoth

FOLDER = r"C:\Users\Dean Alejandrino\Downloads\New folder (3)"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DIR = r"C:\Users\Dean Alejandrino\.gemini\antigravity\scratch\edge_profile_forms"
os.makedirs(USER_DIR, exist_ok=True)

files = [
    ("KapTau_-_Chapter_3_Approval_Form__EMBILE_ (1).docx", "KapTau_Chapter_3_Approval_Form_EMBILE.pdf"),
    ("KapTau_-_Chapter_3_Approval_Form__PERUDA_ (1).docx", "KapTau_Chapter_3_Approval_Form_PERUDA.pdf"),
    ("KapTau_-_Chapter_3_Approval_Form__YONG_ (1).docx", "KapTau_Chapter_3_Approval_Form_YONG.pdf")
]

CSS = """
@page {
    size: letter portrait;
    margin: 0.8in;
}
body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10pt;
    line-height: 1.4;
    color: #111;
    margin: 0;
    padding: 0;
}
p {
    margin: 4pt 0;
}
table {
    border-collapse: collapse;
    width: 100%;
    margin: 12pt 0 16pt 0;
    font-size: 9.5pt;
    page-break-inside: avoid;
}
th, td {
    border: 1px solid #333;
    padding: 6pt 8pt;
    text-align: left;
    vertical-align: top;
}
th {
    background-color: #f1f5f9;
    font-weight: bold;
}
tr:nth-child(even) td {
    background-color: #fafafa;
}
"""

for docx_name, pdf_name in files:
    docx_path = os.path.join(FOLDER, docx_name)
    pdf_path = os.path.join(FOLDER, pdf_name)
    html_path = os.path.join(FOLDER, pdf_name.replace(".pdf", ".html"))
    
    with open(docx_path, "rb") as df:
        res = mammoth.convert_to_html(df)
        html_body = res.value
    
    html_full = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>{CSS}</style>
</head>
<body>
{html_body}
</body>
</html>"""
    
    with open(html_path, "w", encoding="utf-8") as hf:
        hf.write(html_full)
    
    url = "file:///" + os.path.abspath(html_path).replace("\\", "/")
    cmd = [
        EDGE_PATH,
        "--headless",
        "--disable-gpu",
        f"--user-data-dir={USER_DIR}",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_path}",
        url
    ]
    sub = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(html_path):
        os.remove(html_path)
    print(f"Generated {pdf_name}: success={os.path.exists(pdf_path)}, size={os.path.getsize(pdf_path) if os.path.exists(pdf_path) else 0}")

print("All PDFs converted.")
