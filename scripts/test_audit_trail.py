import os
from playwright.sync_api import sync_playwright

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
ROOT_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\lively-turing"

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=EDGE_PATH, headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 1200})
    
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))

    # Open page and sign in
    page.goto('http://127.0.0.1:8080/index.html', wait_until='domcontentloaded')
    page.wait_for_timeout(1000)
    page.click('#btnLoginSubmit')
    page.wait_for_timeout(1500)
    
    # Navigate to Curriculum Home
    page.evaluate("window.navigateView && window.navigateView('curriculum-home')")
    page.wait_for_timeout(800)
    
    # Check audit log rows rendered inside curriculum home
    curric_home_rows = page.evaluate("() => { const tbody = document.querySelector('#auditTableBodyCurricHome'); return tbody ? tbody.children.length : 0; }")
    print('Curriculum home audit log rows:', curric_home_rows)

    # Navigate to dedicated Audit page
    page.evaluate("window.navigateView && window.navigateView('audit')")
    page.wait_for_timeout(500)
    audit_page_rows = page.evaluate("() => { const tbody = document.querySelector('#auditTableBody'); return tbody ? tbody.children.length : 0; }")
    print('Dedicated audit view rows:', audit_page_rows)
    print('Page errors:', errors)

    # Return to curriculum-home
    page.evaluate("window.navigateView && window.navigateView('curriculum-home')")
    page.wait_for_timeout(500)

    # Scroll down to audit table and screenshot
    audit_el = page.locator('#auditTableBodyCurricHome')
    audit_el.scroll_into_view_if_needed()
    page.wait_for_timeout(400)
    page.screenshot(path=os.path.join(ROOT_DIR, 'scripts', 'audit_table_rendered.png'))
    print('Saved audit_table_rendered.png')

    # Test openAuditDiffModal on each of our three records
    for rec_id in ['REC-1A8F24', 'REC-3D9B71', 'REC-8E2C95']:
        res = page.evaluate(f"""(id) => {{
            if (window.openAuditDiffModal) {{
                window.openAuditDiffModal(id);
                const title = document.querySelector('#diffModalTitle');
                const rows = document.querySelector('#diffModalTableBody');
                return {{ title: title ? title.textContent : '', count: rows ? rows.children.length : 0 }};
            }}
            return null;
        }}""", rec_id)
        print(f"Diff modal for {rec_id}:", res)
        page.wait_for_timeout(300)
        page.screenshot(path=os.path.join(ROOT_DIR, 'scripts', f'audit_diff_{rec_id}.png'))

    browser.close()
