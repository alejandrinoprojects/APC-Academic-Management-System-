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
    sheets_info = []
    for s in wb_root.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheets'):
        sheets_info.append((s.attrib['name'], s.attrib['sheetId'], s.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']))
    
    rels_xml = z.read('xl/_rels/workbook.xml.rels')
    rels_root = ET.fromstring(rels_xml)
    rel_map = {r.attrib['Id']: r.attrib['Target'] for r in rels_root}

    print('Found', len(sheets_info), 'sheets')
    for name, sId, rId in sheets_info:
        target = 'xl/' + rel_map[rId]
        sheet_xml = z.read(target)
        sheet_root = ET.fromstring(sheet_xml)
        rows = sheet_root.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData/{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row')
        print(f'\n--- Sheet \"{name}\": {len(rows)} rows ---')
        for r in rows[:6]:
            cells = []
            for c in r.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
                v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
                val = v.text if v is not None else ''
                t = c.attrib.get('t')
                if t == 's' and val.isdigit():
                    val = shared_strings[int(val)]
                cells.append(f"{c.attrib.get('r')}:{val}")
            print('   Row', r.attrib.get('r'), ':', [c for c in cells if not c.endswith(':')][:7])
