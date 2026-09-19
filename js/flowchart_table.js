/**
 * APC Academic Architecture Suite
 * Prerequisite Flowchart Table Engine with Interactive Arrows & Lineage Highlighting
 * File: js/flowchart_table.js
 */

(function(window) {
  'use strict';

  let currentYearFilter = 'all'; // 'all', '1', '2', '3', '4'
  let currentSearchQuery = '';
  let activeSelectedCourseCode = null;

  // Retrieve course data from ALL_COURSES or window.ALL_COURSES
  function getCourses() {
    if (typeof window.ALL_COURSES !== 'undefined' && Array.isArray(window.ALL_COURSES)) {
      return window.ALL_COURSES;
    }
    return [];
  }

  // Helper to get category color styling
  function getCategoryBadge(groupName) {
    const group = (groupName || 'Core').toLowerCase();
    if (group.includes('basic eng')) {
      return { bg: 'bg-amber-100 text-amber-900 border-amber-300', dot: 'bg-amber-500', name: 'Basic Eng' };
    }
    if (group.includes('gen ed') || group.includes('general ed')) {
      return { bg: 'bg-sky-100 text-sky-900 border-sky-300', dot: 'bg-sky-500', name: 'Gen Ed' };
    }
    if (group.includes('allied')) {
      return { bg: 'bg-purple-100 text-purple-900 border-purple-300', dot: 'bg-purple-500', name: 'Allied' };
    }
    if (group.includes('elective') || group.includes('cognate')) {
      return { bg: 'bg-rose-100 text-rose-900 border-rose-300', dot: 'bg-rose-500', name: 'Elective' };
    }
    if (group.includes('inst')) {
      return { bg: 'bg-emerald-100 text-emerald-900 border-emerald-300', dot: 'bg-emerald-500', name: 'Inst' };
    }
    return { bg: 'bg-indigo-100 text-indigo-900 border-indigo-300', dot: 'bg-indigo-600', name: 'Core' };
  }

  // Precompute reverse unlocks (courses that depend on this course as a prerequisite)
  function getUnlocksMap(courses) {
    const unlocksMap = {};
    courses.forEach(c => {
      unlocksMap[c.code] = [];
    });

    courses.forEach(course => {
      if (Array.isArray(course.prereqs)) {
        course.prereqs.forEach(prereq => {
          const pCode = (typeof prereq === 'object' && prereq !== null && prereq.code) ? prereq.code : String(prereq).trim();
          if (pCode && unlocksMap[pCode]) {
            if (!unlocksMap[pCode].includes(course.code)) {
              unlocksMap[pCode].push(course.code);
            }
          }
        });
      }
    });

    return unlocksMap;
  }

  // Render the Prerequisite Flowchart Table
  function renderFlowchartTable() {
    const tbody = document.getElementById('flowchartTableBody');
    if (!tbody) return;

    const courses = getCourses();
    const unlocksMap = getUnlocksMap(courses);

    // Filter courses based on active year and search text
    let filteredCourses = courses.filter(c => {
      if (currentYearFilter !== 'all' && String(c.year) !== currentYearFilter) {
        return false;
      }
      if (currentSearchQuery.trim()) {
        const query = currentSearchQuery.toLowerCase().trim();
        const matchCode = (c.code || '').toLowerCase().includes(query);
        const matchTitle = (c.title || '').toLowerCase().includes(query);
        const matchPrereqs = Array.isArray(c.prereqs) && c.prereqs.some(p => {
          const pStr = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p);
          return pStr.toLowerCase().includes(query);
        });
        return matchCode || matchTitle || matchPrereqs;
      }
      return true;
    });

    // Sort by Year ascending, Term ascending, then Row ascending
    filteredCourses.sort((a, b) => {
      if (a.year !== b.year) return a.year - b.year;
      if (a.term !== b.term) return a.term - b.term;
      return (a.row || 0) - (b.row || 0);
    });

    // Update total count indicator
    const countEl = document.getElementById('flowchartTableCount');
    if (countEl) {
      countEl.innerText = `${filteredCourses.length} of ${courses.length} courses`;
    }

    if (filteredCourses.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" class="p-8 text-center text-slate-500 font-sans text-xs bg-slate-50/50">
            <span class="block text-xl mb-1">🔍</span>
            No courses match the active filter or search query.
          </td>
        </tr>
      `;
      return;
    }

    // Determine highlight sets if a course is currently active
    let activePrereqCodes = [];
    let activeUnlockCodes = [];
    if (activeSelectedCourseCode) {
      const activeObj = courses.find(c => c.code === activeSelectedCourseCode);
      if (activeObj && Array.isArray(activeObj.prereqs)) {
        activePrereqCodes = activeObj.prereqs.map(p => (typeof p === 'object' && p !== null && p.code) ? p.code : String(p).trim());
      }
      activeUnlockCodes = unlocksMap[activeSelectedCourseCode] || [];
    }

    let html = '';
    let lastYearTerm = '';

    filteredCourses.forEach((c) => {
      const yearTermKey = `Y${c.year}T${c.term}`;
      const isNewGroup = yearTermKey !== lastYearTerm;
      lastYearTerm = yearTermKey;

      if (isNewGroup && currentYearFilter === 'all' && !currentSearchQuery) {
        html += `
          <tr class="bg-[#002855]/90 text-white font-bold text-[11px] uppercase tracking-wider sticky top-0 z-10 select-none">
            <td colspan="6" class="py-1.5 px-4 flex items-center justify-between">
              <span class="flex items-center gap-2">
                <span class="text-[#E5A823]">📅</span>
                <span>Academic Year ${c.year} &bull; Trimester ${c.term}</span>
              </span>
              <span class="text-xs font-mono font-normal text-slate-300">Term ${c.term} Sequence</span>
            </td>
          </tr>
        `;
      }

      const catBadge = getCategoryBadge(c.group);
      const isSelf = activeSelectedCourseCode === c.code;
      const isFeeder = activePrereqCodes.includes(c.code);
      const isUnlock = activeUnlockCodes.includes(c.code);

      let rowClass = 'hover:bg-slate-50 transition border-b border-slate-200 cursor-pointer ';
      if (isSelf) {
        rowClass += 'bg-amber-50/90 border-l-4 border-l-[#E5A823] ring-1 ring-[#E5A823]/60 ';
      } else if (isFeeder) {
        rowClass += 'bg-sky-50/80 border-l-4 border-l-sky-500 ';
      } else if (isUnlock) {
        rowClass += 'bg-emerald-50/80 border-l-4 border-l-emerald-500 ';
      }

      // Prerequisites pills with arrows
      let prereqsHtml = '';
      if (Array.isArray(c.prereqs) && c.prereqs.length > 0) {
        prereqsHtml = '<div class="flex flex-wrap gap-1.5 items-center">';
        c.prereqs.forEach(p => {
          const pCode = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p).trim();
          const pType = (typeof p === 'object' && p !== null && p.type) ? p.type : 'hard';
          let borderStyle = 'border-slate-300 bg-slate-100 text-slate-800';
          let arrowIcon = '←';
          if (pType === 'co') {
            borderStyle = 'border-orange-300 bg-orange-50 text-orange-900 border-dashed';
            arrowIcon = '↔';
          } else if (pType === 'soft') {
            borderStyle = 'border-purple-300 bg-purple-50 text-purple-900 border-dotted';
            arrowIcon = '⇠';
          }

          prereqsHtml += `
            <button type="button" onclick="event.stopPropagation(); window.flowchartSelectCourse('${pCode}');" class="inline-flex items-center gap-1 px-2 py-0.5 font-mono text-[11px] font-bold rounded-none border ${borderStyle} hover:bg-[#002855] hover:text-[#E5A823] transition cursor-pointer" title="Prerequisite: ${pCode} (${pType})">
              <span class="font-sans text-xs">${arrowIcon}</span>
              <span>${pCode}</span>
            </button>
          `;
        });
        prereqsHtml += '</div>';
      } else {
        prereqsHtml = '<span class="text-slate-400 text-xs italic">None (Entry course)</span>';
      }

      // Unlocks pills with arrows
      const unlocks = unlocksMap[c.code] || [];
      let unlocksHtml = '';
      if (unlocks.length > 0) {
        unlocksHtml = '<div class="flex flex-wrap gap-1.5 items-center">';
        unlocks.forEach(uCode => {
          unlocksHtml += `
            <button type="button" onclick="event.stopPropagation(); window.flowchartSelectCourse('${uCode}');" class="inline-flex items-center gap-1 px-2 py-0.5 font-mono text-[11px] font-bold rounded-none border border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-800 hover:text-white transition cursor-pointer" title="Unlocks dependent course: ${uCode}">
              <span>${uCode}</span>
              <span class="font-sans text-xs">➔</span>
            </button>
          `;
        });
        unlocksHtml += '</div>';
      } else {
        unlocksHtml = '<span class="text-slate-400 text-xs italic">Terminal course</span>';
      }

      html += `
        <tr class="${rowClass}" onclick="window.flowchartSelectCourse('${c.code}')">
          <!-- Term / Level -->
          <td class="py-2.5 px-3 whitespace-nowrap text-center font-mono text-xs font-bold text-slate-700">
            <span class="px-2 py-0.5 bg-slate-100 border border-slate-300 text-slate-800">Y${c.year}&bull;T${c.term}</span>
          </td>

          <!-- Course Code & Category Badge -->
          <td class="py-2.5 px-3 whitespace-nowrap">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 font-mono font-black text-xs bg-[#002855] text-[#E5A823] border border-[#002855]">
                ${c.code}
              </span>
              <span class="inline-flex items-center gap-1 px-1.5 py-0.5 text-[10.5px] font-semibold border ${catBadge.bg}">
                <span class="w-1.5 h-1.5 rounded-none ${catBadge.dot}"></span>
                <span>${catBadge.name}</span>
              </span>
            </div>
          </td>

          <!-- Descriptive Title -->
          <td class="py-2.5 px-3 min-w-[200px]">
            <div class="font-bold text-xs text-slate-900 leading-snug">${c.title}</div>
            <div class="text-[11px] text-slate-500 mt-0.5">${c.units || 0} Units (${c.lec || 0} Lec / ${c.lab || 0} Lab)</div>
          </td>

          <!-- Prerequisites (Feeders ← Code) -->
          <td class="py-2.5 px-3 min-w-[180px]">
            ${prereqsHtml}
          </td>

          <!-- Unlocks (Dependents Code ➔) -->
          <td class="py-2.5 px-3 min-w-[180px]">
            ${unlocksHtml}
          </td>

          <!-- Actions -->
          <td class="py-2.5 px-3 whitespace-nowrap text-right" onclick="event.stopPropagation()">
            <div class="flex items-center justify-end gap-1.5">
              <button type="button" onclick="window.flowchartInspectCourse('${c.code}')" class="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-bold transition flex items-center gap-1 cursor-pointer" title="Inspect Course Details & Outcome Mappings">
                <span>🔍 Inspect</span>
              </button>
              <button type="button" onclick="if(typeof openCourseEditModal === 'function') openCourseEditModal('${c.code}');" class="px-2.5 py-1 bg-[#E5A823] hover:bg-amber-400 text-slate-950 text-xs font-black transition flex items-center gap-1 cursor-pointer" title="Edit Course">
                <span>✏️ Edit</span>
              </button>
            </div>
          </td>
        </tr>
      `;
    });

    tbody.innerHTML = html;
  }

  // Course selection handler
  function flowchartSelectCourse(code) {
    if (activeSelectedCourseCode === code) {
      activeSelectedCourseCode = null;
    } else {
      activeSelectedCourseCode = code;
    }
    renderFlowchartTable();
    if (activeSelectedCourseCode) {
      flowchartInspectCourse(activeSelectedCourseCode);
    }
  }

  // Open Drawer for inspected course
  function flowchartInspectCourse(code) {
    const courses = getCourses();
    const course = courses.find(c => c.code === code);
    if (!course) return;

    const drawer = document.getElementById('flowchartDetailDrawer');
    if (!drawer) return;

    const codeEl = document.getElementById('drawerCourseCode');
    const titleEl = document.getElementById('drawerCourseTitle');
    const metaEl = document.getElementById('drawerCourseMeta');
    const prereqsEl = document.getElementById('drawerPrereqsList');
    const dependentsEl = document.getElementById('drawerDependentsList');
    const soEl = document.getElementById('drawerSoList');
    const descEl = document.getElementById('drawerDescriptionText');

    if (codeEl) codeEl.innerText = course.code;
    if (titleEl) titleEl.innerText = course.title;
    if (metaEl) {
      metaEl.innerText = `Year ${course.year} • Term ${course.term} • ${Number(course.units || 0).toFixed(1)} Units (${course.lec || 0} Lec / ${course.lab || 0} Lab) • ${course.group || 'Core'}`;
    }

    // Upstream prerequisites
    if (prereqsEl) {
      if (Array.isArray(course.prereqs) && course.prereqs.length > 0) {
        prereqsEl.innerHTML = course.prereqs.map(p => {
          const pCode = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p).trim();
          return `<span class="inline-block px-1.5 py-0.5 bg-blue-900/80 text-blue-200 border border-blue-700 text-xs font-mono mr-1 mb-1">← ${pCode}</span>`;
        }).join('');
      } else {
        prereqsEl.innerText = 'None (Entry Subject)';
      }
    }

    // Downstream dependents
    const unlocksMap = getUnlocksMap(courses);
    const dependents = unlocksMap[course.code] || [];
    if (dependentsEl) {
      if (dependents.length > 0) {
        dependentsEl.innerHTML = dependents.map(d => {
          return `<span class="inline-block px-1.5 py-0.5 bg-emerald-900/80 text-emerald-200 border border-emerald-700 text-xs font-mono mr-1 mb-1">${d} ➔</span>`;
        }).join('');
      } else {
        dependentsEl.innerText = 'None (Terminal Subject)';
      }
    }

    // Student outcomes (SO a-m)
    if (soEl) {
      const soLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
      const activeSos = [];
      if (Array.isArray(course.sos)) {
        course.sos.forEach((lvl, idx) => {
          if (lvl && lvl !== '-') {
            activeSos.push(`SO-${soLabels[idx]} [${lvl}]`);
          }
        });
      }
      soEl.innerText = activeSos.length > 0 ? activeSos.join(', ') : 'None mapped';
    }

    // Scope description
    if (descEl) {
      descEl.innerText = course.desc || 'No descriptive scope provided in current catalog.';
    }

    drawer.classList.remove('hidden');
  }

  // Filter tabs handler
  function filterFlowchartTableYear(year) {
    currentYearFilter = String(year);

    // Update tab button styles
    const tabBtns = document.querySelectorAll('.flowchart-year-tab');
    tabBtns.forEach(btn => {
      const btnYear = btn.getAttribute('data-year');
      if (btnYear === currentYearFilter) {
        btn.className = 'flowchart-year-tab px-3.5 py-1.5 bg-[#002855] text-[#E5A823] font-bold text-xs border border-[#002855] transition cursor-pointer shadow-xs';
      } else {
        btn.className = 'flowchart-year-tab px-3.5 py-1.5 bg-white text-slate-700 hover:bg-slate-100 font-bold text-xs border border-slate-300 transition cursor-pointer';
      }
    });

    renderFlowchartTable();
  }

  // Search input handler
  function handleFlowchartTableSearch(event) {
    currentSearchQuery = (event && event.target) ? event.target.value : '';
    renderFlowchartTable();
  }

  // Clear search
  function clearFlowchartTableSearch() {
    const input = document.getElementById('flowchartTableSearchInput');
    if (input) input.value = '';
    currentSearchQuery = '';
    renderFlowchartTable();
  }

  // Expose methods to global window object
  window.renderFlowchartTable = renderFlowchartTable;
  window.flowchartSelectCourse = flowchartSelectCourse;
  window.flowchartInspectCourse = flowchartInspectCourse;
  window.filterFlowchartTableYear = filterFlowchartTableYear;
  window.handleFlowchartTableSearch = handleFlowchartTableSearch;
  window.clearFlowchartTableSearch = clearFlowchartTableSearch;

  // Compatibility hook for existing calls
  window.renderFlowchartDiagram = renderFlowchartTable;
  window.renderFlowchartGrid = renderFlowchartTable;
  window.drawAllArrows = function() {};

  // Initialize on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(renderFlowchartTable, 50);
    });
  } else {
    setTimeout(renderFlowchartTable, 50);
  }

})(window);
