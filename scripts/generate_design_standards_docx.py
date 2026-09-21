import os
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import qn, nsdecls

def create_design_standards_doc():
    doc = Document()
    
    # Page setup - 0.75 in margins
    for section in doc.sections:
        section.top_margin = Inches(0.75)
        section.bottom_margin = Inches(0.75)
        section.left_margin = Inches(0.75)
        section.right_margin = Inches(0.75)
    
    # Set default font to Segoe UI
    style = doc.styles['Normal']
    font = style.font
    font.name = 'Segoe UI'
    font.size = Pt(10.5)
    font.color.rgb = RGBColor(15, 23, 42) # Slate-900

    # Colors
    c_navy = RGBColor(0, 40, 85)     # APC Blue #002855
    c_gold = RGBColor(229, 168, 35)  # APC Gold #E5A823
    c_slate = RGBColor(71, 85, 105)  # Slate-600 #475569
    c_white = RGBColor(255, 255, 255)

    def set_cell_background(cell, fill_hex):
        tcPr = cell._element.get_or_add_tcPr()
        shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
        tcPr.append(shd)

    def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
        tcPr = cell._element.get_or_add_tcPr()
        tcMar = parse_xml(f'<w:tcMar {nsdecls("w")}><w:top w:w="{top}" w:type="dxa"/><w:bottom w:w="{bottom}" w:type="dxa"/><w:left w:w="{left}" w:type="dxa"/><w:right w:w="{right}" w:type="dxa"/></w:tcMar>')
        tcPr.append(tcMar)

    # 1. Header & Title Block
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(2)
    run_inst = title_p.add_run("ASIA PACIFIC COLLEGE\n")
    run_inst.font.name = 'Segoe UI'
    run_inst.font.size = Pt(11)
    run_inst.font.bold = True
    run_inst.font.color.rgb = c_gold

    run_title = title_p.add_run("Universal UI/UX Design Standards")
    run_title.font.name = 'Segoe UI'
    run_title.font.size = Pt(24)
    run_title.font.bold = True
    run_title.font.color.rgb = c_navy

    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_before = Pt(0)
    sub_p.paragraph_format.space_after = Pt(14)
    run_sub = sub_p.add_run("Academic Management System (AMS) • Suite-Wide Interface & Component Specifications")
    run_sub.font.name = 'Segoe UI'
    run_sub.font.size = Pt(11.5)
    run_sub.font.italic = True
    run_sub.font.color.rgb = c_slate

    # Intro Paragraph
    p_intro = doc.add_paragraph()
    p_intro.paragraph_format.space_after = Pt(12)
    p_intro.paragraph_format.line_spacing = 1.2
    p_intro.add_run(
        "The Design Standards establish the principles, guidelines, and conventions governing the visual and interaction "
        "design across the entire APC Academic Management System suite. These standards provide a common, cohesive framework "
        "for all current and future modules—including Curriculum Management, Syllabus Management System (SMS), Course Management "
        "System (CMS), Institutional Governance Portals, and Faculty Workstations—ensuring consistent usability, accessibility, "
        "and visual harmony."
    )

    # Helper for Section 1 (Level 1 Bullet)
    def add_h1(text):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(16)
        p.paragraph_format.space_after = Pt(6)
        p.paragraph_format.keep_with_next = True
        run = p.add_run(f"◆ {text}")
        run.font.name = 'Segoe UI'
        run.font.size = Pt(15)
        run.font.bold = True
        run.font.color.rgb = c_navy

    # Helper for Section 2 (Level 2 Bullet)
    def add_h2(text):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(10)
        p.paragraph_format.space_after = Pt(4)
        p.paragraph_format.keep_with_next = True
        run = p.add_run(f"▸ {text}")
        run.font.name = 'Segoe UI'
        run.font.size = Pt(12)
        run.font.bold = True
        run.font.color.rgb = c_navy

    # Helper for bullet points
    def add_bullet(text, level=1, bold_prefix=""):
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(1)
        p.paragraph_format.space_after = Pt(3)
        p.paragraph_format.line_spacing = 1.15
        indent = Inches(0.2 * level)
        p.paragraph_format.left_indent = indent
        
        symbols = {1: "• ", 2: "▪ ", 3: "○ "}
        sym = symbols.get(level, "• ")
        
        run_sym = p.add_run(sym)
        run_sym.font.name = 'Segoe UI'
        run_sym.font.bold = True
        run_sym.font.color.rgb = c_gold if level == 1 else c_slate

        if bold_prefix:
            run_prefix = p.add_run(bold_prefix + " ")
            run_prefix.font.name = 'Segoe UI'
            run_prefix.font.bold = True
            run_prefix.font.color.rgb = RGBColor(15, 23, 42)

        run_text = p.add_run(text)
        run_text.font.name = 'Segoe UI'
        run_text.font.size = Pt(10)
        run_text.font.color.rgb = RGBColor(30, 41, 59)

    # Helper to format tables
    def style_table(table, col_widths, headers, rows):
        table.alignment = WD_TABLE_ALIGNMENT.CENTER
        
        # Header
        hdr_cells = table.rows[0].cells
        for idx, title in enumerate(headers):
            hdr_cells[idx].text = title
            set_cell_background(hdr_cells[idx], "002855")
            set_cell_margins(hdr_cells[idx], top=120, bottom=120, left=140, right=140)
            p = hdr_cells[idx].paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for r in p.runs:
                r.font.name = 'Segoe UI'
                r.font.size = Pt(9.5)
                r.font.bold = True
                r.font.color.rgb = c_white

        # Rows
        for r_idx, row_data in enumerate(rows):
            row_cells = table.add_row().cells
            bg_color = "FFFFFF" if r_idx % 2 == 0 else "F8FAFC"
            for c_idx, val in enumerate(row_data):
                row_cells[c_idx].text = str(val)
                set_cell_background(row_cells[c_idx], bg_color)
                set_cell_margins(row_cells[c_idx], top=90, bottom=90, left=140, right=140)
                p = row_cells[c_idx].paragraphs[0]
                p.alignment = WD_ALIGN_PARAGRAPH.LEFT
                for r in p.runs:
                    r.font.name = 'Segoe UI'
                    r.font.size = Pt(9)
                    r.font.color.rgb = RGBColor(15, 23, 42)

        # Apply widths
        for row in table.rows:
            for idx, width in enumerate(col_widths):
                row.cells[idx].width = Inches(width)

    # --- SECTION: DESIGN PRINCIPLES ---
    add_h1("Design Principles & Architectural Vision")
    add_h2("Institutional Cohesion & Identity")
    add_bullet("Reflects the collegiate identity of Asia Pacific College through signature APC Blue and APC Gold, balanced with neutral surfaces.", 1)
    add_bullet("Ensures every module and subsystem feels part of an integrated, unified academic workbench rather than disparate tools.", 1)
    
    add_h2("Zero-Clutter Workspace Efficiency")
    add_bullet("Adopts a top-bar-free full-headroom viewport architecture to prioritize workspace area for dense academic workflows.", 1)
    add_bullet("Standardizes predictable navigation via a unified, tree-structured Left Navigation Sidebar.", 1)

    add_h2("Single Universal Typographic Family")
    add_bullet("Enforces Segoe UI universally across all text, headers, numbers, data tables, code badges, and interactive controls.", 1)
    add_bullet("Replaces disparate monospace or multi-font stacks with structured font weights, tabular spacing, and precise tracking within Segoe UI.", 1)

    add_h2("High-Contrast Dual Theme System")
    add_bullet("Supports Institutional Light Mode (clean, high-legibility slate surfaces) and Obsidian Gold Dark Mode (deep obsidian canvas with glowing gold, cyan, and emerald accents).", 1)
    add_bullet("Guarantees full contrast ratios and visual legibility in both display modes across all interactive cards, text elements, and diagrams.", 1)

    add_h2("Predictable Spatial Architecture & Hierarchy")
    add_bullet("Employs a strict 4px/8px modular spacing system with crisp square edges (0px border radius default) and subtle 2px card radiuses.", 1)
    add_bullet("Uses standardized elevation layers (Base, Card, Inset, Overlay/Drawer, Modal) to communicate visual priority without visual noise.", 1)

    # --- SECTION: COLOR PALETTE ---
    add_h1("Universal Color Palette & Theming System")
    add_h2("Primary Brand & Accent Colors")
    
    t1 = doc.add_table(rows=1, cols=3)
    t1_headers = ["Color Role", "Hex Code", "Purpose & Usage across Modules"]
    t1_rows = [
        ["APC Blue (Primary Brand)", "#002855", "Primary brand surfaces, sidebar base, modal headers, major titles"],
        ["APC Gold (Signature Accent)", "#E5A823", "Active states, selection borders, key CTAs, focus indicators, highlight glows"],
        ["APC Deep Navy", "#001733", "Deep contrast backgrounds, dark mode sidebar base, selected items"],
        ["Cyber Cyan (Feeder Accent)", "#38BDF8", "Feeder prerequisites, incoming connections, informational badges"],
        ["Radiant Emerald (Unlock Accent)", "#4ADE80", "Outgoing unlocks, dependent pathways, success statuses, active sessions"],
        ["Amber Warning", "#F59E0B", "Alerts, pending review states, foundational engineering group markers"],
        ["Rose Critical", "#E11D48", "Terminations, destructive actions, high-clearance administration tags"]
    ]
    style_table(t1, [2.2, 1.1, 3.7], t1_headers, t1_rows)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    add_h2("Institutional Light Mode Palette")
    t2 = doc.add_table(rows=1, cols=3)
    t2_headers = ["Surface / Element", "Hex Code", "Visual Character & Contrast Application"]
    t2_rows = [
        ["Canvas Background", "#F8FAFC", "Soft slate-tinted white canvas reducing eye strain during extended authoring"],
        ["Primary Container Surface", "#FFFFFF", "Crisp white cards, white sheet workbenches, white modals"],
        ["Secondary Container Surface", "#F1F5F9", "Inset panels, table headers, filter bars, inactive badges"],
        ["Subtle Surface Accent", "#E2E8F0", "Disabled controls, light dividers, placeholder card slots"],
        ["Hairline Borders", "#CBD5E1", "1px clean boundaries defining cards, inputs, and spreadsheet cells"],
        ["High-Contrast Primary Text", "#0F172A", "Headings, course titles, table labels, active entries"],
        ["Secondary Body Text", "#475569", "Descriptive subtitles, metadata values, form helper text"],
        ["Muted / Placeholder Text", "#64748B", "Input placeholders, unit counts, empty slot indicators"]
    ]
    style_table(t2, [2.2, 1.1, 3.7], t2_headers, t2_rows)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    add_h2("Obsidian Gold Dark Mode Palette (Redesigned High-Legibility)")
    t3 = doc.add_table(rows=1, cols=3)
    t3_headers = ["Surface / Element", "Hex Code", "Visual Character & Contrast Application"]
    t3_rows = [
        ["Dark Canvas Background", "#080C14", "Deep obsidian canvas with subtle slate grid points (#243247)"],
        ["Dark Primary Surface", "#111722", "Elevated dark slate-blue cards, modals, and workbench tables"],
        ["Dark Inset Panel Surface", "#0E141F", "Inset filter strips, table header rows, input backgrounds"],
        ["Dark Structural Borders", "#222F42", "Crisp 1px dark slate borders framing modules and cards"],
        ["Dark Elevated Surface", "#1A2234", "Hovered cards, selected rows, active dropdown options"],
        ["High-Contrast Primary Text", "#F8FAFC", "Pure crisp white for headings, selected cards, and active labels"],
        ["Secondary Body Text", "#CBD5E1", "Soft silver-white for titles, descriptors, and table values"],
        ["Muted / Auxiliary Text", "#94A3B8", "Metadata labels, requisite counters, timestamp stamps"]
    ]
    style_table(t3, [2.2, 1.1, 3.7], t3_headers, t3_rows)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    add_h2("Universal Category & Group Semantic Palette")
    t4 = doc.add_table(rows=1, cols=6)
    t4_headers = ["Category Type", "Light Fill", "Light Text", "Dark Fill", "Dark Text", "Border"]
    t4_rows = [
        ["Core Courses / Modules", "#EEF2FF", "#3730A3", "#1E293B", "#A5B4FC", "#4F46E5"],
        ["Basic Engineering", "#FEF3C7", "#92400E", "#291805", "#FDE047", "#F59E0B"],
        ["General Education", "#E0F2FE", "#075985", "#082F49", "#7DD3FC", "#0284C7"],
        ["Allied / Interdisciplinary", "#F3E8FF", "#6B21A8", "#2E1065", "#D8B4FE", "#9333EA"],
        ["Elective / Track", "#FFE4E6", "#9F1239", "#4C0519", "#FDA4AF", "#E11D48"],
        ["Institutional", "#ECFDF5", "#065F46", "#064E3B", "#6EE7B7", "#10B981"]
    ]
    style_table(t4, [1.8, 0.9, 0.9, 0.9, 0.9, 0.9], t4_headers, t4_rows)

    # --- SECTION: TYPOGRAPHY ---
    add_h1("Typographic Standards: Universal Segoe UI")
    doc.add_paragraph("The APC Academic Management System exclusively enforces Segoe UI across all interfaces. No secondary, serif, or monospace fonts are utilized. Tabular figures and uppercase tracking within Segoe UI fulfill all data display and code identification needs.").paragraph_format.space_after = Pt(6)

    add_h2("Typographic Scale & Hierarchical Specifications")
    t5 = doc.add_table(rows=1, cols=7)
    t5_headers = ["Text Level", "Font Family", "Size", "Weight", "Tracking", "Line Height", "Application"]
    t5_rows = [
        ["Viewport Page Title", "Segoe UI", "20px - 22px", "900 (Black)", "-0.025em", "1.2", "Module header, workbench view title"],
        ["Section / Sub-Header", "Segoe UI", "16px - 18px", "800 (Extrabold)", "-0.015em", "1.25", "Card group headers, modal titles"],
        ["Module Card Title", "Segoe UI", "14px - 15px", "700 (Bold)", "Normal", "1.3", "Program cards, school cards, subsystem cards"],
        ["Course / Entity Code", "Segoe UI", "12px - 13px", "900 (Black)", "+0.025em", "1.0", "Course codes (CALCONE, ELECIRK), IDs"],
        ["Standard Body Text", "Segoe UI", "12px - 13px", "400 (Regular)", "Normal", "1.4", "Explanatory paragraphs, descriptions"],
        ["Table Data Cells", "Segoe UI", "11.5px - 12px", "500 (Medium)", "Normal", "1.3", "Spreadsheet cells, syllabus entries"],
        ["Metadata & Badges", "Segoe UI", "10px - 11px", "700 (Bold)", "+0.05em", "1.0", "Unit badges (3.0u), requisite tags, dates"],
        ["Micro Labels / Tags", "Segoe UI", "9px - 10px", "800 (Extrabold)", "+0.08em", "1.0", "Tier tags (Tier 1-4), category pills, chips"]
    ]
    style_table(t5, [1.4, 0.8, 0.8, 0.9, 0.7, 0.7, 1.7], t5_headers, t5_rows)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    add_h2("Typographic Formatting Rules")
    add_bullet("Course Codes and Identifiers: Displayed in uppercase Segoe UI Black with tight leading, ensuring immediate recognition.", 1)
    add_bullet("Numerical Data & Statistics: Displayed using tabular number alignment in Segoe UI Bold to guarantee vertical column alignment across data tables and spreadsheets.", 1)
    add_bullet("Text Truncation: Single-line truncation with ellipsis is required for course titles in visualizer nodes; multi-line clamps (maximum 2 lines) are permitted only in expanded catalog cards.", 1)

    # --- SECTION: STRUCTURAL LAYOUT ---
    add_h1("Structural Layout Architecture: Zero Top-Bar & Sidebar-First")
    add_h2("Top-Bar-Free Full-Headroom Workspace")
    add_bullet("The application operates without a horizontal top navigation bar. Viewports begin immediately at vertical coordinate zero (y = 0), maximizing visible vertical canvas area.", 1)
    add_bullet("All global identity, institutional branding, system status, breadcrumb-level navigation, and user clearance controls are unified within the Left Navigation Sidebar.", 1)

    add_h2("Left Navigation Sidebar (320px Fixed Width)")
    add_bullet("Fixed Footprint: Fixed width of 320px (w-80), styled in deep navy (#001733 in light mode, #080C14 in dark mode) with a subtle vertical divider.", 1)
    add_bullet("Header Block: Asia Pacific College institutional crest, title, and 'Academic Management System' subtitle.", 1)
    add_bullet("Multi-Tier Navigation Tree:", 1)
    add_bullet("Expandable academic units (Schools, Departments, Programs).", 2)
    add_bullet("Contextual module nodes (Curriculum Flowchart, Master Spreadsheet, Syllabus Management, Course Management, Governance & Audit).", 2)
    add_bullet("Cohort / Academic Year filters with visual indicator dots.", 2)
    add_bullet("Footer User Clearance & Theme Dock:", 1)
    add_bullet("User Profile Badge: Displays authenticated user initials avatar, full name, institutional email, and active clearance tier.", 2)
    add_bullet("Quick Display Theme Switcher: Compact 32px square button toggling between Institutional Light and Obsidian Gold Dark Mode with dynamic icon update.", 2)
    add_bullet("System Settings Button: Gear icon button launching the System Settings & Authority Clearance modal.", 2)

    add_h2("Workspace Main Canvas")
    add_bullet("Adaptive Layout: Automatically fills all available horizontal and vertical space to the right of the sidebar.", 1)
    add_bullet("In-Page Banner Header:", 1)
    add_bullet("Top metadata chip (e.g., Module Type, Active Total Counts, Unit Sums).", 2)
    add_bullet("Primary View Title with dual-tone emphasis (e.g., 'Curriculum Prerequisite Flowchart Table').", 2)
    add_bullet("Subtitle summarizing view purpose and interaction instructions.", 2)
    add_bullet("Action Control Bar: 'Back to Hub' return button, export triggers, and view-mode switchers.", 2)

    # --- SECTION: UI COMPONENTS ---
    add_h1("Universal UI Component Standards")
    add_h2("Display Theme Toggle Controls")
    add_bullet("Sidebar Quick Toggle:", 1)
    add_bullet("Placement: Permanent sidebar footer alongside the user profile and settings gear.", 2)
    add_bullet("Dimensions: 32px by 32px square button with 1px gold border accent.", 2)
    add_bullet("Light Mode Appearance: White/slate surface with Moon icon (indicates dark mode is available).", 2)
    add_bullet("Dark Mode Appearance: Obsidian navy surface with Sun icon (indicates light mode is available).", 2)
    add_bullet("Settings Modal Theme Switcher:", 1)
    add_bullet("Placement: Dedicated preference card inside the System Settings & Authority Clearance modal.", 2)
    add_bullet("Structure: 2-column flex card with mode icon, explanatory subtitle, and clear toggle button.", 2)
    add_bullet("Button Styling: High-contrast rectangular button with 2px APC Gold border (#E5A823), displaying mode icon and current target label.", 2)

    add_h2("Interactive Visualizer Nodes (Course Cards & Flowchart Nodes)")
    add_bullet("Node Dimensions: Fixed 196px width by 86px height, 2px border radius, left category stripe (6px width).", 1)
    add_bullet("Connection Ports: Left Port (8px square) for inflow prerequisites; Right Port (8px square) for outflow unlocks.", 1)
    add_bullet("Card Internal Typography: Top Row (Course Code 12px Black + Units Badge 10.5px Bold); Middle Row (Course Title 11px Semibold); Bottom Row (Category dot/name + Requisite count).", 1)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    add_h2("Interactive State Styles (Dual-Theme Specifications)")
    t6 = doc.add_table(rows=1, cols=4)
    t6_headers = ["State", "Light Mode Appearance", "Dark Mode Appearance", "Interaction Meaning"]
    t6_rows = [
        ["Default Unselected", "White background (#FFFFFF), slate border (#CBD5E1), dark text", "Deep slate background (#111722), dark border (#222F42), silver text", "Resting card on canvas"],
        ["Hovered State", "Border shifts to #002855, subtle shadow lift", "Border shifts to #E5A823, ambient gold glow", "Pointer hover indication"],
        ["Active Selected", "3px solid #F59E0B outline, scale 1.04, z-index 30", "3px solid #E5A823 outline, midnight slate fill (#1D2738), scale 1.04, gold glow", "Currently inspected entity"],
        ["Feeder Highlight", "3px solid #2563eb, light blue fill (#EFF6FF), dark blue text", "3px solid #38BDF8, deep navy fill (#0B1F38), bright cyan text (#38BDF8), white title", "Incoming prerequisite feeder"],
        ["Dependent Highlight", "3px solid #16A34A, light green fill (#F0FDF4), dark green text", "3px solid #4ADE80, deep emerald fill (#092818), bright neon emerald text (#4ADE80), white title", "Outgoing unlocked course"]
    ]
    style_table(t6, [1.4, 2.0, 2.3, 1.3], t6_headers, t6_rows)

    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    add_h2("SVG Connector Arrows & Line Types")
    add_bullet("Prerequisite Inflow Arrow: Solid stroke, 2px thickness (#1E40AF in light mode; #38BDF8 with cyan glow in dark mode).", 1)
    add_bullet("Co-Requisite Concurrent Arrow: Dashed stroke (8 4 pattern), 2px thickness (#EA580C orange).", 1)
    add_bullet("Soft Requisite / Advisory Arrow: Dotted stroke (3 3 pattern), 2px thickness (#9333EA purple).", 1)
    add_bullet("Active Flow Feeder Animation: 3.5px thickness, animated dash offset, #2563eb (light) / #38BDF8 (dark).", 1)
    add_bullet("Active Flow Dependent Animation: 3.5px thickness, animated dash offset, #16A34A (light) / #4ADE80 (dark).", 1)

    add_h2("Data Grids & Master Spreadsheets")
    add_bullet("Layout & Structure: Dense, high-information-density table with sticky row numbering and sticky headers.", 1)
    add_bullet("Row Heights: 36px standard data rows; 42px grouped header rows.", 1)
    add_bullet("Cell Styling (Light Mode): Alternating white (#FFFFFF) and light slate (#F8FAFC) rows; 1px #E2E8F0 borders.", 1)
    add_bullet("Cell Styling (Dark Mode): Alternating dark slate (#111722) and deep inset (#0E141F) rows; 1px #1C2636 borders.", 1)
    add_bullet("Interactive Cell Editing: Active editable inputs fill 100% of cell bounds with a 2px APC Gold focus ring.", 1)

    add_h2("Modals, Drawers & Overlay Dialogs")
    add_bullet("Backdrop: Semi-transparent dark overlay (rgba(2, 6, 23, 0.75)) with backdrop blur (4px).", 1)
    add_bullet("Modal Window: 2px solid APC Blue (#002855) in light mode; 2px solid APC Gold (#E5A823) in dark mode; square corners (0px).", 1)
    add_bullet("Inspection Drawers (Flyout Panels): 420px to 480px fixed width sliding in from the right edge with ambient drop shadow.", 1)

    # --- SECTION: ROLE CLEARANCE ---
    add_h1("Multi-Tier Authority Clearance Conventions")
    doc.add_paragraph("The system incorporates a 4-Tier Role-Based Access Control model. Visual badges, access banners, and command triggers dynamically adapt based on the active clearance tier.").paragraph_format.space_after = Pt(6)

    add_h2("Clearance Tiers & Visual Identifiers")
    t7 = doc.add_table(rows=1, cols=4)
    t7_headers = ["Clearance Level", "Role Title", "Visual Badge Style", "Operational Scope across Modules"]
    t7_rows = [
        ["Tier 4 (Highest)", "System Administrator", "Rose Crimson (#E11D48) Badge, 'Tier 4'", "Global governance, school creation, schema locks, audit oversight"],
        ["Tier 3", "Executive Director (Dean)", "Emerald Jade (#10B981) Badge, 'Tier 3'", "School-wide approval, program activation, faculty assignments"],
        ["Tier 2", "Program Director", "Sapphire Blue (#0284C7) Badge, 'Tier 2'", "Curriculum authoring, flowchart sequencing, syllabus validation"],
        ["Tier 1", "Faculty Member", "Purple Amethyst (#9333EA) Badge, 'Tier 1'", "Scoped course syllabus authoring, OBE assessment mappings"]
    ]
    style_table(t7, [1.4, 1.8, 1.8, 2.0], t7_headers, t7_rows)

    # --- SECTION: VISUAL GALLERY WITH SCREENSHOTS ---
    add_h1("Visual Interface Gallery & Screen References")
    doc.add_paragraph("The following high-fidelity screens illustrate the design standards implemented across the APC Academic Management System suite:").paragraph_format.space_after = Pt(8)

    screenshots_dir = os.path.join(r"c:\Users\Dean Alejandrino\Documents\antigravity\lively-turing", "screenshots", "updated_live_screenshots")
    
    gallery_items = [
        ("01_Login_Portal.png", "Figure: Microsoft Entra ID & APC Single Sign-On Portal (Full Headroom, Zero Top Bar)"),
        ("02_Institutional_Admin_Hub.png", "Figure: Tier 4 Institutional Admin Hub with Academic School Cards & Metric Indicators"),
        ("03_School_Of_Engineering_Overview.png", "Figure: Tier 3 School of Engineering Overview with Degree Program Gateways"),
        ("04_Program_Director_Workbench.png", "Figure: Tier 2 Program Director Workbench with the Three Core Academic Subsystems"),
        ("05_Curriculum_Flowchart_Table.png", "Figure: Interactive Flowchart Matrix Table (Institutional Light Mode with Active & Feeder Highlights)"),
        ("06_Master_Spreadsheet_Workbench.png", "Figure: Integrated Master Spreadsheet Workbench (Dense Data Entry Grid with Sticky Headers)"),
        ("07_Syllabus_Management_Portal.png", "Figure: Syllabus Management System (SMS) Portal with Status Tags & Search Filters"),
        ("08_Dark_Mode_Curriculum_Flowchart.png", "Figure: Interactive Flowchart Matrix Table (Obsidian Gold Dark Mode with Cyber Neon Highlights)"),
        ("09_Settings_Modal_Dark_Mode.png", "Figure: System Settings & Authority Clearance Modal in Dark Mode (Display Theme Switcher Active)"),
        ("10_Settings_Modal_Light_Mode.png", "Figure: System Settings & Authority Clearance Modal in Light Mode (Display Theme Switcher Active)")
    ]

    for fname, caption in gallery_items:
        fpath = os.path.join(screenshots_dir, fname)
        if os.path.exists(fpath):
            doc.add_page_break()
            p_cap = doc.add_paragraph()
            p_cap.paragraph_format.space_before = Pt(6)
            p_cap.paragraph_format.space_after = Pt(4)
            r_cap = p_cap.add_run(caption)
            r_cap.font.name = 'Segoe UI'
            r_cap.font.size = Pt(10.5)
            r_cap.font.bold = True
            r_cap.font.color.rgb = c_navy

            p_img = doc.add_paragraph()
            p_img.paragraph_format.space_after = Pt(12)
            p_img.alignment = WD_ALIGN_PARAGRAPH.CENTER
            run_img = p_img.add_run()
            run_img.add_picture(fpath, width=Inches(6.8))

    output_path = os.path.join(r"c:\Users\Dean Alejandrino\Documents\antigravity\lively-turing", "APC_Academic_Management_System_Design_Standards.docx")
    doc.save(output_path)
    print(f"Successfully generated: {output_path}")

if __name__ == "__main__":
    create_design_standards_doc()
