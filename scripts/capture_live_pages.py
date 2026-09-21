import os
import time
from playwright.sync_api import sync_playwright

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
out_dir = r"C:\Users\Dean Alejandrino\Documents\antigravity\lively-turing\screenshots\updated_live_screenshots"
os.makedirs(out_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=edge_path)
    page = browser.new_page(viewport={"width": 1600, "height": 950})
    
    # 1. Login
    page.goto("https://apc-academic-management-system.alejandrinoprojects.workers.dev/soe/cpe/workbench")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(out_dir, "01_Login_Portal.png"))
    print("01_Login_Portal.png saved")
    
    # Sign in with empty credentials
    page.click("#btnLoginSubmit")
    page.wait_for_timeout(2000)
    
    # 2. Institutional Admin Hub
    page.screenshot(path=os.path.join(out_dir, "02_Institutional_Admin_Hub.png"))
    print("02_Institutional_Admin_Hub.png saved")
    
    # 3. School of Engineering Overview
    page.evaluate("window.goToSchoolExd('soe')")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(out_dir, "03_School_Of_Engineering_Overview.png"))
    print("03_School_Of_Engineering_Overview.png saved")
    
    # 4. Program Director Workbench
    page.evaluate("window.goToProgramPd('BSCpE')")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(out_dir, "04_Program_Director_Workbench.png"))
    print("04_Program_Director_Workbench.png saved")
    
    # 5. Flowchart Table
    page.evaluate("window.selectProgram('BSCpE', 'flowchart', null, 1)")
    page.wait_for_timeout(2000)
    page.screenshot(path=os.path.join(out_dir, "05_Curriculum_Flowchart_Table.png"))
    print("05_Curriculum_Flowchart_Table.png saved")
    
    # 6. Master Spreadsheet
    page.evaluate("window.selectProgram('BSCpE', 'spreadsheet', null, 1)")
    page.wait_for_timeout(2000)
    page.screenshot(path=os.path.join(out_dir, "06_Master_Spreadsheet_Workbench.png"))
    print("06_Master_Spreadsheet_Workbench.png saved")
    
    # 7. Syllabus Management
    page.evaluate("window.navigateView('syllabus')")
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(out_dir, "07_Syllabus_Management_Portal.png"))
    print("07_Syllabus_Management_Portal.png saved")

    # 8. Dark Mode Flowchart
    page.evaluate("window.selectProgram('BSCpE', 'flowchart', null, 1)")
    page.wait_for_timeout(1000)
    page.evaluate("document.documentElement.classList.add('dark')")
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(out_dir, "08_Dark_Mode_Curriculum_Flowchart.png"))
    print("08_Dark_Mode_Curriculum_Flowchart.png saved")

    browser.close()
    print("All live updated screenshots successfully generated!")
