import zipfile
import xml.etree.ElementTree as ET
import json
import html
import re

excel_path = r"C:\Users\aleja\Downloads\Proposed BS CpE Curriculum 2026 Final Registrars Copy 1 (1).xlsx"
zf = zipfile.ZipFile(excel_path)
ns = {'main': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}

# Load shared strings
sst_xml = ET.fromstring(zf.read('xl/sharedStrings.xml'))
shared_strings = []
for si in sst_xml.findall('main:si', ns):
    t = si.find('main:t', ns)
    if t is not None:
        shared_strings.append(t.text or '')
    else:
        r_texts = [r.find('main:t', ns).text or '' for r in si.findall('main:r', ns) if r.find('main:t', ns) is not None]
        shared_strings.append(''.join(r_texts))

def col_to_num(col_str):
    num = 0
    for c in col_str:
        num = num * 26 + (ord(c.upper()) - ord('A')) + 1
    return num

def parse_cell_ref(ref):
    col = ''
    row = ''
    for c in ref:
        if c.isalpha(): col += c
        else: row += c
    return col_to_num(col), int(row)

sheet_mapping = {
    1: 'Sheet 1: Official Flowchart',
    2: 'Sheet 2: Curriculum Prospectus',
    3: 'Sheet 3: Course Catalog',
    4: 'Sheet 4: Program of Study',
    5: 'Sheet 5: Curriculum Map',
    6: 'Sheet 6: Comparative Summary',
    7: 'Sheet 7: Summary of Units'
}

def extract_sheet_table(s_idx):
    root = ET.fromstring(zf.read(f'xl/worksheets/sheet{s_idx}.xml'))
    
    # 1. Parse merges
    merge_map = {}
    hidden_cells = set()
    for m in root.findall('main:mergeCells/main:mergeCell', ns):
        mref = m.attrib.get('ref')
        p1, p2 = mref.split(':')
        c1, r1 = parse_cell_ref(p1)
        c2, r2 = parse_cell_ref(p2)
        merge_map[(r1, c1)] = (r2 - r1 + 1, c2 - c1 + 1)
        for r in range(r1, r2 + 1):
            for c in range(c1, c2 + 1):
                if (r, c) != (r1, c1):
                    hidden_cells.add((r, c))

    # 2. Parse cells
    cells_data = {}
    max_r = 0
    max_c = 0
    for r in root.findall('main:sheetData/main:row', ns):
        r_idx = int(r.attrib.get('r', 0))
        max_r = max(max_r, r_idx)
        for c in r.findall('main:c', ns):
            c_ref = c.attrib.get('r', '')
            col_idx, row_idx = parse_cell_ref(c_ref)
            max_c = max(max_c, col_idx)
            
            c_type = c.attrib.get('t', '')
            v = c.find('main:v', ns)
            val = ''
            if v is not None and v.text is not None:
                if c_type == 's':
                    s_idx_val = int(v.text)
                    val = shared_strings[s_idx_val] if s_idx_val < len(shared_strings) else ''
                elif c_type == 'b':
                    val = 'TRUE' if v.text == '1' else 'FALSE'
                else:
                    val = v.text
            elif c_type == 'inlineStr':
                is_t = c.find('main:is/main:t', ns)
                if is_t is not None: val = is_t.text or ''
            
            cells_data[(row_idx, col_idx)] = val

    # Trim empty leading and trailing columns
    active_cols = [c for c in range(1, max_c + 1) if any(cells_data.get((r, c), '').strip() != '' or (r, c) in merge_map for r in range(1, max_r + 1))]
    min_col = min(active_cols) if active_cols else 1
    max_active_col = max(active_cols) if active_cols else max_c

    table_rows = []
    for r in range(1, max_r + 1):
        has_content_or_merge = any((r, c) in merge_map or cells_data.get((r, c), '').strip() != '' or (r, c) in hidden_cells for c in range(min_col, max_active_col + 1))
        if not has_content_or_merge:
            continue

        row_tds = []
        for c in range(min_col, max_active_col + 1):
            if (r, c) in hidden_cells:
                continue
            span = merge_map.get((r, c), (1, 1))
            val = cells_data.get((r, c), '').strip()
            
            attrs = []
            if span[0] > 1: attrs.append(f'rowspan="{span[0]}"')
            if span[1] > 1: attrs.append(f'colspan="{span[1]}"')
            
            # Styling classes
            cls = ['border', 'border-slate-300', 'dark:border-slate-700', 'px-2.5', 'py-1.5', 'text-xs']
            
            # Header styling heuristics
            is_header_row = (r <= 5) or ('CURRICULUM' in val.upper() or 'SUMMARY' in val.upper() or 'PROSPECTUS' in val.upper() or 'PROGRAM OF STUDY' in val.upper())
            if span[1] > 3 or (is_header_row and len(val) > 0 and span[1] > 1):
                cls.extend(['font-bold', 'bg-slate-100', 'dark:bg-slate-800', 'text-slate-900', 'dark:text-white', 'text-center'])
            elif span[0] > 1 or span[1] > 1:
                cls.extend(['font-bold', 'bg-slate-50/70', 'dark:bg-slate-800/40'])

            if val.isdigit() or (val.replace('.', '', 1).isdigit() and '.' in val):
                cls.extend(['text-center', 'font-mono'])
            elif len(val) <= 12 and (val.isupper() or '-' in val) and ' ' not in val and not any(ch.islower() for ch in val):
                cls.extend(['text-center', 'font-mono', 'font-bold'])
            elif not ('text-center' in cls):
                cls.append('text-left')

            attr_str = (' ' + ' '.join(attrs)) if attrs else ''
            cls_str = ' '.join(cls)
            val_escaped = html.escape(val).replace('\n', '<br/>')
            row_tds.append(f'<td{attr_str} class="{cls_str}">{val_escaped}</td>')

        if row_tds:
            table_rows.append('  <tr>\n    ' + '\n    '.join(row_tds) + '\n  </tr>')

    inner_table = f'<div class="official-doc-table-wrapper overflow-x-auto w-full p-4 bg-white dark:bg-slate-900 shadow-sm border border-slate-300 dark:border-slate-700">\n<table class="w-full border-collapse text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-sans">\n' + '\n'.join(table_rows) + '\n</table>\n</div>'
    return inner_table

results = {}
for s_idx in range(1, 8):
    results[s_idx] = extract_sheet_table(s_idx)
    print(f"Sheet {s_idx} converted. Size: {len(results[s_idx])} characters")

with open(r"c:\Users\aleja\Documents\antigravity\brave-planck\js\official_excel_sheets_html.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print("Saved all 7 converted sheets to official_excel_sheets_html.json successfully!")
