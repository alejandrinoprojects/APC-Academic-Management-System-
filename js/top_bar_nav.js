/**
 * APC Academic Architecture Suite
 * Top Bar Navigation & Quick Jump Search Engine (js/top_bar_nav.js)
 * 
 * Features:
 * 1. Interactive, Individually Clickable Path Breadcrumbs
 *    - Each breadcrumb segment (Schools, School, Program, View, Sheet) is an independent
 *      interactive button routing directly to that level in the hierarchy.
 *    - Preserves APC Gold active terminal pill styling and smooth micro-interactions.
 *    - Syncs transparently with navHistory (< > buttons) and sidebar folder hierarchy.
 * 2. Universal Quick Jump & Command Palette Search Bar
 *    - Live autocomplete matching Schools, Programs, Views, and all 74 Curriculum Courses.
 *    - Instant jump to any course on the Flowchart DAG with auto-pan and gold focus highlight.
 *    - Full keyboard navigation (ArrowUp, ArrowDown, Enter, Escape, Ctrl+K / Cmd+K).
 * 3. Transparent Backward Compatibility
 *    - Intercepts innerText updates on #topBarPathPill to ensure existing code and tests pass.
 */

(function(window) {
  'use strict';

  let rawPathString = 'Schools';
  let activeSearchIndex = -1;
  let currentMatchingItems = [];

  // =========================================================================
  // 1. INTERACTIVE PATH BREADCRUMBS ENGINE
  // =========================================================================

  /**
   * Parse a raw path string or structured array into rich clickable breadcrumb segments.
   */
  function parsePathSegments(input) {
    if (Array.isArray(input)) return input;
    const str = String(input || 'Schools').trim();
    const parts = str.split(/[>›]/).map(p => p.trim()).filter(Boolean);
    if (!parts.length) parts.push('Schools');

    const segments = [];
    let detectedSchoolId = 'soe';
    let detectedProgCode = 'BSCpE';

    parts.forEach((part, idx) => {
      const isLast = idx === parts.length - 1;
      const lower = part.toLowerCase();

      // Root Segment: Schools / Institutional
      if (idx === 0 || lower === 'schools' || lower === 'admin') {
        segments.push({
          label: 'Schools',
          icon: '🏛️',
          tooltip: 'Institutional Overview (All Schools)',
          isLast: isLast,
          onClick: () => {
            if (typeof window.renderAdminOverview === 'function') {
              window.renderAdminOverview();
            }
          }
        });
        return;
      }

      // School Segment (Engineering, Computing, etc.)
      const schoolMatch = matchSchool(part);
      if (schoolMatch) {
        detectedSchoolId = schoolMatch.id;
        segments.push({
          label: schoolMatch.name.toUpperCase(),
          icon: '🏫',
          tooltip: `${schoolMatch.name} (EXD Homepage)`,
          isLast: isLast,
          onClick: () => {
            if (typeof window.goToSchoolExd === 'function') {
              window.goToSchoolExd(schoolMatch.id);
            }
          }
        });
        return;
      }

      // EXD Terminal or School View
      if (lower === 'exd') {
        segments.push({
          label: 'EXD',
          icon: '⚡',
          tooltip: 'Executive Director Overview',
          isLast: isLast,
          onClick: () => {
            if (typeof window.goToSchoolExd === 'function') {
              window.goToSchoolExd(detectedSchoolId);
            }
          }
        });
        return;
      }

      // Degree Program Segment (BSCpE, BSCE, BSECE, BSCS, etc.)
      const progMatch = matchProgram(part);
      if (progMatch) {
        detectedProgCode = progMatch.code;
        if (progMatch.schoolId) detectedSchoolId = progMatch.schoolId;
        segments.push({
          label: progMatch.code,
          icon: '🎓',
          tooltip: `${progMatch.name} • Program Director Workbench`,
          isLast: isLast,
          onClick: () => {
            if (typeof window.selectProgram === 'function') {
              window.selectProgram(progMatch.code, 'homePdProgramView');
            }
          }
        });
        return;
      }

      // Official Documents Sub-sheet (e.g. Sheet 1, Sheet 2)
      const sheetMatch = part.match(/sheet\s*(\d+)/i);
      if (sheetMatch) {
        const sheetIdx = parseInt(sheetMatch[1], 10);
        segments.push({
          label: `Sheet ${sheetIdx}`,
          icon: '📜',
          tooltip: `Registrar Official Document: Sheet ${sheetIdx}`,
          isLast: isLast,
          onClick: () => {
            if (typeof window.selectProgram === 'function') {
              window.selectProgram(detectedProgCode, 'registrar', sheetIdx);
            }
          }
        });
        return;
      }

      // Specific Views (Flowchart, Spreadsheet, Syllabi, etc.)
      const viewInfo = mapViewPart(part);
      segments.push({
        label: viewInfo.label,
        icon: viewInfo.icon,
        tooltip: viewInfo.tooltip,
        isLast: isLast,
        onClick: () => {
          if (viewInfo.viewId === 'homePdProgramView') {
            if (typeof window.selectProgram === 'function') {
              window.selectProgram(detectedProgCode, 'homePdProgramView');
            }
          } else if (typeof window.selectProgram === 'function') {
            window.selectProgram(detectedProgCode, viewInfo.viewId);
          } else if (typeof window.navigateView === 'function') {
            window.navigateView(viewInfo.viewId);
          }
        }
      });
    });

    return segments;
  }

  function matchSchool(str) {
    const s = str.toLowerCase();
    if (s.includes('eng') || s === 'soe') return { id: 'soe', name: 'Engineering' };
    if (s.includes('comp') || s.includes('it') || s === 'socit') return { id: 'socit', name: 'Computing & IT' };
    if (s.includes('multi') || s.includes('media') || s === 'soma') return { id: 'soma', name: 'Multimedia Arts' };
    if (s.includes('manage') || s.includes('bus') || s === 'som') return { id: 'som', name: 'Management' };
    if (s.includes('arch') || s === 'soa') return { id: 'soa', name: 'Architecture' };
    return null;
  }

  function matchProgram(str) {
    const s = str.trim().toUpperCase();
    const map = window.PROGRAM_TO_SCHOOL_MAP || {};
    for (const [code, info] of Object.entries(map)) {
      if (s === code.toUpperCase() || s === info.schoolShort?.toUpperCase()) {
        return { code: code, name: info.name, schoolId: info.schoolId };
      }
    }
    const clean = str.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    if (clean === 'BSCPE' || clean === 'CPE') return { code: 'BSCpE', name: 'Computer Engineering', schoolId: 'soe' };
    if (clean === 'BSCE' || clean === 'CE') return { code: 'BSCE', name: 'Civil Engineering', schoolId: 'soe' };
    if (clean === 'BSECE' || clean === 'ECE') return { code: 'BSECE', name: 'Electronics Engineering', schoolId: 'soe' };
    if (clean === 'BSCS' || clean === 'CS') return { code: 'BSCS', name: 'Computer Science', schoolId: 'socit' };
    if (clean === 'BSIT' || clean === 'IT') return { code: 'BSIT', name: 'Information Technology', schoolId: 'socit' };
    return null;
  }

  function mapViewPart(str) {
    const s = str.toLowerCase();
    if (s.includes('historical flowchart') || s === 'past-flowchart') return { label: 'Historical Flowchart', icon: '🗺️', viewId: 'past-flowchart', tooltip: 'Historical Curriculum Flowchart' };
    if (s.includes('flowchart') || s.includes('dag')) return { label: 'Flowchart', icon: '🗺️', viewId: 'flowchart', tooltip: 'Curriculum DAG Flowchart' };
    if (s.includes('spread') || s.includes('master')) return { label: 'Integrated Spreadsheet', icon: '📊', viewId: 'spreadsheet', tooltip: 'Master Curriculum Spreadsheet' };
    if (s.includes('syllab') || s.includes('sms')) return { label: 'Syllabus Management', icon: '📋', viewId: 'syllabus', tooltip: 'Syllabus Management System (SMS)' };
    if (s.includes('course') || s.includes('cms')) return { label: 'Course Management', icon: '📘', viewId: 'course', tooltip: 'Course Management System (CMS)' };
    if (s.includes('cat')) return { label: 'Catalog Directory', icon: '📁', viewId: 'catalog', tooltip: 'Course Catalog Directory' };
    if (s.includes('obe')) return { label: 'OBE Matrix Map', icon: '🎯', viewId: 'obe', tooltip: 'OBE Curriculum Matrix Map' };
    if (s.includes('pd') || s.includes('workbench')) return { label: 'PD Workbench', icon: '⚡', viewId: 'homePdProgramView', tooltip: 'Program Director Workbench' };
    if (s.includes('doc') || s.includes('official')) return { label: 'Official Documents', icon: '📜', viewId: 'registrar', tooltip: 'Registrar Official Documents Suite' };
    return { label: str, icon: '📄', viewId: 'flowchart', tooltip: str };
  }

  /**
   * Render rich interactive HTML breadcrumbs inside the topBarPathPill container.
   */
  function updateTopBarPath(pathInput) {
    const container = document.getElementById('topBarPathPill');
    if (!container) return;

    rawPathString = typeof pathInput === 'string' ? pathInput : (pathInput?.pathText || 'Schools');
    const segments = parsePathSegments(pathInput);

    let html = '';
    segments.forEach((seg, i) => {
      const isTerminal = i === segments.length - 1;

      if (isTerminal) {
        // Active Terminal Segment: APC Gold Pill Badge
        html += `
          <span title="Current View: ${seg.tooltip}" 
            class="top-bar-crumb-active inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-black bg-[#E5A823] text-slate-950 shadow-xs shrink-0 select-none border border-amber-500/30">
            <span class="w-1.5 h-1.5 rounded-full bg-slate-950 inline-block animate-pulse"></span>
            <span>${seg.label}</span>
          </span>
        `;
      } else {
        // Parent Navigable Segment: Clickable with hover highlight & tooltip
        html += `
          <button type="button" 
            data-crumb-idx="${i}"
            title="Navigate to: ${seg.tooltip}" 
            class="top-bar-crumb-btn group inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold text-slate-700 hover:text-[#002855] hover:bg-slate-100 transition cursor-pointer shrink-0 select-none">
            <span class="text-[11px] opacity-70 group-hover:opacity-100">${seg.icon}</span>
            <span>${seg.label}</span>
          </button>
          <svg class="w-3.5 h-3.5 text-slate-400 shrink-0 mx-0.5 select-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
          </svg>
        `;
      }
    });

    container.innerHTML = html;

    // Attach click listeners to all generated breadcrumb buttons
    const buttons = container.querySelectorAll('.top-bar-crumb-btn');
    buttons.forEach((btn, idx) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (segments[idx] && typeof segments[idx].onClick === 'function') {
          segments[idx].onClick();
        }
      });
    });
  }

  // =========================================================================
  // 2. UNIVERSAL QUICK JUMP & SEARCH ENGINE (Command Palette)
  // =========================================================================

  /**
   * Collect all searchable destinations across Schools, Programs, Views, and Courses.
   */
  function buildSearchCatalog() {
    const _role = (typeof window.currentActiveRole !== 'undefined' ? window.currentActiveRole : null) || 'admin';
    const isAdmin  = (_role === 'admin' || _role === 'a');
    const isExdUp  = isAdmin || (_role === 'exd' || _role === 'x');
    const isPdDown = (_role === 'pd' || _role === 'p' || _role === 'faculty' || _role === 'f');

    const catalog = [
      // Academic Schools — active School of Engineering & institutional overview
      ...(isAdmin ? [{ category: 'Schools', title: 'Institutional Schools Overview', subtitle: 'Governance • Academic Schools Management', icon: '🏛️', action: () => window.renderAdminOverview() }] : []),
      ...(isExdUp ? [{ category: 'Schools', title: 'School of Engineering (SoE)', subtitle: 'Executive Directorate • School of Engineering', icon: '🏫', action: () => window.goToSchoolExd('soe') }] : []),

      // Academic Degree Programs — active BSCpE for development focus
      { category: 'Programs', title: 'BS Computer Engineering (BSCpE)', subtitle: 'Program Director Workbench • Curriculum 2026-2030', icon: '🎓', action: () => window.selectProgram('BSCpE', 'homePdProgramView') },

      // Workbench Tools & Views
      { category: 'Views', title: 'Curriculum Prerequisite Flowchart', subtitle: '74-Course Sequence Matrix • Swimlane Routing', icon: '🗺️', action: () => window.selectProgram('BSCpE', 'flowchart') },
      { category: 'Views', title: 'Master Integrated Spreadsheet', subtitle: 'Course-by-Course Trimester Curriculum Matrix', icon: '📊', action: () => window.selectProgram('BSCpE', 'spreadsheet') },
      { category: 'Views', title: 'Syllabus Management System (SMS)', subtitle: 'Course Syllabi, ILOs, CDIO Standards, Rubrics', icon: '📋', action: () => window.selectProgram('BSCpE', 'syllabus') },
      { category: 'Views', title: 'Course Management System (CMS)', subtitle: 'Directory of Courses, Prerequisites, Corequisites', icon: '📘', action: () => window.selectProgram('BSCpE', 'course') },
      { category: 'Views', title: 'Course Catalog Directory', subtitle: 'Searchable Academic Catalog & Course Descriptions', icon: '📁', action: () => window.selectProgram('BSCpE', 'catalog') },
      { category: 'Views', title: 'OBE Curriculum Matrix Map', subtitle: 'Program Educational Objectives (PEO) & Student Outcomes', icon: '🎯', action: () => window.selectProgram('BSCpE', 'obe') },

      // Official Registrar Documents
      { category: 'Registrar', title: 'Official Flowchart Diagram (Sheet 1)', subtitle: 'Standard CHED/ABET Approved Flowchart Output', icon: '📜', action: () => window.selectProgram('BSCpE', 'registrar', 1) },
      { category: 'Registrar', title: 'Curriculum Prospectus (Sheet 2)', subtitle: 'Official 4-Year Trimester Curriculum Prospectus', icon: '📜', action: () => window.selectProgram('BSCpE', 'registrar', 2) },
      { category: 'Registrar', title: 'Course Catalog Reference (Sheet 3)', subtitle: 'Registrar Course Listings & Credit Units', icon: '📜', action: () => window.selectProgram('BSCpE', 'registrar', 3) },
      { category: 'Registrar', title: 'Program of Study (Sheet 4)', subtitle: 'Student Academic Progress Plan & Prerequisites', icon: '📜', action: () => window.selectProgram('BSCpE', 'registrar', 4) },
      { category: 'Registrar', title: 'OBE Curriculum Map Matrix (Sheet 5)', subtitle: 'ABET Criterion 3 & CHED CMO Compliance Map', icon: '📜', action: () => window.selectProgram('BSCpE', 'registrar', 5) },

      // Governance & Compliance
      { category: 'Governance', title: 'CHED CMO92 Compliance Validator', subtitle: 'Institutional Standards & Accreditation Verification', icon: '⚖️', action: () => window.navigateView('compliance') },
      { category: 'Governance', title: 'Cluster Governance & Delegation', subtitle: 'Role-Based Delegation & Course Cluster Heads', icon: '🛡️', action: () => window.navigateView('delegation') },
      { category: 'Governance', title: 'Institutional Audit Trail', subtitle: 'Chronological Audit Log of Curriculum Changes', icon: '📜', action: () => window.navigateView('audit') },
      { category: 'AI Copilot', title: 'Curriculum AI Copilot Console', subtitle: 'Gemini 2.0 Flash • Prerequisite & ABET Assistance', icon: '✦', action: () => window.togglePersonalAgentDrawer() }
    ];

    // Append Curriculum Courses from window.ALL_COURSES
    const courses = (typeof window.ALL_COURSES !== 'undefined' && Array.isArray(window.ALL_COURSES))
      ? window.ALL_COURSES
      : [];

    courses.forEach(c => {
      catalog.push({
        category: 'Courses',
        title: `${c.code} — ${c.title}`,
        subtitle: `Y${c.year} T${c.term} • ${c.units} Units • ${c.group || 'Core'} • Prereqs: ${c.prereqs?.join(', ') || 'None'}`,
        icon: '📘',
        courseCode: c.code,
        action: () => {
          if (typeof window.selectProgram === 'function') {
            window.selectProgram('BSCpE', 'flowchart');
          }
          setTimeout(() => {
            focusCourseOnDiagram(c.code);
          }, 150);
        }
      });
    });

    return catalog;
  }

  /**
   * Smoothly pan and center a specific course card on the flowchart canvas with gold focus ring.
   */
  function focusCourseOnDiagram(courseCode) {
    if (!courseCode) return;
    const node = document.getElementById(`node-${courseCode}`);
    if (!node) return;

    const nodeX = parseFloat(node.style.left) || 0;
    const nodeY = parseFloat(node.style.top) || 0;
    const viewport = document.getElementById('vectorDiagramWrapper');

    if (viewport) {
      const vpW = viewport.clientWidth || 1000;
      const vpH = viewport.clientHeight || 700;
      const zoom = window.diagramZoom || 0.85;

      // Calculate pan to center node in view
      const targetPanX = Math.round(vpW / 2 - (nodeX + 100) * zoom);
      const targetPanY = Math.round(vpH / 2 - (nodeY + 50) * zoom);

      if (typeof window.diagramPanX !== 'undefined') window.diagramPanX = targetPanX;
      if (typeof window.diagramPanY !== 'undefined') window.diagramPanY = targetPanY;
    }

    // Visual eye-catch halo
    node.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    node.classList.add('ring-4', 'ring-[#E5A823]', 'shadow-2xl', 'scale-105');

    setTimeout(() => {
      node.classList.remove('scale-105');
    }, 300);

    setTimeout(() => {
      node.classList.remove('ring-4', 'ring-[#E5A823]', 'shadow-2xl');
    }, 2500);

    if (typeof window.showToast === 'function') {
      window.showToast(`Navigated to Course: ${courseCode}`);
    }
  }

  /**
   * Initialize search dropdown events and keyboard shortcuts.
   */
  function initQuickNavSearch() {
    const input = document.getElementById('topNavSearchInput');
    const dropdown = document.getElementById('topNavQuickNavDropdown');
    if (!input || !dropdown) return;

    const catalog = buildSearchCatalog();

    function renderDropdown(items) {
      currentMatchingItems = items.slice(0, 15);
      activeSearchIndex = -1;

      if (!currentMatchingItems.length) {
        dropdown.innerHTML = `
          <div class="p-4 text-center text-slate-500 font-mono text-xs">
            No matching schools, programs, views, or courses found.
          </div>
        `;
        dropdown.classList.remove('hidden');
        return;
      }

      // Group items by category
      const groups = {};
      currentMatchingItems.forEach(item => {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
      });

      let html = '';
      let flatIndex = 0;

      for (const [category, catItems] of Object.entries(groups)) {
        html += `
          <div class="bg-slate-50 px-3 py-1.5 font-mono text-[10px] font-black uppercase text-slate-500 tracking-wider flex items-center justify-between border-b border-slate-100">
            <span>${category}</span>
            <span class="text-[9px] text-slate-400 font-normal">Jump Destination</span>
          </div>
        `;

        catItems.forEach(item => {
          const itemIdx = flatIndex++;
          html += `
            <div data-item-idx="${itemIdx}" class="quick-nav-result px-3 py-2 hover:bg-amber-50 cursor-pointer flex items-center justify-between transition border-l-2 border-transparent hover:border-[#E5A823] group">
              <div class="flex items-center gap-2.5 min-w-0">
                <span class="text-sm shrink-0">${item.icon}</span>
                <div class="truncate">
                  <div class="font-bold text-slate-900 group-hover:text-amber-700 text-xs truncate">${item.title}</div>
                  <div class="text-[10px] text-slate-500 truncate">${item.subtitle}</div>
                </div>
              </div>
              <span class="text-[9px] font-mono text-slate-400 group-hover:text-amber-600 shrink-0 ml-2">↵ Select</span>
            </div>
          `;
        });
      }

      dropdown.innerHTML = html;
      dropdown.classList.remove('hidden');

      // Click handlers
      dropdown.querySelectorAll('.quick-nav-result').forEach(el => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const idx = parseInt(el.getAttribute('data-item-idx'), 10);
          if (currentMatchingItems[idx]) {
            currentMatchingItems[idx].action();
            dropdown.classList.add('hidden');
            input.value = '';
            input.blur();
          }
        });
      });
    }

    function filterItems(query) {
      const q = query.trim().toLowerCase();
      if (!q) {
        // Show featured top-level destinations when empty
        const featured = catalog.filter(i => i.category !== 'Courses').slice(0, 10);
        renderDropdown(featured);
        return;
      }

      const results = catalog.filter(item => {
        return item.title.toLowerCase().includes(q) ||
               item.subtitle.toLowerCase().includes(q) ||
               (item.courseCode && item.courseCode.toLowerCase().includes(q));
      });

      renderDropdown(results);
    }

    // Input events
    input.addEventListener('focus', () => {
      filterItems(input.value);
    });

    input.addEventListener('input', () => {
      filterItems(input.value);
    });

    // Keyboard navigation within dropdown
    input.addEventListener('keydown', (e) => {
      if (dropdown.classList.contains('hidden')) {
        if (e.key === 'ArrowDown') {
          filterItems(input.value);
          e.preventDefault();
        }
        return;
      }

      const resultElements = dropdown.querySelectorAll('.quick-nav-result');
      if (!resultElements.length) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeSearchIndex = (activeSearchIndex + 1) % resultElements.length;
        updateActiveResult(resultElements);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeSearchIndex = (activeSearchIndex - 1 + resultElements.length) % resultElements.length;
        updateActiveResult(resultElements);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeSearchIndex >= 0 && currentMatchingItems[activeSearchIndex]) {
          currentMatchingItems[activeSearchIndex].action();
          dropdown.classList.add('hidden');
          input.value = '';
          input.blur();
        } else if (currentMatchingItems.length > 0) {
          // Default to first item if none specifically highlighted
          currentMatchingItems[0].action();
          dropdown.classList.add('hidden');
          input.value = '';
          input.blur();
        }
      } else if (e.key === 'Escape') {
        dropdown.classList.add('hidden');
        input.blur();
      }
    });

    function updateActiveResult(elements) {
      elements.forEach((el, i) => {
        if (i === activeSearchIndex) {
          el.classList.add('bg-amber-100/90', 'border-l-4', 'border-[#E5A823]');
          el.scrollIntoView({ block: 'nearest' });
        } else {
          el.classList.remove('bg-amber-100/90', 'border-l-4', 'border-[#E5A823]');
        }
      });
    }

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
      }
    });

    // Global Ctrl+K / Cmd+K focus shortcut
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  }

  // =========================================================================
  // 3. PROPERTY DESCRIPTOR INTERCEPTOR FOR TRANSPARENT BACKWARD COMPATIBILITY
  // =========================================================================

  function installPathInterceptor() {
    const pill = document.getElementById('topBarPathPill');
    if (!pill) return;

    let isInternalUpdate = false;

    try {
      Object.defineProperty(pill, 'innerText', {
        get() {
          return rawPathString;
        },
        set(val) {
          if (isInternalUpdate) return;
          rawPathString = String(val || 'Schools');
          updateTopBarPath(rawPathString);
        },
        configurable: true
      });
    } catch (err) {
      console.warn('Could not define custom innerText on topBarPathPill:', err);
    }
  }

  // =========================================================================
  // 4. PUBLIC API & DOM READY INITIALIZATION
  // =========================================================================

  window.updateTopBarPath = updateTopBarPath;
  window.focusCourseOnDiagram = focusCourseOnDiagram;

  function initTopBarNav() {
    installPathInterceptor();
    initQuickNavSearch();

    // Initial render based on existing DOM content
    const pill = document.getElementById('topBarPathPill');
    const initialText = pill ? pill.getAttribute('data-initial-path') || pill.innerText || 'Schools' : 'Schools';
    updateTopBarPath(initialText);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTopBarNav);
  } else {
    initTopBarNav();
  }

})(window);
