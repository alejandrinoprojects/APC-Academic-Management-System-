import re

# 1. Update js/curriculum_workbench.js
with open('js/curriculum_workbench.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

# Change CPEDES1 sos in OFFICIAL_BASELINE_74_COURSES to Enabling E
old_cpedes1 = '"code": "CPEDES1", "title": "CPE Practice and Design 1", "units": 1.0, "lec": 0, "lab": 3, "group": "Professional Core", "prereqs": ["EMICROS", "MCROLAB", "CPEMETS"], "sos": ["D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D"]'
new_cpedes1 = '"code": "CPEDES1", "title": "CPE Practice and Design 1", "units": 1.0, "lec": 0, "lab": 3, "group": "Professional Core", "prereqs": ["EMICROS", "MCROLAB", "CPEMETS"], "sos": ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E"]'

if old_cpedes1 in js_code:
    js_code = js_code.replace(old_cpedes1, new_cpedes1)
    print("Updated CPEDES1 baseline sos to ['E', ...]")
else:
    print("Warning: old_cpedes1 exact pattern not matched")

# Add helper functions before window.renderFlowGraph
helpers_code = '''
    // =========================================================================
    // TERMINAL CAPSTONE DEMONSTRATIVE (D) PROGRESSION VALIDATION
    // =========================================================================
    function isTerminalCapstoneCourse(course) {
      if (!course) return false;
      const code = (course.code || '').toUpperCase();
      const title = (course.title || '').toLowerCase();
      const group = (course.group || '').toLowerCase();
      return code.includes('CPEDES') || code.includes('CAPSTONE') || title.includes('capstone') || 
             title.includes('practice and design') || group.includes('culminating') || 
             (course.year === 4 && (title.includes('project') || title.includes('thesis')));
    }

    function checkTerminalDemonstrativeStatus(course) {
      if (!isTerminalCapstoneCourse(course)) return { isTerminal: false, lacksD: false, dCount: 0 };
      const sos = course.sos || [];
      const dCount = sos.filter(s => (s || '').trim().toUpperCase() === 'D').length;
      return {
        isTerminal: true,
        lacksD: dCount === 0,
        dCount: dCount
      };
    }

    let activeWarningCourseCode = 'CPEDES1';

    function showTerminalCourseDemonstrativeWarning(courseCode, courseTitle) {
      activeWarningCourseCode = courseCode || 'CPEDES1';
      const modal = document.getElementById('terminalCourseWarningModal');
      const titleEl = document.getElementById('warningCourseCodeTitle');
      if (titleEl) {
        titleEl.textContent = `${courseCode || 'CPEDES1'} — ${courseTitle || 'CPE Practice and Design 1'}`;
      }
      if (modal) {
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    }

    function closeTerminalCourseDemonstrativeWarning() {
      const modal = document.getElementById('terminalCourseWarningModal');
      if (modal) {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    }

    function quickResolveDemonstrativeD() {
      const code = activeWarningCourseCode || 'CPEDES1';
      const dataset = (window.OFFICIAL_BASELINE_74_COURSES && window.OFFICIAL_BASELINE_74_COURSES.length > 0)
        ? window.OFFICIAL_BASELINE_74_COURSES
        : (typeof OFFICIAL_BASELINE_74_COURSES !== 'undefined' ? OFFICIAL_BASELINE_74_COURSES : []);
      const course = dataset.find(c => c.code === code);
      if (course) {
        course.sos = ['D','D','D','D','D','D','D','D','D','D','D','D','D'];
      }
      closeTerminalCourseDemonstrativeWarning();
      if (typeof renderFlowGraph === 'function') renderFlowGraph();
      if (typeof renderObeMatrix === 'function') renderObeMatrix();
      if (typeof showToast === 'function') {
        showToast(`✓ Resolved: ${code} updated to Demonstrative ('D') competencies across all SOs.`);
      }
    }

    window.isTerminalCapstoneCourse = isTerminalCapstoneCourse;
    window.checkTerminalDemonstrativeStatus = checkTerminalDemonstrativeStatus;
    window.showTerminalCourseDemonstrativeWarning = showTerminalCourseDemonstrativeWarning;
    window.closeTerminalCourseDemonstrativeWarning = closeTerminalCourseDemonstrativeWarning;
    window.quickResolveDemonstrativeD = quickResolveDemonstrativeD;

'''

target_render_flow = "window.renderFlowGraph = function() {"
if target_render_flow in js_code:
    js_code = js_code.replace(target_render_flow, helpers_code + "    " + target_render_flow)
    print("Added helper functions to js_code")

# Update Mode 1 course card rendering in renderFlowGraph
# Look for: const isFocus = (tr && tr.type === 'course' && String(tr.id) === String(c.code));
target_focus = "const isFocus = (tr && tr.type === 'course' && String(tr.id) === String(c.code));"
card_replacement = """const isFocus = (tr && tr.type === 'course' && String(tr.id) === String(c.code));
          const termStatus = checkTerminalDemonstrativeStatus(c);
          let terminalBadgeHtml = '';
          if (termStatus.isTerminal) {
            if (termStatus.lacksD) {
              terminalBadgeHtml = `
                <div onclick="event.stopPropagation(); showTerminalCourseDemonstrativeWarning('${c.code}', '${(c.title || '').replace(/'/g, "\\\\'")}')" 
                     class="mt-1 px-1.5 py-0.5 bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/80 dark:hover:bg-amber-900 border border-amber-400 dark:border-amber-600 text-amber-950 dark:text-amber-200 text-[9px] font-bold font-mono flex items-center justify-between cursor-pointer transition shadow-2xs" 
                     title="Accreditation Warning: Terminal course lacks Demonstrative (D). Click to inspect.">
                  <span class="flex items-center gap-1"><span>⚠️</span><span>Lacks Demonstrative (D)</span></span>
                  <span class="underline font-sans text-[8.5px]">Advisory &rarr;</span>
                </div>
              `;
            } else {
              terminalBadgeHtml = `
                <div class="mt-1 px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 text-[8.5px] font-bold font-mono flex items-center gap-1">
                  <span>✓</span><span>Demonstrative (D) Verified</span>
                </div>
              `;
            }
          }"""

if target_focus in js_code:
    js_code = js_code.replace(target_focus, card_replacement)
    print("Added terminal badge logic in renderFlowGraph Mode 1")

# Also inject terminalBadgeHtml into the card template:
# After: <h6 class="font-bold text-xs text-slate-900 dark:text-slate-100 leading-snug truncate" title="${c.title}">${c.title}</h6>
target_h6 = '<h6 class="font-bold text-xs text-slate-900 dark:text-slate-100 leading-snug truncate" title="${c.title}">${c.title}</h6>'
replacement_h6 = '<h6 class="font-bold text-xs text-slate-900 dark:text-slate-100 leading-snug truncate" title="${c.title}">${c.title}</h6>\n              ${terminalBadgeHtml}'
if target_h6 in js_code:
    js_code = js_code.replace(target_h6, replacement_h6)
    print("Injected terminalBadgeHtml below title in Mode 1")

# Update Mode 2 (Cylinder view):
target_mode2_ret = "return `\n                <div onclick=\"traceFlowLineage('course', '${c.code}')\""
replacement_mode2 = """const termStatus2 = checkTerminalDemonstrativeStatus(c);
          let terminalBadgeHtml2 = '';
          if (termStatus2.isTerminal && termStatus2.lacksD) {
            terminalBadgeHtml2 = `<span onclick=\"event.stopPropagation(); showTerminalCourseDemonstrativeWarning('${c.code}', '${(c.title || '').replace(/'/g, "\\\\'")}')\" class=\"ml-1 px-1 py-0.2 bg-amber-200 text-amber-900 font-bold text-[8px] cursor-pointer\">⚠️ Lacks (D)</span>`;
          }
          return `
                <div onclick="traceFlowLineage('course', '${c.code}')" """

# Also update renderObeMatrix:
target_matrix_td = '<td class="p-2 font-mono font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 text-xs sticky left-0 ${rowBg} z-10 min-w-[100px] shadow-xs">${course.code}</td>'
replacement_matrix_td = """<td class="p-2 font-mono font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 text-xs sticky left-0 ${rowBg} z-10 min-w-[100px] shadow-xs">
              <div>${course.code}</div>
              ${(checkTerminalDemonstrativeStatus(course).isTerminal && checkTerminalDemonstrativeStatus(course).lacksD) 
                ? `<button type="button" onclick="event.stopPropagation(); showTerminalCourseDemonstrativeWarning('${course.code}', '${(course.title || '').replace(/'/g, "\\\\'")}')" class="mt-1 px-1 py-0.2 bg-amber-100 dark:bg-amber-950 hover:bg-amber-200 text-amber-950 dark:text-amber-200 text-[8px] font-mono font-bold border border-amber-400 cursor-pointer shadow-2xs block" title="Terminal course lacks Demonstrative (D). Click to view advisory.">⚠️ Lacks (D)</button>` 
                : (checkTerminalDemonstrativeStatus(course).isTerminal ? `<span class="mt-1 px-1 py-0.2 bg-emerald-50 text-emerald-800 text-[7.5px] font-mono font-bold border border-emerald-300 block">✓ D-Compliant</span>` : '')}
            </td>"""

if target_matrix_td in js_code:
    js_code = js_code.replace(target_matrix_td, replacement_matrix_td)
    print("Updated renderObeMatrix with terminal course flag button")

with open('js/curriculum_workbench.js', 'w', encoding='utf-8') as f:
    f.write(js_code)
print("Saved updated js/curriculum_workbench.js")


# 2. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html_code = f.read()

# Add warning banner above cylinderContainerCourses
target_col4_header = """                      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1 shrink-0">
                        <div class="flex items-center gap-1.5">
                          <span class="w-2 h-2 bg-emerald-600 dark:bg-emerald-400"></span>
                          <h5 class="font-black text-emerald-900 dark:text-emerald-300 uppercase text-[11px] font-mono">Tier 4 &bull; Courses</h5>
                        </div>
                        <span id="wheelPosCourse" class="text-[9px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">74 items</span>
                      </div>"""

banner_html = """                      <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1 shrink-0">
                        <div class="flex items-center gap-1.5">
                          <span class="w-2 h-2 bg-emerald-600 dark:bg-emerald-400"></span>
                          <h5 class="font-black text-emerald-900 dark:text-emerald-300 uppercase text-[11px] font-mono">Tier 4 &bull; Courses</h5>
                        </div>
                        <span id="wheelPosCourse" class="text-[9px] font-mono text-emerald-700 dark:text-emerald-400 font-bold">74 items</span>
                      </div>

                      <!-- Terminal Course Progression Alert Banner -->
                      <div id="terminalCourseProgressionBanner" class="p-1.5 bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700/80 flex items-center justify-between text-[10px] font-mono shrink-0">
                        <div class="flex items-center gap-1.5 text-amber-900 dark:text-amber-200">
                          <span class="text-xs">⚠️</span>
                          <span class="font-bold">Terminal Flag:</span>
                          <span id="terminalFlagCountText">CPEDES1 lacks (D)</span>
                        </div>
                        <button type="button" onclick="showTerminalCourseDemonstrativeWarning('CPEDES1', 'CPE Practice and Design 1')" class="px-1.5 py-0.5 bg-amber-200 hover:bg-amber-300 dark:bg-amber-800 dark:hover:bg-amber-700 text-amber-950 dark:text-amber-100 font-bold text-[9px] transition cursor-pointer">Advisory &rarr;</button>
                      </div>"""

if target_col4_header in html_code:
    html_code = html_code.replace(target_col4_header, banner_html)
    print("Added terminal progression banner in Column 4 of index.html")

# Add terminalCourseWarningModal right before </body>
modal_html = """
  <!-- ========================================================================= -->
  <!-- TERMINAL COURSE NON-DEMONSTRATIVE ADVISORY MODAL                           -->
  <!-- ========================================================================= -->
  <div id="terminalCourseWarningModal" class="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto no-print">
    <div class="bg-white dark:bg-[#181D26] text-slate-900 dark:text-white rounded-none max-w-lg w-full shadow-2xl border-2 border-amber-500 overflow-hidden flex flex-col my-auto">
      
      <!-- Top Header -->
      <div class="bg-amber-500 text-slate-950 px-5 py-3.5 flex items-center justify-between border-b-2 border-amber-600 shrink-0">
        <div class="flex items-center space-x-2.5">
          <div class="w-8 h-8 bg-slate-950 text-amber-400 flex items-center justify-center font-mono font-black text-base shadow">
            ⚠️
          </div>
          <div>
            <h3 class="font-black text-sm text-slate-950 uppercase tracking-wide">OBE Progression Advisory</h3>
            <p class="text-[10px] text-slate-900 font-medium">Culminating & Terminal Course Competency Review</p>
          </div>
        </div>
        <button type="button" onclick="closeTerminalCourseDemonstrativeWarning()" class="text-slate-950 hover:text-white p-1 text-2xl font-bold leading-none cursor-pointer" aria-label="Close">&times;</button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 space-y-4 text-xs">
        <div class="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 flex items-start gap-3">
          <div class="text-2xl leading-none">🚩</div>
          <div class="space-y-1">
            <div class="font-bold text-amber-950 dark:text-amber-200 text-xs">
              <span id="warningCourseCodeTitle">CPEDES1 — CPE Practice and Design 1</span>
            </div>
            <div class="text-[11px] text-amber-900 dark:text-amber-300 leading-relaxed">
              <strong>Flag Status:</strong> This terminal capstone course currently lacks a <strong>Demonstrative (D)</strong> competency rating across targeted Student Outcomes.
            </div>
          </div>
        </div>

        <div class="space-y-1.5 border-l-2 border-amber-400 pl-3">
          <h4 class="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider">Accreditation Progression Rule</h4>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
            In accordance with institutional OBE guidelines and CHED PSG requirements, culminating professional and capstone design courses must attain the <strong>Demonstrative (D)</strong> designation to substantiate exit-level student mastery.
          </p>
        </div>

        <div class="p-3 bg-slate-50 dark:bg-[#121721] border border-slate-200 dark:border-slate-800 text-[11px] space-y-1.5 text-slate-600 dark:text-slate-400">
          <div class="flex justify-between font-mono">
            <span>Course Classification:</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">Terminal Capstone / Culminating</span>
          </div>
          <div class="flex justify-between font-mono">
            <span>Validation Severity:</span>
            <span class="font-bold text-amber-600 dark:text-amber-400">Advisory Warning (Non-blocking)</span>
          </div>
          <div class="flex justify-between font-mono">
            <span>Recommended Resolution:</span>
            <span class="font-bold text-emerald-600 dark:text-emerald-400">Assign 'D' rating in Design Sequence</span>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="p-4 bg-slate-100 dark:bg-[#121824] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <span class="text-[10px] text-slate-500 font-mono">Advisory flag &bull; User may override or save</span>
        <div class="flex gap-2">
          <button type="button" onclick="quickResolveDemonstrativeD()" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wide transition cursor-pointer">
            Set to Demonstrative (D)
          </button>
          <button type="button" onclick="closeTerminalCourseDemonstrativeWarning()" class="px-3 py-1.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 text-slate-800 dark:text-white font-bold text-xs transition cursor-pointer">
            Dismiss
          </button>
        </div>
      </div>

    </div>
  </div>
"""

if '</body>' in html_code and 'terminalCourseWarningModal' not in html_code:
    html_code = html_code.replace('</body>', modal_html + '\n</body>')
    print("Added terminalCourseWarningModal before </body> in index.html")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_code)
print("Saved updated index.html")
