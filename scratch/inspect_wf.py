import docx, re

doc = docx.Document(r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Master_Cleaned.docx")
for p_idx in [60, 63, 66]:
    p = doc.paragraphs[p_idx]
    for r in p.runs:
        xml = r._element.xml
        if 'blip' in xml:
            rids = re.findall(r'r:embed="(.*?)"', xml)
            for rid in rids:
                print(f"P[{p_idx}] rid: {rid} -> {doc.part.rels[rid].target_ref}")
