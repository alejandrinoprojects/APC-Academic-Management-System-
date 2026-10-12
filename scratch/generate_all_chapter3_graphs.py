import os, io, time
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyBboxPatch, PathPatch, Polygon
from matplotlib.path import Path
import numpy as np

def save_figure(fig, out_path, dpi=300):
    buf = io.BytesIO()
    fig.savefig(buf, format='png', dpi=dpi, bbox_inches='tight', pad_inches=0.1)
    plt.close(fig)
    for attempt in range(5):
        try:
            with open(out_path, 'wb') as f:
                f.write(buf.getvalue())
            return
        except Exception:
            time.sleep(0.3)


OUTPUT_DIR = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\generated_graphs"
os.makedirs(OUTPUT_DIR, exist_ok=True)

PALETTE = {
    'terminal': {'bg': '#DCFCE7', 'border': '#16A34A', 'text': '#14532D'},
    'process': {'bg': '#EFF6FF', 'border': '#3B82F6', 'text': '#1E3A8A', 'sub': '#2563EB'},
    'decision': {'bg': '#FFE4E6', 'border': '#E11D48', 'text': '#881337'},
    'data': {'bg': '#F3E8FF', 'border': '#9333EA', 'text': '#581C87'},
    'header': {'bg': '#1E293B', 'border': '#0F172A', 'text': '#FFFFFF', 'sub': '#94A3B8'},
    'accent': {'bg': '#0284C7', 'border': '#0369A1', 'text': '#FFFFFF', 'sub': '#E0F2FE'},
    'card': {'bg': '#FFFFFF', 'border': '#94A3B8', 'text': '#0F172A', 'sub': '#475569'},
    'leaf': {'bg': '#F8FAFC', 'border': '#CBD5E1', 'text': '#334155', 'sub': '#64748B'},
    'sub_other': {'bg': '#475569', 'border': '#334155', 'text': '#FFFFFF', 'sub': '#F1F5F9'},
    'line': '#475569'
}

def draw_pill(ax, x, y, w, h, text, style='terminal', fontsize=8.5):
    st = PALETTE[style]
    shadow = FancyBboxPatch((x + 1.5, y - h - 1.5), w, h, boxstyle=f"round,pad=2,rounding_size={h/2}",
                            facecolor='#E2E8F0', edgecolor='none', zorder=2)
    ax.add_patch(shadow)
    box = FancyBboxPatch((x, y - h), w, h, boxstyle=f"round,pad=2,rounding_size={h/2}",
                         facecolor=st['bg'], edgecolor=st['border'], linewidth=1.5, zorder=3)
    ax.add_patch(box)
    ax.text(x + w / 2, y - h / 2, text, ha='center', va='center',
            fontsize=fontsize, fontweight='bold', color=st['text'], zorder=4, family='sans-serif')

def draw_box(ax, x, y, w, h, title, subtitle=None, style='process', fontsize_title=8.5, fontsize_sub=7.0, radius=4):
    st = PALETTE[style]
    shadow = FancyBboxPatch((x + 1.5, y - h - 1.5), w, h, boxstyle=f"round,pad=2,rounding_size={radius}",
                            facecolor='#E2E8F0', edgecolor='none', zorder=2)
    ax.add_patch(shadow)
    box = FancyBboxPatch((x, y - h), w, h, boxstyle=f"round,pad=2,rounding_size={radius}",
                         facecolor=st['bg'], edgecolor=st['border'], linewidth=1.5, zorder=3)
    ax.add_patch(box)
    if subtitle:
        ax.text(x + w / 2, y - h * 0.38, title, ha='center', va='center',
                fontsize=fontsize_title, fontweight='bold', color=st['text'], zorder=4, family='sans-serif')
        ax.text(x + w / 2, y - h * 0.72, subtitle, ha='center', va='center',
                fontsize=fontsize_sub, color=st.get('sub', '#475569'), zorder=4, family='sans-serif')
    else:
        ax.text(x + w / 2, y - h / 2, title, ha='center', va='center',
                fontsize=fontsize_title, fontweight='bold', color=st['text'], zorder=4, family='sans-serif')

def draw_diamond(ax, cx, cy, w, h, text, style='decision', fontsize=8.0):
    st = PALETTE[style]
    pts = np.array([
        [cx, cy + h / 2],
        [cx + w / 2, cy],
        [cx, cy - h / 2],
        [cx - w / 2, cy]
    ])
    shadow_pts = pts + np.array([1.5, -1.5])
    ax.add_patch(Polygon(shadow_pts, facecolor='#E2E8F0', edgecolor='none', zorder=2))
    ax.add_patch(Polygon(pts, facecolor=st['bg'], edgecolor=st['border'], linewidth=1.5, zorder=3))
    ax.text(cx, cy, text, ha='center', va='center',
            fontsize=fontsize, fontweight='bold', color=st['text'], zorder=4, family='sans-serif')

def draw_parallelogram(ax, x, y, w, h, text, sub=None, style='data', fontsize=8.0, slant=12, fontsize_title=None, fontsize_sub=None):
    if fontsize_title is not None:
        fontsize = fontsize_title
    st = PALETTE[style]
    pts = np.array([
        [x + slant, y],
        [x + w, y],
        [x + w - slant, y - h],
        [x, y - h]
    ])
    shadow_pts = pts + np.array([1.5, -1.5])
    ax.add_patch(Polygon(shadow_pts, facecolor='#E2E8F0', edgecolor='none', zorder=2))
    ax.add_patch(Polygon(pts, facecolor=st['bg'], edgecolor=st['border'], linewidth=1.5, zorder=3))
    if sub:
        ax.text(x + w / 2, y - h * 0.38, text, ha='center', va='center',
                fontsize=fontsize, fontweight='bold', color=st['text'], zorder=4, family='sans-serif')
        ax.text(x + w / 2, y - h * 0.72, sub, ha='center', va='center',
                fontsize=fontsize - 1.2, color=st['text'], zorder=4, family='sans-serif')
    else:
        ax.text(x + w / 2, y - h / 2, text, ha='center', va='center',
                fontsize=fontsize, fontweight='bold', color=st['text'], zorder=4, family='sans-serif')

def draw_arrow(ax, p1, p2, color=PALETTE['line'], lw=1.5, dashed=False, label=None, label_side='top'):
    x1, y1 = p1
    x2, y2 = p2
    linestyle = '--' if dashed else '-'
    ax.plot([x1, x2], [y1, y2], color=color, lw=lw, linestyle=linestyle, zorder=2)
    dx = x2 - x1
    dy = y2 - y1
    dist = np.hypot(dx, dy)
    if dist > 0:
        ux, uy = dx / dist, dy / dist
        ax.annotate('', xy=(x2, y2), xytext=(x2 - ux * 4, y2 - uy * 4),
                    arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=9), zorder=2)
    if label:
        mx = (x1 + x2) / 2
        my = (y1 + y2) / 2
        offset_y = 6 if label_side == 'top' else -6
        ax.text(mx, my + offset_y, label, ha='center', va='center', fontsize=7.5, fontweight='bold',
                color=color, bbox=dict(boxstyle='round,pad=0.2', facecolor='#FFFFFF', edgecolor='none'), zorder=5)

def draw_ortho(ax, p1, p2, mid=None, orientation='v', color=PALETTE['line'], lw=1.5, dashed=False, label=None, label_side='top', arrow=True):
    x1, y1 = p1
    x2, y2 = p2
    linestyle = '--' if dashed else '-'
    if orientation == 'v':
        m = (y1 + y2) / 2 if mid is None else mid
        verts = [(x1, y1), (x1, m), (x2, m), (x2, y2)]
    else:
        m = (x1 + x2) / 2 if mid is None else mid
        verts = [(x1, y1), (m, y1), (m, y2), (x2, y2)]
    codes = [Path.MOVETO, Path.LINETO, Path.LINETO, Path.LINETO]
    patch = PathPatch(Path(verts, codes), facecolor='none', edgecolor=color, lw=lw, linestyle=linestyle, zorder=2)
    ax.add_patch(patch)
    if arrow:
        px, py = verts[-2]
        dx = x2 - px
        dy = y2 - py
        dist = np.hypot(dx, dy)
        if dist > 0:
            ux, uy = dx / dist, dy / dist
            ax.annotate('', xy=(x2, y2), xytext=(x2 - ux * 4, y2 - uy * 4),
                        arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=9), zorder=2)
    if label:
        if orientation == 'v':
            lx = (x1 + x2) / 2
            ly = m + (5 if label_side == 'top' else -5)
        else:
            lx = m + (5 if label_side == 'right' else -5)
            ly = (y1 + y2) / 2
        ax.text(lx, ly, label, ha='center', va='center', fontsize=7.5, fontweight='bold',
                color=color, bbox=dict(boxstyle='round,pad=0.2', facecolor='#FFFFFF', edgecolor='none'), zorder=5)

# ==============================================================================
# FIGURE 3.1: INFORMATION ARCHITECTURE HIERARCHY (Clean & Concise)
# ==============================================================================
def generate_fig3_1():
    fig, ax = plt.subplots(figsize=(16, 11), dpi=300)
    ax.set_xlim(0, 1600)
    ax.set_ylim(0, 1100)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(800, 1065, "FIGURE 3.1: INFORMATION ARCHITECTURE HIERARCHY", ha='center', va='center',
            fontsize=15, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(800, 1040, "Curriculum Management System - Architectural Structure", ha='center', va='center',
            fontsize=10, color='#64748B', family='sans-serif')

    # Root
    draw_box(ax, 650, 1000, 300, 42, "Centralized System Root", "Academic Governance & Curriculum Portal", 'header', fontsize_title=10, fontsize_sub=8)
    
    # Schools
    draw_box(ax, 650, 920, 300, 42, "Academic Schools", "School of Engineering (SoE)", 'accent', fontsize_title=10, fontsize_sub=8)
    draw_arrow(ax, (800, 1000 - 42), (800, 920))

    # Programs
    draw_box(ax, 650, 840, 300, 42, "Degree Programs", "Computer Engineering (BSCpE)", 'process', fontsize_title=10, fontsize_sub=8)
    draw_arrow(ax, (800, 920 - 42), (800, 840))

    # 3 Subsystems
    y_sub = 750
    h_sub = 42
    draw_box(ax, 80, y_sub, 960, h_sub, "1. Curriculum Management Subsystem", "Curriculum Architecture, Cohorts, OBE Alignment & Documents", 'accent', fontsize_title=10, fontsize_sub=8)
    draw_box(ax, 1080, y_sub, 220, h_sub, "2. Syllabus Management", "Course Syllabi & Rubrics", 'sub_other', fontsize_title=9, fontsize_sub=7.5)
    draw_box(ax, 1340, y_sub, 220, h_sub, "3. Course Management", "Master Catalog & Course Inventory", 'sub_other', fontsize_title=9, fontsize_sub=7.5)

    p_bscpe_bot = (800, 840 - 42)
    draw_ortho(ax, p_bscpe_bot, (560, y_sub))
    draw_ortho(ax, p_bscpe_bot, (1190, y_sub))
    draw_ortho(ax, p_bscpe_bot, (1450, y_sub))

    # Under Syllabus & Course (leaf boxes)
    draw_box(ax, 1080, 660, 220, 36, "Syllabus Repository", "OBE Grading & ILO Matrices", 'leaf', fontsize_title=8, fontsize_sub=7)
    draw_arrow(ax, (1190, y_sub - h_sub), (1190, 660))

    draw_box(ax, 1340, 660, 220, 36, "Course Directory", "Course Repertoire & Requisites", 'leaf', fontsize_title=8, fontsize_sub=7)
    draw_arrow(ax, (1450, y_sub - h_sub), (1450, 660))

    # Under Curriculum Management: 4 Sections
    y_sec = 650
    h_sec = 40
    draw_box(ax, 80, y_sec, 210, h_sec, "Management Home", "KPI Metrics & Summary Status", 'card', fontsize_title=9, fontsize_sub=7.5)
    draw_box(ax, 320, y_sec, 210, h_sec, "Versioning History", "Audit Timeline & Rollback", 'card', fontsize_title=9, fontsize_sub=7.5)
    draw_box(ax, 560, y_sec, 270, h_sec, "Curriculum Cohorts", "By Academic Year", 'card', fontsize_title=9.5, fontsize_sub=7.5)
    draw_box(ax, 860, y_sec, 180, h_sec, "Tools & Reports", "Mapping, Delegations & Audit", 'card', fontsize_title=9, fontsize_sub=7.5)

    p_curr_bot = (560, y_sub - h_sub)
    draw_ortho(ax, p_curr_bot, (185, y_sec))
    draw_ortho(ax, p_curr_bot, (425, y_sec))
    draw_ortho(ax, p_curr_bot, (695, y_sec))
    draw_ortho(ax, p_curr_bot, (950, y_sec))

    # Cohorts children: CPE 2027, CPE 2026, CPE Archives
    y_coh = 560
    h_coh = 36
    draw_box(ax, 560, y_coh, 80, h_coh, "CPE 2027", "AY 2027-2028", 'leaf', fontsize_title=8, fontsize_sub=6.5)
    draw_box(ax, 655, y_coh, 80, h_coh, "CPE 2026", "AY 2026-2027", 'leaf', fontsize_title=8, fontsize_sub=6.5)
    draw_box(ax, 750, y_coh, 80, h_coh, "Archives", "Previous AYs", 'leaf', fontsize_title=8, fontsize_sub=6.5)

    p_coh_bot = (695, y_sec - h_sec)
    draw_ortho(ax, p_coh_bot, (600, y_coh))
    draw_ortho(ax, p_coh_bot, (695, y_coh))
    draw_ortho(ax, p_coh_bot, (790, y_coh))

    # Cohort Standard Modules Header
    y_mod_hub = 480
    h_mod_hub = 38
    draw_box(ax, 280, y_mod_hub, 560, h_mod_hub, "Curriculum Workspace Modules (Per Selected Cohort)", "Operational Interfaces for Active Curriculum", 'accent', fontsize_title=9.5, fontsize_sub=7.5)
    
    draw_ortho(ax, (600, y_coh - h_coh), (420, y_mod_hub), arrow=False)
    draw_ortho(ax, (695, y_coh - h_coh), (560, y_mod_hub))
    draw_ortho(ax, (790, y_coh - h_coh), (700, y_mod_hub), arrow=False)

    # 5 Operational Modules
    y_mod = 380
    h_mod = 42
    w_m = 170
    xs_m = [80, 275, 470, 665, 860]
    mods = [
        ("Dashboard", "Overview & Credits"),
        ("Flowchart", "Prerequisites & Terms"),
        ("Spreadsheet", "Course Grid & Ingestion"),
        ("OBE Mapping", "Outcomes & Objectives"),
        ("Official Documents", "Regulatory Sheets 1-7")
    ]
    p_hub_bot = (560, y_mod_hub - h_mod_hub)
    for i, (title, sub) in enumerate(mods):
        draw_box(ax, xs_m[i], y_mod, w_m, h_mod, title, sub, 'process', fontsize_title=8.5, fontsize_sub=7.0)
        draw_ortho(ax, p_hub_bot, (xs_m[i] + w_m / 2, y_mod))

    # Concise feature nodes below each module
    sub_features = [
        [("Summary Metrics", "Units & Course Counts"), ("Integrity Checks", "Prerequisite Validations")],
        [("Interactive Graph", "Visual Course Node Layout"), ("Course Inspector", "Course Details & Syllabi")],
        [("Tabular Data Grid", "Hours, Units & Requisites"), ("Batch Excel I/O", "Ingestion & Export Modals")],
        [("Course-to-SO Matrix", "Intro, Enable, Demonstrate"), ("Program Alignments", "SO to PEO, PEO to GA")],
        [("Standardized Sheets", "Summary, Prospectus & POS"), ("PDF Export", "Print-Ready Registrations")]
    ]
    for i in range(5):
        xm = xs_m[i] + w_m / 2
        prev_y = y_mod - h_mod
        for j, (ft, fs) in enumerate(sub_features[i]):
            y_box = 300 - j * 45
            draw_box(ax, xs_m[i], y_box, w_m, 32, ft, fs, 'leaf', fontsize_title=7.5, fontsize_sub=6.5)
            draw_arrow(ax, (xm, prev_y), (xm, y_box))
            prev_y = y_box - 32

    # Under Tools & Reports
    tools_y = 560
    draw_box(ax, 860, tools_y, 180, 32, "Global Curriculum Map", "Program-wide Alignment", 'leaf', fontsize_title=7.5, fontsize_sub=6.5)
    draw_box(ax, 860, tools_y - 42, 180, 32, "Task Delegations", "Temporary Faculty Access", 'leaf', fontsize_title=7.5, fontsize_sub=6.5)
    draw_box(ax, 860, tools_y - 84, 180, 32, "System Audit Trail", "Historical Action Logging", 'leaf', fontsize_title=7.5, fontsize_sub=6.5)
    draw_arrow(ax, (950, y_sec - h_sec), (950, tools_y))
    draw_arrow(ax, (950, tools_y - 32), (950, tools_y - 42))
    draw_arrow(ax, (950, tools_y - 74), (950, tools_y - 84))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.1_Information_Architecture_Flowchart.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.1")


# ==============================================================================
# FIGURE 3.2: NAVIGATION STRUCTURE FLOWCHART (Academic, Clean & Concise)
# ==============================================================================
def generate_fig3_2():
    fig, ax = plt.subplots(figsize=(16, 12), dpi=300)
    ax.set_xlim(0, 1600)
    ax.set_ylim(0, 1200)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(800, 1165, "FIGURE 3.2: NAVIGATION STRUCTURE FLOWCHART", ha='center', va='center',
            fontsize=15, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(800, 1140, "Curriculum Management System - System Navigation Hierarchy & Return Paths", ha='center', va='center',
            fontsize=10, color='#64748B', family='sans-serif')

    # Main Navigation Spine (Down center)
    w_main = 280
    h_main = 44
    x_main = 660

    # Entry: Login
    draw_pill(ax, x_main + 50, 1090, 180, 36, "User Login / Authentication", 'terminal', fontsize=8.5)
    draw_box(ax, x_main, 1010, w_main, h_main, "Institutional Dashboard", "School Directory & Governance Overview", 'header', fontsize_title=9.5, fontsize_sub=7.5)
    draw_arrow(ax, (800, 1090 - 36), (800, 1010))

    # School Overview
    draw_box(ax, x_main, 910, w_main, h_main, "School Overview", "School of Engineering (SoE) & Programs", 'accent', fontsize_title=9.5, fontsize_sub=7.5)
    draw_arrow(ax, (800, 1010 - h_main), (800, 910))

    # Program Overview
    draw_box(ax, x_main, 810, w_main, h_main, "Program Overview", "Computer Engineering (BSCpE)", 'accent', fontsize_title=9.5, fontsize_sub=7.5)
    draw_arrow(ax, (800, 910 - h_main), (800, 810))

    # Curriculum Management Home
    draw_box(ax, x_main, 710, w_main, h_main, "Curriculum Management Home", "Curriculum Versions, Delegations & Logs", 'process', fontsize_title=9.5, fontsize_sub=7.5)
    draw_arrow(ax, (800, 810 - h_main), (800, 710))

    # Return Navigation / Breadcrumbs on Left Side (Dashed)
    # Upward arrows from lower levels to higher levels
    ax.text(560, 860, "Return Path / Breadcrumbs", ha='center', va='center', fontsize=7.5, fontweight='bold', color='#64748B')
    draw_ortho(ax, (660, 710 - h_main / 2), (660, 810 - h_main / 2), mid=580, orientation='h', color='#64748B', dashed=True, arrow=True)
    draw_ortho(ax, (660, 810 - h_main / 2), (660, 910 - h_main / 2), mid=580, orientation='h', color='#64748B', dashed=True, arrow=True)
    draw_ortho(ax, (660, 910 - h_main / 2), (660, 1010 - h_main / 2), mid=580, orientation='h', color='#64748B', dashed=True, arrow=True)

    # Lateral Left: Persistent Sidebar Tree Access
    ax.text(280, 860, "Direct Sidebar Navigation (Random-Access Tree)", ha='center', va='center',
            fontsize=8.5, fontweight='bold', color='#0284C7')
    draw_box(ax, 160, 830, 240, 36, "Switch Academic School", "Direct jump across institutional schools", 'leaf', fontsize_title=8, fontsize_sub=7)
    draw_box(ax, 160, 780, 240, 36, "Switch Degree Program", "Direct jump between degree programs", 'leaf', fontsize_title=8, fontsize_sub=7)
    draw_box(ax, 160, 730, 240, 36, "Select Cohort / Version", "Jump to CPE 2027, 2026, or Archives", 'leaf', fontsize_title=8, fontsize_sub=7)
    draw_ortho(ax, (660, 1010 - h_main / 2), (400, 830 - 18), mid=470, orientation='h', color='#0284C7', dashed=True)
    draw_ortho(ax, (660, 910 - h_main / 2), (400, 780 - 18), mid=470, orientation='h', color='#0284C7', dashed=True)
    draw_ortho(ax, (660, 810 - h_main / 2), (400, 730 - 18), mid=470, orientation='h', color='#0284C7', dashed=True)

    # Lateral Right: Administrative Navigation Modules
    ax.text(1280, 860, "Administrative Modules", ha='center', va='center',
            fontsize=8.5, fontweight='bold', color='#475569')
    draw_box(ax, 1160, 830, 240, 36, "Version Management", "Create new version or add revision", 'leaf', fontsize_title=8, fontsize_sub=7)
    draw_box(ax, 1160, 780, 240, 36, "Task Delegation Console", "Assign temporary editing privileges", 'leaf', fontsize_title=8, fontsize_sub=7)
    draw_box(ax, 1160, 730, 240, 36, "System Audit Log", "Review timestamps, users & actions", 'leaf', fontsize_title=8, fontsize_sub=7)
    draw_ortho(ax, (940, 710 - h_main / 2), (1160, 830 - 18), mid=1050, orientation='h', color='#475569')
    draw_ortho(ax, (940, 710 - h_main / 2), (1160, 780 - 18), mid=1050, orientation='h', color='#475569')
    draw_ortho(ax, (940, 710 - h_main / 2), (1160, 730 - 18), mid=1050, orientation='h', color='#475569')

    # Selected Curriculum Version Hub
    y_ver = 610
    draw_box(ax, x_main - 20, y_ver, 320, h_main, "Selected Curriculum Version", "Active Operational Workspace", 'accent', fontsize_title=10, fontsize_sub=8)
    draw_arrow(ax, (800, 710 - h_main), (800, y_ver))

    # 4 Primary Views (Inter-navigable)
    y_views = 480
    h_v = 46
    w_v = 220
    xs_v = [180, 480, 780, 1080]
    views = [
        ("Flowchart View", "Interactive Prerequisite Graph"),
        ("Spreadsheet View", "Course Grid & I/E/D Mapping"),
        ("OBE Mapping View", "GA, PEO & SO Alignment"),
        ("Official Documents View", "Regulatory Sheets & Print Preview")
    ]
    p_ver_bot = (800, y_ver - h_main)
    for i, (title, sub) in enumerate(views):
        draw_box(ax, xs_v[i], y_views, w_v, h_v, title, sub, 'process', fontsize_title=9, fontsize_sub=7.5)
        draw_ortho(ax, p_ver_bot, (xs_v[i] + w_v / 2, y_views))

    # Inter-view switching arrows between views
    for i in range(3):
        p_r = (xs_v[i] + w_v, y_views - h_v / 2)
        p_l = (xs_v[i+1], y_views - h_v / 2)
        draw_arrow(ax, p_r, p_l, color='#3B82F6', lw=1.2)
        draw_arrow(ax, p_l, p_r, color='#3B82F6', lw=1.2)
    ax.text(740, y_views + 12, "Direct Switching Across Views", ha='center', va='center',
            fontsize=7.5, fontweight='bold', color='#2563EB')

    # Modal actions / Sub-navigation under each view
    modal_actions = [
        [("Course Details Modal", "Edit course info & requisites"), ("Validation Engine", "Circular dependency checks")],
        [("Inline Cell Editor", "Direct update of course parameters"), ("Import / Export Modal", "Batch Excel data transfer")],
        [("Component Selector", "GA, PEO, SO & Course views"), ("Alignment Editor", "Link outcomes & objectives")],
        [("Document Viewer", "Review regulatory layouts"), ("Export to PDF", "Generate print-ready copy")]
    ]
    for i in range(4):
        xm = xs_v[i] + w_v / 2
        prev_y = y_views - h_v
        for j, (mt, ms) in enumerate(modal_actions[i]):
            y_m = 370 - j * 50
            draw_box(ax, xs_v[i], y_m, w_v, 36, mt, ms, 'leaf', fontsize_title=8, fontsize_sub=6.5)
            draw_arrow(ax, (xm, prev_y), (xm, y_m))
            prev_y = y_m - 36

    # Upward Return path from workspaces back to Curriculum Management Home
    draw_ortho(ax, (xs_v[0] - 10, y_views - h_v / 2), (x_main - 20, 710 - h_main / 2), mid=110, orientation='h', color='#64748B', dashed=True, arrow=True)
    ax.text(105, 595, "Return to Curriculum Home", ha='center', va='center', rotation=90,
            fontsize=7.5, fontweight='bold', color='#64748B')

    # Terminal End
    draw_pill(ax, 710, 200, 180, 36, "End Session / Logout", 'terminal', fontsize=8.5)
    for i in range(4):
        draw_ortho(ax, (xs_v[i] + w_v / 2, 284), (800, 200), color='#64748B')

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.2_Navigation_Structure_Flowchart.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.2")


# ==============================================================================
# FIGURE 3.3: USER LOGIN FLOW
# ==============================================================================
def generate_fig3_3():
    fig, ax = plt.subplots(figsize=(8, 10), dpi=300)
    ax.set_xlim(0, 800)
    ax.set_ylim(0, 1000)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(400, 965, "FIGURE 3.3: USER LOGIN FLOW", ha='center', va='center',
            fontsize=13, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(400, 940, "Curriculum Management System - Authentication Flow", ha='center', va='center',
            fontsize=8.5, color='#64748B', family='sans-serif')

    w = 260
    h = 42
    x = 400 - w / 2

    draw_pill(ax, 320, 890, 160, 36, "Start", 'terminal')
    draw_box(ax, x, 810, w, h, "Access Login Page", "Navigate to institutional system URL", 'process')
    draw_arrow(ax, (400, 890 - 36), (400, 810))

    draw_box(ax, x, 720, w, h, "Enter Credentials", "Enter institutional email and password", 'process')
    draw_arrow(ax, (400, 810 - h), (400, 720))

    draw_box(ax, x, 630, w, h, "Validate Credentials", "System authenticates against directory", 'process')
    draw_arrow(ax, (400, 720 - h), (400, 630))

    draw_diamond(ax, 400, 520, 180, 80, "Credentials\nValid?", 'decision')
    draw_arrow(ax, (400, 630 - h), (400, 560))

    # Valid: Yes -> Dashboard
    draw_box(ax, x, 400, w, h, "Access Dashboard", "Initialize role session and load modules", 'process')
    draw_arrow(ax, (400, 480), (400, 400), label="Yes", label_side='right')

    draw_pill(ax, 320, 300, 160, 36, "End", 'terminal')
    draw_arrow(ax, (400, 400 - h), (400, 300))

    # Invalid: No -> Error -> loop back
    draw_box(ax, 570, 520 + h/2, 190, h, "Display Error Message", "Invalid credentials notification", 'data', fontsize_title=8, fontsize_sub=6.5)
    draw_arrow(ax, (490, 520), (570, 520), label="No", label_side='top')
    draw_ortho(ax, (665, 520 + h/2), (400 + w/2, 720 - h/2), mid=665, orientation='h', color='#E11D48', dashed=True, arrow=True)
    ax.text(675, 620, "Retry Login", ha='left', va='center', fontsize=7.5, fontweight='bold', color='#E11D48')

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.3_User_Login_Flow.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.3")


# ==============================================================================
# FIGURE 3.4: SCHOOL AND PROGRAM MANAGEMENT FLOW
# ==============================================================================
def generate_fig3_4():
    fig, ax = plt.subplots(figsize=(10, 11), dpi=300)
    ax.set_xlim(0, 1000)
    ax.set_ylim(0, 1100)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(500, 1065, "FIGURE 3.4: SCHOOL AND PROGRAM MANAGEMENT FLOW", ha='center', va='center',
            fontsize=13, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(500, 1040, "Curriculum Management System - Academic Governance Management", ha='center', va='center',
            fontsize=8.5, color='#64748B', family='sans-serif')

    draw_pill(ax, 420, 990, 160, 34, "Start", 'terminal')
    draw_box(ax, 350, 920, 300, 40, "Dashboard (List of Schools)", "Institutional Governance View", 'header')
    draw_arrow(ax, (500, 990 - 34), (500, 920))

    # Two paths: Select existing school vs Add new school
    p_dash_bot = (500, 920 - 40)
    
    # Left: Select existing school
    draw_box(ax, 120, 830, 260, 38, "Select Existing School", "Choose School from Dashboard", 'process')
    draw_ortho(ax, p_dash_bot, (250, 830))

    draw_box(ax, 120, 750, 260, 38, "School Overview", "List of Degree Programs", 'process')
    draw_arrow(ax, (250, 830 - 38), (250, 750))

    # Decision: Add or edit program?
    draw_diamond(ax, 250, 650, 180, 65, "Add or Edit\nProgram?", 'decision')
    draw_arrow(ax, (250, 750 - 38), (250, 650 + 32.5))

    # Yes: Enter program info -> Save
    draw_box(ax, 80, 540, 220, 42, "Enter / Update Program Info", "Program Name & Program Director", 'process', fontsize_title=8, fontsize_sub=6.5)
    draw_arrow(ax, (200, 650), (190, 540), label="Yes", label_side='left')

    draw_box(ax, 80, 450, 220, 38, "Save Changes", "Update Program Records", 'process')
    draw_arrow(ax, (190, 540 - 42), (190, 450))

    # No: View programs
    draw_box(ax, 320, 540, 180, 42, "View Programs", "Browse Program List", 'leaf')
    draw_ortho(ax, (340, 650), (410, 540), label="No", label_side='right')

    # Both lead to Program Overview
    draw_box(ax, 160, 350, 260, 40, "Program Overview", "Curriculum Administration View", 'process')
    draw_arrow(ax, (190, 450 - 38), (290, 350))
    draw_ortho(ax, (410, 540 - 42), (290, 350))

    # Right: Add new school (Authorized user)
    draw_box(ax, 620, 830, 280, 38, "Add New School", "Elevated Administrator Action", 'process')
    draw_ortho(ax, p_dash_bot, (760, 830))

    draw_box(ax, 620, 750, 280, 42, "Enter School Information", "School Name, Executive Director & Programs", 'process', fontsize_title=8, fontsize_sub=6.5)
    draw_arrow(ax, (760, 830 - 38), (760, 750))

    draw_box(ax, 620, 660, 280, 38, "Save School", "Commit to Institutional Directory", 'process')
    draw_arrow(ax, (760, 750 - 42), (760, 660))

    draw_box(ax, 620, 580, 280, 38, "School Added to List", "New School Active in System", 'data')
    draw_arrow(ax, (760, 660 - 38), (760, 580))

    draw_box(ax, 620, 500, 280, 38, "School Overview", "Access New School Dashboard", 'process')
    draw_arrow(ax, (760, 580 - 38), (760, 500))

    # End
    draw_pill(ax, 420, 200, 160, 34, "End", 'terminal')
    draw_ortho(ax, (290, 350 - 40), (500, 200))
    draw_ortho(ax, (760, 500 - 38), (500, 200))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.4_School_and_Program_Management_Flow.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.4")


# ==============================================================================
# FIGURE 3.5: CURRICULUM MANAGEMENT FLOW
# ==============================================================================
def generate_fig3_5():
    fig, ax = plt.subplots(figsize=(10, 11), dpi=300)
    ax.set_xlim(0, 1000)
    ax.set_ylim(0, 1100)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(500, 1065, "FIGURE 3.5: CURRICULUM MANAGEMENT FLOW", ha='center', va='center',
            fontsize=13, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(500, 1040, "Curriculum Management System - Version Management Flow", ha='center', va='center',
            fontsize=8.5, color='#64748B', family='sans-serif')

    draw_pill(ax, 420, 990, 160, 34, "Start", 'terminal')
    draw_box(ax, 350, 920, 300, 38, "Program Overview", "BSCpE Program Administration", 'header')
    draw_arrow(ax, (500, 990 - 34), (500, 920))

    draw_box(ax, 350, 840, 300, 38, "Select Curriculum Management", "Navigate to Curriculum Subsystem", 'process')
    draw_arrow(ax, (500, 920 - 38), (500, 840))

    draw_box(ax, 350, 760, 300, 38, "Curriculum Management Home", "Versions, Delegations & Audit Hub", 'process')
    draw_arrow(ax, (500, 840 - 38), (500, 760))

    draw_box(ax, 350, 680, 300, 38, "Go to Curriculum Versions", "Open Versioning Workspace", 'process')
    draw_arrow(ax, (500, 760 - 38), (500, 680))

    # Decision: Select action
    draw_diamond(ax, 500, 580, 200, 70, "Select Action", 'decision')
    draw_arrow(ax, (500, 680 - 38), (500, 580 + 35))

    # 3 Branches: View existing version / Create new version / Add revision
    # Branch 1 (Left): View existing version
    draw_box(ax, 60, 480, 240, 38, "View Existing Version", "Browse Available Curricula", 'card')
    draw_ortho(ax, (400, 580), (180, 480))
    draw_box(ax, 60, 400, 240, 38, "Select Version", "Open Selected Baseline", 'process')
    draw_arrow(ax, (180, 480 - 38), (180, 400))

    # Branch 2 (Center): Create new version
    draw_box(ax, 380, 480, 240, 38, "Create New Version", "Initialize New Cohort", 'card')
    draw_arrow(ax, (500, 580 - 35), (500, 480))
    draw_box(ax, 380, 400, 240, 38, "Enter Version Details", "Title, AY & Base Curriculum", 'process')
    draw_arrow(ax, (500, 480 - 38), (500, 400))
    draw_box(ax, 380, 320, 240, 38, "Save New Version", "Register in System Directory", 'process')
    draw_arrow(ax, (500, 400 - 38), (500, 320))

    # Branch 3 (Right): Add revision
    draw_box(ax, 700, 480, 240, 38, "Add Revision", "Modify Existing Curriculum", 'card')
    draw_ortho(ax, (600, 580), (820, 480))
    draw_box(ax, 700, 400, 240, 38, "Enter Revision Details", "Revision Notes & Change Scope", 'process')
    draw_arrow(ax, (820, 480 - 38), (820, 400))
    draw_box(ax, 700, 320, 240, 38, "Save Revision", "Commit Changes to History", 'process')
    draw_arrow(ax, (820, 400 - 38), (820, 320))

    # All lead to Selected Curriculum Version
    draw_box(ax, 340, 220, 320, 40, "Selected Curriculum Version", "Active Operational Workspace", 'accent')
    draw_ortho(ax, (180, 400 - 38), (500, 220))
    draw_arrow(ax, (500, 320 - 38), (500, 220))
    draw_ortho(ax, (820, 320 - 38), (500, 220))

    # End
    draw_pill(ax, 420, 120, 160, 34, "End", 'terminal')
    draw_arrow(ax, (500, 220 - 40), (500, 120))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.5_Curriculum_Management_Flow.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.5")


# ==============================================================================
# FIGURE 3.6: CURRICULUM FLOWCHART MANAGEMENT FLOW
# ==============================================================================
def generate_fig3_6():
    fig, ax = plt.subplots(figsize=(10, 11), dpi=300)
    ax.set_xlim(0, 1000)
    ax.set_ylim(0, 1100)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(500, 1065, "FIGURE 3.6: CURRICULUM FLOWCHART MANAGEMENT FLOW", ha='center', va='center',
            fontsize=13, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(500, 1040, "Curriculum Management System - Interactive Prerequisite Flowchart", ha='center', va='center',
            fontsize=8.5, color='#64748B', family='sans-serif')

    draw_pill(ax, 420, 990, 160, 34, "Start", 'terminal')
    draw_box(ax, 350, 920, 300, 38, "Select Curriculum Version", "Load Cohort Workspace", 'header')
    draw_arrow(ax, (500, 990 - 34), (500, 920))

    draw_box(ax, 350, 840, 300, 38, "Open Flowchart", "Initialize Flowchart Canvas", 'process')
    draw_arrow(ax, (500, 920 - 38), (500, 840))

    draw_box(ax, 350, 760, 300, 38, "View Flowchart", "Inspect Terms & Requisite Paths", 'process')
    draw_arrow(ax, (500, 840 - 38), (500, 760))

    # Decision: Modify flowchart?
    draw_diamond(ax, 500, 660, 200, 70, "Modify\nFlowchart?", 'decision')
    draw_arrow(ax, (500, 760 - 38), (500, 660 + 35))

    # Left: No -> View read-only -> End
    draw_box(ax, 80, 560, 220, 38, "View Flowchart (Read-Only)", "Display Locked Curriculum Graph", 'leaf')
    draw_ortho(ax, (400, 660), (190, 560), label="No", label_side='top')

    draw_pill(ax, 110, 440, 160, 34, "End", 'terminal')
    draw_arrow(ax, (190, 560 - 38), (190, 440))

    # Right: Yes -> Edit Flowchart
    draw_box(ax, 560, 560, 380, 38, "Display Flowchart Editor", "Enable Node Dragging & Connection Tools", 'process')
    draw_ortho(ax, (600, 660), (750, 560), label="Yes", label_side='top')

    draw_box(ax, 560, 470, 380, 42, "Arrange Subjects & Edit Course Details", "Update Code, Title, Units, Year Level & Syllabi", 'process', fontsize_title=8.5, fontsize_sub=7)
    draw_arrow(ax, (750, 560 - 38), (750, 470))

    draw_box(ax, 560, 380, 380, 38, "Configure Prerequisites", "Connect Dependency Arrows Across Terms", 'process')
    draw_arrow(ax, (750, 470 - 42), (750, 380))

    draw_box(ax, 560, 300, 380, 38, "Check for Circular Dependency", "Execute Graph Cycle Validation", 'process')
    draw_arrow(ax, (750, 380 - 38), (750, 300))

    # Decision: Circular dependency found?
    draw_diamond(ax, 750, 200, 200, 70, "Circular\nDependency Found?", 'decision')
    draw_arrow(ax, (750, 300 - 38), (750, 200 + 35))

    # Yes -> Display Error Message -> loop back to Arrange Subjects
    draw_box(ax, 380, 200 + 19, 220, 38, "Display Error Message", "Invalid Prerequisite Chain Conflict", 'data', fontsize_title=8, fontsize_sub=6.5)
    draw_arrow(ax, (650, 200), (600, 200), label="Yes", label_side='top')
    draw_ortho(ax, (490, 200 + 19), (560, 470 - 21), mid=420, orientation='h', color='#E11D48', dashed=True, arrow=True)
    ax.text(410, 340, "Revise Prerequisites", ha='center', va='center', rotation=90, fontsize=7.5, fontweight='bold', color='#E11D48')

    # No -> Save Changes -> Updated Flowchart -> End
    draw_box(ax, 640, 90, 220, 36, "Save Changes", "Persist Layout & Connections", 'process')
    draw_arrow(ax, (750, 200 - 35), (750, 90), label="No", label_side='right')

    draw_pill(ax, 670, 20, 160, 34, "End", 'terminal')
    draw_arrow(ax, (750, 90 - 36), (750, 20))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.6_Curriculum_Flowchart_Management_Flow.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.6")


# ==============================================================================
# FIGURE 3.7: CURRICULUM SPREADSHEET AND MAPPING FLOW
# ==============================================================================
def generate_fig3_7():
    fig, ax = plt.subplots(figsize=(10, 11), dpi=300)
    ax.set_xlim(0, 1000)
    ax.set_ylim(0, 1100)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(500, 1065, "FIGURE 3.7: CURRICULUM SPREADSHEET AND MAPPING FLOW", ha='center', va='center',
            fontsize=13, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(500, 1040, "Curriculum Management System - Tabular Grid & Outcomes Mapping", ha='center', va='center',
            fontsize=8.5, color='#64748B', family='sans-serif')

    draw_pill(ax, 420, 990, 160, 34, "Start", 'terminal')
    draw_box(ax, 350, 920, 300, 38, "Select Curriculum Version", "Load Cohort Workspace", 'header')
    draw_arrow(ax, (500, 990 - 34), (500, 920))

    draw_box(ax, 350, 840, 300, 38, "Open Spreadsheet", "Initialize Tabular Grid View", 'process')
    draw_arrow(ax, (500, 920 - 38), (500, 840))

    draw_box(ax, 350, 760, 300, 42, "View Curriculum Data", "I/E/D Mapping, Term Summaries & Reports", 'process', fontsize_title=8.5, fontsize_sub=7)
    draw_arrow(ax, (500, 840 - 38), (500, 760))

    # Decision: Modify data or mapping?
    draw_diamond(ax, 500, 660, 220, 70, "Modify Data or\nMapping?", 'decision')
    draw_arrow(ax, (500, 760 - 42), (500, 660 + 35))

    # Left: No -> View read-only -> End
    draw_box(ax, 80, 560, 220, 38, "View Data (Read-Only)", "Read-Only Curriculum Grid", 'leaf')
    draw_ortho(ax, (390, 660), (190, 560), label="No", label_side='top')

    draw_pill(ax, 110, 440, 160, 34, "End", 'terminal')
    draw_arrow(ax, (190, 560 - 38), (190, 440))

    # Right: Yes -> Display editing interface
    draw_box(ax, 560, 560, 380, 38, "Display Editing Interface", "Enable Cell Editing & Dropdowns", 'process')
    draw_ortho(ax, (610, 660), (750, 560), label="Yes", label_side='top')

    draw_box(ax, 560, 470, 380, 42, "Edit I/E/D Mapping and Other Data", "Modify Hours, Units, Codes & Rubric Tags", 'process', fontsize_title=8.5, fontsize_sub=7)
    draw_arrow(ax, (750, 560 - 38), (750, 470))

    draw_box(ax, 560, 380, 380, 38, "Validate Changes", "Check Format Integrity & Unit Tallies", 'process')
    draw_arrow(ax, (750, 470 - 42), (750, 380))

    # Decision: Changes valid?
    draw_diamond(ax, 750, 280, 200, 70, "Changes\nValid?", 'decision')
    draw_arrow(ax, (750, 380 - 38), (750, 280 + 35))

    # No -> Display Error -> loop back
    draw_box(ax, 380, 280 + 19, 220, 38, "Display Error Message", "List of Format or Mapping Conflicts", 'data', fontsize_title=8, fontsize_sub=6.5)
    draw_arrow(ax, (650, 280), (600, 280), label="No", label_side='top')
    draw_ortho(ax, (490, 280 + 19), (560, 470 - 21), mid=420, orientation='h', color='#E11D48', dashed=True, arrow=True)
    ax.text(410, 380, "Correct Entries", ha='center', va='center', rotation=90, fontsize=7.5, fontweight='bold', color='#E11D48')

    # Yes -> Save changes -> Updated spreadsheet -> End
    draw_box(ax, 640, 160, 220, 36, "Save Changes", "Commit Edits to Database", 'process')
    draw_arrow(ax, (750, 280 - 35), (750, 160), label="Yes", label_side='right')

    draw_box(ax, 640, 90, 220, 36, "Updated Spreadsheet", "Persist New Mapping Data", 'data')
    draw_arrow(ax, (750, 160 - 36), (750, 90))

    draw_pill(ax, 670, 20, 160, 34, "End", 'terminal')
    draw_arrow(ax, (750, 90 - 36), (750, 20))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.7_Curriculum_Spreadsheet_and_Mapping_Flow.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.7")


# ==============================================================================
# FIGURE 3.8: OFFICIAL DOCUMENT FLOW
# ==============================================================================
def generate_fig3_8():
    fig, ax = plt.subplots(figsize=(10, 11), dpi=300)
    ax.set_xlim(0, 1000)
    ax.set_ylim(0, 1100)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(500, 1065, "FIGURE 3.8: OFFICIAL DOCUMENT FLOW", ha='center', va='center',
            fontsize=13, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(500, 1040, "Curriculum Management System - Regulatory Documents & Sheets", ha='center', va='center',
            fontsize=8.5, color='#64748B', family='sans-serif')

    draw_pill(ax, 420, 990, 160, 34, "Start", 'terminal')
    draw_box(ax, 350, 920, 300, 38, "Select Curriculum Version", "Load Cohort Workspace", 'header')
    draw_arrow(ax, (500, 990 - 34), (500, 920))

    draw_box(ax, 350, 840, 300, 38, "Go to Official Documents", "Open Document Registry", 'process')
    draw_arrow(ax, (500, 920 - 38), (500, 840))

    draw_box(ax, 350, 760, 300, 42, "View Imported Documents", "Documents Associated with Selected Version", 'process', fontsize_title=8.5, fontsize_sub=7)
    draw_arrow(ax, (500, 840 - 38), (500, 760))

    # Decision: View or manage documents?
    draw_diamond(ax, 500, 650, 220, 70, "View or Manage\nDocuments?", 'decision')
    draw_arrow(ax, (500, 760 - 42), (500, 650 + 35))

    # Left: View only
    draw_box(ax, 100, 540, 260, 38, "Open Document", "Select Registrar Sheet (1-7)", 'process')
    draw_ortho(ax, (390, 650), (230, 540), label="View Only", label_side='top')

    draw_box(ax, 100, 450, 260, 42, "View Document Details", "Inspect Layout, Summary Units & Metadata", 'leaf', fontsize_title=8.5, fontsize_sub=7)
    draw_arrow(ax, (230, 540 - 38), (230, 450))

    draw_pill(ax, 150, 340, 160, 34, "End", 'terminal')
    draw_arrow(ax, (230, 450 - 42), (230, 340))

    # Right: Import or update
    draw_box(ax, 620, 540, 280, 42, "Import / Update Document", "Upload Revision or Ingest New Sheet", 'process', fontsize_title=8.5, fontsize_sub=7)
    draw_ortho(ax, (610, 650), (760, 540), label="Import or Update", label_side='top')

    draw_box(ax, 620, 440, 280, 38, "Save Document", "Register Updated Document Record", 'process')
    draw_arrow(ax, (760, 540 - 42), (760, 440))

    draw_box(ax, 620, 340, 280, 46, "Updated Document Information", "Reflects Real-Time Curriculum Flowchart\nand Spreadsheet Modifications", 'data', fontsize_title=8.5, fontsize_sub=6.5)
    draw_arrow(ax, (760, 440 - 38), (760, 340))

    draw_pill(ax, 680, 230, 160, 34, "End", 'terminal')
    draw_arrow(ax, (760, 340 - 46), (760, 230))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.8_Official_Document_Flow.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.8")


# ==============================================================================
# FIGURE 3.9: DATA IMPORT AND EXPORT FLOW
# ==============================================================================
def generate_fig3_9():
    fig, ax = plt.subplots(figsize=(10, 12), dpi=300)
    ax.set_xlim(0, 1000)
    ax.set_ylim(0, 1200)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(500, 1165, "FIGURE 3.9: DATA IMPORT AND EXPORT FLOW", ha='center', va='center',
            fontsize=13, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(500, 1140, "Curriculum Management System - Excel Data Ingestion & Extraction", ha='center', va='center',
            fontsize=8.5, color='#64748B', family='sans-serif')

    draw_pill(ax, 420, 1090, 160, 34, "Start", 'terminal')
    draw_box(ax, 350, 1020, 300, 40, "Select Curriculum Section", "Flowchart or Spreadsheet Workspace", 'header')
    draw_arrow(ax, (500, 1090 - 34), (500, 1020))

    # Decision: Choose action
    draw_diamond(ax, 500, 920, 200, 70, "Choose Action", 'decision')
    draw_arrow(ax, (500, 1020 - 40), (500, 920 + 35))

    # Left: Import existing data
    draw_box(ax, 80, 810, 260, 38, "Select Existing Excel File", "Choose CSV / XLSX File", 'process')
    draw_ortho(ax, (400, 920), (210, 810), label="Import Data", label_side='top')

    draw_box(ax, 80, 730, 260, 38, "System Validates File", "Check Schema & Data Formats", 'process')
    draw_arrow(ax, (210, 810 - 38), (210, 730))

    # Decision: File valid?
    draw_diamond(ax, 210, 630, 180, 65, "File Valid?", 'decision')
    draw_arrow(ax, (210, 730 - 38), (210, 630 + 32.5))

    # Error path
    draw_box(ax, 10, 520, 180, 38, "Display Error Message", "Invalid Format or Schema Errors", 'data', fontsize_title=7.5, fontsize_sub=6.5)
    draw_ortho(ax, (120, 630), (100, 520), label="No", label_side='left')
    draw_ortho(ax, (100, 520 - 38), (80, 810 - 19), mid=20, orientation='h', color='#E11D48', dashed=True, arrow=True)
    ax.text(30, 660, "Re-select File", ha='center', va='center', rotation=90, fontsize=7.5, fontweight='bold', color='#E11D48')

    # Valid: Yes -> Load data
    draw_box(ax, 220, 520, 200, 38, "Load Data into System", "Ingest Validated Records", 'process')
    draw_ortho(ax, (300, 630), (320, 520), label="Yes", label_side='right')

    draw_box(ax, 120, 430, 260, 38, "Review / Modify Imported Data", "Inspect Staged Changes", 'process')
    draw_ortho(ax, (320, 520 - 38), (250, 430))

    draw_box(ax, 120, 350, 260, 38, "Save Changes", "Commit to Curriculum Version", 'process')
    draw_arrow(ax, (250, 430 - 38), (250, 350))

    draw_parallelogram(ax, 120, 270, 260, 42, "Imported Curriculum Data", "Updated in System Database", 'data')
    draw_arrow(ax, (250, 350 - 38), (250, 270))

    # Right: Export updated data
    draw_box(ax, 640, 810, 280, 40, "Select Data to Export", "Current Version Records", 'process')
    draw_ortho(ax, (600, 920), (780, 810), label="Export Data", label_side='top')

    draw_box(ax, 640, 720, 280, 40, "Choose Export Option", "Flowchart, Spreadsheet or Summary", 'process')
    draw_arrow(ax, (780, 810 - 40), (780, 720))

    draw_box(ax, 640, 630, 280, 38, "Generate Excel File", "Compile Worksheets & Formatting", 'process')
    draw_arrow(ax, (780, 720 - 40), (780, 630))

    draw_parallelogram(ax, 640, 530, 280, 42, "Exported Curriculum Data", "Excel (.xlsx) File Downloaded", 'data')
    draw_arrow(ax, (780, 630 - 38), (780, 530))

    # End
    draw_pill(ax, 420, 100, 160, 34, "End", 'terminal')
    draw_ortho(ax, (250, 270 - 42), (500, 100))
    draw_ortho(ax, (780, 530 - 42), (500, 100))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.9_Data_Import_and_Export_Flow.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.9")


# ==============================================================================
# FIGURE 3.10: CURRICULUM MAPPING FLOWCHART
# ==============================================================================
def generate_fig3_10():
    fig, ax = plt.subplots(figsize=(16, 12), dpi=300)
    ax.set_xlim(0, 1600)
    ax.set_ylim(0, 1200)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(800, 1165, "FIGURE 3.10: CURRICULUM MAPPING FLOWCHART", ha='center', va='center',
            fontsize=15, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(800, 1140, "Curriculum Management System - Outcomes-Based Education (OBE) Hierarchy & Course Alignment", ha='center', va='center',
            fontsize=10, color='#64748B', family='sans-serif')

    draw_box(ax, 550, 1090, 500, 40, "Select Curriculum Mapping", "From Curriculum Management Home Page", 'header', fontsize_title=10, fontsize_sub=8)
    draw_box(ax, 600, 1020, 400, 38, "Curriculum Mapping Module", "OBE Alignment Workspace", 'accent', fontsize_title=10, fontsize_sub=8)
    draw_arrow(ax, (800, 1090 - 40), (800, 1020))

    draw_box(ax, 620, 950, 360, 38, "Select Mapping Component", "Choose OBE Governance Level", 'process', fontsize_title=9.5, fontsize_sub=7.5)
    draw_arrow(ax, (800, 1020 - 38), (800, 950))

    # 4 Columns: GAs, PEOs, SOs, Course Mapping
    w_col = 320
    xs_c = [60, 440, 820, 1200]
    p_comp_bot = (800, 950 - 38)

    # Column 1: Graduate Attributes (GAs)
    draw_box(ax, xs_c[0], 850, w_col, 42, "Graduate Attributes (GAs)", "Highest Level Institutional Outcomes", 'card', fontsize_title=9, fontsize_sub=7.5)
    draw_ortho(ax, p_comp_bot, (xs_c[0] + w_col / 2, 850))

    draw_box(ax, xs_c[0], 770, w_col, 36, "View List of GAs", "Inspect Registered Institutional Attributes", 'process', fontsize_title=8, fontsize_sub=7)
    draw_arrow(ax, (xs_c[0] + w_col / 2, 850 - 42), (xs_c[0] + w_col / 2, 770))

    draw_diamond(ax, xs_c[0] + w_col / 2, 680, 200, 60, "Add, Edit, or\nView GA?", 'decision')
    draw_arrow(ax, (xs_c[0] + w_col / 2, 770 - 36), (xs_c[0] + w_col / 2, 680 + 30))

    draw_box(ax, xs_c[0], 580, 100, 36, "Enter GA Info", "Add Details", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_box(ax, xs_c[0] + 110, 580, 100, 36, "Modify GA", "Edit Details", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_box(ax, xs_c[0] + 220, 580, 100, 36, "View Details", "Inspect GA", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_ortho(ax, (xs_c[0] + w_col / 2, 680 - 30), (xs_c[0] + 50, 580), label="Add", label_side='left')
    draw_arrow(ax, (xs_c[0] + w_col / 2, 680 - 30), (xs_c[0] + 160, 580), label="Edit", label_side='left')
    draw_ortho(ax, (xs_c[0] + w_col / 2, 680 - 30), (xs_c[0] + 270, 580), label="View", label_side='right')

    draw_box(ax, xs_c[0], 480, w_col, 38, "Save GA Information", "Persist Attribute Changes", 'process')
    draw_ortho(ax, (xs_c[0] + 50, 580 - 36), (xs_c[0] + w_col / 2, 480))
    draw_arrow(ax, (xs_c[0] + 160, 580 - 36), (xs_c[0] + w_col / 2, 480))
    draw_ortho(ax, (xs_c[0] + 270, 580 - 36), (xs_c[0] + w_col / 2, 480))

    draw_diamond(ax, xs_c[0] + w_col / 2, 380, 180, 55, "Add or Edit\nAnother GA?", 'decision')
    draw_arrow(ax, (xs_c[0] + w_col / 2, 480 - 38), (xs_c[0] + w_col / 2, 380 + 27.5))
    draw_ortho(ax, (xs_c[0] + 30, 380), (xs_c[0], 770 - 18), mid=30, orientation='h', color='#E11D48', dashed=True, arrow=True)
    ax.text(45, 570, "Yes", ha='center', va='center', rotation=90, fontsize=7.5, fontweight='bold', color='#E11D48')

    # Column 2: Program Educational Objectives (PEOs)
    draw_box(ax, xs_c[1], 850, w_col, 42, "Program Educational Objectives (PEOs)", "Mapped to Graduate Attributes", 'card', fontsize_title=9, fontsize_sub=7.5)
    draw_ortho(ax, p_comp_bot, (xs_c[1] + w_col / 2, 850))

    draw_box(ax, xs_c[1], 770, w_col, 36, "View List of PEOs", "Inspect Registered Program Objectives", 'process', fontsize_title=8, fontsize_sub=7)
    draw_arrow(ax, (xs_c[1] + w_col / 2, 850 - 42), (xs_c[1] + w_col / 2, 770))

    draw_diamond(ax, xs_c[1] + w_col / 2, 680, 200, 60, "Add, Edit, or\nView PEO?", 'decision')
    draw_arrow(ax, (xs_c[1] + w_col / 2, 770 - 36), (xs_c[1] + w_col / 2, 680 + 30))

    draw_box(ax, xs_c[1], 580, 100, 36, "Enter PEO Info", "Add Details", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_box(ax, xs_c[1] + 110, 580, 100, 36, "Modify PEO", "Edit Details", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_box(ax, xs_c[1] + 220, 580, 100, 36, "View Details", "Inspect PEO", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_ortho(ax, (xs_c[1] + w_col / 2, 680 - 30), (xs_c[1] + 50, 580), label="Add", label_side='left')
    draw_arrow(ax, (xs_c[1] + w_col / 2, 680 - 30), (xs_c[1] + 160, 580), label="Edit", label_side='left')
    draw_ortho(ax, (xs_c[1] + w_col / 2, 680 - 30), (xs_c[1] + 270, 580), label="View", label_side='right')

    draw_box(ax, xs_c[1], 480, w_col, 38, "Select / Map to Graduate Attribute(s)", "Link Objective to GA", 'process')
    draw_ortho(ax, (xs_c[1] + 50, 580 - 36), (xs_c[1] + w_col / 2, 480))
    draw_arrow(ax, (xs_c[1] + 160, 580 - 36), (xs_c[1] + w_col / 2, 480))
    draw_ortho(ax, (xs_c[1] + 270, 580 - 36), (xs_c[1] + w_col / 2, 480))

    draw_box(ax, xs_c[1], 410, w_col, 36, "Save PEO Information and Mapping", "Persist PEO Alignment", 'process')
    draw_arrow(ax, (xs_c[1] + w_col / 2, 480 - 38), (xs_c[1] + w_col / 2, 410))

    draw_diamond(ax, xs_c[1] + w_col / 2, 330, 180, 55, "Add or Edit\nAnother PEO?", 'decision')
    draw_arrow(ax, (xs_c[1] + w_col / 2, 410 - 36), (xs_c[1] + w_col / 2, 330 + 27.5))
    draw_ortho(ax, (xs_c[1] + 30, 330), (xs_c[1], 770 - 18), mid=410, orientation='h', color='#E11D48', dashed=True, arrow=True)
    ax.text(425, 550, "Yes", ha='center', va='center', rotation=90, fontsize=7.5, fontweight='bold', color='#E11D48')

    # Column 3: Student Outcomes (SOs)
    draw_box(ax, xs_c[2], 850, w_col, 42, "Student Outcomes (SOs)", "Mapped to PEOs", 'card', fontsize_title=9, fontsize_sub=7.5)
    draw_ortho(ax, p_comp_bot, (xs_c[2] + w_col / 2, 850))

    draw_box(ax, xs_c[2], 770, w_col, 36, "View List of SOs", "Inspect Program Student Outcomes", 'process', fontsize_title=8, fontsize_sub=7)
    draw_arrow(ax, (xs_c[2] + w_col / 2, 850 - 42), (xs_c[2] + w_col / 2, 770))

    draw_diamond(ax, xs_c[2] + w_col / 2, 680, 200, 60, "Add, Edit, or\nView SO?", 'decision')
    draw_arrow(ax, (xs_c[2] + w_col / 2, 770 - 36), (xs_c[2] + w_col / 2, 680 + 30))

    draw_box(ax, xs_c[2], 580, 100, 36, "Enter SO Info", "Add Details", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_box(ax, xs_c[2] + 110, 580, 100, 36, "Modify SO", "Edit Details", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_box(ax, xs_c[2] + 220, 580, 100, 36, "View Details", "Inspect SO", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_ortho(ax, (xs_c[2] + w_col / 2, 680 - 30), (xs_c[2] + 50, 580), label="Add", label_side='left')
    draw_arrow(ax, (xs_c[2] + w_col / 2, 680 - 30), (xs_c[2] + 160, 580), label="Edit", label_side='left')
    draw_ortho(ax, (xs_c[2] + w_col / 2, 680 - 30), (xs_c[2] + 270, 580), label="View", label_side='right')

    draw_box(ax, xs_c[2], 480, w_col, 38, "Select / Map to Program Objective(s)", "Link Outcome to PEO", 'process')
    draw_ortho(ax, (xs_c[2] + 50, 580 - 36), (xs_c[2] + w_col / 2, 480))
    draw_arrow(ax, (xs_c[2] + 160, 580 - 36), (xs_c[2] + w_col / 2, 480))
    draw_ortho(ax, (xs_c[2] + 270, 580 - 36), (xs_c[2] + w_col / 2, 480))

    draw_box(ax, xs_c[2], 410, w_col, 36, "Save SO Information and Mapping", "Persist SO Alignment", 'process')
    draw_arrow(ax, (xs_c[2] + w_col / 2, 480 - 38), (xs_c[2] + w_col / 2, 410))

    draw_diamond(ax, xs_c[2] + w_col / 2, 330, 180, 55, "Add or Edit\nAnother SO?", 'decision')
    draw_arrow(ax, (xs_c[2] + w_col / 2, 410 - 36), (xs_c[2] + w_col / 2, 330 + 27.5))
    draw_ortho(ax, (xs_c[2] + 30, 330), (xs_c[2], 770 - 18), mid=790, orientation='h', color='#E11D48', dashed=True, arrow=True)
    ax.text(805, 550, "Yes", ha='center', va='center', rotation=90, fontsize=7.5, fontweight='bold', color='#E11D48')

    # Column 4: Course Mapping to SOs
    draw_box(ax, xs_c[3], 850, w_col, 42, "Course Mapping to SOs", "Mapped to Student Outcomes", 'card', fontsize_title=9, fontsize_sub=7.5)
    draw_ortho(ax, p_comp_bot, (xs_c[3] + w_col / 2, 850))

    draw_box(ax, xs_c[3], 770, w_col, 36, "Select Course", "From Selected Curriculum Version", 'process', fontsize_title=8, fontsize_sub=7)
    draw_arrow(ax, (xs_c[3] + w_col / 2, 850 - 42), (xs_c[3] + w_col / 2, 770))

    draw_box(ax, xs_c[3], 690, w_col, 40, "View Current Course Mappings", "List of Linked SOs with I/E/D Status", 'process', fontsize_title=8, fontsize_sub=7)
    draw_arrow(ax, (xs_c[3] + w_col / 2, 770 - 36), (xs_c[3] + w_col / 2, 690))

    draw_diamond(ax, xs_c[3] + w_col / 2, 590, 200, 60, "Add, Edit, or\nRemove Mapping?", 'decision')
    draw_arrow(ax, (xs_c[3] + w_col / 2, 690 - 40), (xs_c[3] + w_col / 2, 590 + 30))

    draw_box(ax, xs_c[3], 490, 100, 36, "Select SO(s)", "Add Links", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_box(ax, xs_c[3] + 110, 490, 100, 36, "Modify I/E/D", "Edit Level", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_box(ax, xs_c[3] + 220, 490, 100, 36, "Remove Mapping", "Delete Link", 'leaf', fontsize_title=7.5, fontsize_sub=6)
    draw_ortho(ax, (xs_c[3] + w_col / 2, 590 - 30), (xs_c[3] + 50, 490), label="Add", label_side='left')
    draw_arrow(ax, (xs_c[3] + w_col / 2, 590 - 30), (xs_c[3] + 160, 490), label="Edit", label_side='left')
    draw_ortho(ax, (xs_c[3] + w_col / 2, 590 - 30), (xs_c[3] + 270, 490), label="Del", label_side='right')

    draw_box(ax, xs_c[3], 410, w_col, 36, "Save Course-to-SO Mapping", "Commit Alignment to System", 'process')
    draw_ortho(ax, (xs_c[3] + 50, 490 - 36), (xs_c[3] + w_col / 2, 410))
    draw_arrow(ax, (xs_c[3] + 160, 490 - 36), (xs_c[3] + w_col / 2, 410))
    draw_ortho(ax, (xs_c[3] + 270, 490 - 36), (xs_c[3] + w_col / 2, 410))

    draw_diamond(ax, xs_c[3] + w_col / 2, 330, 180, 55, "Map Another\nCourse?", 'decision')
    draw_arrow(ax, (xs_c[3] + w_col / 2, 410 - 36), (xs_c[3] + w_col / 2, 330 + 27.5))
    draw_ortho(ax, (xs_c[3] + 30, 330), (xs_c[3], 770 - 18), mid=1170, orientation='h', color='#E11D48', dashed=True, arrow=True)
    ax.text(1185, 550, "Yes", ha='center', va='center', rotation=90, fontsize=7.5, fontweight='bold', color='#E11D48')

    # Return to Curriculum Management Home Page
    draw_box(ax, 500, 190, 600, 40, "Return to Curriculum Management Home Page", "Exit Mapping Module and Return to Workspace", 'accent', fontsize_title=10, fontsize_sub=8)
    for i in range(4):
        draw_ortho(ax, (xs_c[i] + w_col / 2, 330 - 27.5 if i > 0 else 380 - 27.5), (800, 190), label="No" if i == 0 else "No")

    # End
    draw_pill(ax, 720, 100, 160, 34, "End", 'terminal')
    draw_arrow(ax, (800, 190 - 40), (800, 100))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.10_Curriculum_Mapping_Flowchart.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.10")


# ==============================================================================
# FIGURE 3.11: TASK DELEGATION FLOW
# ==============================================================================
def generate_fig3_11():
    fig, ax = plt.subplots(figsize=(10, 12), dpi=300)
    ax.set_xlim(0, 1000)
    ax.set_ylim(0, 1200)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(500, 1165, "FIGURE 3.11: TASK DELEGATION FLOW", ha='center', va='center',
            fontsize=13, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(500, 1140, "Curriculum Management System - Faculty Delegation & Privilege Management", ha='center', va='center',
            fontsize=8.5, color='#64748B', family='sans-serif')

    draw_pill(ax, 420, 1090, 160, 34, "Start", 'terminal')
    draw_box(ax, 320, 1020, 360, 38, "Go to Delegations", "From Curriculum Management Home Page", 'header')
    draw_arrow(ax, (500, 1090 - 34), (500, 1020))

    draw_box(ax, 320, 950, 360, 38, "View List of Available Tasks", "Review Curriculum Modules Requiring Updates", 'process')
    draw_arrow(ax, (500, 1020 - 38), (500, 950))

    draw_box(ax, 320, 880, 360, 38, "Select a Curriculum-Related Task", "Specify Target Term, Syllabus or Sheet", 'process')
    draw_arrow(ax, (500, 950 - 38), (500, 880))

    draw_box(ax, 320, 810, 360, 38, "Select a Faculty Member", "Choose Designee from Faculty Directory", 'process')
    draw_arrow(ax, (500, 880 - 38), (500, 810))

    draw_box(ax, 320, 740, 360, 38, "Set Temporary Privileges", "Define Expiration Date and Access Scope", 'process')
    draw_arrow(ax, (500, 810 - 38), (500, 740))

    # Assign Task
    draw_box(ax, 320, 660, 360, 38, "Assign Task", "Confirm and Issue Assignment", 'process')
    draw_arrow(ax, (500, 740 - 38), (500, 660))

    # Side Data Store: Store Delegation Data
    draw_parallelogram(ax, 720, 660, 250, 46, "Store Delegation Data", "Task, Faculty, Role, Expiration & Timestamp", 'data', fontsize_title=8, fontsize_sub=6.5)
    draw_arrow(ax, (680, 660 - 19), (720, 660 - 19))

    draw_box(ax, 320, 580, 360, 38, "Notification Sent to Faculty Member", "System Alerts Faculty via In-App Notice", 'process')
    draw_arrow(ax, (500, 660 - 38), (500, 580))

    draw_box(ax, 320, 500, 360, 38, "Faculty Performs Assigned Task", "Authorized Scoped Edits Executed", 'process')
    draw_arrow(ax, (500, 580 - 38), (500, 500))

    draw_box(ax, 320, 420, 360, 38, "Task Completed", "Faculty Submits Changes for Review", 'process')
    draw_arrow(ax, (500, 500 - 38), (500, 420))

    # Side Data Store: Store Activity Log
    draw_parallelogram(ax, 720, 420, 250, 46, "Store Activity Log", "Submission Details, Diffs & Audit Stamp", 'data', fontsize_title=8, fontsize_sub=6.5)
    draw_arrow(ax, (680, 420 - 19), (720, 420 - 19))

    draw_box(ax, 320, 340, 360, 40, "Temporary Privileges Expire", "Automatically Revoked or Closed by Admin", 'process')
    draw_arrow(ax, (500, 420 - 38), (500, 340))

    draw_box(ax, 320, 260, 360, 38, "Faculty Access Ends", "Revert to Standard View-Only Privileges", 'leaf')
    draw_arrow(ax, (500, 340 - 40), (500, 260))

    draw_pill(ax, 420, 160, 160, 34, "End", 'terminal')
    draw_arrow(ax, (500, 260 - 38), (500, 160))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.11_Task_Delegation_Flow.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.11")


# ==============================================================================
# FIGURE 3.12: AUDIT LOG FLOW
# ==============================================================================
def generate_fig3_12():
    fig, ax = plt.subplots(figsize=(10, 11), dpi=300)
    ax.set_xlim(0, 1000)
    ax.set_ylim(0, 1100)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    ax.text(500, 1065, "FIGURE 3.12: AUDIT LOG FLOW", ha='center', va='center',
            fontsize=13, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(500, 1040, "Curriculum Management System - Immutable System Audit Trail", ha='center', va='center',
            fontsize=8.5, color='#64748B', family='sans-serif')

    draw_pill(ax, 420, 990, 160, 34, "Start", 'terminal')
    draw_box(ax, 320, 920, 360, 38, "Go to Audit Logs", "From Curriculum Management Home Page", 'header')
    draw_arrow(ax, (500, 990 - 34), (500, 920))

    draw_box(ax, 320, 840, 360, 38, "View Recorded Activities", "Load Chronological Audit Trail", 'process')
    draw_arrow(ax, (500, 920 - 38), (500, 840))

    # Decision: Apply filter or search?
    draw_diamond(ax, 500, 740, 220, 70, "Apply Filter\nor Search?", 'decision')
    draw_arrow(ax, (500, 840 - 38), (500, 740 + 35))

    # Left: Yes -> Set filter
    draw_box(ax, 80, 620, 300, 44, "Set Filter or Search Criteria", "Date Range, User Account, Action Type & Entity ID", 'process', fontsize_title=8.5, fontsize_sub=7)
    draw_ortho(ax, (390, 740), (230, 620), label="Yes", label_side='top')

    # Right: No -> bypass to Display records
    draw_box(ax, 320, 510, 360, 38, "Display Audit Log Records", "Show Filtered / Full Activity List", 'process')
    draw_ortho(ax, (230, 620 - 44), (500, 510))
    draw_ortho(ax, (610, 740), (500, 510), label="No", label_side='top')

    draw_box(ax, 320, 420, 360, 38, "Select a Record", "Choose Specific Activity Row", 'process')
    draw_arrow(ax, (500, 510 - 38), (500, 420))

    draw_box(ax, 320, 330, 360, 40, "View Activity Details", "Inspect Detailed Metadata & Modifications", 'process')
    draw_arrow(ax, (500, 420 - 38), (500, 330))

    # Side Data: Activity details
    draw_parallelogram(ax, 720, 330, 250, 56, "Activity Details", "Date and Time\nUser Identifier\nAction Performed\nSpecific ID Number", 'data', fontsize_title=8, fontsize_sub=6.5)
    draw_arrow(ax, (680, 330 - 20), (720, 330 - 20))

    draw_pill(ax, 420, 210, 160, 34, "End", 'terminal')
    draw_arrow(ax, (500, 330 - 40), (500, 210))

    out_path = os.path.join(OUTPUT_DIR, "Figure_3.12_Audit_Log_Flow.png")
    plt.tight_layout()
    save_figure(fig, out_path)
    print("Saved clean Figure 3.12")


if __name__ == "__main__":
    generate_fig3_1()
    generate_fig3_2()
    generate_fig3_3()
    generate_fig3_4()
    generate_fig3_5()
    generate_fig3_6()
    generate_fig3_7()
    generate_fig3_8()
    generate_fig3_9()
    generate_fig3_10()
    generate_fig3_11()
    generate_fig3_12()
    print("All 12 flowcharts generated successfully.")
