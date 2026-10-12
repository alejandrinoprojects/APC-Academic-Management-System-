import os
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyBboxPatch, PathPatch
from matplotlib.path import Path
import numpy as np

def draw_box(ax, x, y, w, h, title, subtitle=None, style=None, badge=None, fontsize_title=10, fontsize_sub=8):
    if style is None:
        style = {'bg': '#FFFFFF', 'text': '#0F172A', 'border': '#94A3B8', 'sub': '#475569'}
    
    # Shadow
    shadow = FancyBboxPatch((x + 2, y - 2 - h), w, h,
                            boxstyle="round,pad=3,rounding_size=6",
                            facecolor='#E2E8F0', edgecolor='none', zorder=2)
    ax.add_patch(shadow)
    
    # Box
    box = FancyBboxPatch((x, y - h), w, h,
                         boxstyle="round,pad=3,rounding_size=6",
                         facecolor=style['bg'], edgecolor=style['border'], linewidth=1.5, zorder=3)
    ax.add_patch(box)

    # Title & Subtitle
    if subtitle:
        ax.text(x + w/2, y - h*0.38, title, ha='center', va='center',
                fontsize=fontsize_title, fontweight='bold', color=style['text'], zorder=4, family='sans-serif')
        ax.text(x + w/2, y - h*0.72, subtitle, ha='center', va='center',
                fontsize=fontsize_sub, color=style['sub'], zorder=4, family='sans-serif')
    else:
        ax.text(x + w/2, y - h/2, title, ha='center', va='center',
                fontsize=fontsize_title, fontweight='bold', color=style['text'], zorder=4, family='sans-serif')

    if badge:
        bw, bh = len(badge) * 5.5 + 10, 13
        bx = x + w - bw - 5
        by = y - bh - 4
        bp = FancyBboxPatch((bx, by), bw, bh, boxstyle="round,pad=1,rounding_size=3",
                            facecolor='#FEF08A' if 'DRAFT' in badge else '#DCFCE7' if 'ACTIVE' in badge else '#F1F5F9',
                            edgecolor='#CA8A04' if 'DRAFT' in badge else '#16A34A' if 'ACTIVE' in badge else '#94A3B8',
                            linewidth=0.8, zorder=5)
        ax.add_patch(bp)
        ax.text(bx + bw/2, by + bh/2, badge, ha='center', va='center',
                fontsize=6, fontweight='bold',
                color='#854D0E' if 'DRAFT' in badge else '#166534' if 'ACTIVE' in badge else '#475569',
                zorder=6, family='sans-serif')

def draw_orthogonal_line(ax, p1, p2, color='#475569', lw=1.5, arrow=True, dashed=False, label=None, label_pos=0.5):
    x1, y1 = p1
    x2, y2 = p2
    ymid = (y1 + y2) / 2
    
    verts = [(x1, y1), (x1, ymid), (x2, ymid), (x2, y2)]
    codes = [Path.MOVETO, Path.LINETO, Path.LINETO, Path.LINETO]
    path = Path(verts, codes)
    linestyle = '--' if dashed else '-'
    patch = PathPatch(path, facecolor='none', edgecolor=color, linewidth=lw, linestyle=linestyle, zorder=2)
    ax.add_patch(patch)
    
    if arrow:
        ax.annotate('', xy=p2, xytext=(x2, y2 + 5 if y1 > y2 else y2 - 5),
                    arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=10),
                    zorder=2)
    
    if label:
        lx = (x1 + x2) / 2
        ly = ymid
        ax.text(lx, ly + 6, label, ha='center', va='bottom', fontsize=7, fontweight='bold',
                color=color, bbox=dict(boxstyle='round,pad=0.2', facecolor='#FFFFFF', edgecolor='none'), zorder=5)

def draw_straight_arrow(ax, p1, p2, color='#475569', lw=1.5, dashed=False, label=None):
    x1, y1 = p1
    x2, y2 = p2
    linestyle = '--' if dashed else '-'
    verts = [(x1, y1), (x2, y2)]
    codes = [Path.MOVETO, Path.LINETO]
    path = Path(verts, codes)
    patch = PathPatch(path, facecolor='none', edgecolor=color, linewidth=lw, linestyle=linestyle, zorder=2)
    ax.add_patch(patch)
    ax.annotate('', xy=p2, xytext=(p2[0] - (5 if x2 > x1 else -5 if x2 < x1 else 0),
                                   p2[1] - (5 if y2 > y1 else -5 if y2 < y1 else 0)),
                arrowprops=dict(arrowstyle="-|>", color=color, lw=lw, mutation_scale=10),
                zorder=2)
    if label:
        mx = (x1 + x2) / 2
        my = (y1 + y2) / 2
        ax.text(mx, my + 6, label, ha='center', va='bottom', fontsize=7, fontweight='bold',
                color=color, bbox=dict(boxstyle='round,pad=0.2', facecolor='#FFFFFF', edgecolor='none'), zorder=5)


def generate_fig3_1():
    fig, ax = plt.subplots(figsize=(20, 14), dpi=300)
    ax.set_xlim(0, 2000)
    ax.set_ylim(0, 1400)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    c_root = {'bg': '#1E293B', 'text': '#FFFFFF', 'border': '#0F172A', 'sub': '#94A3B8'}
    c_l1 = {'bg': '#0284C7', 'text': '#FFFFFF', 'border': '#0369A1', 'sub': '#E0F2FE'}
    c_l2 = {'bg': '#0F766E', 'text': '#FFFFFF', 'border': '#115E59', 'sub': '#CCFBF1'}
    c_sub = {'bg': '#2563EB', 'text': '#FFFFFF', 'border': '#1D4ED8', 'sub': '#DBEAFE'}
    c_sub_other = {'bg': '#64748B', 'text': '#FFFFFF', 'border': '#475569', 'sub': '#F1F5F9'}
    c_sec = {'bg': '#F8FAFC', 'text': '#1E293B', 'border': '#CBD5E1', 'sub': '#64748B'}
    c_card = {'bg': '#FFFFFF', 'text': '#0F172A', 'border': '#94A3B8', 'sub': '#475569'}
    c_leaf = {'bg': '#F1F5F9', 'text': '#334155', 'border': '#CBD5E1', 'sub': '#64748B'}

    # Title Banner
    ax.text(1000, 1360, "FIGURE 3.1: INFORMATION ARCHITECTURE HIERARCHY", ha='center', va='center',
            fontsize=17, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(1000, 1332, "Curriculum Management & Academic Governance System - Structural Decomposition", ha='center', va='center',
            fontsize=11, color='#64748B', family='sans-serif')

    # Level 0
    draw_box(ax, 820, 1290, 360, 52, "INSTITUTIONAL SYSTEM ROOT", "Academic Governance & Curriculum Portal", c_root, fontsize_title=11, fontsize_sub=8.5)
    
    # Level 1
    draw_box(ax, 820, 1180, 360, 50, "ACADEMIC SCHOOLS", "School of Engineering (SoE) & School Overview", c_l1, fontsize_title=11, fontsize_sub=8.5)
    draw_orthogonal_line(ax, (1000, 1290 - 52), (1000, 1180))

    # Level 2
    draw_box(ax, 820, 1070, 360, 50, "COMPUTER ENGINEERING (BSCpE)", "Degree Program Administration & Directory", c_l2, fontsize_title=11, fontsize_sub=8.5)
    draw_orthogonal_line(ax, (1000, 1180 - 50), (1000, 1070))

    # Level 3: 3 Core Subsystems
    y_sub = 960
    h_sub = 54
    draw_box(ax, 80, y_sub, 1200, h_sub, "1. CURRICULUM MANAGEMENT SUBSYSTEM", "Central Curriculum Architecture, Versioning, OBE Alignment & Documents", c_sub, fontsize_title=12, fontsize_sub=9)
    draw_box(ax, 1340, y_sub, 280, h_sub, "2. SYLLABUS MANAGEMENT", "Course Syllabus Construction & Rubrics", c_sub_other, fontsize_title=10, fontsize_sub=8)
    draw_box(ax, 1660, y_sub, 280, h_sub, "3. COURSE MANAGEMENT", "Master Course Inventory & Catalog", c_sub_other, fontsize_title=10, fontsize_sub=8)

    p_bscpe_bottom = (1000, 1020)
    draw_orthogonal_line(ax, p_bscpe_bottom, (680, y_sub))
    draw_orthogonal_line(ax, p_bscpe_bottom, (1480, y_sub))
    draw_orthogonal_line(ax, p_bscpe_bottom, (1800, y_sub))

    # Children under Syllabus
    draw_box(ax, 1340, 840, 280, 42, "Syllabus Repository", "OBE Syllabi & Grading Schemes", c_leaf, fontsize_title=8.5, fontsize_sub=7.5)
    draw_box(ax, 1340, 780, 280, 42, "ILOs & Rubrics Matrix", "Intended Learning Outcomes Mapping", c_leaf, fontsize_title=8.5, fontsize_sub=7.5)
    draw_orthogonal_line(ax, (1480, y_sub - h_sub), (1480, 840))
    draw_orthogonal_line(ax, (1480, 840 - 42), (1480, 780))

    # Children under Course
    draw_box(ax, 1660, 840, 280, 42, "Course Catalog & Codes", "Course Repertoire & Requisites", c_leaf, fontsize_title=8.5, fontsize_sub=7.5)
    draw_box(ax, 1660, 780, 280, 42, "Requisite Validation Engine", "Prerequisite & Corequisite Graph", c_leaf, fontsize_title=8.5, fontsize_sub=7.5)
    draw_orthogonal_line(ax, (1800, y_sub - h_sub), (1800, 840))
    draw_orthogonal_line(ax, (1800, 840 - 42), (1800, 780))

    # Level 4: Under Curriculum Management
    y_sec = 840
    h_sec = 48
    draw_box(ax, 80, y_sec, 220, h_sec, "MANAGEMENT HOMEPAGE", "Executive KPI Metrics & Status", c_sec, fontsize_title=9.5, fontsize_sub=7.5)
    draw_box(ax, 330, y_sec, 220, h_sec, "VERSIONING HISTORY", "Audit Timeline & Rollback Hub", c_sec, fontsize_title=9.5, fontsize_sub=7.5)
    draw_box(ax, 580, y_sec, 430, h_sec, "BY ACADEMIC YEAR (COHORTS)", "Active, Draft & Archived Curricula", c_sec, fontsize_title=10, fontsize_sub=8)
    draw_box(ax, 1040, y_sec, 240, h_sec, "TOOLS & REPORTS", "Governance, Delegations & Audit", c_sec, fontsize_title=9.5, fontsize_sub=7.5)

    p_curr_bottom = (680, 906)
    draw_orthogonal_line(ax, p_curr_bottom, (190, y_sec))
    draw_orthogonal_line(ax, p_curr_bottom, (440, y_sec))
    draw_orthogonal_line(ax, p_curr_bottom, (795, y_sec))
    draw_orthogonal_line(ax, p_curr_bottom, (1160, y_sec))

    # Under Homepage
    draw_box(ax, 80, 750, 220, 36, "Program Metric Summaries", "Total Units, Courses & Cohorts", c_leaf, fontsize_title=8, fontsize_sub=7)
    draw_box(ax, 80, 700, 220, 36, "Quick Navigation Actions", "Create Draft, Clone, Export", c_leaf, fontsize_title=8, fontsize_sub=7)
    draw_orthogonal_line(ax, (190, y_sec - h_sec), (190, 750))
    draw_orthogonal_line(ax, (190, 750 - 36), (190, 700))

    # Under Versioning History
    draw_box(ax, 330, 750, 220, 36, "Revision Log & Audit Trail", "User, Date & Diff Inspection", c_leaf, fontsize_title=8, fontsize_sub=7)
    draw_box(ax, 330, 700, 220, 36, "Snapshot Rollback Engine", "1-Click Curriculum Restoration", c_leaf, fontsize_title=8, fontsize_sub=7)
    draw_orthogonal_line(ax, (440, y_sec - h_sec), (440, 750))
    draw_orthogonal_line(ax, (440, 750 - 36), (440, 700))

    # Under Tools & Reports
    draw_box(ax, 1040, 750, 240, 36, "Global Curriculum Map", "Program-wide OBE Alignment", c_leaf, fontsize_title=8, fontsize_sub=7)
    draw_box(ax, 1040, 700, 240, 36, "Task Delegations Console", "Role & Section Assignment", c_leaf, fontsize_title=8, fontsize_sub=7)
    draw_box(ax, 1040, 650, 240, 36, "Immutable Audit Trail", "Granular Administrative Logs", c_leaf, fontsize_title=8, fontsize_sub=7)
    draw_orthogonal_line(ax, (1160, y_sec - h_sec), (1160, 750))
    draw_orthogonal_line(ax, (1160, 750 - 36), (1160, 700))
    draw_orthogonal_line(ax, (1160, 700 - 36), (1160, 650))

    # Under Cohorts
    y_cohort = 740
    h_cohort = 44
    draw_box(ax, 575, y_cohort, 135, h_cohort, "CPE 2027", "AY 2027-2028\n(Draft)", c_card, fontsize_title=8.5, fontsize_sub=7)
    draw_box(ax, 725, y_cohort, 140, h_cohort, "CPE 2026", "AY 2026-2027\n(Active Baseline)", c_card, fontsize_title=8.5, fontsize_sub=7)
    draw_box(ax, 880, y_cohort, 135, h_cohort, "CPE 2025-23", "Historical\nArchives", c_card, fontsize_title=8.5, fontsize_sub=7)

    p_cohort_parent = (795, y_sec - h_sec)
    draw_orthogonal_line(ax, p_cohort_parent, (642, y_cohort))
    draw_orthogonal_line(ax, p_cohort_parent, (795, y_cohort))
    draw_orthogonal_line(ax, p_cohort_parent, (947, y_cohort))

    # Standardized Workspaces Hub
    y_ws_hub = 640
    h_ws_hub = 42
    draw_box(ax, 575, y_ws_hub, 440, h_ws_hub, "STANDARDIZED WORKSPACE MODULES (PER VERSION)", "Shared Multi-View Operational Interface for Selected Cohort", c_l2, fontsize_title=10, fontsize_sub=8)

    draw_orthogonal_line(ax, (642, y_cohort - h_cohort), (642, y_ws_hub + 10), arrow=False)
    draw_orthogonal_line(ax, (795, y_cohort - h_cohort), (795, y_ws_hub))
    draw_orthogonal_line(ax, (947, y_cohort - h_cohort), (947, y_ws_hub + 10), arrow=False)
    path_c = Path([(642, y_ws_hub + 10), (947, y_ws_hub + 10)], [Path.MOVETO, Path.LINETO])
    ax.add_patch(PathPatch(path_c, facecolor='none', edgecolor='#475569', linewidth=1.5, zorder=2))

    # 5 Modules
    y_mod = 520
    h_mod = 52
    w_mod = 220
    xs_mod = [80, 320, 560, 800, 1040]
    
    draw_box(ax, xs_mod[0], y_mod, w_mod, h_mod, "1. CURRICULUM DASHBOARD", "Cohort Health, Total Units & Status", c_card, fontsize_title=9, fontsize_sub=7.5)
    draw_box(ax, xs_mod[1], y_mod, w_mod, h_mod, "2. INTERACTIVE FLOWCHART", "Visual Prerequisite DAG & Terms", c_card, fontsize_title=9, fontsize_sub=7.5)
    draw_box(ax, xs_mod[2], y_mod, w_mod, h_mod, "3. CURRICULUM SPREADSHEET", "Tabular Grid, Units, Hours & Requisites", c_card, fontsize_title=9, fontsize_sub=7.5)
    draw_box(ax, xs_mod[3], y_mod, w_mod, h_mod, "4. OBE CURRICULUM MAP", "Course-to-SO / SO-to-PEO / GA Hub", c_card, fontsize_title=9, fontsize_sub=7.5)
    draw_box(ax, xs_mod[4], y_mod, 240, h_mod, "5. OFFICIAL DOCUMENTS", "Institutional Regulatory Sheets 1-7", c_card, fontsize_title=9, fontsize_sub=7.5)

    p_ws_bottom = (795, y_ws_hub - h_ws_hub)
    for x_m, w_m in zip(xs_mod[:4], [w_mod]*4):
        draw_orthogonal_line(ax, p_ws_bottom, (x_m + w_m/2, y_mod))
    draw_orthogonal_line(ax, p_ws_bottom, (xs_mod[4] + 120, y_mod))

    # Workspace Sub-details
    draw_box(ax, xs_mod[0], 420, w_mod, 34, "Summary KPI Cards", "154 Units, 52 Courses, 8 Semesters", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_box(ax, xs_mod[0], 375, w_mod, 34, "Prerequisite Chain Metrics", "Orphan & Cycle Conflict Checks", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_orthogonal_line(ax, (xs_mod[0] + w_mod/2, y_mod - h_mod), (xs_mod[0] + w_mod/2, 420))
    draw_orthogonal_line(ax, (xs_mod[0] + w_mod/2, 420 - 34), (xs_mod[0] + w_mod/2, 375))

    draw_box(ax, xs_mod[1], 420, w_mod, 34, "Drag-and-Drop Term Grid", "Year 1 to Year 4 Term Columns", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_box(ax, xs_mod[1], 375, w_mod, 34, "Course Node Modal Inspector", "Syllabus Link, Co/Prerequisites", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_box(ax, xs_mod[1], 330, w_mod, 34, "Obsidian Gold Dark Mode", "High-Contrast Presentation Canvas", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_orthogonal_line(ax, (xs_mod[1] + w_mod/2, y_mod - h_mod), (xs_mod[1] + w_mod/2, 420))
    draw_orthogonal_line(ax, (xs_mod[1] + w_mod/2, 420 - 34), (xs_mod[1] + w_mod/2, 375))
    draw_orthogonal_line(ax, (xs_mod[1] + w_mod/2, 375 - 34), (xs_mod[1] + w_mod/2, 330))

    draw_box(ax, xs_mod[2], 420, w_mod, 34, "Inline Cell Data Editing", "Codes, Titles, Lec/Lab Hours", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_box(ax, xs_mod[2], 375, w_mod, 34, "Excel Batch Import / Export", "CSV / XLSX Two-Way Ingestion", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_box(ax, xs_mod[2], 330, w_mod, 34, "Automated Total Unit Tally", "Real-time Verification per Term", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_orthogonal_line(ax, (xs_mod[2] + w_mod/2, y_mod - h_mod), (xs_mod[2] + w_mod/2, 420))
    draw_orthogonal_line(ax, (xs_mod[2] + w_mod/2, 420 - 34), (xs_mod[2] + w_mod/2, 375))
    draw_orthogonal_line(ax, (xs_mod[2] + w_mod/2, 375 - 34), (xs_mod[2] + w_mod/2, 330))

    draw_box(ax, xs_mod[3], 420, w_mod, 34, "Course-to-SO Matrix (I, E, D)", "Introductory, Enabling, Demonstrative", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_box(ax, xs_mod[3], 375, w_mod, 34, "SO-to-PEO Alignment", "Student Outcomes to Objectives", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_box(ax, xs_mod[3], 330, w_mod, 34, "PEO-to-GA Alignment Hub", "Graduate Attributes Compliance", c_leaf, fontsize_title=7.5, fontsize_sub=6.5)
    draw_orthogonal_line(ax, (xs_mod[3] + w_mod/2, y_mod - h_mod), (xs_mod[3] + w_mod/2, 420))
    draw_orthogonal_line(ax, (xs_mod[3] + w_mod/2, 420 - 34), (xs_mod[3] + w_mod/2, 375))
    draw_orthogonal_line(ax, (xs_mod[3] + w_mod/2, 375 - 34), (xs_mod[3] + w_mod/2, 330))

    sheets = [
        "Sheet 1: Summary Matrix",
        "Sheet 2: Comparative Report",
        "Sheet 3: Curriculum Flowchart Doc",
        "Sheet 4: Official Course Catalog",
        "Sheet 5: Program of Study",
        "Sheet 6: Prospectus Sheet",
        "Sheet 7: Institutional Sign-Off"
    ]
    y_s = 440
    for idx, s in enumerate(sheets):
        draw_box(ax, xs_mod[4], y_s - idx*32, 240, 26, s, None, c_leaf, fontsize_title=7.5)
    draw_orthogonal_line(ax, (xs_mod[4] + 120, y_mod - h_mod), (xs_mod[4] + 120, y_s))

    # Global footer
    y_bot = 120
    draw_box(ax, 80, y_bot, 460, 48, "ROLE-BASED ACCESS & AUTHENTICATION", "Admin, Curriculum Chair, College Dean, Faculty Evaluator", c_root, fontsize_title=9.5, fontsize_sub=8)
    draw_box(ax, 580, y_bot, 430, 48, "SYSTEM SETTINGS & WORKSPACE PREFERENCES", "Theme Toggle (Light / Obsidian Gold), Export Parameters", c_sec, fontsize_title=9.5, fontsize_sub=8)
    draw_box(ax, 1040, y_bot, 240, 48, "SYSTEM AUDIT & INTEGRITY", "SHA-256 Timestamps & Version Diffing", c_root, fontsize_title=9.5, fontsize_sub=8)

    plt.tight_layout()
    output_path = r'c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\scratch\ia_matplotlib.png'
    plt.savefig(output_path, format='png', dpi=300, bbox_inches='tight')
    plt.close()
    print("Regenerated Figure 3.1 saved.")


def generate_fig3_2():
    # Figure 3.2: Navigation Structure Flowchart
    fig, ax = plt.subplots(figsize=(20, 14), dpi=300)
    ax.set_xlim(0, 2000)
    ax.set_ylim(0, 1400)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    # Color palette
    c_auth = {'bg': '#0F172A', 'text': '#FFFFFF', 'border': '#020617', 'sub': '#94A3B8'}
    c_router = {'bg': '#1E293B', 'text': '#FFFFFF', 'border': '#0F172A', 'sub': '#CBD5E1'}
    c_sub = {'bg': '#0284C7', 'text': '#FFFFFF', 'border': '#0369A1', 'sub': '#E0F2FE'}
    c_cohort = {'bg': '#0F766E', 'text': '#FFFFFF', 'border': '#115E59', 'sub': '#CCFBF1'}
    c_ws = {'bg': '#2563EB', 'text': '#FFFFFF', 'border': '#1D4ED8', 'sub': '#DBEAFE'}
    c_leaf = {'bg': '#F8FAFC', 'text': '#1E293B', 'border': '#94A3B8', 'sub': '#475569'}
    c_modal = {'bg': '#FFFBEB', 'text': '#92400E', 'border': '#F59E0B', 'sub': '#B45309'}

    # Title Banner
    ax.text(1000, 1360, "FIGURE 3.2: NAVIGATION STRUCTURE FLOWCHART", ha='center', va='center',
            fontsize=17, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(1000, 1332, "User Interaction Routing, Forward Drilldowns, Workspace Switching & Return Paths", ha='center', va='center',
            fontsize=11, color='#64748B', family='sans-serif')

    # 1. AUTHENTICATION & ROLE SELECTION (Top Left Entry)
    draw_box(ax, 750, 1285, 500, 52, "USER AUTHENTICATION & ROLE SELECTION", "Login Modal / Multi-Role Switcher (Admin, Dean, Chair, Faculty)", c_auth, fontsize_title=11, fontsize_sub=8.5)

    # 2. PERSISTENT NAVIGATION ROUTER (The Central Coordinator)
    draw_box(ax, 750, 1180, 500, 50, "LEFT NAVIGATION TREE ROUTER (PERSISTENT SIDEBAR)", "School of Engineering -> BSCpE Program Node", c_router, fontsize_title=11, fontsize_sub=8.5)
    draw_straight_arrow(ax, (1000, 1285 - 52), (1000, 1180), color='#0F172A', lw=2, label="Authorized Entry")

    # From Router to 3 Main Sections:
    # Left: Core Subsystem 1 (Curriculum Management)
    # Center-Right: Syllabus Management
    # Far-Right: Course Management
    y_nav_sub = 1060
    h_nav_sub = 50
    draw_box(ax, 100, y_nav_sub, 1080, h_nav_sub, "1. CURRICULUM MANAGEMENT NAVIGATION BRANCH", "Primary Workflow Zone for Cohort Management, Workspaces & Audits", c_sub, fontsize_title=11.5, fontsize_sub=8.5)
    draw_box(ax, 1260, y_nav_sub, 320, h_nav_sub, "2. SYLLABUS MANAGEMENT", "Syllabus List, ILOs & Matrix Editor", c_router, fontsize_title=9.5, fontsize_sub=8)
    draw_box(ax, 1630, y_nav_sub, 300, h_nav_sub, "3. COURSE MANAGEMENT", "Master Course Directory & Requisites", c_router, fontsize_title=9.5, fontsize_sub=8)

    p_router_bot = (1000, 1180 - 50)
    draw_orthogonal_line(ax, p_router_bot, (640, y_nav_sub), color='#0284C7', lw=1.8, label="Select Subsystem")
    draw_orthogonal_line(ax, p_router_bot, (1420, y_nav_sub), color='#64748B', lw=1.5)
    draw_orthogonal_line(ax, p_router_bot, (1780, y_nav_sub), color='#64748B', lw=1.5)

    # Sub-routes under Syllabus & Course
    y_nav_bar = 270
    draw_box(ax, 1260, 950, 320, 42, "Course Syllabus Workspace", "View / Edit Topic Rubrics & Outcomes", c_leaf, fontsize_title=8.5, fontsize_sub=7.5)
    draw_straight_arrow(ax, (1420, y_nav_sub - h_nav_sub), (1420, 950), color='#64748B', lw=1.2)
    # Direct return path all the way down to Breadcrumb engine
    draw_orthogonal_line(ax, (1420, 950 - 42), (1420, y_nav_bar), color='#94A3B8', lw=1.2, dashed=True)

    draw_box(ax, 1630, 950, 300, 42, "Course Repertoire View", "Add Course, Edit Pre/Co-Requisites", c_leaf, fontsize_title=8.5, fontsize_sub=7.5)
    draw_straight_arrow(ax, (1780, y_nav_sub - h_nav_sub), (1780, 950), color='#64748B', lw=1.2)
    # Direct return path all the way down to Breadcrumb engine
    draw_orthogonal_line(ax, (1780, 950 - 42), (1780, y_nav_bar), color='#94A3B8', lw=1.2, dashed=True)

    # UNDER CURRICULUM MANAGEMENT:
    # 4 Branch Destinations:
    # A) Management Homepage (Overview)
    # B) Versioning History
    # C) Cohort Selection (CPE 2027 Draft / CPE 2026 Active / Archives)
    # D) Tools & Reports (Global Map, Delegations, Audit)
    y_curr_routes = 950
    h_curr_routes = 46
    draw_box(ax, 100, y_curr_routes, 220, h_curr_routes, "MANAGEMENT HOMEPAGE", "view-curriculum-home", c_leaf, fontsize_title=9, fontsize_sub=7.5)
    draw_box(ax, 345, y_curr_routes, 220, h_curr_routes, "VERSIONING HISTORY", "view-versioning-history", c_leaf, fontsize_title=9, fontsize_sub=7.5)
    draw_box(ax, 590, y_curr_routes, 360, h_curr_routes, "COHORT SELECTION", "Draft 2027 / Active 2026 / Archives", c_cohort, fontsize_title=10, fontsize_sub=8)
    draw_box(ax, 975, y_curr_routes, 205, h_curr_routes, "TOOLS & REPORTS", "Delegations & Audit Trail", c_leaf, fontsize_title=9, fontsize_sub=7.5)

    p_curr_sub_bot = (640, y_nav_sub - h_nav_sub)
    draw_orthogonal_line(ax, p_curr_sub_bot, (210, y_curr_routes), color='#0284C7', lw=1.5)
    draw_orthogonal_line(ax, p_curr_sub_bot, (455, y_curr_routes), color='#0284C7', lw=1.5)
    draw_orthogonal_line(ax, p_curr_sub_bot, (770, y_curr_routes), color='#0F766E', lw=2, label="Open Cohort")
    draw_orthogonal_line(ax, p_curr_sub_bot, (1077, y_curr_routes), color='#0284C7', lw=1.5)

    # Cohort Selection launches WORKSPACE ENVIRONMENT
    # Workspace Navigator with Tab Switching
    y_ws = 825
    h_ws = 50
    draw_box(ax, 430, y_ws, 680, h_ws, "ACTIVE CURRICULUM WORKSPACE (ZERO-RELOAD VIEW SWITCHER)", "Persistent Top Tab Bar: Instant Switching Across 5 Operational Views", c_ws, fontsize_title=11, fontsize_sub=8.5)
    draw_straight_arrow(ax, (770, y_curr_routes - h_curr_routes), (770, y_ws), color='#0F766E', lw=2, label="Mount Cohort State")

    # THE 5 WORKSPACE VIEWS
    y_tabs = 690
    h_tabs = 55
    w_tab = 210
    xs_tab = [70, 310, 550, 790, 1030]

    draw_box(ax, xs_tab[0], y_tabs, w_tab, h_tabs, "DASHBOARD VIEW", "Health, Total Units & KPIs\n[Tab: view-dashboard]", c_leaf, fontsize_title=9, fontsize_sub=7)
    draw_box(ax, xs_tab[1], y_tabs, w_tab, h_tabs, "FLOWCHART VIEW", "Interactive DAG Canvas\n[Tab: view-flowchart]", c_leaf, fontsize_title=9, fontsize_sub=7)
    draw_box(ax, xs_tab[2], y_tabs, w_tab, h_tabs, "SPREADSHEET VIEW", "Tabular Grid & Batch Import\n[Tab: view-spreadsheet]", c_leaf, fontsize_title=9, fontsize_sub=7)
    draw_box(ax, xs_tab[3], y_tabs, w_tab, h_tabs, "OBE MATRIX VIEW", "Course-to-SO / PEO Align\n[Tab: view-obe]", c_leaf, fontsize_title=9, fontsize_sub=7)
    draw_box(ax, xs_tab[4], y_tabs, 230, h_tabs, "DOCUMENTS VIEW", "Regulatory Accordion Sheets\n[Tab: view-documents]", c_leaf, fontsize_title=9, fontsize_sub=7)

    # Distribute from Active Workspace Tab Bar to 5 Views
    p_ws_bot = (770, y_ws - h_ws)
    for xt in xs_tab[:4]:
        draw_orthogonal_line(ax, p_ws_bot, (xt + w_tab/2, y_tabs), color='#2563EB', lw=1.5)
    draw_orthogonal_line(ax, p_ws_bot, (xs_tab[4] + 115, y_tabs), color='#2563EB', lw=1.5)

    # Bi-directional tab switching note
    ax.annotate('', xy=(xs_tab[4] + 115, y_tabs + 8), xytext=(xs_tab[0] + w_tab/2, y_tabs + 8),
                arrowprops=dict(arrowstyle="<->", color='#2563EB', lw=1.2, linestyle=':'))
    ax.text(635, y_tabs + 14, "Zero-Reload Tab Switching (State Preserved in Memory)", ha='center', va='bottom',
            fontsize=7.5, fontweight='bold', color='#2563EB', bbox=dict(boxstyle='round,pad=0.2', facecolor='#EFF6FF', edgecolor='#BFDBFE'))

    # DEEP DRILLDOWNS / MODAL OVERLAYS (Level 5)
    y_modal = 530
    h_modal = 52

    # Flowchart -> Course Modal
    draw_box(ax, xs_tab[1], y_modal, w_tab, h_modal, "COURSE DETAILS MODAL", "Requisites, Syllabus Link, ILOs\n(Overlay Inspector)", c_modal, fontsize_title=8.5, fontsize_sub=7)
    draw_straight_arrow(ax, (xs_tab[1] + w_tab/2, y_tabs - h_tabs), (xs_tab[1] + w_tab/2, y_modal), color='#D97706', lw=1.5, label="Click Node")
    # Modal return
    draw_orthogonal_line(ax, (xs_tab[1] + 15, y_modal), (xs_tab[1] + 15, y_tabs - h_tabs), color='#D97706', lw=1.2, arrow=True, dashed=True, label="Close")

    # Flowchart -> Obsidian Dark Mode
    draw_box(ax, xs_tab[1], 410, w_tab, 42, "Obsidian Dark Mode Canvas", "High-Contrast Presentation\n(Theme Toggle State)", c_auth, fontsize_title=8.5, fontsize_sub=7)
    draw_straight_arrow(ax, (xs_tab[1] + w_tab/2, y_modal - h_modal), (xs_tab[1] + w_tab/2, 410), color='#64748B', lw=1.2, label="Toggle Dark")

    # Spreadsheet -> Batch Excel Modal
    draw_box(ax, xs_tab[2], y_modal, w_tab, h_modal, "BATCH EXCEL MODAL", "Two-Way CSV / XLSX Ingestion\n& Requisite Validation", c_modal, fontsize_title=8.5, fontsize_sub=7)
    draw_straight_arrow(ax, (xs_tab[2] + w_tab/2, y_tabs - h_tabs), (xs_tab[2] + w_tab/2, y_modal), color='#D97706', lw=1.5, label="Import/Export")
    draw_orthogonal_line(ax, (xs_tab[2] + 15, y_modal), (xs_tab[2] + 15, y_tabs - h_tabs), color='#D97706', lw=1.2, arrow=True, dashed=True, label="Done")

    # OBE -> Alignment Inspector
    draw_box(ax, xs_tab[3], y_modal, w_tab, h_modal, "OBE ALIGNMENT INSPECTOR", "Course-to-SO / SO-to-PEO\nAudit & Compliance Matrix", c_modal, fontsize_title=8.5, fontsize_sub=7)
    draw_straight_arrow(ax, (xs_tab[3] + w_tab/2, y_tabs - h_tabs), (xs_tab[3] + w_tab/2, y_modal), color='#D97706', lw=1.5, label="Inspect Cells")
    draw_orthogonal_line(ax, (xs_tab[3] + 15, y_modal), (xs_tab[3] + 15, y_tabs - h_tabs), color='#D97706', lw=1.2, arrow=True, dashed=True, label="Close")

    # Documents -> Sheet 1-7 Accordion
    draw_box(ax, xs_tab[4], y_modal, 230, h_modal, "REGULATORY VIEWER (SHEETS 1-7)", "Official Catalog, Flowchart Doc,\nProgram of Study & Prospectus", c_modal, fontsize_title=8.5, fontsize_sub=7)
    draw_straight_arrow(ax, (xs_tab[4] + 115, y_tabs - h_tabs), (xs_tab[4] + 115, y_modal), color='#D97706', lw=1.5, label="Select Sheet")
    draw_orthogonal_line(ax, (xs_tab[4] + 15, y_modal), (xs_tab[4] + 15, y_tabs - h_tabs), color='#D97706', lw=1.2, arrow=True, dashed=True, label="Close")

    # GLOBAL RETURN PATHWAYS & BREADCRUMB HOPS
    # Breadcrumb trail banner across full width
    y_nav_bar = 270
    draw_box(ax, 70, y_nav_bar, 1860, 48, "BREADCRUMB & RANDOM-ACCESS ROUTING ENGINE", "Contextual Trail: Home > SoE > BSCpE > Curriculum > CPE 2026 > [Active View] | Instant Parent Traversal", c_router, fontsize_title=9.5, fontsize_sub=8)

    # Return arrows from Views into Breadcrumb engine
    draw_orthogonal_line(ax, (xs_tab[0] + w_tab/2, y_tabs - h_tabs), (xs_tab[0] + w_tab/2, y_nav_bar), color='#94A3B8', lw=1.2, dashed=True)
    draw_orthogonal_line(ax, (xs_tab[1] + w_tab/2, 410 - 42), (xs_tab[1] + w_tab/2, y_nav_bar), color='#94A3B8', lw=1.2, dashed=True)
    draw_orthogonal_line(ax, (xs_tab[2] + w_tab/2, y_modal - h_modal), (xs_tab[2] + w_tab/2, y_nav_bar), color='#94A3B8', lw=1.2, dashed=True)
    draw_orthogonal_line(ax, (xs_tab[3] + w_tab/2, y_modal - h_modal), (xs_tab[3] + w_tab/2, y_nav_bar), color='#94A3B8', lw=1.2, dashed=True)
    draw_orthogonal_line(ax, (xs_tab[4] + 115, y_modal - h_modal), (xs_tab[4] + 115, y_nav_bar), color='#94A3B8', lw=1.2, dashed=True)

    # Breadcrumb upwards routing back to Router via clear outer lane on left
    verts_up = [(70, y_nav_bar), (40, y_nav_bar), (40, 1155), (750, 1155)]
    codes_up = [Path.MOVETO, Path.LINETO, Path.LINETO, Path.LINETO]
    path_up = Path(verts_up, codes_up)
    patch_up = PathPatch(path_up, facecolor='none', edgecolor='#0284C7', linewidth=1.8, linestyle='--', zorder=2)
    ax.add_patch(patch_up)
    ax.annotate('', xy=(750, 1155), xytext=(740, 1155),
                arrowprops=dict(arrowstyle="-|>", color='#0284C7', lw=1.8, mutation_scale=12), zorder=2)
    ax.text(25, 710, "1-Click Breadcrumb & Sidebar Jump (Upward Traversal)", ha='center', va='center',
            fontsize=8, fontweight='bold', color='#0284C7', rotation=90,
            bbox=dict(boxstyle='round,pad=0.3', facecolor='#EFF6FF', edgecolor='#93C5FD'), zorder=5)

    # LEGEND / NAVIGATION CONVENTIONS
    y_leg = 140
    draw_box(ax, 70, y_leg, 1860, 48, "NAVIGATION CONVENTIONS & INTEGRITY GUARANTEES", "Solid Lines: Primary Drilldown Transitions  |  Dashed Lines: Upward Return Paths / Modal Dismissals  |  Dotted Blue: In-Memory Tab Switching", c_leaf, fontsize_title=9, fontsize_sub=8)

    plt.tight_layout()
    output_path = r'c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\scratch\nav_matplotlib.png'
    plt.savefig(output_path, format='png', dpi=300, bbox_inches='tight')
    plt.close()
    print("Regenerated Figure 3.2 saved.")

def generate_fig3_3(out_dir):
    # Figure 3.3: User Login Flow
    fig, ax = plt.subplots(figsize=(10, 12), dpi=300)
    ax.set_xlim(0, 1000)
    ax.set_ylim(0, 1200)
    ax.axis('off')
    fig.patch.set_facecolor('#FFFFFF')

    # Color palette - Clean Academic
    c_term = {'bg': '#10B981', 'text': '#FFFFFF', 'border': '#059669', 'sub': '#D1FAE5'}
    c_step = {'bg': '#FFFFFF', 'text': '#0F172A', 'border': '#2563EB', 'sub': '#475569'}
    c_dec = {'bg': '#FEF2F2', 'text': '#991B1B', 'border': '#EF4444', 'sub': '#B91C1C'}
    c_err = {'bg': '#FFF1F2', 'text': '#BE123C', 'border': '#E11D48', 'sub': '#881337'}

    # Title
    ax.text(500, 1160, "FIGURE 3.3: USER LOGIN FLOW", ha='center', va='center',
            fontsize=15, fontweight='bold', color='#0F172A', family='sans-serif')
    ax.text(500, 1135, "Authentication, Role Verification & Session Initialization Sequence", ha='center', va='center',
            fontsize=10, color='#64748B', family='sans-serif')

    # Start Pill (x=380, y=1070, w=240, h=45)
    box_start = FancyBboxPatch((380, 1070 - 45), 240, 45, boxstyle="round,pad=3,rounding_size=20",
                               facecolor=c_term['bg'], edgecolor=c_term['border'], linewidth=1.5, zorder=3)
    ax.add_patch(box_start)
    ax.text(500, 1070 - 22.5, "START", ha='center', va='center',
            fontsize=11, fontweight='bold', color='#FFFFFF', zorder=4, family='sans-serif')

    # Step 1: Access Login Page
    draw_box(ax, 350, 975, 300, 48, "Access System Login Page", "system://curriculum-management/login", c_step, fontsize_title=9.5, fontsize_sub=8)
    draw_straight_arrow(ax, (500, 1070 - 45), (500, 975), color='#0F172A', lw=1.5)

    # Step 2: Enter Credentials
    draw_box(ax, 350, 880, 300, 48, "Enter Email and Password", "Institutional Account Credentials", c_step, fontsize_title=9.5, fontsize_sub=8)
    draw_straight_arrow(ax, (500, 975 - 48), (500, 880), color='#0F172A', lw=1.5)

    # Step 3: Validate Credentials
    draw_box(ax, 350, 785, 300, 48, "Validate Credentials & Role", "Query Identity Store & Hash Verification", c_step, fontsize_title=9.5, fontsize_sub=8)
    draw_straight_arrow(ax, (500, 880 - 48), (500, 785), color='#0F172A', lw=1.5)

    # Decision Diamond: Credentials Valid? (Centered at x=500, y=650, w=260, h=90)
    cx, cy, dw, dh = 500, 650, 140, 50
    diamond_pts = [(cx, cy + dh), (cx + dw, cy), (cx, cy - dh), (cx - dw, cy)]
    diamond = patches.Polygon(diamond_pts, closed=True, facecolor=c_dec['bg'], edgecolor=c_dec['border'], linewidth=2, zorder=3)
    ax.add_patch(diamond)
    ax.text(cx, cy, "Credentials Valid?", ha='center', va='center',
            fontsize=10.5, fontweight='bold', color=c_dec['text'], zorder=4, family='sans-serif')
    draw_straight_arrow(ax, (500, 785 - 48), (500, cy + dh), color='#0F172A', lw=1.5)

    # Branch YES (Right) -> Dashboard
    draw_box(ax, 680, 510, 260, 50, "Grant System Access", "Mount Role Dashboard Workspace", c_step, fontsize_title=9.5, fontsize_sub=8)
    
    # Path for YES: From (cx + dw, cy) -> right -> down to Grant Access top
    p_yes_start = (cx + dw, cy)
    p_yes_end = (810, 510)
    verts_yes = [p_yes_start, (810, cy), p_yes_end]
    codes_yes = [Path.MOVETO, Path.LINETO, Path.LINETO]
    patch_yes = PathPatch(Path(verts_yes, codes_yes), facecolor='none', edgecolor='#059669', linewidth=1.8, zorder=2)
    ax.add_patch(patch_yes)
    ax.annotate('', xy=p_yes_end, xytext=(810, 515),
                arrowprops=dict(arrowstyle="-|>", color='#059669', lw=1.8, mutation_scale=10), zorder=2)
    ax.text(700, cy + 8, "Yes [Valid]", ha='center', va='bottom', fontsize=8.5, fontweight='bold', color='#059669')

    # End Pill
    box_end = FancyBboxPatch((690, 390 - 45), 240, 45, boxstyle="round,pad=3,rounding_size=20",
                             facecolor=c_term['bg'], edgecolor=c_term['border'], linewidth=1.5, zorder=3)
    ax.add_patch(box_end)
    ax.text(810, 390 - 22.5, "END (ACTIVE SESSION)", ha='center', va='center',
            fontsize=10.5, fontweight='bold', color='#FFFFFF', zorder=4, family='sans-serif')
    draw_straight_arrow(ax, (810, 510 - 50), (810, 390), color='#059669', lw=1.5)

    # Branch NO (Left) -> Display Error Message
    draw_box(ax, 60, 510, 260, 50, "Display Error Notification", "Invalid Credentials / Account Locked", c_err, fontsize_title=9.5, fontsize_sub=8)
    p_no_start = (cx - dw, cy)
    p_no_end = (190, 510)
    verts_no = [p_no_start, (190, cy), p_no_end]
    codes_no = [Path.MOVETO, Path.LINETO, Path.LINETO]
    patch_no = PathPatch(Path(verts_no, codes_no), facecolor='none', edgecolor='#E11D48', linewidth=1.8, zorder=2)
    ax.add_patch(patch_no)
    ax.annotate('', xy=p_no_end, xytext=(190, 515),
                arrowprops=dict(arrowstyle="-|>", color='#E11D48', lw=1.8, mutation_scale=10), zorder=2)
    ax.text(300, cy + 8, "No [Invalid]", ha='center', va='bottom', fontsize=8.5, fontweight='bold', color='#E11D48')

    # Step: Retry Login
    draw_box(ax, 60, 400, 260, 46, "Prompt Credential Retry", "Reset Password Field & Focus", c_step, fontsize_title=9, fontsize_sub=7.5)
    draw_straight_arrow(ax, (190, 510 - 50), (190, 400), color='#E11D48', lw=1.5)

    # Loop back from Retry to Enter Credentials
    verts_loop = [(190, 400 - 46), (190, 310), (30, 310), (30, 856), (350, 856)]
    codes_loop = [Path.MOVETO, Path.LINETO, Path.LINETO, Path.LINETO, Path.LINETO]
    patch_loop = PathPatch(Path(verts_loop, codes_loop), facecolor='none', edgecolor='#64748B', linewidth=1.5, linestyle='--', zorder=2)
    ax.add_patch(patch_loop)
    ax.annotate('', xy=(350, 856), xytext=(340, 856),
                arrowprops=dict(arrowstyle="-|>", color='#64748B', lw=1.5, mutation_scale=10), zorder=2)
    ax.text(35, 600, "Re-enter Credentials", rotation=90, ha='center', va='center',
            fontsize=8, fontweight='bold', color='#64748B',
            bbox=dict(boxstyle='round,pad=0.2', facecolor='#FFFFFF', edgecolor='#CBD5E1'))

    plt.tight_layout()
    output_path = os.path.join(out_dir, "Figure_3.3_User_Login_Flow.png")
    plt.savefig(output_path, format='png', dpi=300, bbox_inches='tight')
    plt.close()
    print("Saved Figure 3.3 to", output_path)


if __name__ == '__main__':
    out_dir = r"c:\Users\Dean Alejandrino\Documents\antigravity\jolly-davinci\generated_graphs"
    os.makedirs(out_dir, exist_ok=True)
    
    # Generate 3.1
    generate_fig3_1()
    # Copy to graphs dir
    import shutil
    shutil.copy(r'scratch\ia_matplotlib.png', os.path.join(out_dir, "Figure_3.1_Information_Architecture_Flowchart.png"))
    
    # Generate 3.2
    generate_fig3_2()
    shutil.copy(r'scratch\nav_matplotlib.png', os.path.join(out_dir, "Figure_3.2_Navigation_Structure_Flowchart.png"))
    
    # Generate 3.3
    generate_fig3_3(out_dir)
    print("All 3 graphs generated in:", out_dir)

