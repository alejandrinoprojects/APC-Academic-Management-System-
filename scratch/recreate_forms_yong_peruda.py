import os, subprocess, shutil
import docx
from docx.shared import Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH

SRC_DIR = r"C:\Users\Dean Alejandrino\Downloads"
OUT_DIR = r"C:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\recreated_approval_forms"
EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
USER_DIR = r"C:\Users\Dean Alejandrino\.gemini\antigravity\scratch\edge_profile_recreated_forms"

os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(USER_DIR, exist_ok=True)

PERUDA_ACTIONS = {
    # Table 1: Comments
    1: {
        1: "Added a yellow warning bar and an 'Advisory' button at the top of the curriculum matrix and flowchart. When a final course (like Capstone) has not reached Demonstrative (D), the yellow button appears. Clicking it opens a popup window explaining what is missing, while still letting the user save their work.",
        2: "Removed credit unit and contact hour calculations from the outcomes matrix. The table now displays a simple count of how many courses are linked to each Student Outcome (SO a to m).",
        3: "Added visual loop detection in the interactive Flowchart editor. If a user connects courses in an endless prerequisite loop (such as Course A requiring Course B, and Course B requiring Course A), a red warning banner appears on screen and disables saving until the loop is fixed.",
        4: "Placed the visual flowchart, interactive course line highlighting, and SVG/PNG image export buttons directly inside the Curriculum Management screen as a core feature of the curriculum builder.",
        5: "Aligned all user screens and system capabilities so that every required objective is fully accessible and usable in the application."
    },
    # Table 2: Revisions
    2: {
        1: "Divided the user interface into three distinct screens: (1) a Curriculum Creation wizard to set up new curricula, (2) an Active Draft workbench for authoring working drafts (such as CPE 2027), and (3) a read-only viewer for published curricula (such as CPE 2026) where editing tools are locked.",
        2: "Updated page headers, dropdowns, and breadcrumb labels to display official curriculum versions (like 'CPE 2026' or 'CPE 2027') instead of student year levels (1st Year to 4th Year).",
        3: "Displayed both the curriculum version and entering batch year (for example, 'CPE 2026 [Batch 2026]') on all curriculum management screens, directory cards, and version history logs.",
        4: "Cleaned up all menus and dropdowns by removing nested parentheses and replacing them with clear, readable labels (such as 'AY 2026-2027' and 'CPE 2026').",
        5: "Added visual progression warnings in the curriculum matrix: if Course 1 is Introductory (I) and Course 2 skips straight to Demonstrative (D) without an Enabling (E) course in between, the table marks the cell with a yellow warning badge.",
        6: "Made all progression checks non-blocking. The system shows yellow advisory badges and an advisory popup to inform the user, but still allows the user to save and publish.",
        7: "Labeled the matrix table headers clearly as 'Courses per Student Outcome' to show the exact count of courses mapped to each outcome.",
        8: "Streamlined the user interface by removing extra unapproved menus and buttons, presenting only approved curriculum and OBE management features.",
        9: "Simplified all button labels, instructions, tooltips, and on-screen help text using clear, everyday language."
    },
    # Table 3: Additional Requirements
    3: {
        1: "Added an upload preview modal for Excel files. When a user uploads a spreadsheet, the interface displays an interactive review screen showing all imported rows and highlighting duplicate codes or missing fields before confirmation.",
        2: "Added an on-screen error summary directly inside the file import dialog, highlighting the exact row, column, and problem (such as missing units or duplicate course codes) before any data is added.",
        3: "Added an upload check that detects merged cells in Excel files. When detected, the dialog displays a clear message asking the user to unmerge the cells and re-upload.",
        4: "Created an admin settings page to view, add, and edit the University Vision, Mission, and Core Values, complete with a version history dropdown so previous approved statements remain viewable.",
        5: "Added dedicated management cards and editing modals for Graduate Attributes (GA), Program Educational Objectives (PEO), and Student Outcomes (SO), with buttons to add new items and switch active versions.",
        6: "Added visible version tags and lineage badges on each card, showing which parent PEO version each SO connects to, and which parent GA version each PEO connects to.",
        7: "Locked all input fields and edit buttons on published curricula (such as CPE 2026) into view-only mode, and provided a 'Create New Draft' button to allow editing under a new version."
    }
}

YONG_ACTIONS = {
    # Table 1: Comments
    1: {
        1: "Added a template selector dropdown in the Official Documents screen. When CHED issues a revised format, users can select the new document layout without altering older official forms.",
        2: "Simplified the Task Assignment screen so Program Directors can directly assign courses to faculty members, with an optional course group filter if they wish to organize assignments by subject area."
    },
    # Table 2: Revisions
    2: {
        1: "Froze the Course Code and Course Title columns in the spreadsheet table so they remain visible on screen while scrolling horizontally across columns.",
        2: "Cleaned up the Comparative Summary table (Sheet 6) with standardized column headers, removed duplicate rows, and aligned credit unit totals with registrar standards.",
        3: "Simplified the faculty assignment form by removing academic rank and employment status fields, requiring only the faculty member's name and assigned course."
    },
    # Table 3: Additional Requirements
    3: {
        1: "Added an editable Institutional Statements screen for the University Vision, Mission, and Core Values, allowing users to update statements and view revision logs directly in the interface.",
        2: "Added a summary footer row at the bottom of each academic term in the curriculum flowchart view, showing total lecture hours, laboratory hours, and credit units.",
        3: "Added a Course Group Management modal where department heads can create, edit, and delete course classifications (such as General Education, Professional Core, and Electives).",
        4: "Connected the course classification dropdown in the spreadsheet table directly to custom course groups, instantly updating available options when a new group is created.",
        5: "Added an interactive form and an Excel file upload button for CHED minimum requirements, displaying the benchmark criteria directly in the comparative summary view.",
        6: "Added '+ Add Row' and '+ Add Column' buttons directly on the Comparative Summary table, letting users add customized comparison metrics on the fly.",
        7: "Added a version comparison dropdown on the Comparative Summary screen, allowing users to view and compare different curriculum revisions side-by-side."
    }
}

FORMS = [
    {
        "src_name": "KapTau_-_Chapter_3_Approval_Form__PERUDA_ (1).docx",
        "out_docx_name": "KapTau_-_Chapter_3_Approval_Form__PERUDA__RECREATED.docx",
        "out_pdf_name": "KapTau_-_Chapter_3_Approval_Form__PERUDA__RECREATED.pdf",
        "panel_member": "SERGIO R. PERUDA JR.",
        "actions_map": PERUDA_ACTIONS
    },
    {
        "src_name": "KapTau_-_Chapter_3_Approval_Form__YONG_ (1).docx",
        "out_docx_name": "KapTau_-_Chapter_3_Approval_Form__YONG__RECREATED.docx",
        "out_pdf_name": "KapTau_-_Chapter_3_Approval_Form__YONG__RECREATED.pdf",
        "panel_member": "EINSTEIN D. YONG",
        "actions_map": YONG_ACTIONS
    }
]

def recreate_docx(form_info):
    src_path = os.path.join(SRC_DIR, form_info["src_name"])
    out_docx_path = os.path.join(OUT_DIR, form_info["out_docx_name"])
    
    doc = docx.Document(src_path)
    
    # Table 0: Proposed Title & Recommendation (Ensure Recommendation is EMPTY)
    t0 = doc.tables[0]
    if len(t0.rows) > 1 and len(t0.rows[1].cells) > 1:
        t0.rows[1].cells[1].text = ""
        
    actions_map = form_info["actions_map"]
    for t_idx in [1, 2, 3]:
        if t_idx >= len(doc.tables):
            continue
        table = doc.tables[t_idx]
        t_actions = actions_map.get(t_idx, {})
        for r_idx in range(1, len(table.rows)):
            row = table.rows[r_idx]
            action_text = t_actions.get(r_idx, "")
            
            # Column 1: Actions Taken
            if len(row.cells) > 1:
                row.cells[1].text = ""
                p = row.cells[1].paragraphs[0]
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                if action_text:
                    r = p.add_run(action_text)
                    r.font.name = "Arial"
                    r.font.size = Pt(9.5)
                    
            # Column 2: Remarks (MUST BE COMPLETELY EMPTY for panelist signing)
            if len(row.cells) > 2:
                row.cells[2].text = ""
                
    doc.save(out_docx_path)
    print(f"Created DOCX: {out_docx_path}")

def recreate_pdf(form_info):
    src_path = os.path.join(SRC_DIR, form_info["src_name"])
    doc = docx.Document(src_path)
    
    actions_map = form_info["actions_map"]
    
    def get_table_rows(t_idx):
        if t_idx >= len(doc.tables):
            return []
        rows_data = []
        t = doc.tables[t_idx]
        t_actions = actions_map.get(t_idx, {})
        for r_idx in range(1, len(t.rows)):
            row = t.rows[r_idx]
            c0 = row.cells[0].text.strip()
            c1 = t_actions.get(r_idx, "")
            if c0:
                rows_data.append((c0, c1, ""))
        return rows_data

    t1_rows = get_table_rows(1)
    t2_rows = get_table_rows(2)
    t3_rows = get_table_rows(3)

    html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>{form_info['panel_member']} - Approval Form</title>
<style>
  @page {{
    size: letter portrait;
    margin: 0.75in 0.85in;
    @bottom-center {{
      content: counter(page);
    }}
  }}
  body {{
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 10pt;
    line-height: 1.35;
    color: #000000;
    margin: 0;
    padding: 0;
  }}
  .header-top {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10pt;
    margin-bottom: 12pt;
  }}
  .school-title {{
    font-size: 10pt;
    font-weight: normal;
  }}
  .userinx-title {{
    font-size: 10pt;
    font-weight: bold;
    text-align: right;
  }}
  .form-title {{
    text-align: center;
    font-weight: bold;
    font-size: 11pt;
    margin: 0 0 2pt 0;
  }}
  .form-subtitle {{
    text-align: center;
    font-size: 9.5pt;
    font-style: italic;
    margin: 0 0 14pt 0;
  }}
  .greeting {{
    text-align: center;
    font-weight: bold;
    margin-bottom: 8pt;
  }}
  p.body-text {{
    text-align: justify;
    margin: 0 0 6pt 0;
    font-size: 9.5pt;
    line-height: 1.35;
  }}
  .rec-heading {{
    font-weight: bold;
    margin-top: 8pt;
    margin-bottom: 4pt;
    font-size: 9.5pt;
  }}
  .rec-list {{
    margin: 0 0 10pt 0;
    padding-left: 18pt;
    font-size: 9pt;
    line-height: 1.35;
  }}
  .rec-list li {{
    margin-bottom: 3pt;
  }}
  .rec-list strong {{
    font-weight: bold;
  }}
  table.form-table {{
    width: 100%;
    border-collapse: collapse;
    margin: 8pt 0 14pt 0;
    font-size: 9pt;
  }}
  table.form-table th, table.form-table td {{
    border: 1px solid #000;
    padding: 5pt 7pt;
    vertical-align: top;
    line-height: 1.3;
  }}
  table.form-table th {{
    background-color: #f2f2f2;
    font-weight: bold;
    text-align: left;
  }}
  .section-label {{
    font-weight: bold;
    font-size: 10pt;
    margin-top: 12pt;
    margin-bottom: 4pt;
  }}
  .signature-block {{
    margin-top: 24pt;
    font-size: 9.5pt;
    line-height: 2.0;
    page-break-inside: avoid;
  }}
</style>
</head>
<body>

  <div class="header-top">
    <div class="school-title">School of Engineering</div>
    <div class="userinx-title">USERINX</div>
  </div>

  <div class="form-title">User Interface / User Experience Proposed Software Design Project Title Pre-approval Form</div>
  <div class="form-subtitle">(Refer to attached initial title proposal)</div>

  <div class="greeting">Dear Panel Member,</div>

  <p class="body-text">
    Attached is the Chapter 1 to 3 of the project proposal for USERINX CpE251 containing the approved Chapters 1 and 2, and Chapter 3: Information Architecture, Navigation Structure, User Flow, Wireframes, Design Standards, High Fidelity User Interface Design, and Usability Considerations.
  </p>
  <p class="body-text">
    Please determine if the attached project proposal is approved for proposal defense in terms of feasibility and relevance to CpE's field of specialization.
  </p>
  <p class="body-text">
    Once approved, the proponents are expected to proceed with system design documentation (Chapters 1 to 6) as a requirement for Database Management course.
  </p>

  <div class="rec-heading">Possible Recommendations:</div>
  <ul class="rec-list">
    <li><strong>Approved</strong> – The proposed title is accepted without revisions. The project team may proceed to the Proposal Defense.</li>
    <li><strong>Approved with Revisions</strong> – The proposed title is accepted subject to the completion of the required revisions. The project team may proceed to the Proposal Defense upon compliance with the panel's recommendations.</li>
    <li><strong>Change Topic</strong> – The proposed title is not approved. The project team shall propose a new project topic that addresses the recommendations of the evaluation panel.</li>
  </ul>
  <p class="body-text">
    If the project receives a Change Topic result during the scheduled Title Defense, the remaining defense schedule allocated for the UI/UX course shall be used for the Proposal Defense of the revised project. Any additional proposal defense, if required, shall be conducted during the next offering of the UI/UX course.
  </p>

  <!-- TABLE 0 -->
  <table class="form-table" style="margin-bottom: 12pt;">
    <thead>
      <tr>
        <th style="width: 72%;">PROPOSED TITLE</th>
        <th style="width: 28%; text-align: center;">RECOMMENDATION</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="font-weight: bold; padding: 8pt 7pt;">Development of a Centralized Curriculum Management and Mapping System with Role-Based Access Control and Audit Logging</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <!-- TABLE 1 -->
  <div class="section-label">Comments</div>
  <table class="form-table">
    <thead>
      <tr>
        <th style="width: 44%;">Comments</th>
        <th style="width: 44%;">Actions Taken</th>
        <th style="width: 12%; text-align: center;">Remarks</th>
      </tr>
    </thead>
    <tbody>
"""
    for c0, c1, c2 in t1_rows:
        html += f"""      <tr>
        <td>{c0.replace(chr(10), '<br>')}</td>
        <td>{c1}</td>
        <td></td>
      </tr>\n"""
        
    html += """    </tbody>
  </table>
"""

    if t2_rows:
        html += """  <!-- TABLE 2 -->
  <div class="section-label">For revisions</div>
  <table class="form-table">
    <thead>
      <tr>
        <th style="width: 44%;">Revisions</th>
        <th style="width: 44%;">Actions Taken</th>
        <th style="width: 12%; text-align: center;">Remarks</th>
      </tr>
    </thead>
    <tbody>
"""
        for c0, c1, c2 in t2_rows:
            html += f"""      <tr>
        <td>{c0.replace(chr(10), '<br>')}</td>
        <td>{c1}</td>
        <td></td>
      </tr>\n"""
        html += """    </tbody>
  </table>
"""

    if t3_rows:
        html += """  <!-- TABLE 3 -->
  <div class="section-label">Additional requirements (additional objectives that needs to be included in the complete proposal)</div>
  <table class="form-table">
    <thead>
      <tr>
        <th style="width: 44%;">Additional Requirements</th>
        <th style="width: 44%;">Actions Taken</th>
        <th style="width: 12%; text-align: center;">Remarks</th>
      </tr>
    </thead>
    <tbody>
"""
        for c0, c1, c2 in t3_rows:
            html += f"""      <tr>
        <td>{c0.replace(chr(10), '<br>')}</td>
        <td>{c1}</td>
        <td></td>
      </tr>\n"""
        html += """    </tbody>
  </table>
"""

    html += f"""  <div class="signature-block">
    <div><strong>NAME OF PANEL MEMBER:</strong> {form_info['panel_member']}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>SIGNATURE :</strong> _________________________________</div>
    <div><strong>Date Signed :</strong> _________________________________</div>
  </div>

</body>
</html>
"""

    html_path = os.path.join(OUT_DIR, form_info["out_pdf_name"].replace(".pdf", ".html"))
    pdf_path = os.path.join(OUT_DIR, form_info["out_pdf_name"])
    
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html)
        
    url = "file:///" + os.path.abspath(html_path).replace("\\", "/")
    cmd = [
        EDGE_PATH,
        "--headless",
        "--disable-gpu",
        f"--user-data-dir={USER_DIR}",
        "--no-pdf-header-footer",
        f"--print-to-pdf={pdf_path}",
        url
    ]
    subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(html_path):
        os.remove(html_path)
    print(f"Created PDF: {pdf_path} (size: {os.path.getsize(pdf_path)})")

if __name__ == "__main__":
    for f_info in FORMS:
        recreate_docx(f_info)
        recreate_pdf(f_info)
    print("Recreation completed successfully.")
