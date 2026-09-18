"""
APC Academic Architecture Suite
HTML Layers -> Live Site Sync Engine (sync_layers_to_site.py)

Reads any modified layer file from html_layers/ and injects
the updated markup into the modular codebase:
- Regular layers (01-15, 23-33) -> index.html
- Official Registrar sheets (16-22) -> js/registrar_docs.js
Preserves strict 90-degree corners and keeps index.html lightweight (< 2.56 MB) for WebStorm.
"""
import os, sys, re, shutil, time

sys.stdout.reconfigure(encoding='utf-8')

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML_PATH = os.path.join(BASE_DIR, 'index.html')
REG_JS_PATH = os.path.join(BASE_DIR, 'js', 'registrar_docs.js')
LAYERS_DIR = os.path.join(BASE_DIR, 'html_layers')
BACKUP_DIR = os.path.join(BASE_DIR, 'scripts', 'sync_backups')

# Map of layer files to their target element IDs in index.html
LAYER_MAPPINGS = {
    # 00: Left Navigation Panel
    "00_Left_Panel_Sidebar_Navigation.html": ("sidebar", "aside"),

    # 01: Login Portal
    "01_Login_SSO_Portal.html": ("loginLandingScreen", "div"),

    # 02-05: 4 Tier Homepages
    "02_Admin_Institutional_Home_Tier4.html": ("homeAdminInstitutionalView", "div"),
    "03_EXD_School_Engineering_Tier3.html": ("homeExdProgramsView", "div"),
    "04_PD_Workbench_BSCpE_Tier2.html": ("homePdProgramView", "div"),
    "05_Faculty_Workstation_Tier1.html": ("homeFacultyWorkerView", "div"),

    # 06-16: Core Application Views
    "06_Curriculum_DAG_Flowchart.html": ("view-flowchart", "section"),
    "07_Course_Catalog_Directory.html": ("view-catalog", "section"),
    "08_Integrated_Master_Spreadsheet.html": ("view-spreadsheet", "section"),
    "09_OBE_Curriculum_Matrix_Map.html": ("view-obe", "section"),
    "10_Curriculum_Analytics_Dashboard.html": ("view-dashboard", "section"),
    "11_Governance_CHED_CMO92_Compliance.html": ("view-compliance", "section"),
    "12_Governance_Cluster_Delegation.html": ("view-delegation", "section"),
    "13_Governance_Audit_Trail.html": ("view-audit", "section"),
    "14_Registrar_Archive_Center.html": ("view-registrar", "section"),
    "15_Syllabus_Management_System_SMS.html": ("view-syllabus", "section"),
    "16_Course_Management_System_CMS.html": ("view-course", "section"),

    # 17-23: Official Registrar Sheets (1 to 7)
    "17_Registrar_Sheet1_Official_Flowchart.html": ("regDocView_1", "div", 1),
    "18_Registrar_Sheet2_Curriculum_Prospectus.html": ("regDocView_2", "div", 2),
    "19_Registrar_Sheet3_Course_Catalog.html": ("regDocView_3", "div", 3),
    "20_Registrar_Sheet4_Program_of_Study.html": ("regDocView_4", "div", 4),
    "21_Registrar_Sheet5_OBE_Curriculum_Map.html": ("regDocView_5", "div", 5),
    "22_Registrar_Sheet6_Comparative_Summary.html": ("regDocView_6", "div", 6),
    "23_Registrar_Sheet7_Summary_of_Units.html": ("regDocView_7", "div", 7),

    # 24-31: Modals & Drawers
    "24_Modal_Role_Switcher.html": ("loginModal", "div"),
    "25_Drawer_Course_Inspector.html": ("flowchartDetailDrawer", "div"),
    "26_Drawer_Curriculum_AI_Copilot.html": ("personalAiAgentDrawer", "div"),
    "27_Modal_Kahn_Cycle_Simulator.html": ("cycleModal", "div"),
    "28_Modal_Course_Editor.html": ("courseEditModal", "div"),
    "29_Modal_Batch_Operations.html": ("batchModal", "div"),
    "30_Modal_Category_Manager.html": ("categoryManagerModal", "div"),
    "31_Modal_AI_Syllabus_Importer.html": ("aiImportModal", "div"),
}

def extract_element_by_id(html, elem_id, tag="div"):
    pos = html.find(f'id="{elem_id}"')
    if pos == -1:
        return None
    tag_start = html.rfind(f'<{tag}', 0, pos)
    if tag_start == -1:
        tag_start = html.rfind('<', 0, pos)
    
    if tag == "section":
        end_tag = html.find('</section>', pos)
        if end_tag != -1:
            return html[tag_start:end_tag+10]
    elif tag == "aside":
        end_tag = html.find('</aside>', pos)
        if end_tag != -1:
            return html[tag_start:end_tag+8]
    
    idx = html.find('>', pos) + 1
    depth = 1
    while depth > 0 and idx < len(html):
        next_open = html.find('<div', idx)
        next_close = html.find('</div>', idx)
        if next_close == -1:
            break
        if next_open != -1 and next_open < next_close:
            depth += 1
            idx = html.find('>', next_open) + 1
        else:
            depth -= 1
            idx = next_close + 6
            if depth == 0:
                return html[tag_start:idx]
    return None

def extract_inner_html_by_id(html, elem_id):
    pos = html.find(f'id="{elem_id}"')
    if pos == -1:
        return None
    tag_open_end = html.find('>', pos) + 1
    depth = 1
    idx = tag_open_end
    while depth > 0 and idx < len(html):
        next_open = html.find('<div', idx)
        next_close = html.find('</div>', idx)
        if next_close == -1:
            break
        if next_open != -1 and next_open < next_close:
            depth += 1
            idx = html.find('>', next_open) + 1
        else:
            depth -= 1
            idx = next_close + 6
            if depth == 0:
                return html[tag_open_end:next_close]
    return None

def extract_reg_doc_from_js(js_content, doc_num):
    key = f'{doc_num}: `'
    pos = js_content.find(key)
    if pos == -1:
        return None
    start = pos + len(key)
    end = js_content.find('`,\n', start)
    if end == -1:
        end = js_content.find('`', start)
    return js_content[start:end]

def sync_all(dry_run=False):
    print("=" * 70)
    print("APC ACADEMIC SUITE - HTML LAYERS TO LIVE SITE SYNCHRONIZER")
    print("=" * 70)
    
    if not os.path.exists(HTML_PATH):
        print(f"Error: {HTML_PATH} not found!")
        return False
        
    with open(HTML_PATH, 'r', encoding='utf-8') as f:
        master = f.read()
    original_master = master

    reg_js_content = ""
    original_reg_js = ""
    if os.path.exists(REG_JS_PATH):
        with open(REG_JS_PATH, 'r', encoding='utf-8') as f:
            reg_js_content = f.read()
        original_reg_js = reg_js_content
        
    synced_count = 0
    updated_html = False
    updated_reg_js = False
    
    for filename, mapping in LAYER_MAPPINGS.items():
        layer_path = os.path.join(LAYERS_DIR, filename)
        if not os.path.exists(layer_path):
            continue
            
        with open(layer_path, 'r', encoding='utf-8') as lf:
            layer_content = lf.read()
            
        elem_id = mapping[0]
        tag = mapping[1]
        is_registrar = len(mapping) > 2
        
        if is_registrar:
            doc_num = mapping[2]
            layer_inner = extract_inner_html_by_id(layer_content, elem_id)
            if not layer_inner:
                continue
            master_inner = extract_reg_doc_from_js(reg_js_content, doc_num)
            if not master_inner:
                continue
                
            clean_layer = re.sub(r'\s+', ' ', layer_inner).strip()
            clean_master = re.sub(r'\s+', ' ', master_inner).strip()
            
            if clean_layer != clean_master:
                print(f"[DETECTED CHANGE] {filename} -> js/registrar_docs.js [{elem_id}]")
                old_key = f'{doc_num}: `' + master_inner + '`'
                new_key = f'{doc_num}: `' + layer_inner + '`'
                reg_js_content = reg_js_content.replace(old_key, new_key, 1)
                synced_count += 1
                updated_reg_js = True
        else:
            layer_element = extract_element_by_id(layer_content, elem_id, tag)
            if not layer_element:
                continue
                
            master_element = extract_element_by_id(master, elem_id, tag)
            if not master_element:
                continue
                
            clean_layer = re.sub(r'\s+', ' ', layer_element).strip()
            clean_master = re.sub(r'\s+', ' ', master_element).strip()
            
            norm_layer = re.sub(r'\bhidden\b', '', clean_layer)
            norm_master = re.sub(r'\bhidden\b', '', clean_master)
            norm_layer = re.sub(r'class="\s*', 'class="', norm_layer)
            norm_master = re.sub(r'class="\s*', 'class="', norm_master)
            norm_layer = re.sub(r'\s+"', '"', norm_layer)
            norm_master = re.sub(r'\s+"', '"', norm_master)
            norm_layer = norm_layer.replace('../assets/', 'assets/')
            norm_layer = re.sub(r'\s+', ' ', norm_layer).strip()
            norm_master = re.sub(r'\s+', ' ', norm_master).strip()
            
            if norm_layer != norm_master:
                print(f"[DETECTED CHANGE] {filename} -> index.html [#{elem_id}]")
                
                master_has_hidden = bool(re.search(r'class="[^"]*\bhidden\b[^"]*"', master_element[:master_element.find('>')+1]))
                replacement = layer_element
                if master_has_hidden:
                    first_tag_end = replacement.find('>')
                    first_tag = replacement[:first_tag_end]
                    if 'class="' in first_tag:
                        if 'hidden' not in first_tag:
                            new_first_tag = first_tag.replace('class="', 'class="hidden ')
                            replacement = new_first_tag + replacement[first_tag_end:]
                    else:
                        new_first_tag = first_tag + ' class="hidden"'
                        replacement = new_first_tag + replacement[first_tag_end:]
                else:
                    first_tag_end = replacement.find('>')
                    first_tag = replacement[:first_tag_end]
                    new_first_tag = re.sub(r'\bhidden\b', '', first_tag)
                    replacement = new_first_tag + replacement[first_tag_end:]
                    
                replacement = replacement.replace('../assets/', 'assets/')
                master = master.replace(master_element, replacement, 1)
                synced_count += 1
                updated_html = True
            
    if synced_count == 0:
        print("\nAll layer files are in sync with the live site! No changes detected.")
        return True
        
    print(f"\nTotal layers updated: {synced_count}")
    
    if not dry_run:
        os.makedirs(BACKUP_DIR, exist_ok=True)
        ts = time.strftime('%Y%m%d_%H%M%S')
        
        if updated_html:
            backup_path = os.path.join(BACKUP_DIR, f"index_before_layer_sync_{ts}.html.bak")
            with open(backup_path, 'w', encoding='utf-8') as bf:
                bf.write(original_master)
            with open(HTML_PATH, 'w', encoding='utf-8') as f:
                f.write(master)
            print(f"Live Site Updated Successfully -> {HTML_PATH}")
            
        if updated_reg_js:
            reg_backup_path = os.path.join(BACKUP_DIR, f"registrar_docs_before_sync_{ts}.js")
            with open(reg_backup_path, 'w', encoding='utf-8') as bf:
                bf.write(original_reg_js)
            with open(REG_JS_PATH, 'w', encoding='utf-8') as f:
                f.write(reg_js_content)
            print(f"Registrar Docs Updated Successfully -> {REG_JS_PATH}")
                
    return True

if __name__ == "__main__":
    sync_all()
