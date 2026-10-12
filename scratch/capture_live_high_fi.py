import os
import sys
import time
from playwright.sync_api import sync_playwright

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
BASE_URL = "https://apc-academic-management-system.alejandrinoprojects.workers.dev"
OUT_DIR = r"C:\Users\Dean Alejandrino\Downloads\KapTau_Chapter_3_Extracted\high_fidelity_screens_live"
os.makedirs(OUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE_PATH, headless=True)
    context = browser.new_context(viewport={"width": 1600, "height": 1000}, device_scale_factor=1.5)
    page = context.new_page()

    def snap(name, delay=1.5):
        time.sleep(delay)
        out_path = os.path.join(OUT_DIR, name)
        page.screenshot(path=out_path)
        print(f"Captured: {name}")

    # 1. Login
    page.goto(f"{BASE_URL}/login")
    page.wait_for_timeout(1500)
    snap("01_login_portal.png")

    # If login button exists, click it
    btn = page.query_selector("#btnLoginSubmit, button:has-text('Sign In'), button:has-text('Login')")
    if btn:
        btn.click()
        page.wait_for_timeout(1500)

    # 2. Institutional Dashboard
    page.goto(f"{BASE_URL}/schools")
    snap("02_institutional_dashboard.png")

    # 3. School of Engineering Overview
    page.goto(f"{BASE_URL}/school/soe")
    snap("03_school_overview.png")

    # 4. Program Directory / Overview
    page.goto(f"{BASE_URL}/soe/cpe/dashboard")
    snap("04_program_management.png")

    # 5. Curriculum Workbench Overview / Home
    page.goto(f"{BASE_URL}/soe/cpe/curriculum-home")
    snap("05_curriculum_workbench.png")

    # 6. Interactive Curriculum Flowchart
    page.goto(f"{BASE_URL}/soe/cpe/flowchart")
    page.wait_for_timeout(2000)
    # Highlight course prerequisite tree if available
    try:
        page.evaluate("if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);")
    except:
        pass
    snap("06_curriculum_flowchart.png")

    # 7. Course Details Modal / Inspector
    try:
        page.evaluate("""() => {
            if (typeof openCourseInspector === 'function') openCourseInspector('PHYENLB');
            else if (typeof openCourseModal === 'function') openCourseModal('PHYENLB');
            else {
                const card = document.querySelector('[data-course=\"PHYENLB\"], .course-card');
                if (card) card.click();
            }
        }""")
    except:
        pass
    snap("07_course_details_modal.png")

    # Close drawer/modal
    page.keyboard.press("Escape")
    time.sleep(0.5)

    # 8. Master Spreadsheet Grid
    page.goto(f"{BASE_URL}/soe/cpe/spreadsheet")
    snap("08_curriculum_spreadsheet.png")

    # 9. OBE Hierarchy Hub
    page.goto(f"{BASE_URL}/soe/cpe/obe")
    snap("09_obe_hierarchy_hub.png")

    # 10. OBE Course-to-SO Matrix
    try:
        btn_so = page.query_selector("button:has-text('Course to SO'), button:has-text('Course-to-SO'), [data-tab='course-so']")
        if btn_so: btn_so.click()
    except:
        pass
    snap("10_obe_course_so_matrix.png")

    # 11. OBE SO-to-PEO Alignment
    try:
        btn_peo = page.query_selector("button:has-text('SO to PEO'), button:has-text('SO-to-PEO'), [data-tab='so-peo']")
        if btn_peo: btn_peo.click()
    except:
        pass
    snap("11_obe_so_peo_matrix.png")

    # 12. OBE PEO-to-GA Alignment
    try:
        btn_ga = page.query_selector("button:has-text('PEO to GA'), button:has-text('PEO-to-GA'), [data-tab='peo-ga']")
        if btn_ga: btn_ga.click()
    except:
        pass
    snap("12_obe_peo_ga_matrix.png")

    # 13 to 19: Official Registrar Documents Sheets 1 to 7
    sheet_names = [
        (1, "13_official_sheet1_flowchart.png"),
        (2, "14_official_sheet2_prospectus.png"),
        (3, "15_official_sheet3_course_catalog.png"),
        (4, "16_official_sheet4_program_of_study.png"),
        (5, "17_official_sheet5_obe_map.png"),
        (6, "18_official_sheet6_comparative_summary.png"),
        (7, "19_official_sheet7_summary_of_units.png"),
    ]
    for s_num, s_file in sheet_names:
        page.goto(f"{BASE_URL}/soe/cpe/documents?sheet={s_num}")
        page.wait_for_timeout(2500)
        snap(s_file, delay=0.5)

    # 20. Collaborative Task Delegation Console
    page.goto(f"{BASE_URL}/soe/cpe/delegations")
    snap("20_task_delegation.png")

    # 21. Immutable System Audit Trail
    page.goto(f"{BASE_URL}/soe/cpe/audit")
    snap("21_system_audit_trail.png")

    # 22. Curriculum Version History
    page.goto(f"{BASE_URL}/soe/cpe/versioning-history")
    snap("22_curriculum_version_history.png")

    # 23. Batch Operations Modal
    page.goto(f"{BASE_URL}/soe/cpe/curriculum-home")
    try:
        page.evaluate("if (typeof openBatchModal === 'function') openBatchModal();")
    except:
        pass
    snap("23_batch_operations_modal.png")
    page.keyboard.press("Escape")
    time.sleep(0.5)

    # 24. Data Export Modal
    try:
        page.evaluate("if (typeof openExportModal === 'function') openExportModal();")
    except:
        pass
    snap("24_data_export_modal.png")
    page.keyboard.press("Escape")
    time.sleep(0.5)

    # 25. System Settings Modal
    try:
        page.evaluate("if (typeof openLoginModal === 'function') openLoginModal();")
    except:
        pass
    snap("25_system_settings_modal.png")

    # 26. Obsidian Gold Dark Mode Flowchart
    page.goto(f"{BASE_URL}/soe/cpe/flowchart")
    page.wait_for_timeout(1000)
    page.evaluate("document.documentElement.classList.add('dark'); if (typeof highlightPrereqTree === 'function') highlightPrereqTree('PHYENLB', true);")
    snap("26_obsidian_gold_dark_flowchart.png")

    browser.close()
    print("All live high-fidelity screenshots successfully taken!")
