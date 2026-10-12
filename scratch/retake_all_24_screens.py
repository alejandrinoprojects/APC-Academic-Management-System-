import os
import time
from playwright.sync_api import sync_playwright

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
URL = "https://apc-academic-management-system.alejandrinoprojects.workers.dev/schools"
OUT_DIR = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Extracted\high_fidelity_screens"
os.makedirs(OUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE_PATH, headless=True)
    # Match the 2160x1350 resolution (1440x900 at 1.5 dpr = 2160x1350)
    context = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1.5)
    page = context.new_page()

    print("Navigating to site...")
    page.goto(URL, wait_until="domcontentloaded")
    page.wait_for_timeout(2000)

    def snap(filename, delay=1.0):
        time.sleep(delay)
        target = os.path.join(OUT_DIR, filename)
        page.screenshot(path=target)
        print(f"Captured: {filename}")

    # 1. Login Modal / Portal
    page.evaluate("""() => {
        if (typeof openLoginModal === 'function') openLoginModal();
    }""")
    snap("01_login_modal.png")
    page.keyboard.press("Escape")
    page.wait_for_timeout(500)

    # 2. Institutional Dashboard
    page.evaluate("""() => {
        if (typeof goToInstitutionalAdminHub === 'function') goToInstitutionalAdminHub();
        else if (typeof goToSchoolExd === 'function') goToSchoolExd();
    }""")
    snap("02_institutional_dashboard.png")

    # 3. School of Engineering Overview
    page.evaluate("if (typeof goToSchoolExd === 'function') goToSchoolExd('soe');")
    snap("03_school_overview.png")

    # 4. Program Directory / Overview
    page.evaluate("if (typeof goToProgramPd === 'function') goToProgramPd('BSCpE');")
    snap("04_program_management.png")

    # 5. Curriculum Workbench Overview
    page.evaluate("if (typeof navigateView === 'function') navigateView('curriculum-home');")
    snap("05_curriculum_workbench.png")

    # 6. Interactive Curriculum Flowchart
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('flowchart');
        if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);
    }""")
    snap("06_curriculum_flowchart.png", delay=1.5)

    # 7. Course Details Modal
    page.evaluate("""() => {
        if (typeof openCourseInspector === 'function') openCourseInspector('PHYENLB');
        else if (typeof openCourseModal === 'function') openCourseModal('PHYENLB');
        else {
            const el = document.querySelector('[data-course=\"PHYENLB\"]');
            if (el) el.click();
        }
    }""")
    snap("07_course_details_modal.png")
    page.keyboard.press("Escape")
    page.wait_for_timeout(500)

    # 8. Master Spreadsheet
    page.evaluate("if (typeof navigateView === 'function') navigateView('spreadsheet');")
    snap("08_curriculum_spreadsheet.png", delay=1.5)

    # 9. OBE Overview (Hierarchy Hub)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('hierarchy');
    }""")
    snap("09_obe_overview.png")

    # 10. OBE Course-to-SO Matrix
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('matrix');
    }""")
    snap("10_obe_course_so.png")

    # 11. OBE SO-to-PEO Alignment
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('peo');
    }""")
    snap("11_obe_so_peo.png")

    # 12. OBE PEO-to-GA Alignment
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('obe');
        if (typeof switchObeTab === 'function') switchObeTab('vision');
    }""")
    snap("12_obe_peo_ga.png")

    # Official Registrar Documents: Sheets 1 to 7
    # 13: Course Catalog (Sheet 3)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(3);
    }""")
    snap("13_official_course_catalog.png", delay=2.0)

    # 14: Official Flowchart (Sheet 1)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(1);
    }""")
    snap("14_official_curriculum_flowchart.png", delay=2.0)

    # 15: Comparative Summary (Sheet 6)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(6);
    }""")
    snap("15_official_comparative_summary.png", delay=2.0)

    # 16: Program of Study (Sheet 4)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(4);
    }""")
    snap("16_official_program_of_study.png", delay=2.0)

    # 17: Official Prospectus (Sheet 2)
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('registrar');
        if (typeof switchRegistrarDocTab === 'function') switchRegistrarDocTab(2);
    }""")
    snap("17_official_prospectus.png", delay=2.0)

    # 18: Batch Import Modal
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('curriculum-home');
        if (typeof openBatchModal === 'function') openBatchModal();
    }""")
    snap("18_batch_import_modal.png")
    page.keyboard.press("Escape")
    page.wait_for_timeout(500)

    # 19: Data Export Modal
    page.evaluate("""() => {
        if (typeof openExportModal === 'function') openExportModal();
    }""")
    snap("19_data_export_backup_modal.png")
    page.keyboard.press("Escape")
    page.wait_for_timeout(500)

    # 20: Task Delegation Console
    page.evaluate("if (typeof navigateView === 'function') navigateView('delegation');")
    snap("20_task_delegation.png")

    # 21: System Audit Trail
    page.evaluate("if (typeof navigateView === 'function') navigateView('audit');")
    snap("21_system_audit_trail.png")

    # 22: Settings Modal
    page.evaluate("if (typeof openLoginModal === 'function') openLoginModal();")
    snap("22_system_settings_modal.png")
    page.keyboard.press("Escape")
    page.wait_for_timeout(500)

    # 23: Obsidian Gold Dark Mode Flowchart
    page.evaluate("""() => {
        if (typeof navigateView === 'function') navigateView('flowchart');
        document.documentElement.classList.add('dark');
        if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);
    }""")
    snap("23_dark_mode_flowchart.png", delay=1.5)
    page.evaluate("document.documentElement.classList.remove('dark');")

    # 24: Version History
    page.evaluate("if (typeof navigateView === 'function') navigateView('versioning-history');")
    snap("24_version_history.png")

    browser.close()
    print("ALL 24 HIGH-FIDELITY SCREENSHOTS SUCCESSFULLY RETAKEN FROM LIVE SITE!")
