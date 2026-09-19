import zipfile, xml.etree.ElementTree as ET, json

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

    # Extract all rows from "Program Study"
    target = 'xl/' + rel_map[sheets_info['Program Study']]
    sheet_xml = z.read(target)
    sheet_root = ET.fromstring(sheet_xml)
    rows = sheet_root.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheetData/{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row')
    
    current_year = 0
    current_term = 0
    courses = []
    
    for r in rows:
        cells = {}
        for c in r.findall('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            v = c.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            val = v.text if v is not None else ''
            t = c.attrib.get('t')
            if t == 's' and val.isdigit():
                val = shared_strings[int(val)]
            col = ''.join([ch for ch in c.attrib.get('r') if ch.isalpha()])
            cells[col] = val.strip()
            
        a = cells.get('A', '')
        b = cells.get('B', '')
        c = cells.get('C', '')
        d = cells.get('D', '')
        
        if 'FIRST YEAR' in a.upper(): current_year = 1
        elif 'SECOND YEAR' in a.upper(): current_year = 2
        elif 'THIRD YEAR' in a.upper(): current_year = 3
        elif 'FOURTH YEAR' in a.upper(): current_year = 4
        
        if 'FIRST TERM' in a.upper(): current_term = 1
        elif 'SECOND TERM' in a.upper(): current_term = 2
        elif 'THIRD TERM' in a.upper(): current_term = 3
        
        if a and a not in ['Subject Code', 'FIRST YEAR', 'SECOND YEAR', 'THIRD YEAR', 'FOURTH YEAR', 
                           'First Term', 'Second Term', 'Third Term', 'ASIA PACIFIC COLLEGE', 
                           'School of Engineering', 'BS in COMPUTER ENGINEERING (BS CpE) CURRICULUM'] and not a.startswith('Subtotal') and not a.startswith('TOTAL'):
            if c: # units exist
                courses.append({
                    'year': current_year,
                    'term': current_term,
                    'code': a,
                    'title': b,
                    'units': float(c) if c.replace('.','',1).isdigit() else c,
                    'prereq': d
                })
    print(f'Total courses parsed: {len(courses)}')
    total_units = sum([float(x['units']) for x in courses if isinstance(x['units'], (int, float))])
    print(f'Total Units sum: {total_units}')
    for c in courses:
        print(f"Y{c['year']}T{c['term']}: {c['code']} | {c['title']} | {c['units']}u | Prereq: {c['prereq']}")
