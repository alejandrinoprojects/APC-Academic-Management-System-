import os
import sys
import time
import http.server
import socketserver
import threading
from playwright.sync_api import sync_playwright

PORT = 8099
ROOT_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
OUT_DIR = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Extracted\high_fidelity_screens"
os.makedirs(OUT_DIR, exist_ok=True)

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT_DIR, **kwargs)
    def log_message(self, format, *args):
        pass

server = socketserver.TCPServer(("", PORT), QuietHandler)
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()
print(f"Server running on port {PORT}")
time.sleep(0.5)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE_PATH, headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1.5)
    page = context.new_page()

    # 1. First, load the initial Login Portal (no login modal, pure login card)
    page.goto(f"http://localhost:{PORT}/index.html")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(OUT_DIR, "01_login_modal.png"))
    print("Captured: 01_login_modal.png (Login Portal)")

    # 2. Authenticate into application
    page.click("#btnLoginSubmit")
    page.wait_for_timeout(1200)

    def close_all_modals():
        page.evaluate("""() => {
            const modals = ['loginModal', 'modalCourseInspector', 'modalCourseDetail', 'modalBatch', 'modalExport', 'modalCurriculumCopilot', 'batchOperationsModal'];
            modals.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.classList.add('hidden');
            });
            if (typeof closeLoginModal === 'function') closeLoginModal();
            if (typeof closeBatchModal === 'function') closeBatchModal();
            if (typeof closeExportModal === 'function') closeExportModal();
        }""")

    def snap(filename, delay=0.8):
        time.sleep(delay)
        target = os.path.join(OUT_DIR, filename)
        page.screenshot(path=target)
        print(f"Captured: {filename}")

    # 2. Institutional Admin Dashboard
    close_all_modals()
    page.evaluate("if (typeof goToSchoolExd === 'function') goToSchoolExd();")
    close_all_modals()
    snap("02_institutional_dashboard.png")

    # 3. School of Engineering Overview
    page.evaluate("if (typeof goToSchoolExd === 'function') goToSchoolExd('soe');")
    close_all_modals()
    snap("03_school_overview.png")

    # 4. Program Directory / Overview
    page.evaluate("if (typeof goToProgramPd === 'function') goToProgramPd('BSCpE');")
    close_all_modals()
    snap("04_program_management.png")

    # 5. Curriculum Workbench Overview
    page.evaluate("if (typeof navigateView === 'function') navigateView('curriculum-home');")
    close_all_modals()
    snap("05_curriculum_workbench.png")

    # 6. Interactive Curriculum Flowchart
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('flowchart');
        if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);
    }""")
    close_all_modals()
    snap("06_curriculum_flowchart.png", delay=1.0)

    # 7. Course Details Modal / Drawer
    page.evaluate("""() => {
        if (typeof openCourseInspector === 'function') openCourseInspector('PHYENLB');
        else if (typeof openCourseModal === 'function') openCourseModal('PHYENLB');
        else {
            const card = document.querySelector('[data-course=\"PHYENLB\"], .course-card');
            if (card) card.click();
        }
    }""")
    snap("07_course_details_modal.png")
    close_all_modals()
    page.wait_for_timeout(300)

    # 8. Master Spreadsheet Grid
    page.evaluate("if (typeof navigateView === 'function') navigateView('spreadsheet');")
    close_all_modals()
    snap("08_curriculum_spreadsheet.png", delay=1.0)

    # 9. OBE Overview (Hierarchy Hub)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('hierarchy');
    }""")
    close_all_modals()
    snap("09_obe_overview.png")

    # 10. OBE Course-to-SO Matrix
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('matrix');
    }""")
    close_all_modals()
    snap("10_obe_course_so.png")

    # 11. OBE SO-to-PEO Alignment
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('peo');
    }""")
    close_all_modals()
    snap("11_obe_so_peo.png")

    # 12. OBE PEO-to-GA Alignment
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('vision');
    }""")
    close_all_modals()
    snap("12_obe_peo_ga.png")

    # 13: Course Catalog (Sheet 3)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(3);
    }""")
    close_all_modals()
    snap("13_official_course_catalog.png", delay=1.5)

    # 14: Official Flowchart (Sheet 1)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(1);
    }""")
    close_all_modals()
    snap("14_official_curriculum_flowchart.png", delay=1.5)

    # 15: Comparative Summary (Sheet 6)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(6);
    }""")
    close_all_modals()
    snap("15_official_comparative_summary.png", delay=1.5)

    # 16: Program of Study (Sheet 4)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(4);
    }""")
    close_all_modals()
    snap("16_official_program_of_study.png", delay=1.5)

    # 17: Official Prospectus (Sheet 2)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(2);
    }""")
    close_all_modals()
    snap("17_official_prospectus.png", delay=1.5)

    # 18: Batch Import Modal
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('curriculum-home');
        if (typeof openBatchModal === 'function') openBatchModal();
    }""")
    snap("18_batch_import_modal.png")
    close_all_modals()
    page.wait_for_timeout(300)

    # 19: Data Export Modal
    page.evaluate("if (typeof openExportModal === 'function') openExportModal();")
    snap("19_data_export_backup_modal.png")
    close_all_modals()
    page.wait_for_timeout(300)

    # 20: Task Delegation Console
    page.evaluate("if (typeof navigateView === 'function') navigateView('delegation');")
    close_all_modals()
    snap("20_task_delegation.png")

    # 21: System Audit Trail
    page.evaluate("if (typeof navigateView === 'function') navigateView('audit');")
    close_all_modals()
    snap("21_system_audit_trail.png")

    # 22: Settings Modal (Role Switcher & Display Preferences)
    page.evaluate("if (typeof openLoginModal === 'function') openLoginModal();")
    snap("22_system_settings_modal.png")
    close_all_modals()
    page.wait_for_timeout(300)

    # 23: Obsidian Gold Dark Mode Flowchart
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('flowchart');
        document.documentElement.classList.add('dark');
        if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);
    }""")
    close_all_modals()
    snap("23_dark_mode_flowchart.png", delay=1.0)
    page.evaluate("document.documentElement.classList.remove('dark');")

    # 24: Version History
    page.evaluate("if (typeof navigateView === 'function') navigateView('versioning-history');")
    close_all_modals()
    snap("24_version_history.png")

    browser.close()
    server.shutdown()
    print("ALL 24 SCREENS CLEANLY RETAKEN WITHOUT OVERLAPPING MODALS!")
