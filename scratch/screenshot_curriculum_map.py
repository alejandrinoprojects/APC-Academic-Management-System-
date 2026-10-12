import os
from playwright.sync_api import sync_playwright

HTML_PATH = os.path.abspath('index.html')
SCREENSHOT_PATH = os.path.abspath('scratch/curriculum_map_verified.png')

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto(f'file:///{HTML_PATH}')
    page.wait_for_timeout(1000)
    
    # Open Curriculum Map Tab
    page.evaluate("""() => {
        if (typeof openCurriculumMapTab === 'function') {
            openCurriculumMapTab();
        } else if (typeof showMainTab === 'function') {
            showMainTab('curriculum-map');
        }
        if (typeof selectCurriculumMap === 'function') selectCurriculumMap('CM-BSCpE-2026');
        if (typeof renderFlowGraph === 'function') renderFlowGraph();
    }""")
    page.wait_for_timeout(1200)
    
    page.screenshot(path=SCREENSHOT_PATH, full_page=False)
    print("Screenshot taken:", SCREENSHOT_PATH)
    browser.close()
