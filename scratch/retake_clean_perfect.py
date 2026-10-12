import os
import sys
import time
import http.server
import socketserver
import threading
from playwright.sync_api import sync_playwright

PORT = 8097
ROOT_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
OUT_DIR = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Extracted\high_fidelity_screens_clean"
os.makedirs(OUT_DIR, exist_ok=True)

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)
    def log_message(self, format, *args):
        pass

server = socketserver.TCPServer(("", PORT), QuietHandler)
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()
print(f"Local server started on port {PORT}")
time.sleep(0.5)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE_PATH, headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1.5)
    page = context.new_page()

    page.goto(f"http://localhost:{PORT}/index.html")
    page.wait_for_timeout(1000)

    def hide_all_overlays():
        page.evaluate("""() => {
            const ids = [
                'loginLandingScreen', 'loginModal', 'modalCourseInspector', 
                'modalCourseDetail', 'modalBatch', 'modalExport', 
                'modalCurriculumCopilot', 'batchOperationsModal',
                'categoryManagerModal', 'courseEditorModal'
            ];
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.add('hidden');
            });
        }""")

    def snap(filename, delay=0.8):
        time.sleep(delay)
        target = os.path.join(OUT_DIR, filename)
        page.screenshot(path=target)
        print(f"Captured: {filename}")

    # 1. Login Screen (Figure 3.37 / 01_login_modal.png)
    hide_all_overlays()
    page.evaluate("""() => {
        const lls = document.getElementById('loginLandingScreen');
        if (lls) lls.classList.remove('hidden');
    }""")
    snap("01_login_modal.png")
    hide_all_overlays()
    page.wait_for_timeout(300)

    # 2. Institutional Dashboard (Figure 3.38 / 02_institutional_dashboard.png)
    hide_all_overlays()
    page.evaluate("if (typeof goToSchoolExd === 'function') goToSchoolExd();")
    hide_all_overlays()
    snap("02_institutional_dashboard.png")

    # 3. School of Engineering Overview (Figure 3.39 / 03_school_overview.png)
    hide_all_overlays()
    page.evaluate("if (typeof goToSchoolExd === 'function') goToSchoolExd('soe');")
    hide_all_overlays()
    snap("03_school_overview.png")

    # 4. Program Directory / Overview (Figure 3.40 / 04_program_management.png)
    hide_all_overlays()
    page.evaluate("if (typeof goToProgramPd === 'function') goToProgramPd('BSCpE');")
    hide_all_overlays()
    snap("04_program_management.png")

    # 5. Curriculum Workbench Overview (Figure 3.41 / 05_curriculum_workbench.png)
    hide_all_overlays()
    page.evaluate("if (typeof navigateView === 'function') navigateView('curriculum-home');")
    hide_all_overlays()
    snap("05_curriculum_workbench.png")

    # 6. Interactive Curriculum Flowchart (Figure 3.42 / 06_curriculum_flowchart.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('flowchart');
        if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);
    }""")
    hide_all_overlays()
    snap("06_curriculum_flowchart.png", delay=1.0)

    # 7. Course Details Modal / Drawer (Figure 3.43 / 07_course_details_modal.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof openCourseInspector === 'function') openCourseInspector('PHYENLB');
        else if (typeof openCourseModal === 'function') openCourseModal('PHYENLB');
    }""")
    snap("07_course_details_modal.png")
    hide_all_overlays()
    page.wait_for_timeout(300)

    # 8. Master Spreadsheet Grid (Figure 3.44 / 08_curriculum_spreadsheet.png)
    hide_all_overlays()
    page.evaluate("if (typeof navigateView === 'function') navigateView('spreadsheet');")
    hide_all_overlays()
    snap("08_curriculum_spreadsheet.png", delay=1.0)

    # 9. OBE Overview (Figure 3.45 / 09_obe_overview.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('hierarchy');
    }""")
    hide_all_overlays()
    snap("09_obe_overview.png")

    # 10. OBE Course-to-SO Matrix (Figure 3.46 / 10_obe_course_so.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('matrix');
    }""")
    hide_all_overlays()
    snap("10_obe_course_so.png")

    # 11. OBE SO-to-PEO Alignment (Figure 3.47 / 11_obe_so_peo.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('peo');
    }""")
    hide_all_overlays()
    snap("11_obe_so_peo.png")

    # 12. OBE PEO-to-GA Alignment (Figure 3.48 / 12_obe_peo_ga.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('vision');
    }""")
    hide_all_overlays()
    snap("12_obe_peo_ga.png")

    # 13: Course Catalog (Figure 3.51 / 13_official_course_catalog.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(3);
    }""")
    hide_all_overlays()
    snap("13_official_course_catalog.png", delay=1.5)

    # 14: Official Flowchart (Figure 3.49 / 14_official_curriculum_flowchart.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(1);
    }""")
    hide_all_overlays()
    snap("14_official_curriculum_flowchart.png", delay=1.5)

    # 15: Comparative Summary (Figure 3.53 / 15_official_comparative_summary.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(6);
    }""")
    hide_all_overlays()
    snap("15_official_comparative_summary.png", delay=1.5)

    # 16: Program of Study (Figure 3.52 / 16_official_program_of_study.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(4);
    }""")
    hide_all_overlays()
    snap("16_official_program_of_study.png", delay=1.5)

    # 17: Official Prospectus (Figure 3.50 / 17_official_prospectus.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(2);
    }""")
    hide_all_overlays()
    snap("17_official_prospectus.png", delay=1.5)

    # 18: Batch Import Modal (Figure 3.57 / 18_batch_import_modal.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('curriculum-home');
        if (typeof openBatchModal === 'function') openBatchModal();
    }""")
    snap("18_batch_import_modal.png")
    hide_all_overlays()
    page.wait_for_timeout(300)

    # 19: Data Export Modal (Figure 3.58 / 19_data_export_backup_modal.png)
    hide_all_overlays()
    page.evaluate("if (typeof openExportModal === 'function') openExportModal();")
    snap("19_data_export_backup_modal.png")
    hide_all_overlays()
    page.wait_for_timeout(300)

    # 20: Task Delegation Console (Figure 3.55 / 20_task_delegation.png)
    hide_all_overlays()
    page.evaluate("if (typeof navigateView === 'function') navigateView('delegation');")
    hide_all_overlays()
    snap("20_task_delegation.png")

    # 21: System Audit Trail (Figure 3.56 / 21_system_audit_trail.png)
    hide_all_overlays()
    page.evaluate("if (typeof navigateView === 'function') navigateView('audit');")
    hide_all_overlays()
    snap("21_system_audit_trail.png")

    # 22: Settings Modal (Figure 3.59 / 22_system_settings_modal.png)
    hide_all_overlays()
    page.evaluate("""() => {
        const lm = document.getElementById('loginModal');
        if (lm) lm.classList.remove('hidden');
    }""")
    snap("22_system_settings_modal.png")
    hide_all_overlays()
    page.wait_for_timeout(300)

    # 23: Obsidian Gold Dark Mode Flowchart (Figure 3.60 / 23_dark_mode_flowchart.png)
    hide_all_overlays()
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('flowchart');
        document.documentElement.classList.add('dark');
        if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);
    }""")
    hide_all_overlays()
    snap("23_dark_mode_flowchart.png", delay=1.0)
    page.evaluate("document.documentElement.classList.remove('dark');")

    # 24: Version History (Figure 3.54 / 24_version_history.png)
    hide_all_overlays()
    page.evaluate("if (typeof navigateView === 'function') navigateView('versioning-history');")
    hide_all_overlays()
    snap("24_version_history.png")

    browser.close()
    server.shutdown()
    print("ALL 24 HIGH-FIDELITY SCREENSHOTS CLEANLY RETAKEN WITH ZERO MODAL OVERLAYS!")
