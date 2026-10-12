import docx
import re

doc = docx.Document(r'C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Master_Cleaned.docx')
for p_idx in [3, 13]:
    p = doc.paragraphs[p_idx]
    for r in p.runs:
        xml = r._element.xml
        if 'blip' in xml:
            rids = re.findall(r'r:embed=["\'](.*?)["\']', xml)
            for rid in rids:
                rel = doc.part.rels[rid]
                print(f"P[{p_idx}] rid: {rid} -> {rel.target_ref}")
