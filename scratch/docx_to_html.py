import mammoth
import os
import re

docx_path = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Master_Cleaned.docx"
html_path = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Rendered.html"
pdf_path = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Master.pdf"

with open(docx_path, "rb") as docx_file:
    result = mammoth.convert_to_html(docx_file)
    html_content = result.value

# Post-process HTML to ensure figure captions are centered and bold
# Mammoth wraps captions in <p>Figure ...</p>
html_content = re.sub(
    r'<p>(Figure 3\.\d+\..*?)</p>',
    r'<p style="text-align: center; font-weight: bold; margin-top: 4pt; margin-bottom: 12pt; font-size: 11pt;">\1</p>',
    html_content
)

# Also style Table captions
html_content = re.sub(
    r'<p>(Table 3\.\d+.*?)</p>',
    r'<p style="font-weight: bold; margin-top: 12pt; margin-bottom: 4pt; font-size: 11pt;">\1</p>',
    html_content
)

html_template = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>KapTau - Chapter 3</title>
<style>
  @page {
    size: letter portrait;
    margin: 1.0in;
  }
  body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    line-height: 1.5;
    color: #111;
    margin: 0;
    padding: 0;
  }
  h2 {
    font-size: 15pt;
    font-weight: bold;
    margin-top: 24pt;
    margin-bottom: 8pt;
    page-break-after: avoid;
    break-after: avoid;
  }
  h3 {
    font-size: 13.5pt;
    font-weight: bold;
    margin-top: 18pt;
    margin-bottom: 6pt;
    page-break-after: avoid;
    break-after: avoid;
  }
  p {
    margin-top: 0;
    margin-bottom: 8pt;
    text-align: justify;
    text-justify: inter-word;
  }
  img {
    display: block;
    max-width: 95%;
    max-height: 480px;
    height: auto;
    margin: 12pt auto 6pt auto;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 10pt 0 16pt 0;
    font-size: 10pt;
    page-break-inside: avoid;
    break-inside: avoid;
  }
  th, td {
    border: 1px solid #444;
    padding: 6pt 8pt;
    text-align: left;
    vertical-align: top;
  }
  th {
    background-color: #f1f5f9;
    font-weight: bold;
  }
  ul, ol {
    margin-top: 0;
    margin-bottom: 8pt;
    padding-left: 24pt;
  }
  li {
    margin-bottom: 3pt;
    text-align: justify;
  }
</style>
</head>
<body>
""" + html_content + """
</body>
</html>"""

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_template)

print("HTML generated successfully:", html_path, "bytes:", os.path.getsize(html_path))
