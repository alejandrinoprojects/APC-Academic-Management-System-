/**
 * APC Academic Architecture Suite
 * Prerequisite Flowchart Matrix Table Engine (js/diagram_canvas.js)
 * 
 * Features:
 * 1. 12-Trimester Table Matrix DAG Sequence (4 Academic Years x 3 Terms, 8 Course Rows)
 * 2. Real-Time SVG Arrow Routing (Port-to-Port S-Curve & Orthogonal Conduits)
 * 3. Topological Lineage Highlighting (Active Gold, Feeders Blue, Dependents Green)
 * 4. APC Institutional UI Theme (Navy #002855, Gold #E5A823, Crisp Rectangles)
 * 5. Interactive Details Drawer & Smooth Academic Year Scrolling
 */

(function(window) {
  'use strict';

  // --- STATE CONFIGURATION ---
  let showAllArrowsEnabled = true;
  let requisiteFilterMode = 'direct'; // 'direct' or 'all'
  let currentSelectedCode = null;
  let currentHoveredCode = null;
  let currentSearchQuery = '';

  // Safely get courses from window.ALL_COURSES
  function getCourses() {
    if (typeof window.ALL_COURSES !== 'undefined' && Array.isArray(window.ALL_COURSES)) {
      return window.ALL_COURSES;
    }
    return [];
  }

  // Precompute reverse unlocks (courses that depend on this course)
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

  // Helper to get category metadata
  function getCategoryMeta(groupName) {
    if (typeof window.getCategoryMeta === 'function') {
      return window.getCategoryMeta(groupName);
    }
    const group = (groupName || 'Core').toLowerCase();
    if (group.includes('basic eng')) {
      return { color: 'amber', name: 'Basic Eng', dot: 'bg-amber-500', border: 'border-l-amber-500' };
    }
    if (group.includes('gen ed') || group.includes('general ed')) {
      return { color: 'sky', name: 'Gen Ed', dot: 'bg-sky-500', border: 'border-l-sky-500' };
    }
    if (group.includes('allied')) {
      return { color: 'purple', name: 'Allied', dot: 'bg-purple-500', border: 'border-l-purple-500' };
    }
    if (group.includes('elective') || group.includes('cognate')) {
      return { color: 'rose', name: 'Elective', dot: 'bg-rose-500', border: 'border-l-rose-500' };
    }
    if (group.includes('inst')) {
      return { color: 'emerald', name: 'Inst', dot: 'bg-emerald-500', border: 'border-l-emerald-500' };
    }
    return { color: 'indigo', name: 'Core', dot: 'bg-indigo-600', border: 'border-l-indigo-600' };
  }

  // =========================================================================
  // MATRIX TABLE RENDERER
  // =========================================================================

  let flowchartActiveYear = 'all'; // 'all', 1, 2, 3, 4

  function renderFlowchartDiagram() {
    const table = document.getElementById('flowchartMatrixTable');
    if (!table) return;

    const courses = getCourses();
    if (courses.length === 0) return;

    // Academic Year meta
    const yearHeaders = [
      { year: 1, ay: 'AY 2026–2027', title: 'General Engineering & Foundation', units: '52.0u', bg: 'bg-[#002855]', text: 'text-white' },
      { year: 2, ay: 'AY 2027–2028', title: 'Intermediate Hardware & Software Core', units: '52.0u', bg: 'bg-[#0d3b66]', text: 'text-white' },
      { year: 3, ay: 'AY 2028–2029', title: 'Systems Specialization & Design', units: '51.0u', bg: 'bg-[#1a365d]', text: 'text-white' },
      { year: 4, ay: 'AY 2029–2030', title: 'Capstone Design & Practicum Internships', units: '29.0u', bg: 'bg-[#1f293d]', text: 'text-white' }
    ];

    // Determine active years and active columns based on filter
    const activeYears = (flowchartActiveYear === 'all') 
      ? [1, 2, 3, 4] 
      : [parseInt(flowchartActiveYear, 10)];

    const activeCols = [];
    activeYears.forEach(y => {
      activeCols.push((y - 1) * 3 + 1, (y - 1) * 3 + 2, (y - 1) * 3 + 3);
    });

    // Build lookup map by (col, row)
    const slotMap = {};
    courses.forEach(c => {
      const col = c.col || ((c.year - 1) * 3 + c.term);
      const row = c.row || 1;
      slotMap[`${col}-${row}`] = c;
    });

    // 1. THEAD: Year Headers + Term Column Headers
    let theadHtml = '<thead>';

    // Row 1: Academic Year Banners
    theadHtml += '<tr class="text-xs select-none uppercase tracking-wider font-mono">';
    theadHtml += '<th class="flow-col-no py-2 px-1 bg-[#001733] text-[#E5A823] font-black text-center border-r border-slate-700">No</th>';
    activeYears.forEach(y => {
      const yh = yearHeaders[y - 1];
      theadHtml += `
        <th colspan="3" id="flowchartYearBanner-${yh.year}" class="${yh.bg} ${yh.text} py-2 px-3 border-r border-slate-700 transition-all">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="px-1.5 py-0.5 bg-[#E5A823] text-slate-950 font-black text-[11px]">YEAR ${yh.year}</span>
              <span class="font-sans font-bold text-[11px] opacity-95 normal-case tracking-normal">${yh.title}</span>
            </div>
            <div class="flex items-center gap-2 text-[10px] opacity-90 font-mono">
              <span>${yh.ay}</span>
              <span class="px-1.5 py-0.2 bg-black/30 border border-white/20 font-bold">${yh.units}</span>
            </div>
          </div>
        </th>
      `;
    });
    theadHtml += '</tr>';

    // Row 2: Term Column Headers
    theadHtml += '<tr class="text-xs font-mono select-none bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b-2 border-slate-300 dark:border-slate-700">';
    theadHtml += '<th class="flow-col-no py-1.5 text-center text-slate-500 font-black text-[11px] bg-slate-200 dark:bg-slate-900 border-r border-slate-300 dark:border-slate-700">#</th>';

    activeCols.forEach(col => {
      const year = Math.ceil(col / 3);
      const term = ((col - 1) % 3) + 1;
      const termCourses = courses.filter(c => (c.col === col) || (c.year === year && c.term === term));
      const termUnits = termCourses.reduce((sum, c) => sum + (parseFloat(c.units) || 0), 0);

      theadHtml += `
        <th class="flow-col-term py-1.5 px-2.5 text-left border-r border-slate-300 dark:border-slate-700 font-bold">
          <div class="flex items-center justify-between leading-none">
            <span class="text-xs font-black text-[#002855] dark:text-sky-300">Term ${term}</span>
            <span class="text-[10.5px] px-1.5 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold font-mono">
              ${termUnits.toFixed(1)}u &bull; ${termCourses.length}C
            </span>
          </div>
        </th>
      `;
    });
    theadHtml += '</tr></thead>';

    // 2. TBODY: 8 Rows
    let tbodyHtml = '<tbody>';
    for (let r = 1; r <= 8; r++) {
      tbodyHtml += `<tr class="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50/40 dark:hover:bg-slate-900/30 transition-colors">`;
      
      // Sticky Row Number Column
      tbodyHtml += `
        <td class="flow-col-no text-center font-mono font-black text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border-r border-slate-300 dark:border-slate-700 select-none">
          R${r}
        </td>
      `;

      // Term Column Cells
      activeCols.forEach(col => {
        const course = slotMap[`${col}-${r}`];

        tbodyHtml += `<td class="flow-col-term p-1 border-r border-slate-200 dark:border-slate-800 align-top">`;
        if (course) {
          const catMeta = getCategoryMeta(course.group);
          const borderClass = catMeta.border || 'border-l-indigo-600';
          const prereqCount = Array.isArray(course.prereqs) ? course.prereqs.length : 0;
          const unitsFormatted = Number(course.units || 0).toFixed(1);

          tbodyHtml += `
            <div id="node-${course.code}" 
                 data-course-code="${course.code}"
                 data-col="${col}"
                 data-row="${r}"
                 class="course-card flow-course-card select-none relative p-2 flex flex-col justify-between cursor-pointer border border-slate-300 dark:border-slate-700 ${borderClass} border-l-4 shadow-2xs">
              
              <!-- Left Port for Prerequisite Inflow -->
              <div class="port-dot port-left" title="Prerequisite Entry Port"></div>
              <!-- Right Port for Dependent Outflow -->
              <div class="port-dot port-right" title="Dependent Exit Port"></div>

              <!-- Card Header: Code + Units -->
              <div class="flex items-center justify-between font-mono leading-none mb-1">
                <span class="font-black text-xs text-[#002855] dark:text-sky-200 tracking-tight">${course.code}</span>
                <span class="text-[10.5px] font-bold px-1 py-0.5 rounded-none bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">${unitsFormatted}u</span>
              </div>

              <!-- Course Title -->
              <div class="text-[11px] font-semibold text-slate-800 dark:text-slate-200 leading-snug line-clamp-1 mb-1" title="${course.title}">
                ${course.title}
              </div>

              <!-- Card Footer: Category + Requisite Counter (NO textual listing, pure arrows) -->
              <div class="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-1 font-mono leading-none">
                <span class="inline-flex items-center gap-1 font-semibold truncate max-w-[95px]">
                  <span class="w-1.5 h-1.5 rounded-none ${catMeta.dot || 'bg-slate-400'} shrink-0"></span>
                  <span class="truncate">${catMeta.name || 'Core'}</span>
                </span>
                <span class="font-bold ${prereqCount > 0 ? 'text-blue-700 dark:text-blue-400' : 'text-slate-400'}">
                  ${prereqCount > 0 ? `⛓️ ${prereqCount}` : 'Entry'}
                </span>
              </div>

            </div>
          `;
        } else {
          // Empty slot placeholder
          tbodyHtml += `
            <div class="w-full h-full min-h-[84px] flex items-center justify-center text-slate-300 dark:text-slate-700 text-xs font-mono select-none bg-slate-50/20 dark:bg-slate-900/10">
              <span class="opacity-30">&mdash;</span>
            </div>
          `;
        }
        tbodyHtml += `</td>`;
      });

      tbodyHtml += `</tr>`;
    }
    tbodyHtml += '</tbody>';

    // 3. TFOOT: Total Units Summary Row (Matching Official Registrar Matrix Format)
    let tfootHtml = '<tfoot class="border-t-2 border-slate-300 dark:border-slate-700 font-mono text-xs select-none bg-slate-50 dark:bg-slate-900">';
    
    // Total Units Row
    tfootHtml += '<tr class="font-bold text-slate-800 dark:text-slate-200">';
    tfootHtml += '<td class="flow-col-no py-2 text-center text-[10px] bg-slate-200 dark:bg-slate-800 border-r border-slate-300 dark:border-slate-700">Tot</td>';
    
    activeCols.forEach(col => {
      const year = Math.ceil(col / 3);
      const term = ((col - 1) % 3) + 1;
      const termCourses = courses.filter(c => (c.col === col) || (c.year === year && c.term === term));
      const termUnits = termCourses.reduce((sum, c) => sum + (parseFloat(c.units) || 0), 0);

      tfootHtml += `
        <td class="flow-col-term py-2 px-2.5 text-center border-r border-slate-300 dark:border-slate-700">
          <span class="text-[#002855] dark:text-[#E5A823] font-black">${termUnits.toFixed(1)} Units</span>
        </td>
      `;
    });
    tfootHtml += '</tr></tfoot>';

    // Assemble table
    table.innerHTML = theadHtml + tbodyHtml + tfootHtml;

    // Attach interactive node handlers
    setupNodeEventListeners();

    // Re-route SVG arrows
    setTimeout(drawAllArrows, 60);
  }

  // =========================================================================
  // INTERACTIVE NODE EVENT LISTENERS
  // =========================================================================

  function setupNodeEventListeners() {
    const cards = document.querySelectorAll('.flow-course-card');
    cards.forEach(card => {
      const code = card.getAttribute('data-course-code');
      if (!code) return;

      // Hover: trace lineage temporarily
      card.addEventListener('mouseenter', () => {
        currentHoveredCode = code;
        if (!currentSelectedCode) {
          highlightPrereqTree(code);
        }
      });

      card.addEventListener('mouseleave', () => {
        currentHoveredCode = null;
        if (!currentSelectedCode) {
          clearFlowchartHighlight();
        } else {
          highlightPrereqTree(currentSelectedCode);
        }
      });

      // Click: lock selection & open detail drawer
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentSelectedCode === code) {
          currentSelectedCode = null;
          clearFlowchartHighlight();
        } else {
          currentSelectedCode = code;
          highlightPrereqTree(code);
          openFlowchartDrawer(code);
        }
      });

      // Double-click: open course editor modal
      card.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (typeof window.openCourseEditModal === 'function') {
          window.openCourseEditModal(code);
        }
      });
    });

    // Click outside to clear selection
    const table = document.getElementById('flowchartMatrixTable');
    if (table) {
      table.addEventListener('click', (e) => {
        if (!e.target.closest('.flow-course-card')) {
          currentSelectedCode = null;
          clearFlowchartHighlight();
        }
      });
    }
  }

  // =========================================================================
  // ARROW ROUTING ENGINE (Pixel-Perfect SVG Connectors Over Matrix Table)
  // =========================================================================

  function drawAllArrows() {
    const courses = getCourses();
    const svg = document.getElementById('diagramSvg');
    const svgGroup = document.getElementById('diagramSvgPathsGroup');
    const tableInner = document.getElementById('flowchartTableInner');
    if (!svg || !svgGroup || !tableInner || courses.length === 0) return;

    const innerRect = tableInner.getBoundingClientRect();
    if (innerRect.width === 0 && innerRect.height === 0) {
      setTimeout(drawAllArrows, 80);
      return;
    }

    svgGroup.innerHTML = '';

    // Precompute node DOM port coordinates
    const portMap = {};
    courses.forEach(c => {
      const el = document.getElementById(`node-${c.code}`);
      if (el) {
        const rect = el.getBoundingClientRect();
        portMap[c.code] = {
          code: c.code,
          col: c.col || ((c.year - 1) * 3 + c.term),
          row: c.row || 1,
          leftX: rect.left - innerRect.left,
          rightX: rect.right - innerRect.left,
          midY: rect.top + (rect.height / 2) - innerRect.top,
          prereqs: Array.isArray(c.prereqs) ? c.prereqs : []
        };
      }
    });

    // Check transitive prerequisites to reduce clutter
    function isTransitivePrereq(fromCode, tgtPrereqs) {
      for (let i = 0; i < tgtPrereqs.length; i++) {
        const item = tgtPrereqs[i];
        const sib = (typeof item === 'object' && item !== null && item.code) ? item.code : String(item);
        if (sib === fromCode) continue;

        const visited = new Set();
        const queue = [sib];
        while (queue.length > 0) {
          const curr = queue.shift();
          const currC = courses.find(c => c.code === curr);
          if (!currC || !Array.isArray(currC.prereqs)) continue;
          for (let j = 0; j < currC.prereqs.length; j++) {
            const p = currC.prereqs[j];
            const pCode = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p);
            if (pCode === fromCode) return true;
            if (!visited.has(pCode)) {
              visited.add(pCode);
              queue.push(pCode);
            }
          }
        }
      }
      return false;
    }

    // Build and render edges
    Object.values(portMap).forEach(tgt => {
      tgt.prereqs.forEach(pItem => {
        const norm = typeof pItem === 'string' ? { code: pItem, type: 'hard' } : { code: pItem.code, type: pItem.type || 'hard' };
        const pCode = norm.code;
        const reqType = norm.type || 'hard';

        if (requisiteFilterMode === 'direct' && isTransitivePrereq(pCode, tgt.prereqs)) {
          return;
        }

        const src = portMap[pCode];
        if (!src) return;

        const x1 = src.rightX;
        const y1 = src.midY;
        const x2 = tgt.leftX;
        const y2 = tgt.midY;
        const dx = x2 - x1;

        // Path generation: S-curve cubic bezier with horizontal exit and entry
        let pathData = '';
        if (dx > 0 && Math.abs(y1 - y2) < 3.0 && (tgt.col === src.col + 1)) {
          // Direct horizontal line for same row in adjacent columns
          pathData = `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
        } else {
          // Smooth horizontal S-curve bezier
          const cOffset = Math.min(Math.max(dx * 0.45, 20), 85);
          pathData = `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${(x1 + cOffset).toFixed(1)} ${y1.toFixed(1)}, ${(x2 - cOffset).toFixed(1)} ${y2.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
        }

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('data-from', pCode);
        path.setAttribute('data-to', tgt.code);
        path.setAttribute('data-type', reqType);
        path.setAttribute('class', 'dag-arrow');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');

        if (reqType === 'co') {
          path.setAttribute('stroke', '#d97706');
          path.setAttribute('stroke-width', '2.0');
          path.setAttribute('stroke-dasharray', '5,4');
          path.setAttribute('marker-end', 'url(#diag-arrow-coreq)');
        } else if (reqType === 'soft') {
          path.setAttribute('stroke', '#7c3aed');
          path.setAttribute('stroke-width', '2.0');
          path.setAttribute('stroke-dasharray', '3,3');
          path.setAttribute('marker-end', 'url(#diag-arrow-soft)');
        } else {
          path.setAttribute('stroke', '#1e40af');
          path.setAttribute('stroke-width', '2.0');
          path.setAttribute('stroke-dasharray', 'none');
          path.setAttribute('marker-end', 'url(#diag-arrow-default)');
        }

        // Visibility
        path.style.opacity = showAllArrowsEnabled ? '0.75' : '0';
        svgGroup.appendChild(path);
      });
    });

    // Re-apply highlight if active
    if (currentSelectedCode) {
      highlightPrereqTree(currentSelectedCode);
    } else if (currentHoveredCode) {
      highlightPrereqTree(currentHoveredCode);
    }
  }

  // =========================================================================
  // TOPOLOGICAL LINEAGE HIGHLIGHTING
  // =========================================================================

  function highlightPrereqTree(activeCode) {
    const courses = getCourses();
    const unlocksMap = getUnlocksMap(courses);

    // 1. Trace upstream prerequisites (Feeders)
    const feederSet = new Set();
    const queueUp = [activeCode];
    while (queueUp.length > 0) {
      const curr = queueUp.shift();
      const cObj = courses.find(c => c.code === curr);
      if (cObj && Array.isArray(cObj.prereqs)) {
        cObj.prereqs.forEach(p => {
          const pCode = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p).trim();
          if (pCode && !feederSet.has(pCode)) {
            feederSet.add(pCode);
            queueUp.push(pCode);
          }
        });
      }
    }

    // 2. Trace downstream dependents (Unlocks)
    const dependentSet = new Set();
    const queueDown = [activeCode];
    while (queueDown.length > 0) {
      const curr = queueDown.shift();
      const dependents = unlocksMap[curr] || [];
      dependents.forEach(dCode => {
        if (!dependentSet.has(dCode)) {
          dependentSet.add(dCode);
          queueDown.push(dCode);
        }
      });
    }

    // 3. Apply classes to Course Cards
    const cards = document.querySelectorAll('.flow-course-card');
    cards.forEach(card => {
      const code = card.getAttribute('data-course-code');
      card.classList.remove('active-selected', 'feeder-highlight', 'dependent-highlight', 'dimmed');

      if (code === activeCode) {
        card.classList.add('active-selected');
      } else if (feederSet.has(code)) {
        card.classList.add('feeder-highlight');
      } else if (dependentSet.has(code)) {
        card.classList.add('dependent-highlight');
      } else {
        card.classList.add('dimmed');
      }
    });

    // 4. Highlight connected SVG Arrows
    const paths = document.querySelectorAll('.dag-arrow');
    paths.forEach(path => {
      const from = path.getAttribute('data-from');
      const to = path.getAttribute('data-to');

      path.classList.remove('feeder-arrow', 'dependent-arrow', 'dimmed-arrow');

      const isFeederPath = (to === activeCode && feederSet.has(from)) || (feederSet.has(from) && feederSet.has(to));
      const isDependentPath = (from === activeCode && dependentSet.has(to)) || (dependentSet.has(from) && dependentSet.has(to));

      if (isFeederPath) {
        path.classList.add('feeder-arrow');
        path.setAttribute('marker-end', 'url(#diag-arrow-feeder)');
        path.style.opacity = '1';
      } else if (isDependentPath) {
        path.classList.add('dependent-arrow');
        path.setAttribute('marker-end', 'url(#diag-arrow-dependent)');
        path.style.opacity = '1';
      } else {
        path.classList.add('dimmed-arrow');
        path.style.opacity = '0.04';
      }
    });
  }

  function clearFlowchartHighlight() {
    currentSelectedCode = null;
    currentHoveredCode = null;

    // Reset card classes
    const cards = document.querySelectorAll('.flow-course-card');
    cards.forEach(card => {
      card.classList.remove('active-selected', 'feeder-highlight', 'dependent-highlight', 'dimmed');
    });

    // Reset arrow classes
    const paths = document.querySelectorAll('.dag-arrow');
    paths.forEach(path => {
      path.classList.remove('feeder-arrow', 'dependent-arrow', 'dimmed-arrow');
      const reqType = path.getAttribute('data-type');
      if (reqType === 'co') {
        path.setAttribute('marker-end', 'url(#diag-arrow-coreq)');
      } else if (reqType === 'soft') {
        path.setAttribute('marker-end', 'url(#diag-arrow-soft)');
      } else {
        path.setAttribute('marker-end', 'url(#diag-arrow-default)');
      }
      path.style.opacity = showAllArrowsEnabled ? '0.75' : '0';
    });

    closeDetailDrawer();
  }

  // =========================================================================
  // DETAIL DRAWER
  // =========================================================================

  function openFlowchartDrawer(code) {
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
          return `<button type="button" onclick="window.highlightPrereqChain('${pCode}')" class="inline-block px-2 py-0.5 bg-blue-900/80 text-blue-200 border border-blue-700 text-xs font-mono mr-1 mb-1 hover:bg-blue-800 transition cursor-pointer">← ${pCode}</button>`;
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
          return `<button type="button" onclick="window.highlightPrereqChain('${d}')" class="inline-block px-2 py-0.5 bg-emerald-900/80 text-emerald-200 border border-emerald-700 text-xs font-mono mr-1 mb-1 hover:bg-emerald-800 transition cursor-pointer">${d} ➔</button>`;
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
      descEl.innerText = course.desc || 'Official course syllabus scope text goes here.';
    }

    drawer.classList.remove('hidden');
  }

  function closeDetailDrawer() {
    const drawer = document.getElementById('flowchartDetailDrawer');
    if (drawer) drawer.classList.add('hidden');
  }

  // =========================================================================
  // USER CONTROLS & NAVIGATION
  // =========================================================================

  function toggleShowAllArrows() {
    showAllArrowsEnabled = !showAllArrowsEnabled;
    const lbl = document.getElementById('allArrowsLabel');
    const btn = document.getElementById('btnToggleAllArrows');
    if (lbl) lbl.textContent = showAllArrowsEnabled ? 'All Arrows: ON' : 'All Arrows: OFF';
    if (btn) {
      if (showAllArrowsEnabled) {
        btn.className = 'px-3 py-1.5 bg-[#002855] text-[#E5A823] border border-[#002855] font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs';
      } else {
        btn.className = 'px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs';
      }
    }
    drawAllArrows();
  }

  function switchRequisiteMode() {
    requisiteFilterMode = (requisiteFilterMode === 'direct') ? 'all' : 'direct';
    const lbl = document.getElementById('requisiteModeLabel');
    const btn = document.getElementById('btnToggleRequisiteMode');
    if (lbl) lbl.textContent = (requisiteFilterMode === 'direct') ? 'Direct Only' : 'All Transitive';
    if (btn) {
      if (requisiteFilterMode === 'all') {
        btn.className = 'px-3 py-1.5 bg-indigo-900 text-indigo-100 border border-indigo-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs';
      } else {
        btn.className = 'px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-bold text-xs flex items-center gap-1.5 transition cursor-pointer';
      }
    }
    drawAllArrows();
  }

  function setFlowchartYearFilter(yearNum) {
    flowchartActiveYear = (yearNum === 'all' || !yearNum) ? 'all' : parseInt(yearNum, 10);
    
    // Update toolbar buttons
    ['all', 1, 2, 3, 4].forEach(y => {
      const btn = document.getElementById(`flowYearBtn-${y}`);
      if (btn) {
        if (String(y) === String(flowchartActiveYear)) {
          btn.className = 'px-2.5 py-1 bg-[#002855] text-[#E5A823] font-bold transition cursor-pointer shadow-xs border border-[#002855]';
        } else {
          btn.className = 'px-2.5 py-1 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition cursor-pointer';
        }
      }
    });

    renderFlowchartDiagram();

    // Reset horizontal scroll
    const wrapper = document.getElementById('vectorDiagramWrapper');
    if (wrapper) wrapper.scrollLeft = 0;

    if (typeof window.showToast === 'function') {
      const yLabel = (flowchartActiveYear === 'all') ? 'All 4 Academic Years' : `Year ${flowchartActiveYear}`;
      window.showToast(`Flowchart: Showing ${yLabel}`);
    }
  }

  function diagramScrollToYear(yearNum) {
    const y = Math.max(1, Math.min(4, parseInt(yearNum, 10) || 1));
    if (flowchartActiveYear !== 'all') {
      setFlowchartYearFilter('all');
    }
    const wrapper = document.getElementById('vectorDiagramWrapper');
    if (!wrapper) return;

    setTimeout(() => {
      const banner = document.getElementById(`flowchartYearBanner-${y}`);
      if (banner) {
        const scrollPos = Math.max(0, banner.offsetLeft - 42);
        wrapper.scrollLeft = scrollPos;
        try {
          wrapper.scrollTo({ left: scrollPos, behavior: 'smooth' });
        } catch (e) {}

        banner.classList.add('flowchart-year-focus');
        setTimeout(() => banner.classList.remove('flowchart-year-focus'), 1800);
      }
    }, 40);
  }

  function handleCourseClick(code) {
    const courses = getCourses();
    const course = courses.find(c => c.code === code);
    if (course && flowchartActiveYear !== 'all') {
      const courseYear = course.year || Math.ceil((course.col || 1) / 3);
      if (courseYear !== flowchartActiveYear) {
        setFlowchartYearFilter(courseYear);
      }
    }
    currentSelectedCode = code;
    highlightPrereqTree(code);
    openFlowchartDrawer(code);
    setTimeout(() => {
      const node = document.getElementById(`node-${code}`);
      if (node) {
        node.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 50);
  }

  function highlightPrereqChain(code) {
    handleCourseClick(code);
  }

  function resetDiagramPositions() {
    clearFlowchartHighlight();
    setFlowchartYearFilter('all');
    if (typeof window.showToast === 'function') {
      window.showToast('Curriculum matrix reset to official sequence.');
    }
  }

  // =========================================================================
  // GLOBAL WINDOW EXPORTS
  // =========================================================================
  window.renderFlowchartDiagram = renderFlowchartDiagram;
  window.renderFlowchartGrid = renderFlowchartDiagram;
  window.drawAllArrows = drawAllArrows;
  window.toggleShowAllArrows = toggleShowAllArrows;
  window.switchRequisiteMode = switchRequisiteMode;
  window.setFlowchartYearFilter = setFlowchartYearFilter;
  window.getFlowchartActiveYear = () => flowchartActiveYear;
  window.diagramScrollToYear = diagramScrollToYear;
  window.highlightPrereqChain = highlightPrereqChain;
  window.highlightPrereqTree = highlightPrereqTree;
  window.clearFlowchartHighlight = clearFlowchartHighlight;
  window.handleCourseClick = handleCourseClick;
  window.openFlowchartDrawer = openFlowchartDrawer;
  window.closeDetailDrawer = closeDetailDrawer;
  window.resetDiagramPositions = resetDiagramPositions;

  // Init when DOM is ready
  function initFlowchart() {
    const view = document.getElementById('view-flowchart');
    if (view && !view.classList.contains('hidden')) {
      renderFlowchartDiagram();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFlowchart);
  } else {
    setTimeout(initFlowchart, 40);
  }

})(window);
