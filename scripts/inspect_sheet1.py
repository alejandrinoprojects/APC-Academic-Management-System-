import zipfile, xml.etree.ElementTree as ET

wb_path = r'C:\Users\aleja\Downloads\Proposed BS CpE Curriculum 2026 Final Registrars Copy 1.xlsx'

with zipfile.ZipFile(wb_path, 'r') as z:
    shared_strings = []
    if 'xl/sharedStrings.xml' in z.namelist():
        ss_xml = z.read('xl/sharedStrings.xml')
        ss_root = ET.fromstring(ss_xml)
        for si in ss_root.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}si'):
            text = ''.join([t.text for t in si.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t') if t.text])
            shared_strings.append(text)
    
    wb_xml = z.read('xl/workbook.xml')
    wb_root = ET.fromstring(wb_xml)
    sheets_info = {s.attrib['name']: s.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id'] 
                   for s in wb_root.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheets')}
    
    rels_xml = z.read('xl/_rels/workbook.xml.rels')
    rels_root = ET.fromstring(rels_xml)
    rel_map = {r.attrib['Id']: r.attrib['Target'] for r in rels_root}

    # Inspect Sheet 1 "BSCPE 2026 Flowchart"
    target = 'xl/' + rel_map[sheets_info['BSCPE 2026 Flowchart']]
    sheet_xml = z.read(target)
    sheet_root = ET.fromstring(sheet_xml)
    rows = sheet_root.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData/{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row')
    print(f"Sheet 1 Flowchart has {len(rows)} rows")
    for r in rows[5:35]:
        cells = {}
        for c in r.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            val = v.text if v is not None else ''
            t = c.attrib.get('t')
            if t == 's' and val.isdigit():
                val = shared_strings[int(val)]
            col = ''.join([ch for ch in c.attrib.get('r') if ch.isalpha()])
            cells[col] = val.strip()
        non_empty = {k: v for k, v in cells.items() if v}
        if non_empty:
            print(f"R{r.attrib.get('r')}: {non_empty}")
