import os
from playwright.sync_api import sync_playwright

HTML_PATH = os.path.abspath('index.html')
SCREENSHOT_PATH = os.path.abspath('scratch/curriculum_map_cpedes1_card.png')

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto(f'file:///{HTML_PATH}')
    page.wait_for_timeout(1000)
    
    page.evaluate("""() => {
        if (typeof openCurriculumMapTab === 'function') openCurriculumMapTab();
        if (typeof selectCurriculumMap === 'function') selectCurriculumMap('CM-BSCpE-2026');
        if (typeof renderFlowGraph === 'function') renderFlowGraph();
        
        // Filter or scroll to CPEDES1
        const container = document.getElementById('cylinderContainerCourses');
        if (container) {
            // find card with CPEDES1
            const cards = container.querySelectorAll('#flowColCourses > div');
            for (let c of cards) {
                if (c.innerText.includes('CPEDES1')) {
                    c.scrollIntoView({ behavior: 'instant', block: 'center' });
                    break;
                }
            }
        }
    }""")
    page.wait_for_timeout(1000)
    
    page.screenshot(path=SCREENSHOT_PATH, full_page=False)
    print("Screenshot taken:", SCREENSHOT_PATH)
    browser.close()
