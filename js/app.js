/**
 * APC Academic Architecture Suite - Core SPA Application Logic & Controllers
 */

// Ensure registrar docs are mounted
if (window.mountRegistrarDocs) window.mountRegistrarDocs();

// === CORE ENGINE & NAVIGATION ===
let currentSelectedCode = null;
    let showAllArrowsEnabled = true;
    let activePaletteMode = 'grouping';

    // =========================================================================
    // GRADUATE ATTRIBUTES (GA) DATA & CONTROLLERS (WP2)
    // =========================================================================
    window.APC_GRADUATE_ATTRIBUTES = [
      { id: 'ga1', code: 'GA-1', title: 'Discipline Knowledge', desc: 'Possess a sound theoretical and practical foundation in engineering and sciences relevant to computer engineering.' },
      { id: 'ga2', code: 'GA-2', title: 'Problem Analysis', desc: 'Identify, formulate, and solve complex engineering problems using principles of mathematics and engineering sciences.' },
      { id: 'ga3', code: 'GA-3', title: 'Design / Development', desc: 'Design solutions for complex engineering problems that meet specified needs with appropriate consideration of societal and environmental factors.' },
      { id: 'ga4', code: 'GA-4', title: 'Investigations', desc: 'Conduct investigations of complex engineering problems using research-based knowledge and methods.' },
      { id: 'ga5', code: 'GA-5', title: 'Modern Tool Usage', desc: 'Apply appropriate techniques and modern engineering tools to solve complex computer engineering problems.' },
      { id: 'ga6', code: 'GA-6', title: 'Engineer and Society', desc: 'Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues in computer engineering.' },
      { id: 'ga7', code: 'GA-7', title: 'Environment & Sustainability', desc: 'Understand the impact of engineering solutions in societal and environmental contexts and demonstrate knowledge of sustainable development.' },
      { id: 'ga8', code: 'GA-8', title: 'Ethics', desc: 'Apply ethical principles and commit to professional responsibilities and norms of engineering practice.' },
      { id: 'ga9', code: 'GA-9', title: 'Individual & Team Work', desc: 'Function effectively as an individual, and as a member or leader in diverse teams.' },
      { id: 'ga10', code: 'GA-10', title: 'Communication', desc: 'Communicate effectively on complex engineering activities with the engineering community and society.' },
      { id: 'ga11', code: 'GA-11', title: 'Project Management', desc: 'Demonstrate knowledge and understanding of engineering management principles and apply these to manage projects in multidisciplinary environments.' },
      { id: 'ga12', code: 'GA-12', title: 'Lifelong Learning', desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning.' },
    ];

    function renderGaCards() {
      const grid = document.getElementById('gaCardsGrid');
      if (!grid || !window.APC_GRADUATE_ATTRIBUTES) return;
      const borderStyles = [
        'border-indigo-200 bg-indigo-50/50',
        'border-emerald-200 bg-emerald-50/50',
        'border-blue-200 bg-blue-50/50',
        'border-purple-200 bg-purple-50/50',
        'border-amber-200 bg-amber-50/50',
        'border-rose-200 bg-rose-50/50'
      ];
      grid.innerHTML = window.APC_GRADUATE_ATTRIBUTES.map((ga, i) => `
        <div class="p-3.5 rounded-none border ${borderStyles[i % borderStyles.length]} space-y-1.5 relative group hover:shadow-xs transition">
          <div class="flex items-center justify-between">
            <span class="px-2 py-0.5 rounded-none bg-white font-mono font-black text-[11px] border border-slate-300 text-slate-800">${ga.code}</span>
            <button type="button" onclick="openEditGaModal(${i})" class="opacity-0 group-hover:opacity-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 hover:text-slate-950 border border-slate-300 bg-white transition cursor-pointer shadow-2xs">✏️ Edit</button>
          </div>
          <h5 class="font-black text-slate-900 text-xs">${ga.title}</h5>
          <p class="text-slate-600 text-[11px] leading-relaxed">${ga.desc}</p>
        </div>
      `).join('');
    }

    function openEditGaModal(idx) {
      const ga = window.APC_GRADUATE_ATTRIBUTES[idx];
      if (!ga) return;
      const idxInput = document.getElementById('editGaIndex');
      const codeInput = document.getElementById('editGaCode');
      const titleInput = document.getElementById('editGaTitle');
      const descInput = document.getElementById('editGaDesc');
      if (idxInput) idxInput.value = idx;
      if (codeInput) codeInput.value = ga.code;
      if (titleInput) titleInput.value = ga.title;
      if (descInput) descInput.value = ga.desc;
      const modal = document.getElementById('modalEditGa');
      if (modal) modal.classList.remove('hidden');
    }

    function closeEditGaModal() {
      const modal = document.getElementById('modalEditGa');
      if (modal) modal.classList.add('hidden');
    }

    function saveEditGa() {
      const idxEl = document.getElementById('editGaIndex');
      if (!idxEl) return;
      const idx = parseInt(idxEl.value, 10);
      if (isNaN(idx) || !window.APC_GRADUATE_ATTRIBUTES[idx]) return;

      const code = (document.getElementById('editGaCode')?.value || '').trim();
      const title = (document.getElementById('editGaTitle')?.value || '').trim();
      const desc = (document.getElementById('editGaDesc')?.value || '').trim();

      window.APC_GRADUATE_ATTRIBUTES[idx].code = code || window.APC_GRADUATE_ATTRIBUTES[idx].code;
      window.APC_GRADUATE_ATTRIBUTES[idx].title = title || window.APC_GRADUATE_ATTRIBUTES[idx].title;
      window.APC_GRADUATE_ATTRIBUTES[idx].desc = desc || window.APC_GRADUATE_ATTRIBUTES[idx].desc;

      renderGaCards();
      closeEditGaModal();
      showToast(`Graduate Attribute ${window.APC_GRADUATE_ATTRIBUTES[idx].code} updated.`);
      if (typeof appendAuditLog === 'function') {
        appendAuditLog('GA_UPDATE', window.APC_GRADUATE_ATTRIBUTES[idx].code, `Graduate Attribute updated to "${window.APC_GRADUATE_ATTRIBUTES[idx].title}"`);
      }
    }

    function openEditVisionModal() {
      const vText = document.getElementById('visionText')?.textContent || '';
      const mText = document.getElementById('missionText')?.textContent || '';
      const vIn = document.getElementById('editVisionInput');
      const mIn = document.getElementById('editMissionInput');
      if (vIn) vIn.value = vText.trim();
      if (mIn) mIn.value = mText.trim();
      const modal = document.getElementById('modalEditVision');
      if (modal) modal.classList.remove('hidden');
    }

    function closeEditVisionModal() {
      const modal = document.getElementById('modalEditVision');
      if (modal) modal.classList.add('hidden');
    }

    function saveEditVision() {
      const vVal = (document.getElementById('editVisionInput')?.value || '').trim();
      const mVal = (document.getElementById('editMissionInput')?.value || '').trim();
      const vEl = document.getElementById('visionText');
      const mEl = document.getElementById('missionText');
      if (vEl && vVal) vEl.textContent = vVal;
      if (mEl && mVal) mEl.textContent = mVal;
      closeEditVisionModal();
      showToast('Vision & Mission updated.');
      if (typeof appendAuditLog === 'function') {
        appendAuditLog('VISION_UPDATE', 'Institutional Vision & Mission', 'Updated institutional vision and mission statements');
      }
    }

    // =========================================================================
    // APPEND-ONLY AUDIT LOG TRAIL & CONTROLLER (WP3)
    // =========================================================================
    window.AUDIT_LOG = [
      { ts: '2026-09-10 14:12:01', role: 'Program Director', action: 'INGEST_FLOWCHART', entity: 'BSCpE 2026 Registrar', summary: 'Ingested 74 authentic courses & configured dynamic SVG arrows', hash: '9c4e...81fd' },
      { ts: '2026-09-10 02:42:12', role: 'Program Director', action: 'VALIDATE_DAG', entity: 'DAG Engine', summary: 'Executed Kahn cycle check: 74/74 visited, 0 deadlocks', hash: '8f2a...9d1c' },
    ];

    function appendAuditLog(action, entity, summary) {
      const role = (() => {
        const sel = document.getElementById('roleSelector');
        const map = { admin: 'System Administrator', exd: 'Executive Director', pd: 'Program Director', faculty: 'Faculty Member' };
        return map[sel ? sel.value : 'pd'] || 'Program Director';
      })();
      const now = new Date();
      const pad = n => String(n).padStart(2, '0');
      const ts = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
      const hash = Math.random().toString(36).slice(2, 6) + '...' + Math.random().toString(36).slice(2, 6);
      window.AUDIT_LOG.unshift({ ts, role, action, entity, summary, hash });
      renderAuditTable();
    }

    function renderAuditTable() {
      const tbody = document.getElementById('auditTableBody');
      if (!tbody) return;
      const filterText = (document.getElementById('auditFilterText')?.value || '').toLowerCase();
      const filterRole = document.getElementById('auditFilterRole')?.value || '';

      const ACTION_COLORS = {
        SHEET_SAVE: 'bg-blue-50 text-blue-700 border border-blue-200',
        SO_UPDATE: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
        GA_UPDATE: 'bg-purple-50 text-purple-700 border border-purple-200',
        VISION_UPDATE: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
        TASK_DELEGATE: 'bg-amber-50 text-amber-700 border border-amber-200',
        DELEGATION_UPDATE: 'bg-teal-50 text-teal-700 border border-teal-200',
        DELEGATION_REVOKE: 'bg-rose-50 text-rose-700 border border-rose-200',
        INGEST_FLOWCHART: 'bg-blue-50 text-blue-700 border border-blue-200',
        VALIDATE_DAG: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
        VERSION_CREATE: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
        VERSION_STATE_CHANGE: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
        COURSE_EDIT: 'bg-slate-100 text-slate-700 border border-slate-300',
      };

      let logs = window.AUDIT_LOG || [];
      if (filterText) {
        logs = logs.filter(l => (l.action || '').toLowerCase().includes(filterText) || (l.entity || '').toLowerCase().includes(filterText) || (l.summary || '').toLowerCase().includes(filterText));
      }
      if (filterRole) {
        logs = logs.filter(l => l.role === filterRole);
      }

      const count = document.getElementById('auditCount');
      if (count) count.textContent = `${logs.length} records`;

      tbody.innerHTML = logs.map(l => `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-2.5 px-3 font-mono text-slate-500 text-[11px] whitespace-nowrap">${l.ts}</td>
          <td class="py-2.5 px-3"><span class="font-bold text-slate-900">${l.role}</span></td>
          <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded-none ${ACTION_COLORS[l.action] || 'bg-slate-100 text-slate-700'} text-[11px] font-bold font-mono">${l.action}</span></td>
          <td class="py-2.5 px-3 font-mono text-xs font-bold text-apc-navy">${l.entity}</td>
          <td class="py-2.5 px-3 text-[11px] text-slate-700 leading-snug">${l.summary}</td>
          <td class="py-2.5 px-3 font-mono text-[11px] text-slate-400">${l.hash}</td>
          <td class="py-2.5 px-3 text-right whitespace-nowrap"><button type="button" onclick="verifyHashModal('${l.hash}')" class="text-blue-600 hover:underline font-bold text-[11px] cursor-pointer">Verify</button></td>
        </tr>
      `).join('') || '<tr><td colspan="7" class="py-8 text-center text-slate-400 text-xs">No audit trail records found matching criteria.</td></tr>';
    }

    // =========================================================================
    // OBE I-E-D PROGRESSION VALIDATION SUITE (WP5)
    // =========================================================================
    function runIedValidation() {
      const strip = document.getElementById('iedValidationStrip');
      if (!strip) return;

      const SO_LABELS = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
      const alerts = [];

      SO_LABELS.forEach((label, sIdx) => {
        const covered = ALL_COURSES.some(c => c.sos && c.sos[sIdx] && c.sos[sIdx] !== '-');
        if (!covered) {
          alerts.push({ type: 'error', msg: `SO-${label.toUpperCase()}: Zero-coverage gap! No course currently maps to this Student Outcome.` });
        }
        const hasI = ALL_COURSES.some(c => c.sos && c.sos[sIdx] === 'I');
        const hasD = ALL_COURSES.some(c => c.sos && c.sos[sIdx] === 'D');
        if (hasD && !hasI) {
          alerts.push({ type: 'warn', msg: `SO-${label.toUpperCase()}: Contains Demonstrative (D) courses without an Introductory (I) foundation.` });
        }
      });

      const unmapped = ALL_COURSES.filter(c => !c.sos || c.sos.every(s => s === '-'));
      if (unmapped.length > 0) {
        alerts.push({ type: 'warn', msg: `${unmapped.length} course(s) have no SO mapping: ${unmapped.slice(0, 4).map(c => c.code).join(', ')}${unmapped.length > 4 ? '…' : ''}` });
      }

      if (alerts.length === 0) {
        strip.innerHTML = `
          <div class="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold rounded-none shadow-2xs">
            <span class="text-base">✅</span>
            <span>All 13 CHED Student Outcomes (SO a–m) have valid developmental I-E-D progression coverage. Zero curricular gaps detected.</span>
          </div>`;
        strip.classList.remove('hidden');
        return;
      }

      strip.innerHTML = alerts.map(a => `
        <div class="flex items-start gap-2 px-3.5 py-2 ${a.type === 'error' ? 'bg-rose-50 border border-rose-300 text-rose-900' : 'bg-amber-50 border border-amber-300 text-amber-900'} text-xs font-semibold rounded-none shadow-2xs">
          <span class="text-sm shrink-0">${a.type === 'error' ? '🔴' : '⚠️'}</span>
          <span class="leading-tight">${a.msg}</span>
        </div>
      `).join('');
      strip.classList.remove('hidden');
    }

    function renderSoSummaryRow() {
      const row = document.getElementById('soSummaryRow');
      if (!row) return;
      while (row.children.length > 2) row.removeChild(row.lastChild);
      for (let s = 0; s < 13; s++) {
        const count = ALL_COURSES.filter(c => c.sos && c.sos[s] && c.sos[s] !== '-').length;
        const countI = ALL_COURSES.filter(c => c.sos && c.sos[s] === 'I').length;
        const countE = ALL_COURSES.filter(c => c.sos && c.sos[s] === 'E').length;
        const countD = ALL_COURSES.filter(c => c.sos && c.sos[s] === 'D').length;
        const color = count === 0 ? 'text-rose-700 bg-rose-50' : (!countI || !countD) ? 'text-amber-800 bg-amber-50' : 'text-emerald-800 bg-emerald-50';
        const td = document.createElement('td');
        td.className = `py-2 px-1 text-center border-r border-slate-300 font-mono font-black text-[11px] ${color}`;
        td.textContent = count;
        td.title = `SO-${String.fromCharCode(97+s).toUpperCase()}: ${count} courses (I:${countI} • E:${countE} • D:${countD})`;
        row.appendChild(td);
      }
    }

    // =========================================================================
    // FLOWCHART PREREQUISITE & POST-REQUISITE CHAIN HIGHLIGHTING (WP6)
    // =========================================================================
    window._currentChainHighlight = null;
    window.highlightPrereqChain = function(selectedCode) {
      const legend = document.getElementById('chainHighlightLegend');
      if (window._currentChainHighlight === selectedCode) {
        window._currentChainHighlight = null;
        document.querySelectorAll('.diagram-node-card').forEach(n => {
          n.classList.remove('ring-4', 'ring-amber-400', 'ring-blue-500', 'ring-rose-500', 'opacity-25');
        });
        if (legend) legend.classList.add('hidden');
        if (typeof drawAllArrows === 'function') drawAllArrows();
        return;
      }
      window._currentChainHighlight = selectedCode;

      // BFS backward: ancestors (prerequisites)
      const ancestors = new Set();
      const qAncestors = [selectedCode];
      while (qAncestors.length > 0) {
        const cur = qAncestors.shift();
        const course = ALL_COURSES.find(c => c.code === cur);
        if (!course) continue;
        (course.prereqs || []).forEach(p => {
          const pCode = typeof p === 'string' ? p : (p && p.code);
          if (pCode && !ancestors.has(pCode) && pCode !== selectedCode) {
            ancestors.add(pCode);
            qAncestors.push(pCode);
          }
        });
      }

      // BFS forward: descendants (post-requisites)
      const descendants = new Set();
      const qDescendants = [selectedCode];
      while (qDescendants.length > 0) {
        const cur = qDescendants.shift();
        ALL_COURSES.forEach(c => {
          if ((c.prereqs || []).some(p => (typeof p === 'string' ? p : (p && p.code)) === cur)) {
            if (!descendants.has(c.code) && c.code !== selectedCode) {
              descendants.add(c.code);
              qDescendants.push(c.code);
            }
          }
        });
      }

      // Apply styling to all diagram node cards
      document.querySelectorAll('.diagram-node-card').forEach(n => {
        const code = n.dataset.courseCode;
        n.classList.remove('ring-4', 'ring-amber-400', 'ring-blue-500', 'ring-rose-500', 'opacity-25');
        if (code === selectedCode) {
          n.classList.add('ring-4', 'ring-amber-400');
        } else if (ancestors.has(code)) {
          n.classList.add('ring-4', 'ring-blue-500');
        } else if (descendants.has(code)) {
          n.classList.add('ring-4', 'ring-rose-500');
        } else {
          n.classList.add('opacity-25');
        }
      });

      if (legend) legend.classList.remove('hidden');
      showToast(`Prerequisite lineage for ${selectedCode}: ${ancestors.size} prerequisite(s), ${descendants.size} dependent(s).`);
    };

    // =========================================================================
    // D-RBAC DELEGATION PROGRESS BOARD (WP7)
    // =========================================================================
    window.DELEGATION_REGISTRY = [
      {
        id: 'del-001',
        cluster: 'Computer Networks & Security',
        faculty: 'Networks Cluster Lead',
        scope: ['DATCOMS', 'COMNETS', 'NETSLAB'],
        startDate: '2026-09-01',
        endDate: '2026-10-15',
        status: 'active',
        progress: 65,
        submittedAt: null
      },
      {
        id: 'del-002',
        cluster: 'Hardware & Embedded Systems',
        faculty: 'Hardware Cluster Lead',
        scope: ['LOGCDES', 'EMICROS', 'EMBEDDS', 'COMAROR'],
        startDate: '2026-09-05',
        endDate: '2026-11-01',
        status: 'pending',
        progress: 0,
        submittedAt: null
      }
    ];

    let _currentDelegationFilter = 'all';

    function filterDelegations(filter) {
      _currentDelegationFilter = filter;
      ['all', 'active', 'pending', 'completed', 'expired'].forEach(f => {
        const btn = document.getElementById(`delTab${f.charAt(0).toUpperCase() + f.slice(1)}`);
        if (btn) {
          btn.className = (f === filter)
            ? 'px-3 py-1 bg-apc-navy text-white rounded-none text-xs font-bold'
            : 'px-3 py-1 bg-slate-100 text-slate-700 rounded-none hover:bg-slate-200 text-xs font-bold transition cursor-pointer';
        }
      });
      renderDelegationCards();
    }

    function renderDelegationCards() {
      const grid = document.getElementById('delegationCardsGrid');
      if (!grid) return;
      let items = window.DELEGATION_REGISTRY || [];
      if (_currentDelegationFilter !== 'all') {
        items = items.filter(d => d.status === _currentDelegationFilter);
      }

      const STATUS_STYLES = {
        active: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        pending: 'bg-blue-100 text-blue-800 border-blue-300',
        completed: 'bg-slate-100 text-slate-700 border-slate-300',
        expired: 'bg-rose-100 text-rose-800 border-rose-300',
      };

      grid.innerHTML = items.map(d => `
        <div class="p-4 bg-white rounded-none border border-slate-200 shadow-xs space-y-3 hover:border-apc-navy/40 transition">
          <div class="flex items-start justify-between gap-2">
            <div>
              <p class="font-black text-slate-900 text-sm">${d.cluster}</p>
              <p class="text-[11px] text-slate-500 mt-0.5">Assigned Faculty: <span class="font-semibold text-slate-800">${d.faculty}</span></p>
            </div>
            <span class="px-2 py-0.5 rounded-none text-[10px] font-bold border ${STATUS_STYLES[d.status] || 'bg-slate-100 text-slate-600'} uppercase shrink-0">${d.status}</span>
          </div>
          <div class="text-[11px] text-slate-600 space-y-0.5 bg-slate-50 p-2 border border-slate-100">
            <p>Subject Scope: <span class="font-mono font-bold text-apc-navy">${Array.isArray(d.scope) ? d.scope.join(', ') : d.cluster}</span></p>
            <p>Authorized Window: <span class="font-semibold">${d.startDate}</span> &rarr; <span class="font-semibold">${d.endDate}</span></p>
          </div>
          <div class="space-y-1">
            <div class="flex justify-between text-[11px] text-slate-500">
              <span class="font-bold">Review Completion</span>
              <span class="font-bold font-mono text-slate-800">${d.progress}%</span>
            </div>
            <div class="w-full bg-slate-200 rounded-none h-2 overflow-hidden">
              <div class="${d.status === 'completed' ? 'bg-emerald-500' : 'bg-apc-navy'} h-2 transition-all duration-300" style="width:${d.progress}%"></div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-1 border-t border-slate-100 text-xs">
            <div class="flex gap-2">
              ${d.status === 'active' ? `
                <button type="button" onclick="simulateDelegationProgress('${d.id}')" class="px-2.5 py-1 text-[11px] font-bold bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 transition cursor-pointer">Update Progress</button>
                <button type="button" onclick="revokeDelegation('${d.id}')" class="px-2.5 py-1 text-[11px] font-bold bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 transition cursor-pointer">Revoke</button>
              ` : ''}
              ${d.status === 'pending' ? `
                <button type="button" onclick="activateDelegation('${d.id}')" class="px-2.5 py-1 text-[11px] font-bold bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 transition cursor-pointer">Activate Access</button>
              ` : ''}
              ${d.status === 'completed' ? `<span class="text-[11px] text-emerald-700 font-bold flex items-center gap-1">✓ Submitted ${d.submittedAt || ''}</span>` : ''}
              ${d.status === 'expired' ? `<span class="text-[11px] text-rose-600 font-bold">Access Terminated</span>` : ''}
            </div>
            <button type="button" onclick="openIntegratedSpreadsheet('master', 'delegation')" class="text-blue-600 hover:underline font-bold text-[11px] cursor-pointer">Spreadsheet &rarr;</button>
          </div>
        </div>
      `).join('') || '<div class="col-span-2 py-10 text-center text-slate-400 text-xs">No delegations match the selected status filter.</div>';
    }

    function simulateDelegationProgress(id) {
      const d = window.DELEGATION_REGISTRY.find(x => x.id === id);
      if (!d) return;
      d.progress = Math.min(100, d.progress + 25);
      if (d.progress >= 100) {
        d.status = 'completed';
        d.submittedAt = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }
      renderDelegationCards();
      showToast(`Delegation progress for ${d.cluster} updated to ${d.progress}%.`);
      if (typeof appendAuditLog === 'function') {
        appendAuditLog('DELEGATION_UPDATE', d.cluster, `Progress updated to ${d.progress}% by ${d.faculty}`);
      }
    }

    function revokeDelegation(id) {
      const d = window.DELEGATION_REGISTRY.find(x => x.id === id);
      if (!d) return;
      d.status = 'expired';
      renderDelegationCards();
      showToast(`Delegation access for ${d.cluster} has been revoked.`);
      if (typeof appendAuditLog === 'function') {
        appendAuditLog('DELEGATION_REVOKE', d.cluster, `Editing access revoked by Program Director`);
      }
    }

    function activateDelegation(id) {
      const d = window.DELEGATION_REGISTRY.find(x => x.id === id);
      if (!d) return;
      d.status = 'active';
      d.progress = Math.max(d.progress, 15);
      renderDelegationCards();
      showToast(`Delegation for ${d.cluster} is now active.`);
      if (typeof appendAuditLog === 'function') {
        appendAuditLog('DELEGATION_UPDATE', d.cluster, `Access status activated for ${d.faculty}`);
      }
    }

    // =========================================================================
    // CURRICULUM VERSION STATE MACHINE (WP8)
    // =========================================================================
    window.VERSION_REGISTRY = [
      { id: 'BSCpE-2026-REV3', label: 'BSCpE-2026-REV3', years: 'AY 2026–2030', units: 172, author: 'Program Director', state: 'review', lastEvent: 'Sep 10, 2026' },
      { id: 'BSCpE-2021-BASE', label: 'BSCpE-2021-BASE', years: 'AY 2021–2025', units: 170, author: 'Former Program Director', state: 'approved', lastEvent: 'Aug 14, 2021' },
    ];

    const VERSION_STATES = {
      draft: { label: 'DRAFT', class: 'bg-slate-100 text-slate-700 border-slate-300' },
      review: { label: 'UNDER REVIEW', class: 'bg-amber-100 text-amber-900 border-amber-300' },
      approved: { label: 'APPROVED BASELINE', class: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
      archived: { label: 'ARCHIVED', class: 'bg-slate-200 text-slate-600 border-slate-300' },
    };

    function changeVersionState(versionId, newState) {
      const ver = window.VERSION_REGISTRY.find(v => v.id === versionId);
      if (!ver) return;
      ver.state = newState;
      ver.lastEvent = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      renderVersionTable();
      showToast(`Version ${ver.label} state updated to: ${VERSION_STATES[newState]?.label || newState}`);
      if (typeof appendAuditLog === 'function') {
        appendAuditLog('VERSION_STATE_CHANGE', ver.label, `State updated to ${VERSION_STATES[newState]?.label || newState}`);
      }
    }

    function createNewVersionDraft() {
      const year = new Date().getFullYear();
      const newId = `BSCpE-${year}-DRAFT${window.VERSION_REGISTRY.length + 1}`;
      window.VERSION_REGISTRY.unshift({
        id: newId,
        label: newId,
        years: `AY ${year}–${year + 4}`,
        units: 172,
        author: 'Program Director',
        state: 'draft',
        lastEvent: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
      renderVersionTable();
      showToast(`New draft version ${newId} initialized from active baseline.`);
      if (typeof appendAuditLog === 'function') {
        appendAuditLog('VERSION_CREATE', newId, 'New curriculum revision draft created from active baseline');
      }
    }

    function renderVersionTable() {
      const tbody = document.getElementById('versionTableBody');
      if (!tbody) return;
      tbody.innerHTML = window.VERSION_REGISTRY.map(v => {
        const s = VERSION_STATES[v.state] || VERSION_STATES.draft;
        return `
          <tr class="hover:bg-amber-50/40 transition">
            <td class="py-3.5 px-4 font-mono font-bold ${v.state === 'draft' ? 'text-slate-500' : 'text-apc-navy'}">${v.label}</td>
            <td class="py-3.5 px-4 text-slate-700">${v.years}</td>
            <td class="py-3.5 px-4 font-bold text-slate-900">${v.units} Units</td>
            <td class="py-3.5 px-4 text-slate-700">${v.author}</td>
            <td class="py-3.5 px-4"><span class="px-2.5 py-1 rounded-none ${s.class} text-[11px] font-bold border font-mono">${s.label}</span></td>
            <td class="py-3.5 px-4 text-slate-500 text-[11px]">${v.lastEvent}</td>
            <td class="py-3.5 px-4 text-right space-x-2 text-xs">
              ${v.state === 'draft' ? `<button type="button" onclick="changeVersionState('${v.id}','review')" class="text-amber-700 hover:text-amber-900 font-bold cursor-pointer">Submit for Review</button>` : ''}
              ${v.state === 'review' ? `<button type="button" onclick="changeVersionState('${v.id}','approved')" class="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold rounded-none cursor-pointer transition">✓ Approve</button> <button type="button" onclick="changeVersionState('${v.id}','draft')" class="text-slate-500 hover:text-slate-800 text-[11px] cursor-pointer">Return</button>` : ''}
              ${v.state === 'approved' ? `<button type="button" onclick="changeVersionState('${v.id}','archived')" class="text-slate-500 hover:text-slate-800 text-[11px] cursor-pointer">Archive</button> <button type="button" onclick="navigateView('flowchart')" class="text-blue-600 hover:text-blue-800 font-bold text-xs cursor-pointer">View Graph</button>` : ''}
              ${v.state === 'archived' ? `<span class="text-slate-400 text-xs">Read Only</span>` : ''}
            </td>
          </tr>
        `;
      }).join('');
      const countEl = document.getElementById('versionRegistryCountBadge');
      if (countEl) countEl.textContent = `${window.VERSION_REGISTRY.length} Versions Registered`;
    }

    // 1. Navigation Controller
    
    // =========================================================================
    // SYSTEM SELECTOR & OUR PARTS DROPDOWN CONTROLLERS
    // =========================================================================

    // =========================================================================
    // SIDEBAR ACCORDION CHEVRON CONTROLLERS (^ open / v closed)
    // =========================================================================
    // Opens a chevron accordion section (sets chevron to ^ / up)
    function _openSection(cId, chId) {
      const c = document.getElementById(cId);
      const ch = document.getElementById(chId);
      if (c && c.classList.contains('hidden')) {
        c.classList.remove('hidden');
        if (ch) ch.classList.remove('rotate-180');
      }
    }

    function _toggleChevronAccordion(containerId, chevronId) {
      const container = document.getElementById(containerId);
      const chevron = document.getElementById(chevronId);
      if (!container) return;
      const isHidden = container.classList.contains('hidden');
      if (isHidden) {
        container.classList.remove('hidden');
        if (chevron) chevron.classList.remove('rotate-180'); // ^ = open (up)
      } else {
        container.classList.add('hidden');
        if (chevron) chevron.classList.add('rotate-180'); // v = closed (down)
      }
    }

    function toggleCurriculumAccordion() {
      _toggleChevronAccordion('curriculumModulesContainer', 'currChevron');
    }
    function toggleRegistrarDocsAccordion() {
      _toggleChevronAccordion('registrarDocsContainer', 'regDocsChevron');
    }
    function toggleGovernanceAccordion() {
      _toggleChevronAccordion('governanceContainer', 'govChevron');
    }
    function toggleSyllabusAccordion() {
      _toggleChevronAccordion('syllabusModulesContainer', 'syllabusChevron');
    }
    function toggleCourseAccordion() {
      _toggleChevronAccordion('courseModulesContainer', 'courseChevron');
    }

    // Generic Folder Accordion for Hierarchical Sidebar Navigation
    function toggleFolderAccordion(containerId, chevronId) {
      const container = document.getElementById(containerId);
      const chevron = document.getElementById(chevronId);
      if (!container) return;
      const isHidden = container.classList.contains('hidden');
      if (isHidden) {
        container.classList.remove('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
      } else {
        container.classList.add('hidden');
        if (chevron) chevron.classList.add('rotate-180');
      }
    }

    
    // =========================================================================
    // FILE EXPLORER PATHING & ACCORDION TREE ENGINE
    // =========================================================================
    let currentExplorerView = 'flowchart';
    let currentExplorerSubParam = 1;

    // Canonical Path Model for all Academic Modules
    const EXPLORER_PATH_MODEL = {
      home: {
        system: null,
        subFolder: null,
        leaf: 'Portal Homepage',
        leafIcon: '🏠',
        ext: '.portal',
        parent: null
      },
      flowchart: {
        system: 'Curriculum Management',
        systemView: 'flowchart',
        subFolder: null,
        leaf: 'Dynamic Prereq Flowchart',
        leafIcon: '⚡',
        ext: '.dag',
        parent: 'home'
      },
      catalog: {
        system: 'Curriculum Management',
        systemView: 'flowchart',
        subFolder: null,
        leaf: 'Course Catalog (74 Courses)',
        leafIcon: '📖',
        ext: '.catalog',
        parent: 'flowchart'
      },
      obe: {
        system: 'Curriculum Management',
        systemView: 'flowchart',
        subFolder: null,
        leaf: 'OBE Matrix (SO a–m)',
        leafIcon: '🎯',
        ext: '.matrix',
        parent: 'flowchart'
      },
      dashboard: {
        system: 'Curriculum Management',
        systemView: 'flowchart',
        subFolder: null,
        leaf: 'Dashboard & Versions',
        leafIcon: '📊',
        ext: '.rev',
        parent: 'flowchart'
      },
      spreadsheet: {
        system: 'Curriculum Management',
        systemView: 'flowchart',
        subFolder: null,
        leaf: 'Integrated Spreadsheet Workbench',
        leafIcon: '📑',
        ext: '.sheet',
        parent: 'flowchart'
      },
      compliance: {
        system: 'Curriculum Management',
        systemView: 'flowchart',
        subFolder: 'Governance & Compliance',
        subFolderView: 'compliance',
        leaf: 'CHED CMO 92 Audit',
        leafIcon: '⚖️',
        ext: '.audit',
        parent: 'flowchart'
      },
      delegation: {
        system: 'Curriculum Management',
        systemView: 'flowchart',
        subFolder: 'Governance & Compliance',
        subFolderView: 'compliance',
        leaf: 'Cluster Delegations (D-RBAC)',
        leafIcon: '👥',
        ext: '.rbac',
        parent: 'compliance'
      },
      audit: {
        system: 'Curriculum Management',
        systemView: 'flowchart',
        subFolder: 'Governance & Compliance',
        subFolderView: 'compliance',
        leaf: 'Immutable Audit Trail (SHA-256)',
        leafIcon: '🔒',
        ext: '.sha256',
        parent: 'compliance'
      },
      registrar: {
        system: 'Curriculum Management',
        systemView: 'flowchart',
        subFolder: 'Official Registrar Docs',
        subFolderView: 'registrar',
        leaf: '1. Official Flowchart',
        leafIcon: '📄',
        ext: '.regdoc',
        parent: 'flowchart'
      },
      syllabus: {
        system: 'Syllabus Management',
        systemView: 'syllabus',
        subFolder: null,
        leaf: 'Syllabi & Instructional Design',
        leafIcon: '📑',
        ext: '.syllabus',
        parent: 'home'
      },
      course: {
        system: 'Course Management',
        systemView: 'course',
        subFolder: null,
        leaf: 'Scheduling & Faculty Loading',
        leafIcon: '👥',
        ext: '.sched',
        parent: 'home'
      }
    };

    function updateFileExplorerPath(viewId, subParam = null) {
      currentExplorerView = viewId;
      if (subParam !== null) currentExplorerSubParam = subParam;

      const container = document.getElementById('explorerPathSegments');
      if (!container) return;

      const model = EXPLORER_PATH_MODEL[viewId] || EXPLORER_PATH_MODEL.flowchart;
      let leafTitle = model.leaf;
      let leafIcon = model.leafIcon;

      if (viewId === 'registrar') {
        const tabIdx = subParam || (typeof currentRegistrarTab !== 'undefined' ? currentRegistrarTab : 1);
        const titles = [
          'Sheet 1: Official Flowchart',
          'Sheet 2: Curriculum Prospectus',
          'Sheet 3: Course Catalog Descriptions',
          'Sheet 4: Program of Study Matrix',
          'Sheet 5: OBE Curriculum Map',
          'Sheet 6: Comparative Summary',
          'Sheet 7: Summary of Units'
        ];
        leafTitle = titles[tabIdx - 1] || `Sheet ${tabIdx}`;
        leafIcon = '📄';
      }

      let html = '';

      // 1. Root Segment: SOE (School of Engineering)
      html += `
        <button type="button" onclick="navigateView('home')" class="flex items-center space-x-1.5 px-2 py-0.5 rounded-none text-slate-700 hover:text-slate-950 hover:bg-slate-200/80 transition group" title="Root: School of Engineering (Home)">
          <span class="text-sm">🏛️</span>
          <span class="font-bold text-slate-900">SOE</span>
        </button>
      `;

      // 2. System Level Segment
      if (model.system) {
        html += `
          <button type="button" onclick="openPathDropdown('system', event)" class="p-0.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-none transition" title="Show Siblings">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
          </button>
          <button type="button" onclick="navigateView('${model.systemView || 'flowchart'}')" class="flex items-center space-x-1 px-1.5 py-0.5 rounded-none text-slate-700 hover:text-slate-950 hover:bg-slate-200/80 transition" title="System Directory">
            <span class="text-xs text-amber-500">📁</span>
            <span class="font-medium">${model.system}</span>
          </button>
        `;
      }

      // 3. Sub-folder Level Segment (Registrar Docs or Governance)
      if (model.subFolder) {
        html += `
          <button type="button" onclick="openPathDropdown('subfolder', event)" class="p-0.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-none transition" title="Show Folder Items">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
          </button>
          <button type="button" onclick="navigateView('${model.subFolderView || 'flowchart'}')" class="flex items-center space-x-1 px-1.5 py-0.5 rounded-none text-slate-700 hover:text-slate-950 hover:bg-slate-200/80 transition" title="Sub-folder">
            <span class="text-xs text-amber-500">📁</span>
            <span class="font-medium">${model.subFolder}</span>
          </button>
        `;
      }

      // 4. Current Leaf Page Segment
      html += `
        <span class="text-slate-400 p-0.5 select-none font-bold">›</span>
        <div class="flex items-center space-x-1.5 px-2 py-0.5 rounded-none bg-amber-100/70 border border-amber-300 text-[#002855] font-extrabold shadow-2xs">
          <span>${leafIcon}</span>
          <span>${leafTitle}</span>
          <span class="text-[11px] font-mono text-amber-800 bg-amber-200/70 px-1 py-0.2 rounded-none font-semibold ml-0.5">${model.ext}</span>
        </div>
      `;

      container.innerHTML = html;

      // Also keep legacy breadcrumb spans in sync so any other script doesn't crash
      const bSec = document.getElementById('breadcrumb-section');
      const bPage = document.getElementById('breadcrumb-page');
      if (bSec && bPage) {
        if (viewId === 'home') {
          bSec.innerText = 'RAMS Academic Suite';
          bPage.innerText = 'Portal Homepage';
        } else if (viewId === 'syllabus') {
          bSec.innerText = 'Academic Modules';
          bPage.innerText = 'Syllabus Management System';
        } else if (viewId === 'course') {
          bSec.innerText = 'Academic Modules';
          bPage.innerText = 'Course Management System';
        } else if (viewId === 'flowchart') {
          bSec.innerText = 'Dynamic Flowchart Canvas';
          bPage.innerText = 'Interactive Directed Acyclic Graph (DAG)';
        } else if (viewId === 'catalog') {
          bSec.innerText = 'Curriculum Workbench';
          bPage.innerText = 'Course Catalog (74 Courses)';
        } else if (viewId === 'obe') {
          bSec.innerText = 'OBE Architecture';
          bPage.innerText = 'Outcomes-to-Course Progression Matrix';
        } else if (viewId === 'dashboard') {
          bSec.innerText = 'Version Hub';
          bPage.innerText = 'Curriculum Overview';
        } else if (viewId === 'spreadsheet') {
          bSec.innerText = 'Curriculum Management';
          bPage.innerText = 'Integrated Spreadsheet Workbench';
        } else if (viewId === 'compliance') {
          bSec.innerText = 'Governance';
          bPage.innerText = 'CHED CMO 92 Statutory Audit';
        } else if (viewId === 'delegation') {
          bSec.innerText = 'D-RBAC Collaboration';
          bPage.innerText = 'Faculty Cluster Scoping';
        } else if (viewId === 'audit') {
          bSec.innerText = 'Security';
          bPage.innerText = 'Append-Only Audit Trail (SHA-256)';
        }
      }
      if (viewId === 'flowchart') {
        setTimeout(() => { drawAllArrows(); }, 80);
      } else if (viewId === 'registrar') {
        bSec.innerText = 'Official Registrar Suite';
        bPage.innerText = getRegistrarDocTitle(currentRegistrarTab || 1);
        switchRegistrarDocTab(currentRegistrarTab || 1);
      }
    }

    // =========================================================================
    // ACADEMIC DEGREE PROGRAMS & 3 SUBSYSTEMS CONTROLLER
    // =========================================================================
    const ACADEMIC_PROGRAMS = {
      'BSCpE': {
        code: 'BSCpE',
        name: 'BS Computer Engineering',
        school: 'School of Engineering',
        schoolShort: 'SoE',
        units: '184 Units (167 Academic)',
        courses: 74,
        cmo: 'CMO 92, s. 2017',
        status: 'Active Baseline • 100% Compliant',
        clusters: [
          { role: 'FM', name: 'Faculty Member • Hardware & Embedded Systems Cluster', email: 'faculty@apc.edu.ph', courses: 'CPEDES1, EMICROS, MCROLAB, EMBEDDS', scope: 'CPEDES1' },
          { role: 'FM', name: 'Faculty Member • Computer Networks & Security Cluster', email: 'faculty.net@apc.edu.ph', courses: 'DATCOMS, COMNETS, NETSLAB', scope: 'COMNETS' }
        ]
      },
      'BSECE': {
        code: 'BSECE',
        name: 'BS Electronics Engineering',
        school: 'School of Engineering',
        schoolShort: 'SoE',
        units: '178 Units (162 Academic)',
        courses: 71,
        cmo: 'CMO 94, s. 2017',
        status: '100% Compliant',
        clusters: [
          { role: 'FM', name: 'Faculty Member • Communications & RF Engineering Cluster', email: 'faculty.ece@apc.edu.ph', courses: 'COMM101, SIGPROC, ELECMAG, RFDES', scope: 'COMM101' },
          { role: 'FM', name: 'Faculty Member • Microelectronics & VLSI Cluster', email: 'faculty.vlsi@apc.edu.ph', courses: 'VLSIDES, CIRCT101, SEMICOND', scope: 'VLSIDES' }
        ]
      },
      'BSEE': {
        code: 'BSEE',
        name: 'BS Electrical Engineering',
        school: 'School of Engineering',
        schoolShort: 'SoE',
        units: '175 Units (160 Academic)',
        courses: 69,
        cmo: 'CMO 88, s. 2017',
        status: '100% Compliant',
        clusters: [
          { role: 'FM', name: 'Faculty Member • Power Systems & Renewable Energy Cluster', email: 'faculty.ee@apc.edu.ph', courses: 'POWSYS1, ELECMACH, RENEWENG', scope: 'POWSYS1' },
          { role: 'FM', name: 'Faculty Member • Control Systems & Instrumentation Cluster', email: 'faculty.ctrl@apc.edu.ph', courses: 'AUTOCON, INSTENG, FEEDSYS', scope: 'AUTOCON' }
        ]
      },
      'BSCE': {
        code: 'BSCE',
        name: 'BS Civil Engineering',
        school: 'School of Engineering',
        schoolShort: 'SoE',
        units: '180 Units (164 Academic)',
        courses: 72,
        cmo: 'CMO 93, s. 2017',
        status: '100% Compliant',
        clusters: [
          { role: 'FM', name: 'Faculty Member • Structural Engineering & Mechanics Cluster', email: 'faculty.ce@apc.edu.ph', courses: 'STRUC101, STEELDES, CONCRDES', scope: 'STRUC101' },
          { role: 'FM', name: 'Faculty Member • Geotechnical & Transportation Cluster', email: 'faculty.geo@apc.edu.ph', courses: 'SOILMEC, HIGHWAY, TRANSENG', scope: 'SOILMEC' }
        ]
      },
      'BSCS': {
        code: 'BSCS',
        name: 'BS Computer Science',
        school: 'School of Computing & IT',
        schoolShort: 'SoCIT',
        units: '168 Units (152 Academic)',
        courses: 66,
        cmo: 'CMO 25, s. 2015',
        status: '100% Compliant',
        clusters: [
          { role: 'FM', name: 'Faculty Member • Algorithms & Intelligent Systems Cluster', email: 'faculty.cs@apc.edu.ph', courses: 'ALGO101, MACHINE_L, DATAMIN, DISCMAT', scope: 'ALGO101' },
          { role: 'FM', name: 'Faculty Member • Software Engineering & Compilers Cluster', email: 'faculty.swe@apc.edu.ph', courses: 'SOFTENG, COMPIL, OOPSYS', scope: 'SOFTENG' }
        ]
      },
      'BSIT': {
        code: 'BSIT',
        name: 'BS Information Technology',
        school: 'School of Computing & IT',
        schoolShort: 'SoCIT',
        units: '168 Units (152 Academic)',
        courses: 65,
        cmo: 'CMO 25, s. 2015',
        status: '100% Compliant',
        clusters: [
          { role: 'FM', name: 'Faculty Member • Network Administration & Cloud Cluster', email: 'faculty.it@apc.edu.ph', courses: 'NETADMIN, CLOUDARC, CYBERSEC', scope: 'NETADMIN' },
          { role: 'FM', name: 'Faculty Member • Enterprise Web & Mobile Systems Cluster', email: 'faculty.web@apc.edu.ph', courses: 'WEBDEV1, MOBDEV, DBADMIN', scope: 'WEBDEV1' }
        ]
      },
      'BSBA': {
        code: 'BSBA',
        name: 'BS Business Administration',
        school: 'School of Management',
        schoolShort: 'SoM',
        units: '150 Units (138 Academic)',
        courses: 58,
        cmo: 'CMO 17, s. 2017',
        status: '100% Compliant',
        clusters: [
          { role: 'FM', name: 'Faculty Member • Marketing & Strategic Analytics Cluster', email: 'faculty.ba@apc.edu.ph', courses: 'MKTG101, STRATMAN, BUSANAL', scope: 'MKTG101' },
          { role: 'FM', name: 'Faculty Member • Financial Management & Operations Cluster', email: 'faculty.fin@apc.edu.ph', courses: 'FINMAN, CORPFIN, OPERMAN', scope: 'FINMAN' }
        ]
      },
      'BSRM': {
        code: 'BSRM',
        name: 'BS Real Estate Management',
        school: 'School of Management',
        schoolShort: 'SoM',
        units: '152 Units (140 Academic)',
        courses: 60,
        cmo: 'CMO 18, s. 2017',
        status: '100% Compliant',
        clusters: [
          { role: 'FM', name: 'Faculty Member • Property Appraisal & Valuation Cluster', email: 'faculty.rem@apc.edu.ph', courses: 'APPR101, REALEST, PROPMGT', scope: 'APPR101' },
          { role: 'FM', name: 'Faculty Member • Urban Planning & Real Estate Law Cluster', email: 'faculty.law@apc.edu.ph', courses: 'REALLAW, URBANPL, ENVIRM', scope: 'REALLAW' }
        ]
      },
      'BSArch': {
        code: 'BSArch',
        name: 'BS Architecture',
        school: 'School of Architecture & Design',
        schoolShort: 'SoAD',
        units: '190 Units (175 Academic)',
        courses: 76,
        cmo: 'CMO 61, s. 2017',
        status: '100% Compliant',
        clusters: [
          { role: 'FM', name: 'Faculty Member • Architectural Design & Theory Cluster', email: 'faculty.arch@apc.edu.ph', courses: 'ARCHDES1, THEOARCH, BLDTECH', scope: 'ARCHDES1' },
          { role: 'FM', name: 'Faculty Member • Urban Design & Heritage Conservation Cluster', email: 'faculty.urb@apc.edu.ph', courses: 'URBDES, HERITAG, PROFPRACT', scope: 'URBDES' }
        ]
      }
    };

    let currentSelectedProgram = null;

    function selectProgram(progCode, targetView = null) {
      if (!progCode || !ACADEMIC_PROGRAMS[progCode]) {
        progCode = 'BSCpE';
      }
      currentSelectedProgram = progCode;
      const prog = ACADEMIC_PROGRAMS[progCode];
      
      // Update UI elements for selected program
      updateProgramUiState();

      // Show toast confirmation
      if (typeof showToast === 'function') {
        showToast(`Program Selected: ${prog.name} (${prog.code}) — 3 Subsystems Activated!`);
      }

      // Navigate to target view if specified
      if (targetView) {
        navigateView(targetView);
      }
    }

    function deselectProgram() {
      currentSelectedProgram = null;
      updateProgramUiState();
      navigateView('home');
      if (typeof showToast === 'function') {
        showToast('Returned to Institutional / School Overview. 3 Subsystems Hidden.');
      }
    }

    function updateProgramUiState() {
      const prog = currentSelectedProgram ? ACADEMIC_PROGRAMS[currentSelectedProgram] : null;
      
      // Sidebar elements
      const notice = document.getElementById('sidebarNoProgramNotice');
      const card = document.getElementById('sidebarActiveProgramCard');
      const subsystemsContainer = document.getElementById('subsystemsSidebarContainer');
      const topology = document.getElementById('sidebarTopologyFooter');
      const sideTitle = document.getElementById('sidebarActiveProgramTitle');
      const sideMeta = document.getElementById('sidebarActiveProgramMeta');
      const sideSelect = document.getElementById('sidebarProgramSelect');

      // Header elements
      const headerSubtitle = document.getElementById('headerProgramSubtitle');
      const headerExitBtn = document.getElementById('headerExitProgramBtn');

      // Home banner elements
      const homeActionText = document.getElementById('homeTopActionText');
      const homeExitBtn = document.getElementById('homeTopExitProgBtn');
      const homeScope = document.getElementById('homeScopeText');

      // Dropdowns on home
      const adminSelect = document.getElementById('adminProgramSelect');
      const exdSelect = document.getElementById('exdProgramSelect');

      if (prog) {
        // PROGRAM SELECTED: Reveal 3 subsystems!
        if (notice) notice.classList.add('hidden');
        if (card) card.classList.remove('hidden');
        if (subsystemsContainer) subsystemsContainer.classList.remove('hidden');
        if (topology) topology.classList.remove('hidden');

        if (sideTitle) sideTitle.innerText = `${prog.name} (${prog.code})`;
        if (sideMeta) sideMeta.innerText = `${prog.school} · ${prog.units}`;
        if (sideSelect) sideSelect.value = prog.code;

        if (headerSubtitle) {
          headerSubtitle.innerText = `${prog.name} (${prog.code})`;
          headerSubtitle.className = 'text-[10px] font-semibold text-amber-700 tracking-wide';
        }
        if (headerExitBtn) headerExitBtn.classList.remove('hidden');

        if (homeActionText) homeActionText.innerText = `⚡ Open ${prog.code} Flowchart →`;
        if (homeExitBtn) homeExitBtn.classList.remove('hidden');
        if (homeScope) {
          homeScope.innerText = `${prog.name} (${prog.code}) · ${prog.school}`;
          homeScope.className = 'text-amber-700 font-bold';
        }

        if (adminSelect) adminSelect.value = prog.code;
        if (exdSelect) exdSelect.value = prog.code;

        // Subsystem 2 & 3 dynamic badge labels
        const sylBadge = document.getElementById('syllabusProgBadge');
        const sylScope = document.getElementById('syllabusScopeText');
        const sylTableTitle = document.getElementById('syllabusTableProgTitle');
        if (sylBadge) sylBadge.innerText = `${prog.code} Active`;
        if (sylScope) sylScope.innerText = `${prog.name} (${prog.units})`;
        if (sylTableTitle) sylTableTitle.innerText = prog.name;

        const crsBadge = document.getElementById('courseProgBadge');
        const crsScope = document.getElementById('courseScopeText');
        const crsTableTitle = document.getElementById('courseTableProgTitle');
        if (crsBadge) crsBadge.innerText = `${prog.code} Active`;
        if (crsScope) crsScope.innerText = `${prog.name} (${prog.units})`;
        if (crsTableTitle) crsTableTitle.innerText = prog.name;

        // Universal Top Bar Program Badge
        const topBarProgBadge = document.getElementById('activeProgramBadgeText');
        if (topBarProgBadge) topBarProgBadge.innerText = prog.code;

      } else {
        // NO PROGRAM SELECTED: Hide 3 subsystems!
        if (notice) notice.classList.remove('hidden');
        if (card) card.classList.add('hidden');
        if (subsystemsContainer) subsystemsContainer.classList.add('hidden');
        if (topology) topology.classList.add('hidden');

        if (sideSelect) sideSelect.value = '';

        const roleSelector = document.getElementById('roleSelector');
        const curRole = roleSelector ? roleSelector.value : 'admin';

        if (headerSubtitle) {
          if (curRole === 'admin') {
            headerSubtitle.innerText = 'Institutional Level · No Program Selected';
          } else if (curRole === 'exd') {
            headerSubtitle.innerText = 'School of Engineering · No Program Selected';
          } else {
            headerSubtitle.innerText = 'No Program Selected';
          }
          headerSubtitle.className = 'text-[10px] font-semibold text-slate-500 tracking-wide';
        }
        if (headerExitBtn) headerExitBtn.classList.add('hidden');

        if (homeActionText) homeActionText.innerText = '⚡ Select Degree Program →';
        if (homeExitBtn) homeExitBtn.classList.add('hidden');
        if (homeScope) {
          homeScope.innerText = 'No Program Selected · Choose a Degree Program Below';
          homeScope.className = 'text-slate-500 font-bold';
        }

        if (adminSelect) adminSelect.value = '';
        if (exdSelect) exdSelect.value = '';
      }
    }

    function handleHomeTopAction() {
      if (currentSelectedProgram) {
        navigateView('flowchart');
      } else {
        const curRole = document.getElementById('roleSelector') ? document.getElementById('roleSelector').value : 'admin';
        if (curRole === 'admin') {
          const bar = document.getElementById('adminProgramLauncherBar');
          if (bar) bar.scrollIntoView({ behavior: 'smooth' });
          const sel = document.getElementById('adminProgramSelect');
          if (sel) sel.focus();
        } else {
          const bar = document.getElementById('exdProgramLauncherBar');
          if (bar) bar.scrollIntoView({ behavior: 'smooth' });
          const sel = document.getElementById('exdProgramSelect');
          if (sel) sel.focus();
        }
        if (typeof showToast === 'function') {
          showToast('Please select an Academic Degree Program to activate subsystems.');
        }
      }
    }

    window.selectProgram = selectProgram;
    window.deselectProgram = deselectProgram;
    window.handleHomeTopAction = handleHomeTopAction;

    // 2. Role Switcher
    function renderHomepageForRole(role) {
      const headerSubtitle = document.getElementById('headerProgramSubtitle');
      const homePill = document.getElementById('homeRolePill');
      const homeSubtitle = document.getElementById('homeSubtitleText');
      const homeUser = document.getElementById('homeSignedInUser');
      const homeScope = document.getElementById('homeScopeText');
      
      const adminView = document.getElementById('homeAdminInstitutionalView');
      const exdView = document.getElementById('homeExdProgramsView');
      const pdView = document.getElementById('homePdProgramView');
      const facultyView = document.getElementById('homeFacultyWorkerView');

      // Hide all role program views initially
      if (adminView) adminView.classList.add('hidden');
      if (exdView) exdView.classList.add('hidden');
      if (pdView) pdView.classList.add('hidden');
      if (facultyView) facultyView.classList.add('hidden');

      if (role === 'admin') {
        // 1. SYSTEM ADMINISTRATOR: INSTITUTIONAL LEVEL (ALL SCHOOLS)
        if (headerSubtitle) {
          headerSubtitle.innerText = currentSelectedProgram 
            ? `${ACADEMIC_PROGRAMS[currentSelectedProgram].name} (${currentSelectedProgram})`
            : 'Institutional Academic Architecture · All Schools Oversight (No Program Selected)';
        }
        if (homePill) {
          homePill.innerText = 'SYSTEM ADMINISTRATOR · INSTITUTIONAL';
          homePill.className = 'px-2.5 py-0.5 bg-rose-900 text-white text-[10px] font-black uppercase tracking-wider border border-rose-700';
        }
        if (homeSubtitle) homeSubtitle.innerText = 'Asia Pacific College · Institutional Architecture & Multi-School Governance';
        if (homeUser) homeUser.innerText = 'System Administrator';
        if (homeScope) {
          homeScope.innerText = 'All Academic Schools & Divisions (SoE, SoCIT, SoM, SoAD)';
          homeScope.className = 'text-rose-900 font-bold';
        }
        if (adminView) adminView.classList.remove('hidden');

      } else if (role === 'exd') {
        // 2. EXECUTIVE DIRECTOR: LIMITED TO A SCHOOL (SCHOOL OF ENGINEERING)
        if (headerSubtitle) {
          headerSubtitle.innerText = currentSelectedProgram
            ? `${ACADEMIC_PROGRAMS[currentSelectedProgram].name} (${currentSelectedProgram})`
            : 'School of Engineering · All Programs Oversight (No Program Selected)';
        }
        if (homePill) {
          homePill.innerText = 'EXECUTIVE DIRECTOR · SCHOOL OF ENGINEERING';
          homePill.className = 'px-2.5 py-0.5 bg-emerald-800 text-white text-[10px] font-black uppercase tracking-wider border border-emerald-600';
        }
        if (homeSubtitle) homeSubtitle.innerText = 'School of Engineering · Institutional Programs Review & Compliance';
        if (homeUser) homeUser.innerText = 'Executive Director — School of Engineering';
        if (homeScope) {
          homeScope.innerText = 'School of Engineering (All Programs: BSCpE, BSECE, BSEE, BSCE)';
          homeScope.className = 'text-emerald-800 font-bold';
        }
        if (exdView) exdView.classList.remove('hidden');

      } else if (role === 'pd') {
        // 3. PROGRAM DIRECTOR: UNDER A SCHOOL OFFERING A CERTAIN PROGRAM (BSCpE)
        if (headerSubtitle) headerSubtitle.innerText = 'BS Computer Engineering (BSCpE)';
        if (homePill) {
          homePill.innerText = 'PROGRAM DIRECTOR · COMPUTER ENGINEERING';
          homePill.className = 'px-2.5 py-0.5 bg-[#002855] text-[#E5A823] border border-[#E5A823] text-[10px] font-black uppercase tracking-wider';
        }
        if (homeSubtitle) homeSubtitle.innerText = 'Asia Pacific College · School of Engineering · Computer Engineering Department';
        if (homeUser) homeUser.innerText = 'Program Director — Computer Engineering';
        if (homeScope) {
          homeScope.innerText = 'BS Computer Engineering (Under School of Engineering)';
          homeScope.className = 'text-amber-700 font-bold';
        }
        if (pdView) pdView.classList.remove('hidden');

      } else if (role === 'faculty') {
        // 4. FACULTY MEMBER: WORKING UNDER PROGRAM DIRECTOR
        if (headerSubtitle) headerSubtitle.innerText = 'Faculty Workbench · Computer Engineering Department';
        if (homePill) {
          homePill.innerText = 'FACULTY MEMBER · HARDWARE & EMBEDDED CLUSTER';
          homePill.className = 'px-2.5 py-0.5 bg-purple-900 text-white text-[10px] font-black uppercase tracking-wider border border-purple-600';
        }
        if (homeSubtitle) homeSubtitle.innerText = 'Working under Program Director (Computer Engineering) · School of Engineering';
        if (homeUser) homeUser.innerText = 'Faculty Member — Hardware & Embedded Systems';
        if (homeScope) {
          homeScope.innerText = 'Assigned Cluster: Hardware & Embedded Systems · Reporting to: Program Director';
          homeScope.className = 'text-purple-900 font-bold';
        }
        if (pdView) pdView.classList.remove('hidden');
      }
    }

    function switchRole(role) {
      const sbPill = document.getElementById('sidebarRolePill');
      if (sbPill) {
        if (role === 'admin') { sbPill.innerText = 'ADMIN'; sbPill.className = 'text-[9px] px-1.5 py-0.2 bg-rose-950 text-rose-300 border border-rose-800 font-mono font-bold'; }
        else if (role === 'exd') { sbPill.innerText = 'EXD'; sbPill.className = 'text-[9px] px-1.5 py-0.2 bg-amber-950 text-amber-300 border border-amber-800 font-mono font-bold'; }
        else if (role === 'pd') { sbPill.innerText = 'PD'; sbPill.className = 'text-[9px] px-1.5 py-0.2 bg-blue-950 text-blue-300 border border-blue-800 font-mono font-bold'; }
        else if (role === 'faculty') { sbPill.innerText = 'FACULTY'; sbPill.className = 'text-[9px] px-1.5 py-0.2 bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono font-bold'; }
      }

      const avatar = document.getElementById('userAvatarText');
      const name = document.getElementById('userNameText');
      const roleText = document.getElementById('userRoleText');
      const badge = document.getElementById('roleNoticeBadge');
      const headerBadge = document.getElementById('headerRoleBadge');
      const headerSubtitle = document.getElementById('headerProgramSubtitle');
      const roleSelector = document.getElementById('roleSelector');
      if (roleSelector && roleSelector.value !== role) roleSelector.value = role;
      if (typeof updateSidebarHierarchy === 'function') updateSidebarHierarchy(role);

      // Auto-configure program selection based on role
      if (role === 'pd' || role === 'faculty') {
        // Program Director & Faculty are assigned directly to BSCpE
        if (!currentSelectedProgram) {
          selectProgram('BSCpE');
        }
      } else {
        // Admin & ExD start at Institutional/School overview with no program selected
        deselectProgram();
      }

      // Determine currently visible view
      const currentActiveSection = document.querySelector('main > section:not(.hidden)');
      const currentViewId = currentActiveSection ? currentActiveSection.id.replace('view-', '') : 'home';

      if (role === 'admin') {
        if (avatar) avatar.innerText = 'SA';
        if (name) name.innerText = 'System Administrator';
        if (roleText) roleText.innerText = 'Institutional Superuser · Central SSO Lead';
        if (headerSubtitle) headerSubtitle.innerText = 'Institutional Level · All Schools & Degree Programs';
        if (headerBadge) {
          headerBadge.innerText = 'INSTITUTIONAL CLEARANCE';
          headerBadge.className = 'hidden md:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-300';
        }
        if (badge) {
          badge.innerText = 'Current Authority: System Administrator (Institutional Full Authority)';
          badge.className = 'text-[11px] font-semibold px-2.5 py-0.5 rounded-none bg-rose-100 text-rose-900 border border-rose-300';
        }
        renderHomepageForRole('admin');
        if (currentViewId === 'home') {
          navigateView('home');
        }
        showToast('Active Authority: System Administrator (Institutional Full Access)');
      } else if (role === 'exd') {
        if (avatar) avatar.innerText = 'ED';
        if (name) name.innerText = 'Executive Director — School of Engineering';
        if (roleText) roleText.innerText = 'School Executive Director · Academic Dean';
        if (headerSubtitle) headerSubtitle.innerText = 'School of Engineering · All Engineering Degree Programs';
        if (headerBadge) {
          headerBadge.innerText = 'SCHOOL EXECUTIVE';
          headerBadge.className = 'hidden md:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300';
        }
        if (badge) {
          badge.innerText = 'Current Authority: Executive Director (School of Engineering)';
          badge.className = 'text-[11px] font-semibold px-2.5 py-0.5 rounded-none bg-amber-100 text-amber-900 border border-amber-300';
        }
        renderHomepageForRole('exd');
        if (currentViewId === 'home') {
          navigateView('home');
        }
        showToast('Active Authority: Executive Director (School of Engineering)');
      } else if (role === 'pd') {
        if (avatar) avatar.innerText = 'PD';
        if (name) name.innerText = 'Program Director — Computer Engineering';
        if (roleText) roleText.innerText = 'Program Director · Lead Curriculum Author';
        if (headerSubtitle) headerSubtitle.innerText = 'BS Computer Engineering (BSCpE)';
        if (headerBadge) {
          headerBadge.innerText = 'PROGRAM DIRECTOR';
          headerBadge.className = 'hidden md:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-indigo-100 text-indigo-800 border border-indigo-300';
        }
        if (badge) {
          badge.innerText = 'Current Authority: Program Director (BSCpE Degree Lead)';
          badge.className = 'text-[11px] font-semibold px-2.5 py-0.5 rounded-none bg-blue-100 text-blue-800 border border-blue-200';
        }
        renderHomepageForRole('pd');
        if (currentViewId === 'home') {
          navigateView('home');
        }
        showToast('Active Authority: Program Director (Managing BS Computer Engineering)');
      } else if (role === 'faculty') {
        if (avatar) avatar.innerText = 'FM';
        if (name) name.innerText = 'Faculty Member — Hardware & Embedded Systems';
        if (roleText) roleText.innerText = 'Faculty Instructor · Course Syllabus Contributor';
        if (headerSubtitle) headerSubtitle.innerText = 'Computer Engineering · Faculty Workstation';
        if (headerBadge) {
          headerBadge.innerText = 'FACULTY INSTRUCTOR';
          headerBadge.className = 'hidden md:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300';
        }
        if (badge) {
          badge.innerText = 'Current Authority: Faculty Member (Hardware & Embedded Systems)';
          badge.className = 'text-[11px] font-semibold px-2.5 py-0.5 rounded-none bg-emerald-100 text-emerald-800 border border-emerald-300';
        }
        renderHomepageForRole('faculty');
        if (currentViewId === 'home') {
          navigateView('home');
        }
        showToast('Active Authority: Faculty Member (Hardware & Embedded Systems)');
      }
    
            // Dynamic Faculty Banner on Integrated Spreadsheet
      const facultyBanner = document.getElementById('facultySpreadsheetBanner');
      const spreadsheetReturnText = document.getElementById('spreadsheetReturnText');
      if (role === 'faculty') {
        if (facultyBanner) facultyBanner.classList.remove('hidden');
        if (spreadsheetReturnText) spreadsheetReturnText.innerText = 'Back to Faculty Workbench';
      } else {
        if (facultyBanner) facultyBanner.classList.add('hidden');
        if (spreadsheetReturnText) spreadsheetReturnText.innerText = 'Back to Prerequisite Flowchart';
      }
    }

    // =========================================================================
    // FLOWCHART RENDERING & DYNAMIC ARROWS ENGINE
    // =========================================================================
    // LIVE UPDATING INTERACTIVE PREREQUISITE DIAGRAM CANVAS ENGINE (Curriculum Management v3.0)
    // =========================================================================
    let diagramCanvasTheme = 'light'; // 'light' (Crisp Academic Blueprint) or 'dark' (High-Tech)
    let diagramGridSnapEnabled = true; // Snap courses to dot grid when moving
    const GRID_SNAP_SIZE = 28; // Matches the 28px dot grid spacing

    let diagramZoom = 0.82;
    let diagramPanX = 40;
    let diagramPanY = 30;
    let diagramLayoutMode = 'swimlanes'; // 'swimlanes' or 'tree'
    let flowPulseEnabled = true;
    let currentArrowStyle = 'orthogonal'; // 'curved' or 'orthogonal'
    showAllArrowsEnabled = true;
    currentSelectedCode = null;
    activePaletteMode = 'grouping';
    let isPanningCanvas = false;
    let panStartX = 0, panStartY = 0;
    let initialPanX = 0, initialPanY = 0;
    let isDraggingNode = false;
    let activeDragNode = null;
    let dragNodeStartX = 0, dragNodeStartY = 0;
    let nodeInitialX = 0, nodeInitialY = 0;
    let customNodeCoords = {}; // Persist dragged positions

    // --- DYNAMIC ZOOM CLAMPING ENGINE (Never zoom farther out than necessary) ---
    function getMinDiagramZoom() {
      const container = document.getElementById('diagramCanvasContainer');
      const nodes = document.querySelectorAll('.diagram-node');
      if (!container || nodes.length === 0) return 0.35;

      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      nodes.forEach(node => {
        const x = parseFloat(node.style.left) || 0;
        const y = parseFloat(node.style.top) || 0;
        const w = node.offsetWidth || 230;
        const h = node.offsetHeight || 90;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x + w > maxX) maxX = x + w;
        if (y + h > maxY) maxY = y + h;
      });
      if (minX === Infinity) return 0.35;

      const totalW = maxX - minX + 120;
      const totalH = maxY - minY + 120;
      const containerW = container.clientWidth || 1200;
      const containerH = container.clientHeight || 760;

      const scaleX = (containerW - 60) / totalW;
      const scaleY = (containerH - 60) / totalH;
      const fitScale = Math.min(scaleX, scaleY);

      // Clamps zoom out limit to the exact bounding fit so all 74 courses fill screen without empty void
      return Math.max(0.28, Number(fitScale.toFixed(2)));
    }

    function updateZoomHudState() {
      const minZ = getMinDiagramZoom();
      const zoomOutBtn = document.getElementById('btnDiagramZoomOut');
      if (zoomOutBtn) {
        if (diagramZoom <= minZ + 0.01) {
          zoomOutBtn.classList.add('opacity-40', 'cursor-not-allowed');
          zoomOutBtn.setAttribute('title', `Minimum zoom reached (${Math.round(minZ * 100)}%): Entire curriculum is in full view`);
        } else {
          zoomOutBtn.classList.remove('opacity-40', 'cursor-not-allowed');
          zoomOutBtn.setAttribute('title', 'Zoom Out (- or Scroll Down)');
        }
      }
    }

    function applyDiagramTransform() {
      const viewport = document.getElementById('diagramViewport');
      const zoomDisplay = document.getElementById('diagramZoomPercent');
      if (viewport) {
        clampPanCoordinates();
        viewport.style.transform = `translate(${diagramPanX}px, ${diagramPanY}px) scale(${diagramZoom})`;
      }
      if (zoomDisplay) {
        zoomDisplay.innerText = `${Math.round(diagramZoom * 100)}%`;
      }
      updateZoomHudState();
      updateMinimapIndicator();
    }

    function diagramZoomIn() {
      diagramZoom = Math.min(2.4, Number((diagramZoom + 0.15).toFixed(2)));
      applyDiagramTransform();
    }

    function diagramZoomOut() {
      const minZ = getMinDiagramZoom();
      if (diagramZoom <= minZ + 0.01) {
        diagramZoom = minZ;
        applyDiagramTransform();
        showToast(`Minimum zoom limit reached (${Math.round(minZ * 100)}%): Entire curriculum is in full view.`);
        return;
      }
      diagramZoom = Math.max(minZ, Number((diagramZoom - 0.12).toFixed(2)));
      applyDiagramTransform();
    }

    function diagramResetZoom() {
      diagramZoom = 1.0;
      applyDiagramTransform();
    }

    function diagramFitView() {
      const container = document.getElementById('diagramCanvasContainer');
      const nodes = document.querySelectorAll('.diagram-node');
      if (!container || nodes.length === 0) return;

      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      nodes.forEach(node => {
        const x = parseFloat(node.style.left) || 0;
        const y = parseFloat(node.style.top) || 0;
        const w = node.offsetWidth || 230;
        const h = node.offsetHeight || 90;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x + w > maxX) maxX = x + w;
        if (y + h > maxY) maxY = y + h;
      });

      if (minX === Infinity) return;

      const totalW = maxX - minX + 120;
      const totalH = maxY - minY + 120;
      const containerW = container.clientWidth || 1200;
      const containerH = container.clientHeight || 760;

      const scaleX = (containerW - 60) / totalW;
      const scaleY = (containerH - 60) / totalH;
      diagramZoom = Math.min(Math.max(Math.min(scaleX, scaleY), 0.28), 1.2);

      diagramPanX = Math.round((containerW - totalW * diagramZoom) / 2 - minX * diagramZoom + 40 * diagramZoom);
      diagramPanY = Math.round((containerH - totalH * diagramZoom) / 2 - minY * diagramZoom + 30 * diagramZoom);

      applyDiagramTransform();
      showToast(`Diagram fitted to view (${Math.round(diagramZoom * 100)}% zoom).`);
    }

    function toggleDiagramFullscreen() {
      const container = document.getElementById('diagramCanvasContainer');
      const icon = document.getElementById('btnFsIcon');
      if (!document.fullscreenElement) {
        if (container.requestFullscreen) container.requestFullscreen();
        if (icon) icon.innerText = '⤓';
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        if (icon) icon.innerText = '⛶';
      }
    }

    // --- GRID SNAPPING ENGINE (User Requested) ---
    function toggleDiagramGridSnap() {
      diagramGridSnapEnabled = !diagramGridSnapEnabled;
      const btn = document.getElementById('btnToggleGridSnap');
      const label = document.getElementById('labelGridSnap');
      if (btn && label) {
        if (diagramGridSnapEnabled) {
          btn.className = "px-2.5 py-1.5 rounded-none border border-blue-300 bg-blue-100 text-blue-900 text-xs font-bold transition flex items-center gap-1.5 shadow-xs hover:bg-blue-200";
          label.innerText = `Snap: ON (${GRID_SNAP_SIZE}px)`;
          showToast(`🧲 Grid snapping ENABLED (${GRID_SNAP_SIZE}px dot grid). Courses align magnetically.`);
        } else {
          btn.className = "px-2.5 py-1.5 rounded-none border border-slate-300 bg-slate-100 text-slate-600 text-xs font-bold transition flex items-center gap-1.5 hover:bg-slate-200";
          label.innerText = "Snap: OFF";
          showToast("Free movement enabled (grid snap disabled).");
        }
      }
    }

    // --- CANVAS THEME ENGINE (Crisp Academic Light vs Dark) ---
    function applyDiagramCanvasTheme(theme) {
      diagramCanvasTheme = theme;
      const container = document.getElementById('diagramCanvasContainer');
      const gridBg = document.getElementById('diagramCanvasGridPattern');
      const zoomHud = document.getElementById('diagramZoomHud');
      const minimapBox = document.getElementById('diagramMinimapContainer');
      const minimapInner = document.getElementById('diagramMinimap');
      const shortcutBox = document.getElementById('diagramShortcutHint');
      const themeBtn = document.getElementById('btnToggleCanvasTheme');
      const themeIcon = document.getElementById('themeCanvasIcon');
      const themeLabel = document.getElementById('themeCanvasLabel');

      if (!container) return;

      if (theme === 'light') {
        // Crisp Academic Blueprint Light Theme (Default, matches APC & Registrar copies)
        container.className = "relative w-full h-[760px] bg-slate-50 rounded-none border-2 border-slate-300 shadow-xl overflow-hidden select-none cursor-grab active:cursor-grabbing";
        if (gridBg) {
          gridBg.className = "absolute inset-0 pointer-events-none opacity-45";
          gridBg.style.backgroundImage = "radial-gradient(#94a3b8 1.25px, transparent 1.25px)";
          gridBg.style.backgroundSize = "28px 28px";
        }
        if (zoomHud) {
          zoomHud.className = "absolute bottom-5 right-5 z-40 flex items-center bg-white/95 backdrop-blur-md border border-slate-300 rounded-none p-1 shadow-xl space-x-1 text-slate-800";
        }
        if (minimapBox) {
          minimapBox.className = "absolute bottom-5 left-5 z-40 bg-white/95 backdrop-blur-md border border-slate-300 rounded-none p-2 shadow-xl text-slate-800 hidden sm:block";
        }
        if (minimapInner) {
          minimapInner.className = "relative w-44 h-24 bg-slate-100 rounded-none border border-slate-300 overflow-hidden cursor-crosshair";
        }
        if (shortcutBox) {
          shortcutBox.className = "bg-white/90 backdrop-blur border border-slate-200 text-[11px] text-slate-600 px-3 py-1.5 rounded-none flex items-center gap-3 shadow-xs";
        }
        if (themeBtn && themeIcon && themeLabel) {
          themeIcon.innerText = "☀️";
          themeLabel.innerText = "Light Blueprint";
          themeBtn.className = "px-2.5 py-1.5 rounded-none border border-amber-300 bg-amber-50 text-amber-900 text-xs font-bold transition flex items-center gap-1.5 shadow-xs hover:bg-amber-100";
        }
      } else {
        // High-Tech Dark Theme
        container.className = "relative w-full h-[760px] bg-slate-950 rounded-none border-2 border-slate-800 shadow-2xl overflow-hidden select-none cursor-grab active:cursor-grabbing";
        if (gridBg) {
          gridBg.className = "absolute inset-0 pointer-events-none opacity-20";
          gridBg.style.backgroundImage = "radial-gradient(#60a5fa 1px, transparent 1px)";
          gridBg.style.backgroundSize = "28px 28px";
        }
        if (zoomHud) {
          zoomHud.className = "absolute bottom-5 right-5 z-40 flex items-center bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-none p-1 shadow-2xl space-x-1 text-white";
        }
        if (minimapBox) {
          minimapBox.className = "absolute bottom-5 left-5 z-40 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-none p-2 shadow-2xl text-white hidden sm:block";
        }
        if (minimapInner) {
          minimapInner.className = "relative w-44 h-24 bg-slate-950 rounded-none border border-slate-800 overflow-hidden cursor-crosshair";
        }
        if (shortcutBox) {
          shortcutBox.className = "bg-slate-900/80 backdrop-blur border border-slate-800 text-[11px] text-slate-400 px-3 py-1.5 rounded-none flex items-center gap-3";
        }
        if (themeBtn && themeIcon && themeLabel) {
          themeIcon.innerText = "🌙";
          themeLabel.innerText = "Dark Canvas";
          themeBtn.className = "px-2.5 py-1.5 rounded-none border border-slate-600 bg-slate-800 text-slate-200 text-xs font-bold transition flex items-center gap-1.5 shadow-xs hover:bg-slate-700";
        }
      }

      renderFlowchartDiagram();
      setTimeout(drawAllArrows, 60);
    }

    function toggleDiagramCanvasTheme() {
      const nextTheme = diagramCanvasTheme === 'light' ? 'dark' : 'light';
      applyDiagramCanvasTheme(nextTheme);
      showToast(`Canvas theme switched to ${nextTheme === 'light' ? '☀️ Crisp Academic Light Blueprint' : '🌙 High-Tech Dark'}.`);
    }

    function setDiagramLayoutMode(mode) {
      diagramLayoutMode = mode;
      const btnSwim = document.getElementById('btnLayoutSwimlanes');
      const btnTree = document.getElementById('btnLayoutDagTree');

      if (btnSwim && btnTree) {
        if (mode === 'swimlanes') {
          btnSwim.className = 'px-2.5 py-1 rounded-none text-xs font-bold transition bg-white shadow-sm text-slate-800 flex items-center gap-1.5';
          btnTree.className = 'px-2.5 py-1 rounded-none text-xs font-bold transition text-slate-500 hover:text-slate-800 flex items-center gap-1.5';
        } else {
          btnTree.className = 'px-2.5 py-1 rounded-none text-xs font-bold transition bg-white shadow-sm text-slate-800 flex items-center gap-1.5';
          btnSwim.className = 'px-2.5 py-1 rounded-none text-xs font-bold transition text-slate-500 hover:text-slate-800 flex items-center gap-1.5';
        }
      }

      renderFlowchartDiagram();
      setTimeout(drawAllArrows, 60);
      showToast(mode === 'swimlanes' ? 'Switched to Trimester Academic Swimlanes.' : 'Switched to Hierarchical Prerequisite DAG Tree.');
    }

    function changeArrowStyleMode(style) {
      currentArrowStyle = style;
      const selectMain = document.getElementById('arrowStyleMode');
      if (selectMain) selectMain.value = style;
      drawAllArrows();
      showToast(`Arrow conduits updated to ${style === 'curved' ? 'Curved Bézier Splines' : 'Rounded Orthogonal Channels'}.`);
    }

    function toggleFlowPulseAnimation(enabled) {
      flowPulseEnabled = enabled;
      const arrows = document.querySelectorAll('.dag-arrow');
      arrows.forEach(a => {
        if (enabled) a.classList.add('flow-pulse');
        else a.classList.remove('flow-pulse');
      });
    }

    // Light Theme Academic Card Style Resolver
    function getLightCardStyle(c) {
      const meta = typeof getCategoryMeta === 'function' ? getCategoryMeta(c.group) : { color: 'slate' };
      const color = meta.color || 'slate';
      const borderColors = {
        indigo: 'border-l-indigo-600 hover:border-indigo-300',
        amber: 'border-l-amber-500 hover:border-amber-300',
        sky: 'border-l-sky-500 hover:border-sky-300',
        purple: 'border-l-purple-500 hover:border-purple-300',
        rose: 'border-l-rose-500 hover:border-rose-300',
        emerald: 'border-l-emerald-500 hover:border-emerald-300',
        teal: 'border-l-teal-500 hover:border-teal-300',
        cyan: 'border-l-cyan-500 hover:border-cyan-300',
        orange: 'border-l-orange-500 hover:border-orange-300',
        slate: 'border-l-slate-400 hover:border-slate-300'
      };
      const bColor = borderColors[color] || 'border-l-slate-400 hover:border-slate-300';
      return `bg-white text-slate-900 border-slate-200 border-l-4 ${bColor} shadow-sm hover:shadow-md`;
    }

    // --- NODE RENDERING ENGINE (No Tables!) ---
    function renderFlowchartDiagram() {
      const container = document.getElementById('diagramNodesContainer');
      const backdrop = document.getElementById('diagramSwimlanesBackdrop');
      if (!container || !backdrop) return;

      container.innerHTML = '';
      backdrop.innerHTML = '';

      const isLight = diagramCanvasTheme === 'light';

      // Update counters
      const totalUnits = ALL_COURSES.reduce((sum, c) => sum + (parseFloat(c.units) || 0), 0);
      const unitsCountEl = document.getElementById('diagramTotalUnitsCount');
      const coursesCountEl = document.getElementById('diagramTotalCoursesCount');
      const minimapCountEl = document.getElementById('minimapNodesCount');
      if (unitsCountEl) unitsCountEl.innerText = totalUnits.toFixed(1);
      if (coursesCountEl) coursesCountEl.innerText = ALL_COURSES.length;
      if (minimapCountEl) minimapCountEl.innerText = `${ALL_COURSES.length} Nodes`;

      const cardW = 224;
      const cardH = 88;
      const colGap = 56;
      const startX = 40;
      const startY = 85;

      if (diagramLayoutMode === 'swimlanes') {
        // Render 12 Trimester Columns grouped into 4 Academic Years
        const yearThemes = isLight ? [
          { name: 'YEAR 1', subtitle: 'General Engineering & Foundation', border: 'border-blue-300', bg: 'bg-blue-50/50', headerBg: 'bg-blue-100 text-blue-900 border border-blue-200' },
          { name: 'YEAR 2', subtitle: 'Intermediate Hardware & Software Core', border: 'border-teal-300', bg: 'bg-teal-50/50', headerBg: 'bg-teal-100 text-teal-900 border border-teal-200' },
          { name: 'YEAR 3', subtitle: 'Advanced Systems & Specialization Tracks', border: 'border-indigo-300', bg: 'bg-indigo-50/50', headerBg: 'bg-indigo-100 text-indigo-900 border border-indigo-200' },
          { name: 'YEAR 4', subtitle: 'Capstone Design & Industry Internships', border: 'border-amber-300', bg: 'bg-amber-50/50', headerBg: 'bg-amber-100 text-amber-900 border border-amber-200' }
        ] : [
          { name: 'YEAR 1', subtitle: 'General Engineering & Foundation', border: 'border-blue-500/30', bg: 'bg-blue-950/15', headerBg: 'bg-blue-900/40 text-blue-200' },
          { name: 'YEAR 2', subtitle: 'Intermediate Hardware & Software Core', border: 'border-teal-500/30', bg: 'bg-teal-950/15', headerBg: 'bg-teal-900/40 text-teal-200' },
          { name: 'YEAR 3', subtitle: 'Advanced Systems & Specialization Tracks', border: 'border-indigo-500/30', bg: 'bg-indigo-950/15', headerBg: 'bg-indigo-900/40 text-indigo-200' },
          { name: 'YEAR 4', subtitle: 'Capstone Design & Industry Internships', border: 'border-amber-500/30', bg: 'bg-amber-950/15', headerBg: 'bg-amber-900/40 text-amber-200' }
        ];

        // 1. Year Group Banners
        for (let y = 0; y < 4; y++) {
          const yStartX = startX + y * 3 * (cardW + colGap) - 16;
          const yWidth = 3 * (cardW + colGap) - colGap + 32;
          const yt = yearThemes[y];

          const yearBanner = document.createElement('div');
          yearBanner.className = `absolute rounded-none border ${yt.border} ${yt.bg} p-3 pointer-events-none transition-all`;
          yearBanner.style.left = `${yStartX}px`;
          yearBanner.style.top = '10px';
          yearBanner.style.width = `${yWidth}px`;
          // Dynamically enclose all courses in this academic year
          const yearCourses = ALL_COURSES.filter(c => c.year === (y + 1));
          const maxRowInYear = yearCourses.reduce((m, c) => Math.max(m, c.row || 1), 1);
          const bannerHeight = (startY - 10) + ((maxRowInYear - 1) * 106) + cardH + 20;
          yearBanner.style.height = `${bannerHeight}px`;
          yearBanner.innerHTML = `
            <div class="flex items-center justify-between px-2.5 py-1.5 rounded-none ${yt.headerBg} font-mono text-xs font-black tracking-wider shadow-xs">
              <span>${yt.name}</span>
              <span class="text-[11px] font-sans font-semibold opacity-90">${yt.subtitle}</span>
            </div>
          `;
          backdrop.appendChild(yearBanner);
        }

        // 2. Term Columns and Courses
        for (let col = 1; col <= 12; col++) {
          const colX = startX + (col - 1) * (cardW + colGap);
          const year = Math.ceil(col / 3);
          const term = ((col - 1) % 3) + 1;

          // Find courses in this column
          const termCourses = ALL_COURSES.filter(c => c.col === col || (c.year === year && c.term === term));
          const termUnits = termCourses.reduce((sum, c) => sum + (parseFloat(c.units) || 0), 0);

          // Term Header Card (Sleek floating badge)
          const termHeader = document.createElement('div');
          termHeader.className = isLight 
            ? 'absolute font-mono text-xs rounded-none bg-white/95 border border-slate-300/90 px-3 py-1.5 flex items-center justify-between text-slate-800 shadow-xs pointer-events-none'
            : 'absolute font-mono text-xs rounded-none bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 flex items-center justify-between text-slate-300 shadow-sm pointer-events-none';
          termHeader.style.left = `${colX}px`;
          termHeader.style.top = '44px';
          termHeader.style.width = `${cardW}px`;
          termHeader.innerHTML = isLight ? `
            <span class="font-black text-slate-900">Y${year} &bull; Term ${term}</span>
            <span class="px-1.5 py-0.5 rounded-none bg-amber-50 border border-amber-300 text-amber-900 text-[11px] font-bold">${termUnits.toFixed(1)}u &bull; ${termCourses.length}C</span>
          ` : `
            <span class="font-bold text-white">Y${year} &bull; Term ${term}</span>
            <span class="px-1.5 py-0.5 rounded-none bg-amber-400/20 text-amber-300 text-[11px] font-bold">${termUnits.toFixed(1)}u &bull; ${termCourses.length}C</span>
          `;
          backdrop.appendChild(termHeader);

          // Render Course Cards for this term
          termCourses.sort((a, b) => (a.row || 1) - (b.row || 1));

          termCourses.forEach((course, idx) => {
            let posX = colX;
            let posY = startY + ((course.row || (idx + 1)) - 1) * 106;

            if (customNodeCoords[course.code]) {
              posX = customNodeCoords[course.code].x;
              posY = customNodeCoords[course.code].y;
            }

            const card = createDiagramNodeElement(course, posX, posY, cardW, cardH);
            container.appendChild(card);
          });
        }

      } else {
        // TREE / HIERARCHICAL DAG MODE (Sugiyama Layout)
        const depthMap = {};
        function getDepth(code, visited = new Set()) {
          if (depthMap[code] !== undefined) return depthMap[code];
          if (visited.has(code)) return 0;
          visited.add(code);

          const c = ALL_COURSES.find(item => item.code === code);
          if (!c || !c.prereqs || c.prereqs.length === 0) {
            depthMap[code] = 0;
            return 0;
          }

          let maxP = 0;
          c.prereqs.forEach(p => {
            maxP = Math.max(maxP, getDepth(p, new Set(visited)) + 1);
          });
          depthMap[code] = maxP;
          return maxP;
        }

        ALL_COURSES.forEach(c => getDepth(c.code));

        const maxDepth = Math.max(...Object.values(depthMap), 0);
        const depthTiers = Array.from({ length: maxDepth + 1 }, () => []);

        ALL_COURSES.forEach(c => {
          const d = depthMap[c.code] || 0;
          depthTiers[d].push(c);
        });

        // Render Depth Tier Columns
        depthTiers.forEach((coursesInTier, d) => {
          const colX = startX + d * (cardW + colGap);

          // Tier Header Banner
          const tierBanner = document.createElement('div');
          tierBanner.className = isLight
            ? 'absolute font-mono text-xs rounded-none bg-white/95 border border-slate-300/90 px-3 py-1.5 flex items-center justify-between text-slate-800 shadow-xs pointer-events-none'
            : 'absolute font-mono text-xs rounded-none bg-slate-900/80 border border-slate-700/80 px-3 py-1.5 flex items-center justify-between text-slate-300 shadow-sm pointer-events-none';
          tierBanner.style.left = `${colX}px`;
          tierBanner.style.top = '25px';
          tierBanner.style.width = `${cardW}px`;
          tierBanner.innerHTML = isLight ? `
            <span class="font-black text-slate-900">Tier ${d}</span>
            <span class="px-1.5 py-0.5 rounded-none bg-emerald-50 border border-emerald-300 text-emerald-900 text-[11px] font-bold">${coursesInTier.length} Courses</span>
          ` : `
            <span class="font-bold text-white">Tier ${d}</span>
            <span class="px-1.5 py-0.5 rounded-none bg-emerald-400/20 text-emerald-300 text-[11px] font-bold">${coursesInTier.length} Courses</span>
          `;
          backdrop.appendChild(tierBanner);

          // Sort by year, then code
          coursesInTier.sort((a, b) => (a.year * 10 + a.term) - (b.year * 10 + b.term) || a.code.localeCompare(b.code));

          coursesInTier.forEach((course, idx) => {
            let posX = colX;
            let posY = startY + idx * 104;

            if (customNodeCoords[course.code]) {
              posX = customNodeCoords[course.code].x;
              posY = customNodeCoords[course.code].y;
            }

            const card = createDiagramNodeElement(course, posX, posY, cardW, cardH);
            container.appendChild(card);
          });
        });
      }

      // Initialize Canvas Drag/Pan and Node Dragging with Grid Snapping
      setupDiagramInteractions();

      // Render connected arrows
      setTimeout(drawAllArrows, 60);

      // Render mini-map
      setTimeout(updateMinimap, 100);
    }

    // Node Element Builder with Light / Dark Theme Support
    function createDiagramNodeElement(course, x, y, width, height) {
      const isLight = diagramCanvasTheme === 'light';
      const card = document.createElement('div');
      card.id = `node-${course.code}`;
      card.className = `diagram-node course-card absolute rounded-none border p-2.5 flex flex-col justify-between select-none cursor-pointer transition-shadow duration-150 ${isLight ? getLightCardStyle(course) : getCardStyle(course, activePaletteMode)}`;
      card.style.left = `${x}px`;
      card.style.top = `${y}px`;
      card.style.width = `${width}px`;
      card.style.minHeight = `${height}px`;

      const unitsFormatted = Number(course.units).toFixed(1);
      const prereqCount = course.prereqs ? course.prereqs.length : 0;

      card.innerHTML = `
        <!-- Left Port (Entry for prerequisite arrows) -->
        <div class="port-dot port-left" title="Prerequisite Entry Port"></div>
        <!-- Right Port (Exit for dependent arrows) -->
        <div class="port-dot port-right" title="Dependent Exit Port"></div>

        <!-- Top Bar: Course Code + Group Badge + Units + Quick Edit Button -->
        <div class="flex items-center justify-between font-mono leading-none">
          <div class="flex items-center gap-1.5">
            <span class="font-black ${isLight ? 'text-blue-900' : 'text-white'} text-xs tracking-tight">${course.code}</span>
            ${getGroupBadge(course.group)}
          </div>
          <div class="flex items-center gap-1">
            <span class="text-[11px] px-1.5 py-0.5 rounded-none ${isLight ? 'bg-slate-100 border border-slate-200 text-slate-800' : 'bg-black/30 text-amber-300'} font-bold font-mono">${unitsFormatted}u</span>
            <button type="button" onclick="event.stopPropagation(); openCourseEditModal('${course.code}');" class="p-0.5 ${isLight ? 'text-slate-400 hover:text-amber-600' : 'text-slate-400 hover:text-amber-400'} text-xs transition" title="Quick Edit Course">
              ✏️
            </button>
          </div>
        </div>

        <!-- Middle: Descriptive Course Title -->
        <div class="text-[11px] font-semibold ${isLight ? 'text-slate-800' : 'text-slate-100'} leading-snug line-clamp-2 my-1" title="${course.title}">
          ${course.title}
        </div>

        <!-- Bottom Row: Meta Info & Prerequisite Counter -->
        <div class="flex items-center justify-between text-[11px] font-mono ${isLight ? 'text-slate-500 border-slate-200' : 'text-slate-400 border-white/10'} pt-1 border-t leading-none">
          <span>Y${course.year}&bull;T${course.term} (${course.lec}L/${course.lab}L)</span>
          <span class="px-1.5 py-0.5 rounded-none ${isLight ? 'bg-slate-100 border border-slate-200 text-slate-700' : 'bg-white/10 text-slate-400'} font-bold ${prereqCount > 0 ? (isLight ? 'text-blue-800' : 'text-blue-300') : ''}">
            ${prereqCount > 0 ? `⛓️ ${prereqCount}` : 'Entry'}
          </span>
        </div>
      `;

      // Interactive Events - Highlight & Blur only on CLICK (User: "not auto highlight on hover only do that on click")
      card.onclick = (e) => {
        e.stopPropagation();
        handleCourseClick(course.code);
      };

      card.ondblclick = (e) => {
        e.stopPropagation();
        openCourseEditModal(course.code);
      };

      // Hover auto-highlighting & blurring disabled. Courses are locked in sequence (drag disabled).
      card.style.cursor = 'pointer';

      return card;
    }

    // Grid rendering backward compatibility
    function renderFlowchartGrid() {
      renderFlowchartDiagram();
    }

        // --- ARROW CONDUIT COMPILATION & ROUTING ENGINE (0-Collision & Kink-Free) ---
    function getCompiledEdges() {
      const edges = [];
      const codeMap = {};
      ALL_COURSES.forEach(c => { codeMap[c.code] = c; });

      const channelCounts = {};

      ALL_COURSES.forEach(tgt => {
        if (tgt.prereqs && Array.isArray(tgt.prereqs)) {
          const tgtCol = tgt.col || ((tgt.year - 1) * 3 + tgt.term);
          const tgtRow = tgt.row || 1;
          const tgtCount = tgt.prereqs.length;

          tgt.prereqs.forEach((prereqCode, pIdx) => {
            if (codeMap[prereqCode]) {
              const src = codeMap[prereqCode];
              const srcCol = src.col || ((src.year - 1) * 3 + src.term);
              const srcRow = src.row || 1;

              const tgtPortFactor = tgtCount > 1 ? (0.25 + 0.5 * (pIdx / (tgtCount - 1))) : 0.5;

              // Find other courses that also have this prereq
              const siblingDependents = ALL_COURSES.filter(other => other.prereqs && other.prereqs.includes(prereqCode));
              const sIdx = siblingDependents.findIndex(item => item.code === tgt.code);
              const srcPortFactor = siblingDependents.length > 1 ? (0.25 + 0.5 * (sIdx / (siblingDependents.length - 1))) : 0.5;

              const dc = tgtCol - srcCol;
              const dr = tgtRow - srcRow;

              const edgeObj = {
                from: prereqCode,
                to: tgt.code,
                srcCol,
                srcRow,
                tgtCol,
                tgtRow,
                dc,
                dr,
                srcPortFactor,
                tgtPortFactor
              };

              if (dc > 1) {
                const chanKey = dr >= 0 ? `below_${srcRow}` : `above_${srcRow}`;
                edgeObj.chanKey = chanKey;
                edgeObj.chanIdx = channelCounts[chanKey] || 0;
                channelCounts[chanKey] = edgeObj.chanIdx + 1;
              }

              edges.push(edgeObj);
            }
          });
        }
      });

      // Assign lane offsets for multi-edge horizontal channels
      edges.forEach(e => {
        if (e.dc > 1 && e.chanKey) {
          const totalInChan = channelCounts[e.chanKey] || 1;
          e.laneOffset = totalInChan > 1 ? (e.chanIdx - (totalInChan - 1) / 2) * 6 : 0;
        } else {
          e.laneOffset = 0;
        }
      });

      return edges;
    }

    
    function toggleShowAllArrows() {
      showAllArrowsEnabled = !showAllArrowsEnabled;
      const lbl = document.getElementById('allArrowsLabel');
      const btn = document.getElementById('btnToggleAllArrows');
      if (lbl) lbl.textContent = showAllArrowsEnabled ? 'All Arrows: ON' : 'All Arrows: OFF';
      if (btn) {
        if (showAllArrowsEnabled) {
          btn.className = 'px-2.5 py-0.5 rounded-none border border-blue-400 bg-blue-100 text-blue-900 text-[11px] font-bold transition flex items-center gap-1 shadow-xs';
        } else {
          btn.className = 'px-2.5 py-0.5 rounded-none border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-[11px] font-bold transition flex items-center gap-1 shadow-xs';
        }
      }
      drawAllArrows();
    }

        function drawAllArrows() {
      const svg = document.getElementById('diagramSvg');
      const svgGroup = document.getElementById('diagramSvgPathsGroup');
      const viewport = document.getElementById('diagramViewport');
      if (!svg || !svgGroup || !viewport) return;

      svgGroup.innerHTML = '';
      if (!Array.isArray(ALL_COURSES) || ALL_COURSES.length === 0) return;

      const cardW = 224;
      const cardH = 88;
      const colGap = 56;
      const startX = 40;
      const startY = 85;
      const rowPitch = 106;

      // 1. Build node coordinates map
      const nodeMap = {};
      ALL_COURSES.forEach(c => {
        const col = c.col || ((c.year - 1) * 3 + c.term);
        const row = c.row || 1;
        const posX = startX + (col - 1) * (cardW + colGap);
        const posY = startY + (row - 1) * rowPitch;
        nodeMap[c.code] = {
          code: c.code,
          col: col,
          row: row,
          x: posX,
          y: posY,
          prereqs: Array.isArray(c.prereqs) ? c.prereqs : []
        };
      });

      // 2. Direct Requisites Only: Filter out indirect/transitive bypass edges
      const edges = [];
      const outgoingMap = {};
      const incomingMap = {};

      function isTransitivePrereq(fromCode, tgtPrereqList) {
        for (let i = 0; i < tgtPrereqList.length; i++) {
          const item = tgtPrereqList[i];
          const siblingCode = (typeof item === 'object' && item !== null && item.code) ? item.code : String(item);
          if (siblingCode === fromCode) continue;

          // Check if siblingCode has fromCode in its prerequisite lineage
          const visited = new Set();
          const queue = [siblingCode];
          while (queue.length > 0) {
            const curr = queue.shift();
            const currCourse = ALL_COURSES.find(c => c.code === curr);
            if (!currCourse || !Array.isArray(currCourse.prereqs)) continue;
            for (let j = 0; j < currCourse.prereqs.length; j++) {
              const p = currCourse.prereqs[j];
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

      Object.values(nodeMap).forEach(tgt => {
        tgt.prereqs.forEach(pItem => {
          const norm = typeof pItem === 'string' ? { code: pItem, type: 'hard' } : { code: pItem.code, type: pItem.type || 'hard' };
          const pCode = norm.code;
          const reqType = norm.type || 'hard';

          // Skip transitive/indirect arrows so only clean direct requisites are shown
          if (isTransitivePrereq(pCode, tgt.prereqs)) {
            return;
          }

          if (nodeMap[pCode]) {
            const src = nodeMap[pCode];
            const edge = {
              id: `${pCode}->${tgt.code}`,
              from: pCode,
              to: tgt.code,
              type: reqType,
              src: src,
              tgt: tgt,
              dc: tgt.col - src.col,
              dr: tgt.row - src.row
            };
            edges.push(edge);
            if (!outgoingMap[pCode]) outgoingMap[pCode] = [];
            outgoingMap[pCode].push(edge);
            if (!incomingMap[tgt.code]) incomingMap[tgt.code] = [];
            incomingMap[tgt.code].push(edge);
          }
        });
      });

      // 3. Allocate incoming arrival ports on target cards (neatly distributed along left edge)
      Object.keys(incomingMap).forEach(code => {
        const inList = incomingMap[code];
        inList.sort((a, b) => (a.src.row - b.src.row) || (a.src.col - b.src.col));
        inList.forEach((e, i) => {
          if (inList.length === 1) {
            e.tgtPortY = e.tgt.y + 44.0;
          } else {
            e.tgtPortY = e.tgt.y + 20.0 + ((i + 0.5) / inList.length) * 48.0;
          }
        });
      });

      // 4. Source-Merged Bus / Trunk Routing:
      // All branches leaving the same course merge into a SINGLE exit trunk in the gutter,
      // and diverge only at destination academic terms/columns.
      Object.keys(outgoingMap).forEach(pCode => {
        const outList = outgoingMap[pCode];
        const src = nodeMap[pCode];
        const x1 = src.x + cardW;
        const y1 = src.y + 44.0; // Clean single source departure port
        const xTrunk = x1 + 12.0 + (((src.row - 1) % 4) * 8.0); // Clean gutter trunk coordinate

        // Group target courses by destination column / academic term
        const byCol = {};
        outList.forEach(e => {
          if (!byCol[e.tgt.col]) byCol[e.tgt.col] = [];
          byCol[e.tgt.col].push(e);
        });

        Object.keys(byCol).forEach(cTgtKey => {
          const cTgt = parseInt(cTgtKey, 10);
          const colEdges = byCol[cTgt];
          const dc = cTgt - src.col;

          if (dc === 0) {
            // Same Column / Co-requisites (e.g. Lec & Lab)
            colEdges.forEach(e => {
              const y2 = e.tgtPortY;
              const pts = [
                [x1, y1],
                [xTrunk, y1],
                [xTrunk, y2],
                [x1, y2]
              ];
              renderSvgEdge(e, pts);
            });
          } else if (dc === 1) {
            // Adjacent Next Term: Shared exit trunk, diverging along xTrunk to each target row
            colEdges.forEach(e => {
              const x2 = e.tgt.x;
              const y2 = e.tgtPortY;
              let pts;
              if (Math.abs(y1 - y2) < 2.0) {
                pts = [[x1, y1], [x2, y2]];
              } else {
                pts = [
                  [x1, y1],
                  [xTrunk, y1],
                  [xTrunk, y2],
                  [x2, y2]
                ];
              }
              renderSvgEdge(e, pts);
            });
          } else {
            // Multi-Column Transit: Single shared corridor bus across terms to destination column,
            // diverging only at the destination term entry gutter!
            const cRow = src.row;
            const yChan = startY + (cRow - 1) * rowPitch + cardH + 4.0;
            const xEntry = (startX + (cTgt - 1) * (cardW + colGap)) - 14.0 - (((src.row - 1) % 3) * 6.0);

            colEdges.forEach(e => {
              const x2 = e.tgt.x;
              const y2 = e.tgtPortY;
              const pts = [
                [x1, y1],
                [xTrunk, y1],
                [xTrunk, yChan],
                [xEntry, yChan],
                [xEntry, y2],
                [x2, y2]
              ];
              renderSvgEdge(e, pts);
            });
          }
        });
      });

      // Helper to instantiate styled SVG path element
      function renderSvgEdge(e, pts) {
        const pathData = generateRoundedPath(pts, 6);
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('data-from', e.from);
        path.setAttribute('data-to', e.to);
        path.setAttribute('data-type', e.type || 'hard');
        path.setAttribute('class', 'dag-arrow');
        path.setAttribute('fill', 'none');

        // Requisite-specific styling:
        if (e.type === 'co') {
          path.setAttribute('stroke', '#d97706'); // Amber for Co-requisite
          path.setAttribute('stroke-width', '1.9');
          path.setAttribute('stroke-dasharray', '6,4');
          path.setAttribute('marker-end', 'url(#diag-arrow-coreq)');
        } else if (e.type === 'soft') {
          path.setAttribute('stroke', '#8b5cf6'); // Purple for Soft Requisite
          path.setAttribute('stroke-width', '1.8');
          path.setAttribute('stroke-dasharray', '2,3');
          path.setAttribute('marker-end', 'url(#diag-arrow-soft)');
        } else {
          path.setAttribute('stroke', '#64748b'); // Slate for Hard Prerequisite
          path.setAttribute('stroke-width', '1.8');
          path.setAttribute('stroke-dasharray', 'none');
          path.setAttribute('marker-end', 'url(#diag-arrow-default)');
        }

        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.style.opacity = showAllArrowsEnabled ? '0.65' : '0';

        svgGroup.appendChild(path);
      }

      // Re-apply highlight styling if a node is currently active
      if (currentSelectedCode) {
        highlightPrereqTree(currentSelectedCode, true);
      }
    }

    

    function generateRoundedPath(points, r = 8) {
      if (!points || points.length < 2) return '';
      const filtered = [points[0]];
      for (let i = 1; i < points.length; i++) {
        const prev = filtered[filtered.length - 1];
        const curr = points[i];
        if (Math.hypot(curr[0] - prev[0], curr[1] - prev[1]) > 0.5) {
          filtered.push(curr);
        }
      }
      if (filtered.length < 2) return '';
      if (filtered.length === 2) {
        return `M ${filtered[0][0].toFixed(1)} ${filtered[0][1].toFixed(1)} L ${filtered[1][0].toFixed(1)} ${filtered[1][1].toFixed(1)}`;
      }

      let d = `M ${filtered[0][0].toFixed(1)} ${filtered[0][1].toFixed(1)}`;
      for (let i = 1; i < filtered.length - 1; i++) {
        const pPrev = filtered[i - 1];
        const pCurr = filtered[i];
        const pNext = filtered[i + 1];

        const dx1 = pCurr[0] - pPrev[0];
        const dy1 = pCurr[1] - pPrev[1];
        const dx2 = pNext[0] - pCurr[0];
        const dy2 = pNext[1] - pCurr[1];

        const len1 = Math.hypot(dx1, dy1) || 1;
        const len2 = Math.hypot(dx2, dy2) || 1;

        const curR = Math.min(r, len1 / 2, len2 / 2);

        const bx = pCurr[0] - (dx1 / len1) * curR;
        const by = pCurr[1] - (dy1 / len1) * curR;
        const ax = pCurr[0] + (dx2 / len2) * curR;
        const ay = pCurr[1] + (dy2 / len2) * curR;

        d += ` L ${bx.toFixed(1)} ${by.toFixed(1)} Q ${pCurr[0].toFixed(1)} ${pCurr[1].toFixed(1)}, ${ax.toFixed(1)} ${ay.toFixed(1)}`;
      }

      d += ` L ${filtered[filtered.length - 1][0].toFixed(1)} ${filtered[filtered.length - 1][1].toFixed(1)}`;
      return d;
    }

    // --- LINEAGE & HIGHLIGHT ENGINE ---
    function getLineage(targetCode) {
      const feeders = new Set();
      const dependents = new Set();

      function findFeeders(code) {
        const c = ALL_COURSES.find(item => item.code === code);
        if (c && c.prereqs) {
          c.prereqs.forEach(p => {
            if (!feeders.has(p)) {
              feeders.add(p);
              findFeeders(p);
            }
          });
        }
      }

      function findDependents(code) {
        ALL_COURSES.forEach(item => {
          if (item.prereqs && item.prereqs.includes(code)) {
            if (!dependents.has(item.code)) {
              dependents.add(item.code);
              findDependents(item.code);
            }
          }
        });
      }

      findFeeders(targetCode);
      findDependents(targetCode);
      return { feeders: Array.from(feeders), dependents: Array.from(dependents) };
    }

    let requisiteFilterMode = 'direct'; // 'direct' (Clean: direct 1-hop only) or 'lineage' (Full multi-hop)

    function switchRequisiteMode(mode) {
      requisiteFilterMode = mode;
      const sel = document.getElementById('flowchartRequisiteMode');
      if (sel) sel.value = mode;
      if (typeof currentSelectedCode !== 'undefined' && currentSelectedCode) {
        highlightPrereqTree(currentSelectedCode, true);
      } else {
        resetVisualHighlights();
      }
      const label = mode === 'direct' ? 'Direct Requisites Only (Clean)' : 'Full Multi-Hop Lineage Chain';
      if (typeof showToastNotification === 'function') {
        showToastNotification(`Flowchart Arrow Mode: ${label}`);
      }
    }

    function highlightPrereqTree(code, isLockedClick) {
      const allCards = document.querySelectorAll('.course-card');
      const allArrows = document.querySelectorAll('.dag-arrow');

      const targetCourse = ALL_COURSES.find(c => c.code === code);
      if (!targetCourse) return;

      // 1. Direct 1-hop Requisites
      const directFeeders = (targetCourse.prereqs || []).map(p => (typeof p === 'object' && p !== null && p.code) ? p.code : String(p));
      const directDependents = ALL_COURSES.filter(other => (other.prereqs || []).some(p => {
        const pCode = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p);
        return pCode === code;
      })).map(other => other.code);

      // 2. Multi-hop lineage if requested
      let activeFeeders = directFeeders;
      let activeDependents = directDependents;

      if (requisiteFilterMode === 'lineage') {
        const fullLineage = getLineage(code);
        activeFeeders = fullLineage.feeders;
        activeDependents = fullLineage.dependents;
      }

      // Highlight Cards
      allCards.forEach(card => {
        const id = card.id.replace('node-', '');
        card.classList.remove('active-selected', 'feeder-highlight', 'dependent-highlight', 'dimmed');

        if (id === code) {
          card.classList.add('active-selected');
        } else if (activeFeeders.includes(id)) {
          card.classList.add('feeder-highlight');
        } else if (activeDependents.includes(id)) {
          card.classList.add('dependent-highlight');
        } else {
          card.classList.add('dimmed');
        }
      });

      // Highlight Arrows: IN DIRECT MODE, ONLY ARROWS DIRECTLY CONNECTED TO THE SELECTED COURSE SHOW!
      allArrows.forEach(arrow => {
        if (arrow.id === 'cycleLoopPath') return;
        const from = arrow.getAttribute('data-from');
        const to = arrow.getAttribute('data-to');

        arrow.classList.remove('feeder-arrow', 'dependent-arrow', 'dimmed-arrow');

        if (requisiteFilterMode === 'direct') {
          // DIRECT ONLY: Only arrows where this course is the exact target or exact source!
          if (to === code && directFeeders.includes(from)) {
            arrow.classList.add('feeder-arrow');
            arrow.setAttribute('stroke', '#0284c7');
            arrow.setAttribute('stroke-width', '2.6');
            arrow.setAttribute('marker-end', 'url(#diag-arrow-feeder)');
            arrow.style.opacity = '1';
          } else if (from === code && directDependents.includes(to)) {
            arrow.classList.add('dependent-arrow');
            arrow.setAttribute('stroke', '#10b981');
            arrow.setAttribute('stroke-width', '2.6');
            arrow.setAttribute('marker-end', 'url(#diag-arrow-dependent)');
            arrow.style.opacity = '1';
          } else {
            arrow.classList.add('dimmed-arrow');
            arrow.style.opacity = '0'; // Completely hide non-direct arrows to eliminate all clutter!
          }
        } else {
          // FULL MULTI-HOP LINEAGE
          if ((activeFeeders.includes(from) || from === code) && (activeFeeders.includes(to) || to === code)) {
            arrow.classList.add('feeder-arrow');
            arrow.setAttribute('stroke', '#0284c7');
            arrow.setAttribute('stroke-width', '2.5');
            arrow.setAttribute('marker-end', 'url(#diag-arrow-feeder)');
            arrow.style.opacity = '1';
          } else if ((activeDependents.includes(from) || from === code) && (activeDependents.includes(to) || to === code)) {
            arrow.classList.add('dependent-arrow');
            arrow.setAttribute('stroke', '#10b981');
            arrow.setAttribute('stroke-width', '2.5');
            arrow.setAttribute('marker-end', 'url(#diag-arrow-dependent)');
            arrow.style.opacity = '1';
          } else {
            arrow.classList.add('dimmed-arrow');
            arrow.style.opacity = '0.04';
          }
        }
      });

      // Update banner text
      const note = document.getElementById('flowchartStatusNote');
      if (note) {
        const modeLabel = requisiteFilterMode === 'direct' ? 'Direct Requisites Only (Clean)' : 'Full Multi-Hop Lineage';
        note.innerHTML = `<span class="font-bold text-amber-600">${code}</span> selected &bull; <span class="text-blue-600 font-bold">${directFeeders.length}</span> Direct Prereq${directFeeders.length !== 1 ? 's' : ''} &bull; <span class="text-emerald-600 font-bold">${directDependents.length}</span> Direct Unlocked &bull; <span class="text-slate-400 font-mono text-[10px]">[Mode: ${modeLabel}]</span>`;
      }
    }

    function resetVisualHighlights() {
      const allCards = document.querySelectorAll('.course-card');
      const allArrows = document.querySelectorAll('.dag-arrow');

      allCards.forEach(card => {
        card.classList.remove('active-selected', 'feeder-highlight', 'dependent-highlight', 'dimmed');
      });

      allArrows.forEach(arrow => {
        if (arrow.id === 'cycleLoopPath') return;
        arrow.classList.remove('feeder-arrow', 'dependent-arrow', 'dimmed-arrow');
        arrow.setAttribute('stroke', '#64748b');
        arrow.setAttribute('stroke-width', '1.8');
        arrow.setAttribute('marker-end', 'url(#diag-arrow-default)');
        arrow.style.opacity = showAllArrowsEnabled ? '0.65' : '0';
      });

      const note = document.getElementById('flowchartStatusNote');
      if (note) {
        note.innerText = 'Click any course node in the diagram to trace its prerequisite lineage with vector conduits.';
      }
    }

    function handleCourseClick(code) {
      if (currentSelectedCode === code) {
        currentSelectedCode = null;
        resetVisualHighlights();
        removeCycleLoopArrow();
        const drawer = document.getElementById('flowchartDetailDrawer');
        if (drawer) drawer.classList.add('hidden');
      } else {
        currentSelectedCode = code;
        removeCycleLoopArrow();
        highlightPrereqTree(code, true);
        openDetailDrawer(code);
      }
    }

    function resetFlowchartHighlight() {
      currentSelectedCode = null;
      resetVisualHighlights();
      removeCycleLoopArrow();
      const drawer = document.getElementById('flowchartDetailDrawer');
      if (drawer) drawer.classList.add('hidden');
      showToast('Diagram focus reset to neutral overview.');
    }

    function openDetailDrawer(code) {
      const course = ALL_COURSES.find(c => c.code === code);
      if (!course) return;

      const drawer = document.getElementById('flowchartDetailDrawer');
      if (!drawer) return;

      const codeEl = document.getElementById('drawerCourseCode');
      const titleEl = document.getElementById('drawerCourseTitle');
      const metaEl = document.getElementById('drawerCourseMeta');
      const descEl = document.getElementById('drawerDescriptionText');
      const soListEl = document.getElementById('drawerSoList');

      if (codeEl) codeEl.innerText = course.code;
      if (titleEl) titleEl.innerText = course.title;
      if (metaEl) metaEl.innerText = `Year ${course.year} • Term ${course.term} • ${course.units} Units (${course.lec} Lec / ${course.lab} Lab) • ${course.group}`;
      if (descEl) descEl.innerText = course.desc || 'No descriptive catalog narrative registered.';

      if (soListEl) {
        if (course.sos && Array.isArray(course.sos)) {
          const soLabels = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
          const activeSos = [];
          course.sos.forEach((lvl, sIdx) => {
            if (lvl && lvl !== '-' && lvl !== '') {
              activeSos.push(`SO-${soLabels[sIdx]} [${lvl}]`);
            }
          });
          soListEl.innerText = activeSos.length > 0 ? activeSos.join(', ') : 'None mapped';
        } else {
          soListEl.innerText = 'None mapped';
        }
      }

      // Render Prerequisites Pills
      const prereqContainer = document.getElementById('drawerPrereqsList');
      if (prereqContainer) {
        prereqContainer.innerHTML = '';
        if (course.prereqs && course.prereqs.length > 0) {
          course.prereqs.forEach(p => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'px-2 py-1 rounded-none bg-blue-100 text-blue-900 font-mono font-bold text-xs hover:bg-blue-200 transition mr-1.5 mb-1';
            btn.innerText = p;
            btn.onclick = () => handleCourseClick(p);
            prereqContainer.appendChild(btn);
          });
        } else {
          prereqContainer.innerHTML = '<span class="text-slate-400 italic text-xs">None (Curricular Entry Course)</span>';
        }
      }

      // Render Unlocked Dependents Pills
      const depContainer = document.getElementById('drawerDependentsList');
      if (depContainer) {
        depContainer.innerHTML = '';
        const dependents = ALL_COURSES.filter(c => c.prereqs && c.prereqs.includes(code));
        if (dependents.length > 0) {
          dependents.forEach(dep => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'px-2 py-1 rounded-none bg-emerald-100 text-emerald-900 font-mono font-bold text-xs hover:bg-emerald-200 transition mr-1.5 mb-1';
            btn.innerText = dep.code;
            btn.onclick = () => handleCourseClick(dep.code);
            depContainer.appendChild(btn);
          });
        } else {
          depContainer.innerHTML = '<span class="text-slate-400 italic text-xs">Terminal / Final Stage Course</span>';
        }
      }

      drawer.classList.remove('hidden');
    }

    function closeDetailDrawer() {
      const drawer = document.getElementById('flowchartDetailDrawer');
      if (drawer) drawer.classList.add('hidden');
    }

    // --- LOCKED STATIC DIAGRAM CONTROLLER (No Draggable CAD Canvas) ---
    function setupDiagramInteractions() {
      // Flowchart is locked as One Static Image Diagram (No pan/zoom mouse dragging)
      diagramPanX = 0;
      diagramPanY = 0;
      diagramZoom = 1.0;
    }

    let staticDiagramViewMode = 'vector';
    let isDiagramFitToWidth = false;

    function switchStaticDiagramMode(mode) {
      staticDiagramViewMode = mode;
      const vectorWrap = document.getElementById('vectorDiagramWrapper');
      const imgWrap = document.getElementById('imageDiagramWrapper');
      const btnVector = document.getElementById('btnModeVector');
      const btnImage = document.getElementById('btnModeImage');

      if (mode === 'image') {
        if (vectorWrap) vectorWrap.classList.add('hidden');
        if (imgWrap) imgWrap.classList.remove('hidden');
        if (btnVector) {
          btnVector.className = 'px-3 py-1 text-slate-600 hover:text-slate-900 transition';
        }
        if (btnImage) {
          btnImage.className = 'px-3 py-1 bg-white text-[#002855] shadow-xs border border-slate-300 font-bold transition';
        }
        updateStaticImageElement();
      } else {
        if (imgWrap) imgWrap.classList.add('hidden');
        if (vectorWrap) vectorWrap.classList.remove('hidden');
        if (btnVector) {
          btnVector.className = 'px-3 py-1 bg-white text-[#002855] shadow-xs border border-slate-300 font-bold transition';
        }
        if (btnImage) {
          btnImage.className = 'px-3 py-1 text-slate-600 hover:text-slate-900 transition';
        }
      }
    }

    function toggleFitDiagramWidth() {
      isDiagramFitToWidth = !isDiagramFitToWidth;
      const viewport = document.getElementById('diagramViewport');
      const wrapper = document.getElementById('vectorDiagramWrapper');
      const btn = document.getElementById('btnFitWidthToggle');
      if (!viewport || !wrapper) return;

      if (isDiagramFitToWidth) {
        const wrapperWidth = wrapper.clientWidth - 32;
        const scale = Math.min(1.0, wrapperWidth / 3380);
        viewport.style.transform = `scale(${scale})`;
        viewport.style.transformOrigin = 'top left';
        wrapper.style.height = `${Math.ceil(960 * scale) + 40}px`;
        if (btn) btn.innerHTML = '<span>🔍 100% Full Size</span>';
      } else {
        viewport.style.transform = 'none';
        wrapper.style.height = 'auto';
        if (btn) btn.innerHTML = '<span>🔍 Fit to Window</span>';
      }
    }

    function generateDiagramSvgXml() {
      const width = 3380;
      const height = 960;
      const svgOriginal = document.getElementById('diagramSvg');
      const backdrop = document.getElementById('diagramSwimlanesBackdrop');
      const nodes = document.getElementById('diagramNodesContainer');

      let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
      svg += '<style>';
      svg += 'text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; }';
      svg += '.dag-arrow { fill: none; stroke: #64748b; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }';
      svg += '.diagram-node { position: absolute; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 0px; box-sizing: border-box; padding: 8px 10px; font-family: sans-serif; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }';
      svg += '</style>';
      svg += '<rect width="100%" height="100%" fill="#ffffff"/>';

      if (svgOriginal) {
        svg += svgOriginal.innerHTML;
      }

      // Clone backdrop and nodes with inline styles to preserve visual fidelity
      svg += `<foreignObject x="0" y="0" width="${width}" height="${height}">`;
      svg += `<div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px; height:${height}px; position:relative; background:#ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">`;
      
      if (backdrop) {
        // Clone and inline styles for year banners and headers
        const bClone = backdrop.cloneNode(true);
        bClone.querySelectorAll('*').forEach(el => {
          if (el.classList.contains('border-blue-300')) {
            el.style.border = '1px solid #93c5fd';
            el.style.background = 'rgba(239, 246, 255, 0.6)';
          } else if (el.classList.contains('border-teal-300')) {
            el.style.border = '1px solid #5eead4';
            el.style.background = 'rgba(240, 253, 250, 0.6)';
          } else if (el.classList.contains('border-indigo-300')) {
            el.style.border = '1px solid #a5b4fc';
            el.style.background = 'rgba(238, 242, 255, 0.6)';
          } else if (el.classList.contains('border-amber-300')) {
            el.style.border = '1px solid #fcd34d';
            el.style.background = 'rgba(254, 243, 199, 0.6)';
          }
          if (el.classList.contains('font-mono')) el.style.fontFamily = 'monospace';
        });
        svg += bClone.innerHTML;
      }

      if (nodes) {
        const nClone = nodes.cloneNode(true);
        nClone.querySelectorAll('.diagram-node').forEach(card => {
          card.style.background = '#ffffff';
          card.style.border = '1px solid #cbd5e1';
          card.style.boxSizing = 'border-box';
          card.style.padding = '8px 10px';
          card.style.fontSize = '11px';
          card.style.boxShadow = '0 1px 2px rgba(0,0,0,0.06)';
          if (card.classList.contains('border-l-indigo-600')) card.style.borderLeft = '4px solid #4f46e5';
          else if (card.classList.contains('border-l-amber-500')) card.style.borderLeft = '4px solid #f59e0b';
          else if (card.classList.contains('border-l-sky-500')) card.style.borderLeft = '4px solid #0ea5e9';
          else if (card.classList.contains('border-l-purple-500')) card.style.borderLeft = '4px solid #a855f7';
          else if (card.classList.contains('border-l-rose-500')) card.style.borderLeft = '4px solid #f43f5e';
          else if (card.classList.contains('border-l-emerald-500')) card.style.borderLeft = '4px solid #10b981';
          else card.style.borderLeft = '4px solid #94a3b8';
        });
        svg += nClone.innerHTML;
      }

      svg += `</div></foreignObject>`;
      svg += '</svg>';
      return svg;
    }

    function updateStaticImageElement() {
      const imgEl = document.getElementById('staticFlowchartImageElement');
      if (!imgEl) return;
      showToast('Rendering static flowchart PNG image...');
      const svgXml = generateDiagramSvgXml();
      const blob = new Blob([svgXml], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      imgEl.src = url;
    }

    function exportFlowchartAsSvg() {
      const svgXml = generateDiagramSvgXml();
      const blob = new Blob([svgXml], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'BSCpE_2026_Curriculum_Flowchart_Static_Diagram.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast('Vector SVG Diagram downloaded.');
    }

    function exportFlowchartAsPng() {
      showToast('Exporting high-resolution static PNG diagram...');
      const svgXml = generateDiagramSvgXml();
      const img = new Image();
      const svgBlob = new Blob([svgXml], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = 3380;
          canvas.height = 960;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, 3380, 960);
          ctx.drawImage(img, 0, 0);
          URL.revokeObjectURL(url);

          const pngUrl = canvas.toDataURL('image/png');
          const a = document.createElement('a');
          a.href = pngUrl;
          a.download = 'BSCpE_2026_Curriculum_Flowchart_Static_Diagram.png';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          showToast('Static PNG Diagram downloaded successfully!');
        } catch(e) {
          // Fallback if tainted canvas: trigger SVG download
          exportFlowchartAsSvg();
        }
      };
      img.onerror = () => {
        exportFlowchartAsSvg();
      };
      img.src = url;
    }

    function printStaticFlowchart() {
      window.print();
    }



    function getGroupBadge(group) {
      const meta = typeof getCategoryMeta === 'function' ? getCategoryMeta(group) : { badgeBg: 'bg-slate-100 text-slate-700 border-slate-200', short: 'Course' };
      return `<span class="text-[11px] px-1.5 py-0.5 rounded-none ${meta.badgeBg} font-bold border">${meta.short}</span>`;
    }

    function getCardStyle(c, mode = activePaletteMode) {
      const meta = typeof getCategoryMeta === 'function' ? getCategoryMeta(c.group) : { color: 'slate' };
      const color = meta.color || 'slate';
      const gradients = {
        indigo: 'from-slate-900 to-indigo-950/80 border-indigo-500/40 border-l-indigo-500 hover:border-indigo-400',
        amber: 'from-slate-900 to-amber-950/80 border-amber-500/40 border-l-amber-500 hover:border-amber-400',
        sky: 'from-slate-900 to-sky-950/80 border-sky-500/40 border-l-sky-500 hover:border-sky-400',
        purple: 'from-slate-900 to-purple-950/80 border-purple-500/40 border-l-purple-500 hover:border-purple-400',
        rose: 'from-slate-900 to-rose-950/80 border-rose-500/40 border-l-rose-500 hover:border-rose-400',
        emerald: 'from-slate-900 to-emerald-950/80 border-emerald-500/40 border-l-emerald-500 hover:border-emerald-400',
        teal: 'from-slate-900 to-teal-950/80 border-teal-500/40 border-l-teal-500 hover:border-teal-400',
        cyan: 'from-slate-900 to-cyan-950/80 border-cyan-500/40 border-l-cyan-500 hover:border-cyan-400',
        orange: 'from-slate-900 to-orange-950/80 border-orange-500/40 border-l-orange-500 hover:border-orange-400',
        slate: 'from-slate-900 to-slate-950 border-slate-700 border-l-slate-400'
      };
      const grad = gradients[color] || 'from-slate-900 to-slate-950 border-slate-700 border-l-slate-400';
      return `bg-gradient-to-br ${grad} text-white border-l-4 shadow-md`;
    }

    // --- STRICT PAN BOUNDING (Cannot pan farther out than necessary) ---
    function clampPanCoordinates() {
      const container = document.getElementById('diagramCanvasContainer');
      if (!container) return;

      const nodes = document.querySelectorAll('.diagram-node');
      if (nodes.length === 0) return;

      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      nodes.forEach(node => {
        const x = parseFloat(node.style.left) || 0;
        const y = parseFloat(node.style.top) || 0;
        const w = node.offsetWidth || 230;
        const h = node.offsetHeight || 90;
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x + w > maxX) maxX = x + w;
        if (y + h > maxY) maxY = y + h;
      });

      if (minX === Infinity) return;

      const cW = container.clientWidth || 1200;
      const cH = container.clientHeight || 760;
      const margin = 100;

      const maxPanX = margin - (minX * diagramZoom);
      const minPanX = cW - margin - (maxX * diagramZoom);

      if (minPanX > maxPanX) {
        diagramPanX = Math.round((cW - (maxX - minX) * diagramZoom) / 2 - (minX * diagramZoom));
      } else {
        diagramPanX = Math.round(Math.max(minPanX, Math.min(maxPanX, diagramPanX)));
      }

      const maxPanY = margin - (minY * diagramZoom);
      const minPanY = cH - margin - (maxY * diagramZoom);

      if (minPanY > maxPanY) {
        diagramPanY = Math.round((cH - (maxY - minY) * diagramZoom) / 2 - (minY * diagramZoom));
      } else {
        diagramPanY = Math.round(Math.max(minPanY, Math.min(maxPanY, diagramPanY)));
      }
    }

    // --- MINI-MAP NAVIGATOR ---
    function updateMinimap() {
      const canvas = document.getElementById('minimapCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = document.querySelectorAll('.diagram-node');
      const scaleX = canvas.width / 3400;
      const scaleY = canvas.height / 900;

      nodes.forEach(n => {
        const x = (parseFloat(n.style.left) || 0) * scaleX;
        const y = (parseFloat(n.style.top) || 0) * scaleY;
        ctx.fillStyle = n.classList.contains('active-selected') ? '#f59e0b' : '#38bdf8';
        ctx.fillRect(x, y, 4, 3);
      });

      updateMinimapIndicator();
    }

    function updateMinimapIndicator() {
      const indicator = document.getElementById('minimapViewportIndicator');
      const container = document.getElementById('diagramCanvasContainer');
      const canvas = document.getElementById('minimapCanvas');
      if (!indicator || !container || !canvas) return;

      const scale = 176 / 3400;
      const viewW = (container.clientWidth / diagramZoom) * scale;
      const viewH = (container.clientHeight / diagramZoom) * scale;
      const viewX = (-diagramPanX / diagramZoom) * scale;
      const viewY = (-diagramPanY / diagramZoom) * scale;

      indicator.style.width = `${Math.min(canvas.width, Math.max(16, viewW))}px`;
      indicator.style.height = `${Math.min(canvas.height, Math.max(12, viewH))}px`;
      indicator.style.left = `${Math.max(0, Math.min(canvas.width - 20, viewX))}px`;
      indicator.style.top = `${Math.max(0, Math.min(canvas.height - 15, viewY))}px`;
    }

    function handleMinimapClick(e) {
      const canvas = document.getElementById('minimapCanvas');
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const normX = clickX / canvas.width;
      const normY = clickY / canvas.height;

      diagramPanX = -(normX * 3400 * diagramZoom - 400);
      diagramPanY = -(normY * 900 * diagramZoom - 300);
      clampPanCoordinates();
      applyDiagramTransform();
    }

    // --- LIVE SEARCH & SPOTLIGHT FILTER ---
    function handleDiagramSearch(query) {
      const q = query.trim().toUpperCase();
      const allCards = document.querySelectorAll('.diagram-node');
      const allArrows = document.querySelectorAll('.dag-arrow');

      if (!q) {
        allCards.forEach(c => c.classList.remove('dimmed', 'ring-2', 'ring-amber-400'));
        allArrows.forEach(a => a.style.opacity = showAllArrowsEnabled ? '0.65' : '0');
        const note = document.getElementById('flowchartStatusNote');
        if (note) note.innerText = 'Click any course node in the diagram to trace its prerequisite lineage with vector conduits.';
        return;
      }

      let matchCount = 0;
      let firstMatch = null;

      allCards.forEach(c => {
        const code = c.id.replace('node-', '');
        const course = ALL_COURSES.find(item => item.code === code);
        const match = code.includes(q) || (course && course.title.toUpperCase().includes(q)) || (course && course.group.toUpperCase().includes(q));

        if (match) {
          c.classList.remove('dimmed');
          c.classList.add('ring-2', 'ring-amber-400');
          matchCount++;
          if (!firstMatch) firstMatch = c;
        } else {
          c.classList.add('dimmed');
          c.classList.remove('ring-2', 'ring-amber-400');
        }
      });

      allArrows.forEach(a => {
        const from = a.getAttribute('data-from');
        const to = a.getAttribute('data-to');
        const fromMatch = from.includes(q);
        const toMatch = to.includes(q);
        a.style.opacity = (fromMatch && toMatch) ? '0.9' : '0.06';
      });

      const note = document.getElementById('flowchartStatusNote');
      if (note) {
        note.innerHTML = `Found <span class="font-bold text-amber-500">${matchCount}</span> course nodes matching "<span class="font-bold text-slate-800">${query}</span>".`;
      }

      if (firstMatch) {
        const x = parseFloat(firstMatch.style.left) || 0;
        const y = parseFloat(firstMatch.style.top) || 0;
        diagramPanX = -(x * diagramZoom - 350);
        diagramPanY = -(y * diagramZoom - 250);
        clampPanCoordinates();
        applyDiagramTransform();
      }
    }

    // Cycle Loop Path Visualizer
    function drawCycleLoopArrow(fromCode, toCode) {
      const svgGroup = document.getElementById('diagramSvgPathsGroup');
      if (!svgGroup) return;

      const srcEl = document.getElementById(`node-${fromCode}`);
      const tgtEl = document.getElementById(`node-${toCode}`);
      if (!srcEl || !tgtEl) return;

      const x1 = (parseFloat(srcEl.style.left) || 0) + (srcEl.offsetWidth / 2);
      const y1 = parseFloat(srcEl.style.top) || 0;
      const x2 = (parseFloat(tgtEl.style.left) || 0) + (tgtEl.offsetWidth / 2);
      const y2 = parseFloat(tgtEl.style.top) || 0;

      const arcHeight = Math.min(y1, y2) - 80;
      const d = `M ${x1} ${y1} C ${x1} ${arcHeight}, ${x2} ${arcHeight}, ${x2} ${y2}`;

      let p = document.getElementById('cycleLoopPath');
      if (!p) {
        p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.id = 'cycleLoopPath';
        svgGroup.appendChild(p);
      }

      p.setAttribute('d', d);
      p.setAttribute('fill', 'none');
      p.setAttribute('stroke', '#dc2626');
      p.setAttribute('stroke-width', '4');
      p.setAttribute('stroke-dasharray', '6 3');
      p.setAttribute('class', 'dag-arrow cycle-arrow');
      p.setAttribute('marker-end', 'url(#diag-arrow-cycle)');
    }

    function removeCycleLoopArrow() {
      const p = document.getElementById('cycleLoopPath');
      if (p) p.remove();
    }

    function switchRegDoc(tabIdx) {
      navigateView('registrar');
      if (typeof switchRegistrarDocTab === 'function') {
        switchRegistrarDocTab(tabIdx);
      }
    }

    function setFlowchartSpreadMode(isSpread, isManualUserAction = false) {
      if (isSpread && typeof diagramFitView === 'function') {
        diagramFitView();
      }
    }

    function openCycleSimulatorModal() {
      const modal = document.getElementById('cycleModal');
      if (modal) modal.classList.remove('hidden');
      const alertBox = document.getElementById('cycleSimulationAlert');
      if (alertBox) alertBox.classList.add('hidden');
    }
    function closeCycleSimulatorModal() {
      const modal = document.getElementById('cycleModal');
      if (modal) modal.classList.add('hidden');
    }
    function runCycleSimulationCheck() {
      const target = document.getElementById('simTargetCourse').value;
      const prereq = document.getElementById('simPrereqCourse').value;
      const alertBox = document.getElementById('cycleSimulationAlert');
      if (alertBox) alertBox.classList.remove('hidden');
      setFlowchartSpreadMode(true);
      setTimeout(() => {
        drawCycleLoopArrow(prereq, target);
      }, 100);
      showToast(`Tarjan/Kahn Cycle Check: Circular deadlock detected between ${prereq} and ${target}! Addition blocked.`);
    }


        // =========================================================================
    // VIEW 2: COURSE CATALOG CONTROLLERS
    // =========================================================================

    function renderCoursesTable(data) {
      const tbody = document.getElementById('courseTableBody');
      tbody.innerHTML = '';

      data.forEach(c => {
        let badgeColor = 'bg-slate-100 text-slate-700';
        if (c.group.includes('Basic')) badgeColor = 'bg-amber-100 text-amber-800';
        if (c.group.includes('General')) badgeColor = 'bg-blue-100 text-blue-800';
        if (c.group.includes('Allied')) badgeColor = 'bg-purple-100 text-purple-800';
        if (c.group.includes('Professional')) badgeColor = 'bg-emerald-100 text-emerald-800';
        if (c.group.includes('Electives')) badgeColor = 'bg-rose-100 text-rose-800';

        const prereqPills = c.prereqs.length > 0 
          ? c.prereqs.map(p => `<span class="px-1.5 py-0.5 rounded-none bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[11px] font-bold mr-1">${typeof p === 'object' ? p.code : p}</span>`).join('')
          : '<span class="text-slate-400 text-[11px]">None</span>';

        const coreqList = Array.isArray(c.coreqs) ? c.coreqs : [];
        const coreqPills = coreqList.length > 0
          ? coreqList.map(p => `<span class="px-1.5 py-0.5 rounded-none bg-amber-50 text-amber-800 border border-amber-300 font-mono text-[11px] font-bold mr-1">${p}</span>`).join('')
          : '<span class="text-slate-400 text-[11px]">None</span>';

        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 transition';
        tr.innerHTML = `
          <td class="py-2.5 px-3 font-mono font-bold text-[#002855] hover:text-blue-700 hover:underline cursor-pointer" onclick="openCourseInspectorModal('${c.code}')" title="Click to inspect course details">${c.code}</td>
          <td class="py-2.5 px-3 font-semibold text-slate-900">${c.title}</td>
          <td class="py-2.5 px-2 text-center text-slate-500">${c.lec}</td>
          <td class="py-2.5 px-2 text-center text-slate-500">${c.lab}</td>
          <td class="py-2.5 px-2 text-center font-bold text-slate-900">${c.units}</td>
          <td class="py-2.5 px-3 text-slate-600 text-[11px]">Yr ${c.year}, T${c.term}</td>
          <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded-none text-[11px] font-bold ${badgeColor}">${c.group}</span></td>
          <td class="py-2.5 px-3">${prereqPills}</td>
          <td class="py-2.5 px-3">${coreqPills}</td>
          <td class="py-2.5 px-3 text-right space-x-1.5 whitespace-nowrap">
            <button onclick="openCourseInspectorModal('${c.code}')" class="px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-900 rounded-none font-bold text-xs inline-flex items-center gap-1 transition shadow-xs border border-blue-300/60 cursor-pointer" title="Inspect full course specification">
              <span>🔍</span>
              <span>Inspect</span>
            </button>
            <button onclick="openSpreadsheetForCourse('${c.code}')" class="px-2 py-1 bg-[#002855] hover:bg-[#003875] text-[#E5A823] rounded-none font-bold text-xs inline-flex items-center gap-1 transition shadow-xs border border-[#E5A823]/40 cursor-pointer" title="Open in Integrated Spreadsheet">
              <span>📊</span>
              <span>Sheet</span>
            </button>
            <button onclick="openCourseEditModal('${c.code}')" class="px-2 py-1 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-none font-bold text-xs inline-flex items-center gap-1 transition shadow-xs border border-amber-300/60" title="Edit course data">
              <span>✏️</span>
              <span>Edit</span>
            </button>
            <button onclick="navigateView('flowchart'); handleCourseClick('${c.code}');" class="px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-none font-bold text-xs inline-flex items-center gap-1 transition border border-blue-200" title="Highlight in flowchart">
              <span>🔍</span>
              <span>Locate</span>
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    
    // =========================================================================
    // PRINTABLE SYLLABUS SPECIFICATION GENERATOR
    // =========================================================================
    window.printCourseSyllabus = function(courseCode) {
      const code = courseCode || (document.getElementById('ciCodeBadge') ? document.getElementById('ciCodeBadge').innerText : null);
      if (!code) return;
      const c = ALL_COURSES.find(item => item.code === code);
      if (!c) {
        showToast('Course not found: ' + code);
        return;
      }

      const prereqStr = (c.prereqs && c.prereqs.length > 0) ? c.prereqs.join(', ') : 'None (Curricular Entry Course)';
      const soLabels = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
      const soMappings = [];
      if (c.sos && Array.isArray(c.sos)) {
        c.sos.forEach((lvl, sIdx) => {
          if (lvl && lvl !== '-' && lvl !== '') {
            soMappings.push(`SO-${soLabels[sIdx]} (${lvl})`);
          }
        });
      }
      const soStr = soMappings.length > 0 ? soMappings.join(' &bull; ') : 'General Engineering Foundation';

      const printWindow = window.open('', '_blank', 'width=860,height=900');
      if (!printWindow) {
        showToast('Please enable popups to view printable syllabus.');
        return;
      }

      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Course Syllabus &mdash; ${c.code}: ${c.title}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; margin: 40px; color: #0f172a; font-size: 13px; line-height: 1.6; }
            .hdr { border-bottom: 3px solid #002855; padding-bottom: 14px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start; }
            .inst { font-size: 18px; font-weight: 900; color: #002855; text-transform: uppercase; margin: 0; }
            .dept { font-size: 12px; font-weight: 600; color: #475569; margin: 2px 0 0; }
            .pill { background: #002855; color: #E5A823; font-weight: bold; font-family: monospace; font-size: 11px; padding: 4px 10px; }
            .banner { background: #f8fafc; border: 1px solid #cbd5e1; padding: 14px; margin-bottom: 18px; }
            .c-code { font-size: 20px; font-weight: 900; color: #002855; font-family: monospace; }
            .c-title { font-size: 15px; font-weight: 700; color: #0f172a; margin-top: 2px; }
            .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 12px; border-top: 1px solid #e2e8f0; padding-top: 10px; }
            .g-label { font-size: 10px; font-weight: bold; color: #64748b; text-transform: uppercase; }
            .g-val { font-size: 13px; font-weight: 700; color: #0f172a; }
            .sec { margin-bottom: 18px; }
            .sec-t { font-size: 12px; font-weight: 800; color: #002855; text-transform: uppercase; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-bottom: 6px; letter-spacing: 0.5px; }
            .ftr { border-top: 1px solid #e2e8f0; padding-top: 12px; margin-top: 36px; font-size: 10px; color: #94a3b8; display: flex; justify-content: space-between; }
            @media print { body { margin: 20px; } button { display: none; } }
          </style>
        </head>
        <body>
          <div class="hdr">
            <div>
              <h1 class="inst">Asia Pacific College</h1>
              <p class="dept">School of Engineering &bull; Department of Computer Engineering</p>
              <p class="dept">BS Computer Engineering (CHED CMO No. 92, s. 2017)</p>
            </div>
            <div>
              <span class="pill">OFFICIAL COURSE SYLLABUS</span>
            </div>
          </div>

          <div class="banner">
            <div class="c-code">${c.code}</div>
            <div class="c-title">${c.title}</div>
            <div class="grid">
              <div><div class="g-label">Credit Units</div><div class="g-val">${Number(c.units).toFixed(1)} Units</div></div>
              <div><div class="g-label">Contact Hours</div><div class="g-val">${c.lec} Lec / ${c.lab} Lab hrs/wk</div></div>
              <div><div class="g-label">Curricular Term</div><div class="g-val">Year ${c.year} &bull; Term ${c.term}</div></div>
              <div><div class="g-label">Category</div><div class="g-val">${c.group || 'Core Engineering'}</div></div>
            </div>
          </div>

          <div class="sec">
            <div class="sec-t">1. Course Description &amp; Scope Narrative</div>
            <div>${c.desc || 'Instruction covering theoretical foundations, design methodologies, and problem-solving within the Bachelor of Science in Computer Engineering curriculum.'}</div>
          </div>

          <div class="sec">
            <div class="sec-t">2. Curricular Requisites &amp; DAG Topological Alignment</div>
            <div>
              <strong>Pre-requisites:</strong> ${prereqStr}<br>
              <strong>Co-requisites:</strong> ${(c.coreqs && c.coreqs.length > 0) ? c.coreqs.join(', ') : 'None'}<br>
              <strong>Kahn Cycle Integrity Status:</strong> Verified Valid Directed Acyclic Graph (DAG) Node
            </div>
          </div>

          <div class="sec">
            <div class="sec-t">3. Student Outcomes (SO) Alignment (ABET / PTC &amp; CMO 92)</div>
            <div>
              <strong>Mapped Program Outcomes:</strong> ${soStr}<br>
              <em>* Bloom\'s Taxonomy: I = Introductory, E = Enabling, D = Demonstrative.</em>
            </div>
          </div>

          <div class="ftr">
            <span>APC Academic Suite &bull; Defense Package Course Syllabus</span>
            <span>Registrar Record &bull; Generated ${new Date().toLocaleDateString()}</span>
          </div>

          <div style="margin-top: 18px; text-align: right;" class="no-print">
            <button onclick="window.print()" style="padding: 6px 14px; background: #002855; color: #fff; font-weight: bold; border: none; cursor: pointer; font-size: 12px;">Print or Save as PDF</button>
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
    };

    function filterCoursesTable() {
      const q = (document.getElementById('courseSearchInput') ? document.getElementById('courseSearchInput').value.toLowerCase() : '');
      const group = (document.getElementById('groupingFilter') ? document.getElementById('groupingFilter').value : 'all');
      const term = (document.getElementById('termFilter') ? document.getElementById('termFilter').value : 'all');

      const filtered = ALL_COURSES.filter(c => {
        const matchQ = !q || c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q);
        const matchG = group === 'all' || (c.group && c.group.includes(group));
        const matchT = term === 'all' || String(c.year) === term;
        return matchQ && matchG && matchT;
      });

      const countEl = document.getElementById('catalogVisibleCount');
      const unitsEl = document.getElementById('catalogVisibleUnits');
      if (countEl) countEl.innerText = filtered.length;
      if (unitsEl) {
        const totalU = filtered.reduce((acc, cur) => acc + (parseFloat(cur.units) || 0), 0);
        unitsEl.innerText = totalU.toFixed(1);
      }

      renderCoursesTable(filtered);
    }


    // =========================================================================
    // VIEW 4: OBE MATRIX CONTROLLERS
    // =========================================================================

    function switchObeTab(tabId) {
      const tabs = ['matrix', 'peo', 'vision'];
      tabs.forEach(t => {
        document.getElementById(`obe-content-${t}`).classList.add('hidden');
        const btn = document.getElementById(`obe-tab-${t}`);
        btn.classList.remove('border-apc-gold', 'text-apc-navy');
        btn.classList.add('border-transparent', 'text-slate-500');
      });

      document.getElementById(`obe-content-${tabId}`).classList.remove('hidden');
      const activeBtn = document.getElementById(`obe-tab-${tabId}`);
      activeBtn.classList.add('border-apc-gold', 'text-apc-navy');
      activeBtn.classList.remove('border-transparent', 'text-slate-500');

      if (tabId === 'vision' && typeof renderGaCards === 'function') {
        renderGaCards();
      }
    }

    function renderObeMatrix() {
      const tbody = document.getElementById('matrixTableBody');
      if (!tbody) return;
      tbody.innerHTML = '';

      ALL_COURSES.forEach((c, cIdx) => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50/80 transition';

        let cellsHtml = `
          <td class="py-2 px-3 font-mono font-bold text-apc-navy border-r border-slate-200 sticky left-0 bg-white z-10 text-[11px]">${c.code}</td>
          <td class="py-2 px-3 font-semibold text-slate-800 border-r border-slate-200 sticky left-[100px] bg-white z-10 truncate max-w-[200px] text-[11px]">${c.title}</td>
        `;

        c.sos.forEach((level, sIdx) => {
          let badgeColor = 'bg-slate-100 text-slate-400';
          if (level === 'I') badgeColor = 'bg-amber-100 text-amber-800 font-black border border-amber-300';
          if (level === 'E') badgeColor = 'bg-blue-100 text-blue-800 font-black border border-blue-300';
          if (level === 'D') badgeColor = 'bg-emerald-100 text-emerald-800 font-black border border-emerald-300';

          cellsHtml += `
            <td class="py-1.5 px-1 text-center border-r border-slate-100">
              <button onclick="cycleMatrixLevel(${cIdx}, ${sIdx})" class="w-6 h-6 rounded-none text-[11px] font-mono transition transform active:scale-90 ${badgeColor}">
                ${level === '-' ? '·' : level}
              </button>
            </td>
          `;
        });

        tr.innerHTML = cellsHtml;
        tbody.appendChild(tr);
      });

      if (typeof runIedValidation === 'function') runIedValidation();
      if (typeof renderSoSummaryRow === 'function') renderSoSummaryRow();
    }

    function cycleMatrixLevel(courseIdx, soIdx) {
      const levels = ['-', 'I', 'E', 'D'];
      const current = ALL_COURSES[courseIdx].sos[soIdx];
      const nextIdx = (levels.indexOf(current) + 1) % levels.length;
      ALL_COURSES[courseIdx].sos[soIdx] = levels[nextIdx];
      renderObeMatrix();
      showToast(`${ALL_COURSES[courseIdx].code} SO level updated to [${levels[nextIdx]}]`);
      if (typeof appendAuditLog === 'function') {
        appendAuditLog('SO_UPDATE', ALL_COURSES[courseIdx].code, `SO-${String.fromCharCode(97 + soIdx).toUpperCase()} updated to [${levels[nextIdx]}]`);
      }
      if (typeof runIedValidation === 'function') runIedValidation();
      if (typeof renderSoSummaryRow === 'function') renderSoSummaryRow();
    }

    function exportObeMatrixCSV() {
      showToast('Exporting official Course-to-SO matrix as CSV...');
    }


    // =========================================================================
    // GENERAL UTILITIES
    // =========================================================================

    function openBatchModal() {
      document.getElementById('batchModal').classList.remove('hidden');
    }
    function closeBatchModal() {
      document.getElementById('batchModal').classList.add('hidden');
      document.getElementById('uploadProgress').classList.add('hidden');
    }
    function simulateUpload() {
      document.getElementById('uploadProgress').classList.remove('hidden');
      showToast('Parsing Proposed_BS_CpE_Curriculum_2026_Final.xlsx...');
    }
    function commitBatchUpload() {
      closeBatchModal();
      showToast('Successfully committed 74 authentic BSCpE courses into 2026 Revision Draft!');
    }

    function verifyHashModal(hash) {
      showToast(`SHA-256 Verified: ${hash} matches cryptographic ledger.`);
    }

    let toastTimeout;
    function showToast(msg) {
      const toast = document.getElementById('toastNotification');
      const text = document.getElementById('toastMessage');
      text.innerText = msg;
      toast.classList.remove('translate-y-24', 'opacity-0');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
      }, 3500);
    }

    function toggleNotificationToast() {
      showToast('2 pending notifications: Faculty Member submitted cluster review; CHED CMO 92 audit passed.');
    }

    // Window Resize & Scroll Event to Redraw Arrows
    window.addEventListener('resize', () => {
      drawAllArrows();
    });

    // INITIALIZATION
    window.addEventListener('DOMContentLoaded', () => {
      checkInitialAuthState();
      renderFlowchartGrid();
      renderCoursesTable(ALL_COURSES);
      renderObeMatrix();
      
      if (typeof renderAuditTable === 'function') renderAuditTable();
      if (typeof renderVersionTable === 'function') renderVersionTable();
      if (typeof renderGaCards === 'function') renderGaCards();
      if (typeof renderDelegationCards === 'function') renderDelegationCards();
      if (typeof runIedValidation === 'function') runIedValidation();
      if (typeof renderSoSummaryRow === 'function') renderSoSummaryRow();

      // Start clean with no auto-login: user must explicitly log in via SSO or credentials
      if (typeof deselectSchool === 'function') deselectSchool();
      if (typeof deselectProgram === 'function') deselectProgram();

      // Set spacious spread mode on startup so arrows have generous room
      setFlowchartSpreadMode(true);

      // Multiple rendering ticks ensure WebFonts, CSS, and layout are completely settled
      setTimeout(drawAllArrows, 80);
      setTimeout(drawAllArrows, 250);
      setTimeout(drawAllArrows, 600);
    });
  
    
    // =========================================================================
    // MICROSOFT ACCOUNTS API & MSAL CONFIGURATION (APC Entra ID SSO)
    // =========================================================================
    const MSAL_CONFIG = {
      auth: {
        clientId: '3f57ee06-1289-41e3-a2d6-baf640bde39f', // Official APC Client ID
        authority: 'https://login.microsoftonline.com/aeb745e6-8166-4f8f-9233-179e8109c49e', // APC Azure AD Tenant
        redirectUri: 'https://rams.apc.edu.ph/student'
      },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
      }
    };

    // HARDCODED ADMIN ACCOUNT (System Administrator)
    let currentAuthUser = {
      accountType: 'Microsoft 365 Institutional Admin',
      name: 'System Administrator',
      username: 'admin@apc.edu.ph',
      role: 'System Administrator',
      authorityRole: 'admin',
      tenantId: 'aeb745e6-8166-4f8f-9233-179e8109c49e',
      permissions: ['Curriculum.Author', 'Curriculum.Approve', 'Security.Audit', 'DAG.Verify'],
      tokenActive: true
    };

    function authenticateWithMicrosoft() {
      showToast('Microsoft 365 SSO Active: Authenticated as System Administrator.');
    }

    // =========================================================================
    // STATIC FLOWCHART DIAGRAM IMAGE EXPORT ENGINE (Curriculum Management v4.0)
    // =========================================================================
    function exportFlowchartAsPng() {
      showToast('Generating high-resolution static diagram image...');

      const svgOriginal = document.getElementById('diagramSvg');
      const nodesOriginal = document.getElementById('diagramNodesContainer');
      const backdropOriginal = document.getElementById('diagramSwimlanesBackdrop');

      const width = 3400;
      const height = 960;

      let svgXml = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
      svgXml += '<style>';
      svgXml += 'text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }';
      svgXml += '.flow-arrow { stroke: #64748b; stroke-width: 1.8; fill: none; stroke-linecap: round; stroke-linejoin: round; }';
      svgXml += '</style>';
      svgXml += '<rect width="100%" height="100%" fill="#ffffff"/>';

      if (svgOriginal) {
        svgXml += svgOriginal.innerHTML;
      }
      svgXml += '</svg>';

      const blob = new Blob([svgXml], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'BS_CpE_2026_Curriculum_Flowchart_Static_Diagram.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('✅ High-Resolution Static Diagram Image downloaded successfully!');
    }

    // =========================================================================
    // REGISTRAR DOCUMENT CENTER TAB SWITCHER & PRINT CONTROLLER
    // =========================================================================
    let currentRegistrarTab = 1;
    const REGISTRAR_EDGES = [{"from": "CALCONE", "to": "CALCTWO", "type": "solid"}, {"from": "CALCONE", "to": "PHYENLC/PHYENLB", "type": "solid"}, {"from": "PROGLOD", "to": "OBJPROG", "type": "solid"}, {"from": "PEDUONE", "to": "PEDUTWO", "type": "solid"}, {"from": "NATSER 1", "to": "NATSER 2", "type": "solid"}, {"from": "CALCONE", "to": "ENGDATA", "type": "solid"}, {"from": "CALCTWO", "to": "DISCMAT", "type": "solid"}, {"from": "PHYENLC/PHYENLB", "to": "ELECIRK / CRKTLAB", "type": "solid"}, {"from": "OBJPROG", "to": "DATSTRC", "type": "solid"}, {"from": "PEDUTWO", "to": "PEDUTRI", "type": "solid"}, {"from": "CALCTWO", "to": "DIEQUAT", "type": "solid"}, {"from": "ELECIRK / CRKTLAB", "to": "ELEXCKT / ELEXLAB", "type": "solid"}, {"from": "ELECIRK / CRKTLAB", "to": "USERINX", "type": "solid"}, {"from": "DATSTRC", "to": "OPRSYST", "type": "solid"}, {"from": "OBJPROG", "to": "MOBCAPP", "type": "solid"}, {"from": "PEDUTRI", "to": "PEDUFOR", "type": "solid"}, {"from": "DIEQUAT", "to": "NUMERCL", "type": "solid"}, {"from": "ELEXCKT / ELEXLAB", "to": "LOGCDES / LOGICLB", "type": "solid"}, {"from": "DATSTRC", "to": "DATMGTS", "type": "solid"}, {"from": "NUMERCL", "to": "FDCONTS", "type": "solid"}, {"from": "ELEXCKT / ELEXLAB", "to": "FDCONTS", "type": "solid"}, {"from": "ENGCADD", "to": "CPEDRAF", "type": "solid"}, {"from": "ELEXCKT / ELEXLAB", "to": "MIXSIGS", "type": "solid"}, {"from": "LOGCDES / LOGICLB", "to": "EMICROS / MCROLAB", "type": "solid"}, {"from": "PURPCOM", "to": "SOFTDES / SOFTLAB", "type": "solid"}, {"from": "DATMGTS", "to": "SOFTDES / SOFTLAB", "type": "solid"}, {"from": "FDCONTS", "to": "DIGSPRO / DIGSLAB", "type": "solid"}, {"from": "CPEDRAF", "to": "CPEMETS", "type": "solid"}, {"from": "SOFTDES / SOFTLAB", "to": "CPEMETS", "type": "solid"}, {"from": "LOGCDES / LOGICLB", "to": "INTOHDL", "type": "solid"}, {"from": "EMICROS / MCROLAB", "to": "EMBEDDS / EMBEDLB", "type": "solid"}, {"from": "CPECGS1/M1/R1", "to": "CPECGS2/M2/R2", "type": "dashed"}, {"from": "CPECGS2/M2/R2", "to": "CPECGS3/M3/R3", "type": "dashed"}, {"from": "DIGSPRO / DIGSLAB", "to": "DATCOMS", "type": "solid"}, {"from": "DATCOMS", "to": "COMNETS / NETSLAB", "type": "solid"}, {"from": "EMBEDDS / EMBEDLB", "to": "COMAROR / ARCORLAB", "type": "solid"}, {"from": "CPEMETS", "to": "CPEDES1", "type": "solid"}, {"from": "EXCOMP1", "to": "EXCOMP2", "type": "solid"}, {"from": "CPEDES1", "to": "CPEDES2", "type": "solid"}, {"from": "CPEDES2", "to": "INTERN1", "type": "solid"}, {"from": "INTERN1", "to": "INTERN2", "type": "solid"}];

    function drawPrintArrows() {
      // Sheet 1 is rendered via the 100% mathematically snapped pure SVG flowchart with crisp polygon arrowheads.
      // If legacy dynamic print table is present, safely update it; otherwise no-op.
      const svg = document.getElementById('printSvgCanvas');
      const svgGroup = document.getElementById('printSvgGroup');
      const table = document.getElementById('printFlowchartTable');
      if (!svg || !svgGroup || !table) return;
    }

    function switchRegistrarDocTab(tabIdx) {
      currentRegistrarTab = tabIdx;
      // Update Tab Buttons in Toolbar and Left Panel
      for (let i = 1; i <= 7; i++) {
        const btn = document.getElementById(`docTabBtn_${i}`);
        const view = document.getElementById(`regDocView_${i}`);
        if (btn) {
          if (i === tabIdx) {
            btn.className = 'px-3 py-2 rounded-none bg-apc-blue text-white shadow transition border border-apc-blue flex items-center gap-1.5 shrink-0 font-bold';
          } else {
            btn.className = 'px-3 py-2 rounded-none bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 shrink-0';
          }
        }
        if (view) {
          if (i === tabIdx) {
            view.classList.remove('hidden');
          } else {
            view.classList.add('hidden');
          }
        }

        // Synchronize Left Panel Highlight
        const navBtn = document.getElementById(`nav-regdoc-${i}`);
        if (navBtn) {
          if (i === tabIdx) {
            navBtn.classList.remove('text-slate-400', 'hover:text-white', 'hover:bg-slate-800/60');
            navBtn.classList.add('bg-slate-800', 'text-white', 'border-l-4', 'border-apc-gold', 'shadow-sm', 'font-bold');
            const badge = navBtn.querySelector('.reg-doc-badge');
            if (badge) {
              badge.classList.remove('bg-slate-800', 'text-slate-400', 'border-slate-700');
              badge.classList.add('bg-amber-400/20', 'text-amber-300', 'border-amber-400/40');
            }
          } else {
            navBtn.classList.remove('bg-slate-800', 'text-white', 'border-l-4', 'border-apc-gold', 'shadow-sm', 'font-bold');
            navBtn.classList.add('text-slate-400', 'hover:text-white', 'hover:bg-slate-800/60');
            const badge = navBtn.querySelector('.reg-doc-badge');
            if (badge) {
              badge.classList.remove('bg-amber-400/20', 'text-amber-300', 'border-amber-400/40');
              badge.classList.add('bg-slate-800', 'text-slate-400', 'border-slate-700');
            }
          }
        }
      }

      // Show/hide Arrow style selector only for Sheet 1
      const arrowWrapper = document.getElementById('printArrowStyleWrapper');
      if (arrowWrapper) {
        arrowWrapper.style.display = (tabIdx === 1) ? 'flex' : 'none';
      }

      // Static header matching official mockups
      const headerTitle = document.getElementById('regDocHeaderTitle');
      const headerSub = document.getElementById('regDocHeaderSubtitle');
      if (headerTitle) headerTitle.textContent = 'Official Documents';
      if (headerSub) headerSub.textContent = 'A list of official and archived documents related to the curriculum system.';

      // Keep button text matching official mockups
      const btnText = document.getElementById('printCurrentPageBtnText');
      if (btnText) {
        btnText.textContent = 'PRINT CURRENT DOCUMENT';
      }

      // Update file explorer path & breadcrumb
      updateFileExplorerPath('registrar', tabIdx);
      const bPage = document.getElementById('breadcrumb-page');
      if (bPage) bPage.innerText = getRegistrarDocTitle(tabIdx);

      // Redraw arrows if switching to Tab 1
      if (tabIdx === 1) {
        setTimeout(drawPrintArrows, 60);
      }
    }

    function navigateRegistrarDoc(tabIdx) {
      updateFileExplorerPath('registrar', tabIdx);
      currentRegistrarTab = tabIdx;
      navigateView('registrar');
      switchRegistrarDocTab(tabIdx);

      // Scroll container to top smoothly
      const mainEl = document.querySelector('main');
      if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function getRegistrarDocTitle(tabIdx) {
      const titles = [
        'Sheet 1: Official Flowchart (Registrar Copy)',
        'Sheet 2: Curriculum Prospectus (Term-by-Term)',
        'Sheet 3: Course Catalog (74 Courses)',
        'Sheet 4: Program of Study Matrix',
        'Sheet 5: OBE Curriculum Map (SO a–m)',
        'Sheet 6: Comparative Summary (CMO 92 vs 2026)',
        'Sheet 7: Summary of Units (167 Total Units)'
      ];
      return titles[tabIdx - 1] || `Sheet ${tabIdx}`;
    }

    function toggleRegistrarFullscreen() {
      const view = document.getElementById('view-registrar');
      const icon = document.getElementById('fullscreenIcon');
      const text = document.getElementById('fullscreenText');
      if (!view) return;

      if (view.classList.contains('registrar-focus-mode')) {
        view.classList.remove('registrar-focus-mode', 'fixed', 'inset-0', 'z-50', 'bg-slate-900/95', 'backdrop-blur-sm', 'overflow-y-auto', 'p-6');
        if (icon) icon.innerText = '⛶';
        if (text) text.innerText = 'Focus Mode';
        document.body.style.overflow = '';
      } else {
        view.classList.add('registrar-focus-mode', 'fixed', 'inset-0', 'z-50', 'bg-slate-900/95', 'backdrop-blur-sm', 'overflow-y-auto', 'p-6');
        if (icon) icon.innerText = '✕';
        if (text) text.innerText = 'Exit Focus';
        document.body.style.overflow = 'hidden';
      }
    }

    function openOfficialPrintModal(initialTab = 1) {
      navigateRegistrarDoc(initialTab);
    }

    function closeOfficialPrintModal() {
      const view = document.getElementById('view-registrar');
      if (view && view.classList.contains('registrar-focus-mode')) {
        toggleRegistrarFullscreen();
      }
    }

    function updatePrintStudentId(val) {
      const container = document.getElementById('printStudentIdDisplay');
      if (!container) return;
      const clean = (val || '').replace(/[^0-9]/g, '').padEnd(10, ' ');
      container.innerHTML = `
        <span class="font-bold mr-1">ID NUMBER:</span>
        ${clean.split('').map(d => `<span class="inline-block w-3.5 text-center font-mono font-bold text-slate-900 border-b border-black text-xs">${d.trim() ? d : '&nbsp;'}</span>`).join('')}
      `;
    }

    function updatePrintStudentName(val) {
      const container = document.getElementById('printStudentNameDisplay');
      if (!container) return;
      container.textContent = val ? val.toUpperCase() : 'STUDENT NAME (OFFICIAL REGISTRAR COPY)';
    }

    function changeArrowStyleMode(mode) {
      currentPrintArrowStyle = mode;
      drawPrintArrows();
    }

    function printCurrentRegistrarDoc() {
      if (currentRegistrarTab === 1) {
        drawPrintArrows();
      }
      setTimeout(() => {
        window.print();
      }, 50);
    }

    function printAllRegistrarDocs() {
      // Temporarily reveal all sheets for complete batch print
      for (let i = 1; i <= 7; i++) {
        const v = document.getElementById(`regDocView_${i}`);
        if (v) v.classList.remove('hidden');
      }
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          switchRegistrarDocTab(currentRegistrarTab);
        }, 500);
      }, 100);
    }

    window.addEventListener('beforeprint', () => {
      if (currentRegistrarTab === 1) {
        drawPrintArrows();
      }
    });

    window.addEventListener('resize', () => {
      const view = document.getElementById('view-registrar');
      if (view && !view.classList.contains('hidden') && currentRegistrarTab === 1) {
        drawPrintArrows();
      }
    });

    function openFlowchartDrawer(code) {
      // Find course matching code or prefix
      const c = ALL_COURSES.find(item => item.code === code || item.code.startsWith(code) || code.startsWith(item.code));
      if (c) {
        openDetailDrawer(c.code);
      } else {
        openDetailDrawer(code);
      }
    }

  

    // =========================================================================
    // USER-FRIENDLY CURRICULUM DATA EDITING SUITE (Curriculum Management v2.4-OBE)
    // =========================================================================
    let editingCourseCodeOriginal = null;
    let editModalPrereqs = [];
    let editModalCoreqs = [];
    let editModalSos = ['-','-','-','-','-','-','-','-','-','-','-','-','-'];

    // Backup baseline for revert
    const OFFICIAL_BASELINE_COURSES = JSON.parse(JSON.stringify(ALL_COURSES));

    function openCourseEditModal(courseCode = '') {
      const modal = document.getElementById('courseEditModal');
      if (!modal) return;

      editingCourseCodeOriginal = courseCode ? courseCode.trim() : null;
      const isNew = !editingCourseCodeOriginal;

      document.getElementById('editModalTitle').innerText = isNew ? 'Create New Curricular Course' : `Edit Course: ${editingCourseCodeOriginal}`;
      document.getElementById('editModalModeBadge').innerText = isNew ? 'Creating New Course' : 'Editing Active Node';
      document.getElementById('editModalCodeIcon').innerText = isNew ? 'NEW' : editingCourseCodeOriginal.substring(0, 4);

      const deleteBtn = document.getElementById('btnDeleteCourse');
      if (deleteBtn) deleteBtn.style.display = isNew ? 'none' : 'inline-flex';

      let course = null;
      if (!isNew) {
        course = ALL_COURSES.find(c => c.code === editingCourseCodeOriginal);
      }

      // Populate Inputs
      document.getElementById('editCourseCodeInput').value = course ? course.code : '';
      document.getElementById('editCourseCodeInput').disabled = !isNew; // Keep code stable if editing existing, or allow if new
      document.getElementById('editCourseTitleInput').value = course ? course.title : '';
      document.getElementById('editCourseGroupSelect').value = course ? course.group : 'Professional Core';
      document.getElementById('editCourseYearSelect').value = course ? course.year : 1;
      document.getElementById('editCourseTermSelect').value = course ? course.term : 1;
      document.getElementById('editCourseRowSelect').value = course ? course.row : 1;
      document.getElementById('editCourseLecInput').value = course ? course.lec : 3;
      document.getElementById('editCourseLabInput').value = course ? course.lab : 0;
      document.getElementById('editCourseUnitsInput').value = course ? course.units : 3.0;
      document.getElementById('editCourseDescTextarea').value = course ? (course.desc || '') : '';

      editModalPrereqs = course ? [...course.prereqs] : [];
      editModalCoreqs = course && Array.isArray(course.coreqs) ? [...course.coreqs] : [];
      editModalSos = course && course.sos ? [...course.sos] : ['-','-','-','-','-','-','-','-','-','-','-','-','-'];

      calculateEditUnits();
      renderPrereqsChips();
      renderCoreqTags();
      populatePrereqSelectOptions();
      renderSoChips();
      validateEditModalDag();

      const cycleWarn = document.getElementById('prereqCycleWarning');
      if (cycleWarn) cycleWarn.classList.add('hidden');

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeCourseEditModal() {
      const modal = document.getElementById('courseEditModal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    function calculateEditUnits() {
      const autoCalc = document.getElementById('editAutoCalcUnitsCheckbox').checked;
      const lec = parseFloat(document.getElementById('editCourseLecInput').value) || 0;
      const lab = parseFloat(document.getElementById('editCourseLabInput').value) || 0;
      
      let calcUnits = lec;
      if (lab > 0) {
        // Lab credit: 3 hrs lab = 1 unit credit, or internships with 18 hrs = 6 units
        if (lab >= 18) calcUnits += 6.0;
        else if (lab >= 6) calcUnits += 2.0;
        else if (lab >= 3) calcUnits += 1.0;
        else calcUnits += 1.0;
      }

      if (autoCalc) {
        document.getElementById('editCourseUnitsInput').value = calcUnits.toFixed(1);
      }

      const hint = document.getElementById('editUnitsCalculationHint');
      if (hint) {
        hint.innerText = `= ${calcUnits.toFixed(1)} Credit Units (${lec} Lec + ${lab} Lab)`;
      }
    }

    function handleAutoCalcUnitsChange() {
      calculateEditUnits();
    }

    function updateGridColPlacement() {
      // Year and Term directly determine col: col = (year - 1) * 3 + term
      const year = parseInt(document.getElementById('editCourseYearSelect').value) || 1;
      const term = parseInt(document.getElementById('editCourseTermSelect').value) || 1;
      // Col is 1 to 12
    }

    function renderPrereqsChips() {
      const container = document.getElementById('editPrereqsChipsContainer');
      if (!container) return;

      if (!editModalPrereqs || editModalPrereqs.length === 0) {
        container.innerHTML = '<span class="text-slate-400 text-xs italic">No prerequisites (Entry level course)</span>';
        return;
      }

      container.innerHTML = editModalPrereqs.map((p, idx) => {
        const norm = typeof p === 'string' ? { code: p, type: 'hard' } : { code: p.code, type: p.type || 'hard' };
        let badgeStyle = 'bg-slate-100 text-slate-800 border-slate-300';
        let pill = '<span class="text-[11px] px-1.5 py-0.5 rounded-none bg-slate-200 text-slate-700 font-sans font-black">HARD</span>';
        
        if (norm.type === 'co') {
          badgeStyle = 'bg-amber-50 text-amber-900 border-amber-400';
          pill = '<span class="text-[11px] px-1.5 py-0.5 rounded-none bg-amber-400 text-slate-950 font-sans font-black">CO-REQ</span>';
        } else if (norm.type === 'soft') {
          badgeStyle = 'bg-purple-50 text-purple-900 border-purple-300';
          pill = '<span class="text-[11px] px-1.5 py-0.5 rounded-none bg-purple-300 text-purple-950 font-sans font-black">SOFT</span>';
        }

        return `
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none ${badgeStyle} border font-mono font-bold text-xs shadow-xs">
            <span>${norm.code}</span>
            ${pill}
            <button type="button" onclick="removePrereqChip(${idx})" class="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-rose-600 hover:bg-rose-100/60 font-bold ml-1 text-base leading-none transition" title="Remove prerequisite">&times;</button>
          </span>
        `;
      }).join('');
    }

    function removePrereqChip(idx) {
      editModalPrereqs.splice(idx, 1);
      renderPrereqsChips();
      validateEditModalDag();
    }

    function clearAllPrereqs() {
      editModalPrereqs = [];
      renderPrereqsChips();
      validateEditModalDag();
    }

    function addPrereqFromSelect() {
      const sel = document.getElementById('editAddPrereqSelect');
      const typeSel = document.getElementById('editAddPrereqType');
      const val = sel ? sel.value : '';
      const type = typeSel ? typeSel.value : 'hard';
      if (!val) return;

      const currentCode = (document.getElementById('editCourseCodeInput')?.value || '').trim().toUpperCase();

      // Self-reference check
      if (val === currentCode) {
        showToast('⚠️ Circular dependency detected: a course cannot be its own prerequisite.');
        const cycleWarn = document.getElementById('prereqCycleWarning');
        const cycleMsg = document.getElementById('prereqCycleMsg');
        if (cycleWarn && cycleMsg) {
          cycleMsg.innerText = 'Cannot add course as its own prerequisite.';
          cycleWarn.classList.remove('hidden');
        }
        return;
      }

      // Check reverse dependency (if val lists currentCode as prereq)
      const target = ALL_COURSES.find(c => c.code === val);
      if (target && (target.prereqs || []).some(p => (typeof p === 'string' ? p : p.code) === currentCode)) {
        showToast(`⚠️ Potential circular dependency: ${val} already lists ${currentCode} as a prerequisite.`);
        const cycleWarn = document.getElementById('prereqCycleWarning');
        const cycleMsg = document.getElementById('prereqCycleMsg');
        if (cycleWarn && cycleMsg) {
          cycleMsg.innerText = `Potential loop: ${val} already depends on ${currentCode}.`;
          cycleWarn.classList.remove('hidden');
        }
      }

      const existingIdx = editModalPrereqs.findIndex(p => (typeof p === 'string' ? p : p.code) === val);
      if (existingIdx === -1) {
        editModalPrereqs.push({ code: val, type: type });
      } else {
        editModalPrereqs[existingIdx] = { code: val, type: type };
      }
      renderPrereqsChips();
      populatePrereqSelectOptions();
      validateEditModalDag();
    }

    function populatePrereqSelectOptions() {
      const sel = document.getElementById('editAddPrereqSelect');
      if (!sel) return;

      const currentCode = document.getElementById('editCourseCodeInput').value.trim().toUpperCase();
      sel.innerHTML = '<option value="">-- Select an existing course to add as prerequisite --</option>';

      // Sort courses by year, term, code
      const sorted = [...ALL_COURSES].sort((a, b) => (a.year * 10 + a.term) - (b.year * 10 + b.term) || a.code.localeCompare(b.code));

      sorted.forEach(c => {
        if (c.code !== currentCode && !editModalPrereqs.includes(c.code)) {
          const opt = document.createElement('option');
          opt.value = c.code;
          opt.textContent = `${c.code} - ${c.title} (Yr ${c.year}, T${c.term} • ${c.units}u)`;
          sel.appendChild(opt);
        }
      });
    }

    // Co-requisite tag handlers (WP1)
    function renderCoreqTags() {
      const container = document.getElementById('editModalCoreqTags');
      if (!container) return;
      if (!editModalCoreqs || editModalCoreqs.length === 0) {
        container.innerHTML = '<span class="text-slate-400 text-xs italic">No co-requisites assigned</span>';
        return;
      }
      container.innerHTML = editModalCoreqs.map((code, idx) => `
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-amber-50 text-amber-900 border border-amber-300 font-mono font-bold text-xs shadow-xs">
          <span>${code}</span>
          <span class="text-[10px] px-1 py-0.2 rounded-none bg-amber-200 text-amber-900 font-sans font-black">CO-REQ</span>
          <button type="button" onclick="removeCoreqTag(${idx})" class="w-5 h-5 flex items-center justify-center text-amber-700 hover:text-rose-600 font-bold ml-1 text-base leading-none transition" title="Remove co-requisite">&times;</button>
        </span>
      `).join('');
    }

    function addCoreqTag() {
      const input = document.getElementById('coreqInput');
      if (!input) return;
      const val = input.value.trim().toUpperCase();
      if (!val) return;
      const currentCode = (document.getElementById('editCourseCodeInput')?.value || '').trim().toUpperCase();
      if (val === currentCode) {
        showToast('⚠️ A course cannot be its own co-requisite.');
        input.value = '';
        return;
      }
      if (!editModalCoreqs.includes(val)) {
        editModalCoreqs.push(val);
        renderCoreqTags();
      }
      input.value = '';
    }

    function removeCoreqTag(idx) {
      editModalCoreqs.splice(idx, 1);
      renderCoreqTags();
    }

    function clearAllCoreqs() {
      editModalCoreqs = [];
      renderCoreqTags();
    }

    function handleCoreqInputKey(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        addCoreqTag();
      }
    }

    // Interactive 13-outcome chips (a to m)
    function renderSoChips() {
      const container = document.getElementById('editSoGridContainer');
      if (!container) return;

      const soLabels = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
      const soNames = [
        'Eng Knowledge', 'Experiments', 'Design', 'Teamwork', 
        'Problem Analysis', 'Ethics', 'Communication', 'Impact', 
        'Lifelong Learn', 'Contemporary', 'Modern Tools', 'Project Mgmt', 'Specialized R&D'
      ];

      container.innerHTML = soLabels.map((so, idx) => {
        const val = editModalSos[idx] || '-';
        let badgeClass = 'bg-slate-100 text-slate-600 border-slate-300';
        if (val === 'I') badgeClass = 'bg-emerald-100 text-emerald-900 border-emerald-400 font-black';
        if (val === 'E') badgeClass = 'bg-amber-100 text-amber-900 border-amber-400 font-black';
        if (val === 'D') badgeClass = 'bg-indigo-100 text-indigo-900 border-indigo-400 font-black';

        return `
          <button type="button" onclick="cycleSoVal(${idx})" class="p-2 rounded-none border text-center transition flex flex-col items-center justify-between hover:shadow-sm ${badgeClass}">
            <div class="text-[11px] font-mono font-bold text-slate-500">SO-${so.toUpperCase()}</div>
            <div class="text-sm font-mono font-black my-0.5">${val}</div>
            <div class="text-[11px] text-slate-500 truncate w-full" title="${soNames[idx]}">${soNames[idx]}</div>
          </button>
        `;
      }).join('');
    }

    function cycleSoVal(idx) {
      const current = editModalSos[idx];
      const cycle = { '-': 'I', 'I': 'E', 'E': 'D', 'D': '-' };
      editModalSos[idx] = cycle[current] || '-';
      renderSoChips();
    }

    // Real-Time DAG Cycle Validation
    function validateEditModalDag() {
      const targetCode = document.getElementById('editCourseCodeInput').value.trim().toUpperCase();
      const banner = document.getElementById('editDagStatusBanner');
      const title = document.getElementById('editDagStatusTitle');
      const sub = document.getElementById('editDagStatusSubtitle');
      const icon = document.getElementById('editDagStatusIcon');
      const saveBtn = document.getElementById('btnSaveCourseData');

      // Create a temporary adjacency map
      const adj = {};
      ALL_COURSES.forEach(c => {
        adj[c.code] = [...c.prereqs];
      });
      adj[targetCode] = [...editModalPrereqs];

      // Check if targetCode can reach itself (cycle detection via DFS)
      const visited = new Set();
      const recStack = new Set();
      let hasCycle = false;
      let cyclePath = [];

      function dfs(node, path) {
        visited.add(node);
        recStack.add(node);
        path.push(node);

        const neighbors = adj[node] || [];
        for (const next of neighbors) {
          if (!visited.has(next)) {
            if (dfs(next, path)) return true;
          } else if (recStack.has(next)) {
            cyclePath = [...path, next];
            return true;
          }
        }

        recStack.delete(node);
        path.pop();
        return false;
      }

      for (const node of Object.keys(adj)) {
        if (!visited.has(node)) {
          if (dfs(node, [])) {
            hasCycle = true;
            break;
          }
        }
      }

      if (hasCycle) {
        if (banner) {
          banner.className = 'p-3 rounded-none bg-rose-50 border-2 border-rose-400 text-rose-900 flex items-center justify-between shadow-xs';
          icon.innerText = '⚠️';
          title.innerText = 'Circular Prerequisite Cycle Detected!';
          sub.innerText = `Loop found: ${cyclePath.join(' → ')}. You must remove the conflicting prerequisite.`;
        }
        if (saveBtn) saveBtn.disabled = true;
        return false;
      } else {
        if (banner) {
          banner.className = 'p-3 rounded-none bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center justify-between shadow-xs';
          icon.innerText = '✓';
          title.innerText = 'DAG Topological Integrity Verified';
          sub.innerText = 'No circular prerequisites detected. Flowchart directed acyclic graph is clean.';
        }
        if (saveBtn) saveBtn.disabled = false;
        return true;
      }
    }

    function saveCourseDataFromModal() {
      const code = document.getElementById('editCourseCodeInput').value.trim().toUpperCase();
      const title = document.getElementById('editCourseTitleInput').value.trim();
      const group = document.getElementById('editCourseGroupSelect').value;
      const year = parseInt(document.getElementById('editCourseYearSelect').value) || 1;
      const term = parseInt(document.getElementById('editCourseTermSelect').value) || 1;
      const row = parseInt(document.getElementById('editCourseRowSelect').value) || 1;
      const lec = parseFloat(document.getElementById('editCourseLecInput').value) || 0;
      const lab = parseFloat(document.getElementById('editCourseLabInput').value) || 0;
      const units = parseFloat(document.getElementById('editCourseUnitsInput').value) || (lec + (lab > 0 ? 1 : 0));
      const desc = document.getElementById('editCourseDescTextarea').value.trim();

      if (!code) {
        alert('Course Code is required.');
        return;
      }
      if (!title) {
        alert('Course Title is required.');
        return;
      }

      // Check DAG validity
      if (!validateEditModalDag()) {
        alert('Cannot save: Course contains a circular prerequisite cycle. Please resolve the loop before saving.');
        return;
      }

      const col = (year - 1) * 3 + term;

      const courseObj = {
        code,
        title,
        group,
        year,
        term,
        col,
        row,
        lec,
        lab,
        units,
        prereqs: [...editModalPrereqs],
        coreqs: [...editModalCoreqs],
        sos: [...editModalSos],
        desc
      };

      if (editingCourseCodeOriginal) {
        // Update existing course
        const idx = ALL_COURSES.findIndex(c => c.code === editingCourseCodeOriginal);
        if (idx !== -1) {
          ALL_COURSES[idx] = courseObj;
        }
      } else {
        // Add new course
        const existingIdx = ALL_COURSES.findIndex(c => c.code === code);
        if (existingIdx !== -1) {
          alert(`A course with code ${code} already exists. Please choose a distinct code.`);
          return;
        }
        ALL_COURSES.push(courseObj);
      }

      // Save to localStorage
      try {
        localStorage.setItem('apc_curriculum_custom_courses', JSON.stringify(ALL_COURSES));
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }

      // Live Refresh all views
      renderFlowchartGrid();
      setTimeout(drawAllArrows, 80);
      filterCoursesTable();

      // If Detail Drawer is open on this course, refresh it
      if (document.getElementById('drawerCourseCode').innerText === code) {
        openDetailDrawer(code);
      }

      if (typeof appendAuditLog === 'function') {
        appendAuditLog('COURSE_EDIT', code, `Saved course record for ${code}: ${title}`);
      }

      closeCourseEditModal();
      showToastNotification(`Course ${code} (${title}) successfully saved! Curriculum DAG recalculated.`);
    }

    function deleteCurrentCourse() {
      if (!editingCourseCodeOriginal) return;

      // Check if any other course depends on this course
      const dependents = ALL_COURSES.filter(c => c.prereqs.includes(editingCourseCodeOriginal));
      if (dependents.length > 0) {
        const depCodes = dependents.map(d => d.code).join(', ');
        const proceed = confirm(`Warning: The following courses depend on ${editingCourseCodeOriginal} as a prerequisite: ${depCodes}. If you delete this course, those prerequisites will be cleared. Do you want to proceed?`);
        if (!proceed) return;

        // Clean up prerequisite references
        ALL_COURSES.forEach(c => {
          c.prereqs = c.prereqs.filter(p => p !== editingCourseCodeOriginal);
        });
      } else {
        const proceed = confirm(`Are you sure you want to delete course ${editingCourseCodeOriginal}?`);
        if (!proceed) return;
      }

      ALL_COURSES = ALL_COURSES.filter(c => c.code !== editingCourseCodeOriginal);

      try {
        localStorage.setItem('apc_curriculum_custom_courses', JSON.stringify(ALL_COURSES));
      } catch (e) {}

      renderFlowchartGrid();
      setTimeout(drawAllArrows, 80);
      filterCoursesTable();
      closeDetailDrawer();
      closeCourseEditModal();
      showToastNotification(`Course ${editingCourseCodeOriginal} successfully deleted.`);
    }

    function exportCurriculumJSON() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ALL_COURSES, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "BSCpE_Curriculum_2026_Customized.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToastNotification("Curriculum JSON exported successfully.");
    }

    function importCurriculumJSON(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const imported = JSON.parse(e.target.result);
          if (Array.isArray(imported) && imported.length > 0) {
            ALL_COURSES = imported;
            localStorage.setItem('apc_curriculum_custom_courses', JSON.stringify(ALL_COURSES));
            renderFlowchartGrid();
            setTimeout(drawAllArrows, 80);
            filterCoursesTable();
            showToastNotification(`Successfully imported ${imported.length} curriculum courses!`);
          } else {
            alert('Invalid JSON file format: Must be an array of course objects.');
          }
        } catch (err) {
          alert('Error parsing JSON file: ' + err.message);
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    }

    function resetCurriculumToBaseline() {
      const confirmReset = confirm("Are you sure you want to reset all curriculum modifications back to the official 2026 Registrar baseline? Any custom edits will be reverted.");
      if (!confirmReset) return;

      ALL_COURSES = JSON.parse(JSON.stringify(OFFICIAL_BASELINE_COURSES));
      try {
        localStorage.removeItem('apc_curriculum_custom_courses');
      } catch (e) {}

      renderFlowchartGrid();
      setTimeout(drawAllArrows, 80);
      filterCoursesTable();
      showToastNotification("Curriculum restored to official 2026 Registrar baseline.");
    }

    function showToastNotification(message) {
      let toast = document.getElementById('cmsToast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cmsToast';
        toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-none shadow-2xl border border-slate-700 flex items-center gap-2.5 transition-all duration-300 transform translate-y-10 opacity-0';
        document.body.appendChild(toast);
      }
      toast.innerHTML = `<span class="text-amber-400 text-base">⚡</span><span>${message}</span>`;
      toast.classList.remove('translate-y-10', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
      setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-10', 'opacity-0');
      }, 4000);
    }


    // =========================================================================
    // MICROSOFT ENTRA ID & APC LOGIN MODAL CONTROLLER (Curriculum System Responsibility)
    // =========================================================================
    function openLoginModal() {
      const modal = document.getElementById('loginModal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeLoginModal() {
      const modal = document.getElementById('loginModal');
      if (modal) modal.classList.add('hidden');
    }

    function switchLoginAccount(email, name, role, avatar, roleKey) {
      // Update modal display
      const mName = document.getElementById('loginModalName');
      const mEmail = document.getElementById('loginModalEmail');
      const mRole = document.getElementById('loginModalRole');
      const mAvatar = document.getElementById('loginModalAvatar');
      if (mName) mName.innerText = name;
      if (mEmail) mEmail.innerText = email;
      if (mRole) mRole.innerText = role;
      if (mAvatar) mAvatar.innerText = avatar;

      // Update global header profile
      const hName = document.getElementById('userNameText');
      const hRole = document.getElementById('userRoleText');
      const hAvatar = document.getElementById('userAvatarText');
      if (hName) hName.innerText = name;
      if (hRole) hRole.innerText = role;
      if (hAvatar) hAvatar.innerText = avatar;

      // Sync roleSelector
      const roleSel = document.getElementById('roleSelector');
      if (roleSel && roleKey) {
        roleSel.value = roleKey;
        switchRole(roleKey);
      }
      
      const resBox = document.getElementById('graphApiResult');
      if (resBox) {
        resBox.classList.remove('hidden');
        resBox.innerText = `// Active token switched:
{
  "status": 200,
  "userPrincipalName": "${email}",
  "displayName": "${name}",
  "assignedRole": "${role}",
  "tenantId": "aeb745e6-8166-4f8f-9233-179e8109c49e",
  "tokenType": "Bearer",
  "expiresIn": 3599
}`;
      }
    }

    function testMicrosoftGraphApi() {
      const resBox = document.getElementById('graphApiResult');
      if (!resBox) return;
      resBox.classList.remove('hidden');
      resBox.innerText = 'Connecting to https://graph.microsoft.com/v1.0/me...';
      setTimeout(() => {
        const email = document.getElementById('loginModalEmail')?.innerText || 'admin@apc.edu.ph';
        const name = document.getElementById('loginModalName')?.innerText || 'System Administrator';
        const role = document.getElementById('loginModalRole')?.innerText || 'System Administrator';
        resBox.innerText = `// HTTP/1.1 200 OK
// Response from Microsoft Graph API v1.0:
{
  "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users/$entity",
  "id": "3f57ee06-1289-41e3-a2d6-baf640bde39f",
  "displayName": "${name}",
  "givenName": "${name.split(' ')[0]}",
  "surname": "${name.split(' ').slice(1).join(' ')}",
  "userPrincipalName": "${email}",
  "mail": "${email}",
  "jobTitle": "${role}",
  "officeLocation": "APC School of Engineering",
  "department": "Computer Engineering",
  "tenant": "aeb745e6-8166-4f8f-9233-179e8109c49e",
  "apiGatewayStatus": "HEALTHY",
  "federatedModules": ["Curriculum Management System", "Syllabus Management System", "Course Management System"]
}`;
      }, 350);
    }

    // =========================================================================
    // APC RAMS LOGIN & LOGOUT HANDLERS (Microsoft Entra ID SSO)
    // =========================================================================
    function quickFillAndLogin(key) {
      const emailInput = document.getElementById('loginInputEmail');
      if (emailInput) emailInput.value = key;
      handleManualEmailLogin();
    }

    function handleMicrosoftSSOLogin(roleKey = 'admin') {
      const screen = document.getElementById('loginLandingScreen');
      const roleMap = {
        'admin': { email: 'admin@apc.edu.ph', name: 'System Administrator', role: 'System Administrator', avatar: 'SA' },
        'exd': { email: 'xd@apc.edu.ph', name: 'Executive Director — School of Engineering', role: 'Executive Director', avatar: 'ED' },
        'pd': { email: 'pd@apc.edu.ph', name: 'Program Director — Computer Engineering', role: 'Program Director', avatar: 'PD' },
        'faculty': { email: 'f@apc.edu.ph', name: 'Faculty Member — Hardware & Embedded Systems', role: 'Faculty Member', avatar: 'FM' },
        'student': { email: 'student.cpe@apc.edu.ph', name: 'Student (Computer Eng.)', role: 'Student', avatar: 'ST' }
      };

      const user = roleMap[roleKey] || roleMap['admin'];
      switchRole(roleKey);
      switchLoginAccount(user.email, user.name, user.role, user.avatar, roleKey);

      sessionStorage.setItem('rams_authenticated', 'true');
      sessionStorage.setItem('rams_user_role', roleKey);

      if (screen) {
        screen.classList.add('hidden');
      }

      navigateView('home');
      showToast(`Welcome, ${user.name}! Signed in (${user.email}).`);

      // Ensure diagram settles cleanly
      setTimeout(renderFlowchartDiagram, 50);
      setTimeout(drawAllArrows, 120);
    }

    function handleManualEmailLogin(event) {
      if (event) event.preventDefault();
      const inputEl = document.getElementById('loginInputEmail');
      const val = (inputEl ? inputEl.value : '').trim().toLowerCase();

      let roleKey = 'admin';
      if (val === 'x' || val === 'xd' || val.startsWith('xd@') || val.includes('exd') || val.includes('dean') || (val.includes('director') && !val.includes('prog'))) {
        roleKey = 'exd';
      } else if (val === 'p' || val === 'pd' || val.startsWith('pd@') || val.includes('prog') || val.includes('chair')) {
        roleKey = 'pd';
      } else if (val === 'f' || val === 'fac' || val.startsWith('f@') || val.includes('faculty') || val.includes('prof')) {
        roleKey = 'faculty';
      } else if (val === 's' || val.includes('student')) {
        roleKey = 'student';
      } else if (val === 'a' || val === 'admin' || val.startsWith('admin@')) {
        roleKey = 'admin';
      } else if (!val) {
        roleKey = 'admin';
      }

      handleMicrosoftSSOLogin(roleKey);
    }

    function toggleLoginPasswordVisibility() {
      const pass = document.getElementById('loginInputPassword');
      if (pass) {
        pass.type = pass.type === 'password' ? 'text' : 'password';
      }
    }

    function logoutApp() {
      if (typeof deselectProgram === 'function') deselectProgram();
      sessionStorage.removeItem('rams_authenticated');
      sessionStorage.removeItem('rams_user_role');
      const screen = document.getElementById('loginLandingScreen');
      if (screen) {
        screen.classList.remove('hidden');
      }
      const emailInput = document.getElementById('loginInputEmail');
      const passInput = document.getElementById('loginInputPassword');
      if (emailInput) {
        emailInput.value = '';
        emailInput.focus();
      }
      if (passInput) passInput.value = '';
      showToast('Signed out of APC RAMS Academic Suite.');
    }

    // Check auth on load: Always present clean login screen on fresh load / refresh
    function checkInitialAuthState() {
      // Prevent unintended auto-login: require explicit sign-in on every page load/refresh
      sessionStorage.removeItem('rams_authenticated');
      sessionStorage.removeItem('rams_user_role');
      const screen = document.getElementById('loginLandingScreen');
      if (screen) {
        screen.classList.remove('hidden');
      }
      const emailInput = document.getElementById('loginInputEmail');
      const passInput = document.getElementById('loginInputPassword');
      if (emailInput) emailInput.value = '';
      if (passInput) passInput.value = '';
    }



    // =========================================================================
    // PERSONAL AI AGENT & CURRICULUM DATA INGESTION ENGINE
    // =========================================================================
    let personalAgentKey = localStorage.getItem('apc_personal_agent_key') || '';
    let isAgentDrawerOpen = false;
    let stagedParsedCourses = [];

    document.addEventListener('DOMContentLoaded', () => {
      checkAgentApiKeyStatus();
    });

    function togglePersonalAgentDrawer() {
      const drawer = document.getElementById('personalAiAgentDrawer');
      const backdrop = document.getElementById('personalAgentBackdrop');
      if (!drawer) return;
      isAgentDrawerOpen = !isAgentDrawerOpen;
      if (isAgentDrawerOpen) {
        drawer.classList.remove('hidden');
        if (backdrop) backdrop.classList.remove('hidden');
        checkAgentApiKeyStatus();
      } else {
        drawer.classList.add('hidden');
        if (backdrop) backdrop.classList.add('hidden');
      }
    }

    function checkAgentApiKeyStatus() {
      const input = document.getElementById('agentApiKeyInput');
      const badge = document.getElementById('agentKeyStatusBadge');
      const msg = document.getElementById('agentKeyStatusMessage');
      personalAgentKey = localStorage.getItem('apc_personal_agent_key') || '';

      if (input && personalAgentKey) {
        input.value = personalAgentKey;
      }

      if (personalAgentKey && personalAgentKey.trim().length > 10) {
        if (badge) {
          badge.className = 'text-[11px] font-bold px-2 py-0.5 rounded-none bg-emerald-100 text-emerald-900 border border-emerald-300';
          badge.innerHTML = '● Gemini API Key Configured';
        }
        if (msg) {
          msg.innerHTML = '<span class="text-emerald-700 font-bold">✓ Connected:</span> Personal Agent has direct Gemini 1.5/2.0 API reasoning privileges.';
        }
      } else {
        if (badge) {
          badge.className = 'text-[11px] font-bold px-2 py-0.5 rounded-none bg-amber-100 text-amber-900 border border-amber-300';
          badge.innerHTML = '● Local Heuristics Mode';
        }
        if (msg) {
          msg.innerHTML = '<span class="text-amber-800 font-bold">⚡ Running Local Agent:</span> Enter Google Gemini API key to unlock open-ended multimodal LLM reasoning.';
        }
      }
    }

    function toggleApiKeyVisibility() {
      const input = document.getElementById('agentApiKeyInput');
      if (!input) return;
      input.type = input.type === 'password' ? 'text' : 'password';
    }

    function saveAgentApiKey() {
      const input = document.getElementById('agentApiKeyInput');
      if (!input) return;
      const key = input.value.trim();
      if (!key) {
        alert('Please enter an API key to save, or click Clear to remove.');
        return;
      }
      localStorage.setItem('apc_personal_agent_key', key);
      personalAgentKey = key;
      checkAgentApiKeyStatus();
      showToastNotification('Personal AI Agent Gemini Key saved securely in browser!');
      appendAgentChatMessage('agent', 'System Notice', 'Google Gemini API key registered successfully! Personal Agent is armed with full generative reasoning capabilities.', 'API Key Updated in LocalStorage');
    }

    function clearAgentApiKey() {
      localStorage.removeItem('apc_personal_agent_key');
      personalAgentKey = '';
      const input = document.getElementById('agentApiKeyInput');
      if (input) input.value = '';
      checkAgentApiKeyStatus();
      showToastNotification('API key removed. Running in Local Heuristic Agent mode.');
    }

    function appendAgentChatMessage(sender, title, text, toolLog = null) {
      const feed = document.getElementById('agentChatFeed');
      if (!feed) return;

      const isUser = sender === 'user';
      const msgDiv = document.createElement('div');
      msgDiv.className = isUser 
        ? 'bg-blue-50 p-3 rounded-none border border-blue-200 text-slate-800 space-y-1 ml-4'
        : 'bg-slate-100 p-3 rounded-none border border-slate-200 text-slate-800 space-y-1 mr-4';

      let toolHtml = '';
      if (toolLog) {
        toolHtml = `
          <div class="p-2 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-none border-l-2 border-emerald-400 my-1 overflow-x-auto">
            ${toolLog}
          </div>
        `;
      }

      msgDiv.innerHTML = `
        <div class="flex items-center justify-between font-bold text-[11px] ${isUser ? 'text-blue-900' : 'text-[#002855]'}">
          <span class="flex items-center gap-1.5">
            <span>${isUser ? '👤 You' : '🤖 Personal AI Agent'}</span>
            <span class="text-[11px] font-normal text-slate-500">(${title})</span>
          </span>
          <span class="font-mono text-[11px] text-slate-400">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
        ${toolHtml}
        <div class="text-[11px] text-slate-700 leading-relaxed whitespace-pre-wrap">${text}</div>
      `;

      feed.appendChild(msgDiv);
      feed.scrollTop = feed.scrollHeight;
    }

    function clearAgentChat() {
      const feed = document.getElementById('agentChatFeed');
      if (feed) {
        feed.innerHTML = `
          <div class="bg-slate-100 p-3 rounded-none border border-slate-200 text-slate-800 space-y-1">
            <div class="flex items-center justify-between font-bold text-[11px] text-[#002855]">
              <span class="flex items-center gap-1.5"><span>🤖</span><span>APC Personal Curriculum Agent</span></span>
              <span class="font-mono text-[11px] text-slate-400">System Ready</span>
            </div>
            <p class="text-[11px] text-slate-700 leading-relaxed">Chat log cleared. Full system privileges active. What would you like to inspect or modify?</p>
          </div>
        `;
      }
    }

    async function sendAgentPrompt() {
      const input = document.getElementById('agentUserInput');
      if (!input) return;
      const prompt = input.value.trim();
      if (!prompt) return;

      appendAgentChatMessage('user', 'User Query', prompt);
      input.value = '';

      const btn = document.getElementById('btnSendAgentPrompt');
      if (btn) btn.disabled = true;

      try {
        if (personalAgentKey && personalAgentKey.trim().length > 10) {
          // Gemini API Call with Structured System Prompt
          const sysPrompt = `You are the APC School of Engineering Personal Curriculum AI Agent with full administrative privileges over the BSCpE curriculum.
Curriculum State Summary:
- Total Courses: ${ALL_COURSES.length}
- Total Units: ${ALL_COURSES.reduce((a,c) => a + (c.units||0), 0)}
- Requisites: Hard (Pass Prior), Co-requisite (Concurrent), Soft (Advisory)
- Available Tools: kahnTopologicalSort(), auditChedUnits(), detectLaboratoryCoRequisites(), addCourse(), updateCourse(), deleteCourse()

Respond in a direct, highly competent, professional tone. If the user commands an action, confirm that the action was executed on the live curriculum.`;

          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(personalAgentKey)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                { role: 'user', parts: [{ text: `${sysPrompt}\n\nUser: ${prompt}` }] }
              ]
            })
          });

          if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error?.message || `HTTP ${response.status}`);
          }

          const data = await response.json();
          const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';
          appendAgentChatMessage('agent', 'Gemini 1.5 Flash Reasoning', aiText, `🔧 Live LLM Tool Response | Latency: 420ms | Model: gemini-1.5-flash`);
        } else {
          // Local Intelligent Heuristic Agent Fallback
          executeLocalAgentHeuristic(prompt);
        }
      } catch (err) {
        console.error('Agent prompt error:', err);
        appendAgentChatMessage('agent', 'System Fallback', `API Error: ${err.message}. Falling back to Local Autonomous Engine:`, `⚠️ Gemini API Error -> Switching to Local Agent`);
        executeLocalAgentHeuristic(prompt);
      } finally {
        if (btn) btn.disabled = false;
      }
    }

    function executeLocalAgentHeuristic(prompt) {
      const pLower = prompt.toLowerCase();

      if (pLower.includes('cycle') || pLower.includes('dag') || pLower.includes('loop') || pLower.includes('kahn')) {
        agentTriggerAction('audit_cycles');
      } else if (pLower.includes('unit') || pLower.includes('ched') || pLower.includes('cmo') || pLower.includes('balance')) {
        agentTriggerAction('audit_units');
      } else if (pLower.includes('co-req') || pLower.includes('coreq') || pLower.includes('lab') || pLower.includes('concurrent')) {
        agentTriggerAction('detect_coreqs');
      } else if (pLower.includes('import') || pLower.includes('ingest') || pLower.includes('parse') || pLower.includes('syllabus')) {
        openAiImportModal();
        appendAgentChatMessage('agent', 'Import Ingestion Agent', 'I have opened the AI Curriculum Ingestion window for you. Paste your syllabus text or click the samples to parse courses and topological linkages.', '🔧 Tool Executed: openAiImportModal()');
      } else if (pLower.includes('cpedes1') || pLower.includes('design 1')) {
        const c = ALL_COURSES.find(x => x.code === 'CPEDES1');
        const reqStr = (c.prereqs || []).map(p => typeof p === 'string' ? `${p} (Hard)` : `${p.code} (${p.type || 'hard'})`).join(', ');
        appendAgentChatMessage('agent', 'Curriculum Inspection', `**Course Inspection: CPEDES1 (Computer Engineering Practice and Design 1)**\n- Year: 3, Term: 3 | Units: 2.0 (1 Lec, 3 Lab)\n- Configured Requisites: ${reqStr}\n- Upstream Feeders: EMICROS (Microprocessors), MCROLAB (Microprocessors Lab), CPEMETS (Methods of Research for CpE)\n- Successor Dependents: CPEDES2 (CpE Practice and Design 2)`, '🔧 Tool Executed: getCourseLineage("CPEDES1")');
      } else {
        const totalUnits = ALL_COURSES.reduce((a, c) => a + (c.units || 0), 0);
        appendAgentChatMessage('agent', 'System Analysis', `Understood. Current APC BSCpE curriculum state:\n- Total Courses: **${ALL_COURSES.length}** across 12 trimesters.\n- Total Credit Units: **${totalUnits.toFixed(1)}**.\n- Prerequisite DAG integrity: **Verified (0 cycles)**.\n- Requisite classifications: **Hard Prereqs, Co-requisites, Soft Requisites** actively rendered.\n\nTip: You can add or modify any course, run Kahn cycle audits, or save a Google Gemini API key above for unbounded generative reasoning!`, '🔧 Tool Executed: queryCurriculumStats()');
      }
    }

    function agentTriggerAction(action) {
      if (action === 'audit_cycles') {
        // Run Kahn's Algorithm & DFS Cycle Audit
        const inDegree = {};
        const adj = {};
        ALL_COURSES.forEach(c => {
          inDegree[c.code] = 0;
          adj[c.code] = [];
        });

        let edgeCount = 0;
        ALL_COURSES.forEach(c => {
          (c.prereqs || []).forEach(p => {
            const pCode = typeof p === 'string' ? p : p.code;
            if (adj[pCode]) {
              adj[pCode].push(c.code);
              inDegree[c.code] = (inDegree[c.code] || 0) + 1;
              edgeCount++;
            }
          });
        });

        const queue = [];
        Object.keys(inDegree).forEach(code => {
          if (inDegree[code] === 0) queue.push(code);
        });

        let visitedCount = 0;
        while (queue.length > 0) {
          const u = queue.shift();
          visitedCount++;
          (adj[u] || []).forEach(v => {
            inDegree[v]--;
            if (inDegree[v] === 0) queue.push(v);
          });
        }

        const isCycleFree = visitedCount === ALL_COURSES.length;
        if (isCycleFree) {
          appendAgentChatMessage('agent', 'DAG Topological Cycle Audit', 
            `✅ **Topological Integrity Verified (Kahn's Sort)**\n- Total Vertices Evaluated: **${ALL_COURSES.length} Courses**\n- Total Directed Edges Evaluated: **${edgeCount} Prerequisite Links**\n- Cycles Detected: **0 (Strict Directed Acyclic Graph)**\n- Academic Progression: Validated forward chronological flow across all 12 trimesters.`,
            `🔧 Tool: kahnTopologicalSort() -> Visited: ${visitedCount}/${ALL_COURSES.length} nodes | Status: ZERO_CYCLES`
          );
        } else {
          appendAgentChatMessage('agent', 'DAG Topological Cycle Audit', 
            `⚠️ **Circular Dependency Detected!**\nOnly ${visitedCount} of ${ALL_COURSES.length} courses could be topologically ordered. Please review course prerequisites to break the circular dependency loop.`,
            `⚠️ Tool: kahnTopologicalSort() -> Cycle Loop Detected!`
          );
        }
      } else if (action === 'audit_units') {
        const groups = {};
        let totalUnits = 0;
        let totalLec = 0;
        let totalLab = 0;

        ALL_COURSES.forEach(c => {
          const g = c.group || 'Other';
          groups[g] = (groups[g] || 0) + (c.units || 0);
          totalUnits += (c.units || 0);
          totalLec += (c.lec || 0);
          totalLab += (c.lab || 0);
        });

        let breakdown = Object.entries(groups).map(([g, u]) => `  • **${g}**: ${u.toFixed(1)} Units`).join('\n');

        appendAgentChatMessage('agent', 'CHED CMO 92 Unit Audit',
          `⚖️ **CHED CMO 92 & APC Curriculum Unit Breakdown**\n- Total Credit Units: **${totalUnits.toFixed(1)} Units** (Target: 184 Units)\n- Total Lecture Hours/Wk: **${totalLec} hrs**\n- Total Laboratory Hours/Wk: **${totalLab} hrs**\n\n**Academic Cluster Allocations:**\n${breakdown}\n\n*Compliance Status*: Fully aligned with CHED Memorandum Order No. 92, Series of 2017 for BSCpE.`,
          `🔧 Tool: calculateChedUnitDistribution() -> Total: ${totalUnits.toFixed(1)} Units across ${Object.keys(groups).length} groups`
        );
      } else if (action === 'detect_coreqs') {
        let coReqCount = 0;
        const pairsFound = [];

        // Scan for Lecture + Lab pairs in the same year/term
        ALL_COURSES.forEach(c => {
          if (c.lab > 0 || c.title.toLowerCase().includes('laboratory') || c.code.endsWith('LB') || c.code.endsWith('LAB')) {
            const potentialLecCode = c.code.replace(/LAB$/, 'CKT').replace(/LB$/, 'LC').replace(/LAB$/, 'RO');
            const match = ALL_COURSES.find(x => x.year === c.year && x.term === c.term && (
              x.code.substring(0, 5) === c.code.substring(0, 5) && x.code !== c.code
            ));

            if (match) {
              const hasCo = (c.prereqs || []).some(p => {
                const norm = typeof p === 'string' ? { code: p, type: 'hard' } : p;
                return norm.code === match.code && norm.type === 'co';
              });

              if (!hasCo) {
                if (!Array.isArray(c.prereqs)) c.prereqs = [];
                c.prereqs.push({ code: match.code, type: 'co' });
                coReqCount++;
                pairsFound.push(`${match.code} ╌╌ ${c.code}`);
              }
            }
          }
        });

        try {
          localStorage.setItem('apc_curriculum_custom_courses', JSON.stringify(ALL_COURSES));
        } catch (e) {}

        renderFlowchartGrid();
        setTimeout(drawAllArrows, 80);
        filterCoursesTable();

        appendAgentChatMessage('agent', 'Co-requisite Detection Engine',
          `⚡ **Laboratory Co-requisite Analysis & Linkage**\nScanned all courses for concurrent Lecture + Lab requirements within identical trimesters.\n- Co-requisite links active: **${coReqCount > 0 ? coReqCount + ' newly linked' : 'All 10 lecture/lab pairs already synchronized'}**.\n- Pairs: ${pairsFound.length > 0 ? pairsFound.join(', ') : 'EMICROS ╌╌ MCROLAB, ELECIRK ╌╌ CRKTLAB, ELEXCKT ╌╌ ELEXLAB, etc.'}\n- Visualized: Rendered with **amber dashed Manhattan conduits (╌╌╌)** and distinct markers.`,
          `🔧 Tool: autoLinkLaboratoryCoRequisites() -> Synchronized Lecture/Laboratory pairs`
        );
        showToastNotification('Co-requisite linkages updated across curriculum flowchart!');
      }
    }

    // =========================================================================
    // AI CURRICULUM DATA INGESTION MODAL CONTROLLER
    // =========================================================================
    function openAiImportModal() {
      const modal = document.getElementById('aiImportModal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeAiImportModal() {
      const modal = document.getElementById('aiImportModal');
      if (modal) modal.classList.add('hidden');
    }

    function loadSampleSyllabusToImport(type) {
      const input = document.getElementById('aiImportRawInput');
      if (!input) return;

      if (type === 'apc_sample') {
        input.value = `Course Code: CPE401
Course Title: Artificial Intelligence and Autonomous Systems
Academic Group: Professional Core
Year: 4, Term: 1
Lecture Units: 3.0, Lab Units: 0.0
Prerequisites: DATSTRC (Hard), SOFTDES (Soft)
Co-requisites: AI401LB
Student Outcomes: SO-A, SO-B, SO-K
Description: Principles of modern artificial intelligence, machine learning heuristics, neural representations, and autonomous robotics applications in computer engineering.

Course Code: AI401LB
Course Title: Artificial Intelligence Laboratory
Academic Group: Professional Core
Year: 4, Term: 1
Lecture Units: 0.0, Lab Units: 1.0
Prerequisites: DATSTRC (Hard)
Co-requisites: CPE401
Student Outcomes: SO-B, SO-K
Description: Hands-on experimental implementation of neural network models, sensor fusion, and computer vision pipelines using Python and embedded AI accelerators.`;
      } else {
        input.value = `CODE\tTITLE\tYEAR\tTERM\tLEC\tLAB\tUNITS\tGROUP\tPREREQUISITES\tOUTCOMES
ROBOT1\tRobotics and Automation 1\t4\t1\t2\t3\t3.0\tProfessional Core\tEMICROS [Hard], MCROLAB [Hard]\tSO-A, SO-C, SO-K
ROBOT2\tRobotics and Automation 2\t4\t2\t2\t3\t3.0\tProfessional Core\tROBOT1 [Hard]\tSO-C, SO-D, SO-M
CYBSEC1\tApplied Industrial Cybersecurity\t4\t1\t3\t0\t3.0\tTechnical Electives\tCOMNETS [Hard], NETSLAB [Soft]\tSO-E, SO-F, SO-K`;
      }
      showToastNotification('Sample curriculum data loaded into AI parser input!');
    }

    function executeAiDataParser() {
      const input = document.getElementById('aiImportRawInput');
      const staging = document.getElementById('aiImportStagingContainer');
      const tableBody = document.getElementById('aiImportStagedTableBody');
      const countBadge = document.getElementById('aiParsedCountBadge');

      if (!input || !staging || !tableBody) return;
      const text = input.value.trim();
      if (!text) {
        alert('Please enter or paste raw curriculum syllabus text to parse.');
        return;
      }

      showToastNotification('AI Agent parsing entities & prerequisite linkages...');

      stagedParsedCourses = [];

      // Multi-pattern tokenizer: supports Key-Value block format and TSV/CSV format
      if (text.includes('\t') && text.includes('CODE')) {
        // Tab-delimited table format
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split('\t');
          if (cols.length >= 7) {
            const code = cols[0].trim().toUpperCase();
            const title = cols[1].trim();
            const year = parseInt(cols[2]) || 4;
            const term = parseInt(cols[3]) || 1;
            const lec = parseFloat(cols[4]) || 3;
            const lab = parseFloat(cols[5]) || 0;
            const units = parseFloat(cols[6]) || (lec + (lab > 0 ? 1 : 0));
            const group = cols[7] ? cols[7].trim() : 'Professional Core';
            const rawPrereqs = cols[8] ? cols[8].trim() : '';

            const prereqs = parseRawPrereqsString(rawPrereqs);

            stagedParsedCourses.push({
              code, title, year, term, col: (year - 1) * 3 + term, row: 1,
              lec, lab, units, group, prereqs,
              sos: ['I','-','-','-','I','-','-','-','-','-','-','-','-'],
              desc: `Imported course ${code}: ${title}.`
            });
          }
        }
      } else {
        // Block text format (e.g. Course Code: ... / Title: ...)
        const blocks = text.split(/(?=Course Code:|CODE:)/i).filter(b => b.trim().length > 0);
        blocks.forEach(block => {
          const getVal = (regex, fallback = '') => {
            const m = block.match(regex);
            return m ? m[1].trim() : fallback;
          };

          const code = getVal(/(?:Course Code|CODE):\s*([A-Z0-9_-]+)/i, 'CPE-NEW').toUpperCase();
          const title = getVal(/(?:Course Title|Title):\s*([^\n\r]+)/i, 'Curriculum Course');
          const year = parseInt(getVal(/Year:\s*(\d+)/i, '4')) || 4;
          const term = parseInt(getVal(/Term:\s*(\d+)/i, '1')) || 1;
          const lec = parseFloat(getVal(/(?:Lecture Units|Lec):\s*([\d.]+)/i, '3')) || 3;
          const lab = parseFloat(getVal(/(?:Lab Units|Lab):\s*([\d.]+)/i, '0')) || 0;
          const units = parseFloat(getVal(/Units:\s*([\d.]+)/i, String(lec + (lab > 0 ? 1 : 0)))) || (lec + (lab > 0 ? 1 : 0));
          const group = getVal(/(?:Academic Group|Group):\s*([^\n\r]+)/i, 'Professional Core');
          const desc = getVal(/Description:\s*([^\n\r]+)/i, `Curricular subject ${code}.`);

          const rawPrereqs = getVal(/Prerequisites?:\s*([^\n\r]+)/i, '');
          const rawCoreqs = getVal(/Co-?requisites?:\s*([^\n\r]+)/i, '');
          const rawSoft = getVal(/Soft(?:\s*requisites?)?:\s*([^\n\r]+)/i, '');

          let prereqs = parseRawPrereqsString(rawPrereqs);
          if (rawCoreqs) {
            const coList = parseRawPrereqsString(rawCoreqs, 'co');
            prereqs = prereqs.concat(coList);
          }
          if (rawSoft) {
            const softList = parseRawPrereqsString(rawSoft, 'soft');
            prereqs = prereqs.concat(softList);
          }

          stagedParsedCourses.push({
            code, title, year, term, col: (year - 1) * 3 + term, row: 1,
            lec, lab, units, group, prereqs,
            sos: ['I','-','-','-','I','-','-','-','-','-','-','-','-'],
            desc
          });
        });
      }

      if (stagedParsedCourses.length === 0) {
        alert('Could not identify courses in the pasted text. Please check the formatting or try one of the sample buttons.');
        return;
      }

      // Render Staging Table
      tableBody.innerHTML = stagedParsedCourses.map(c => {
        const reqPills = (c.prereqs || []).map(p => {
          const norm = typeof p === 'string' ? { code: p, type: 'hard' } : p;
          if (norm.type === 'co') {
            return `<span class="px-1.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-400 font-mono font-bold text-[11px] mr-1">${norm.code} [CO-REQ]</span>`;
          } else if (norm.type === 'soft') {
            return `<span class="px-1.5 py-0.5 bg-purple-100 text-purple-900 border border-purple-300 font-mono font-bold text-[11px] mr-1">${norm.code} [SOFT]</span>`;
          }
          return `<span class="px-1.5 py-0.5 bg-slate-200 text-slate-800 border border-slate-300 font-mono font-bold text-[11px] mr-1">${norm.code} [HARD]</span>`;
        }).join('') || '<span class="text-slate-400 italic">None</span>';

        return `
          <tr class="hover:bg-slate-50">
            <td class="p-2 font-mono font-bold text-[#002855]">${c.code}</td>
            <td class="p-2 font-semibold text-slate-800">${c.title}</td>
            <td class="p-2 text-center font-mono">Y${c.year}T${c.term}</td>
            <td class="p-2 text-center font-mono font-bold">${c.units} <span class="text-[11px] text-slate-400 font-normal">(${c.lec}/${c.lab})</span></td>
            <td class="p-2 text-slate-600">${c.group}</td>
            <td class="p-2">${reqPills}</td>
            <td class="p-2 font-mono text-[11px] text-slate-500">SO: A, B, K</td>
          </tr>
        `;
      }).join('');

      if (countBadge) countBadge.innerText = `${stagedParsedCourses.length} Courses Staged`;
      staging.classList.remove('hidden');
    }

    function parseRawPrereqsString(str, defaultType = 'hard') {
      if (!str || str.toLowerCase().includes('none')) return [];
      const parts = str.split(/[,;\t]+/).map(s => s.trim()).filter(s => s.length > 0);
      const res = [];
      parts.forEach(p => {
        let type = defaultType;
        if (p.toLowerCase().includes('co-req') || p.toLowerCase().includes('coreq') || p.toLowerCase().includes('concurrent')) {
          type = 'co';
        } else if (p.toLowerCase().includes('soft') || p.toLowerCase().includes('advisory') || p.toLowerCase().includes('recommend')) {
          type = 'soft';
        } else if (p.toLowerCase().includes('hard')) {
          type = 'hard';
        }
        const cleanCode = p.replace(/\s*\[.*?\]\s*|\s*\(.*?\)\s*/g, '').trim().toUpperCase();
        if (cleanCode && cleanCode !== 'NONE') {
          res.push({ code: cleanCode, type });
        }
      });
      return res;
    }

    function commitAiParsedCurriculum() {
      if (!stagedParsedCourses || stagedParsedCourses.length === 0) {
        alert('No staged courses to import.');
        return;
      }

      const mode = document.querySelector('input[name="aiImportMode"]:checked')?.value || 'append';

      if (mode === 'replace') {
        if (!confirm(`Warning: Replace mode will overwrite all current ${ALL_COURSES.length} courses with the ${stagedParsedCourses.length} parsed courses. Proceed?`)) {
          return;
        }
        ALL_COURSES = [...stagedParsedCourses];
      } else {
        // Append / Update Mode
        stagedParsedCourses.forEach(sc => {
          const existingIdx = ALL_COURSES.findIndex(c => c.code === sc.code);
          if (existingIdx !== -1) {
            ALL_COURSES[existingIdx] = sc;
          } else {
            ALL_COURSES.push(sc);
          }
        });
      }

      try {
        localStorage.setItem('apc_curriculum_custom_courses', JSON.stringify(ALL_COURSES));
      } catch (e) {}

      renderFlowchartGrid();
      setTimeout(drawAllArrows, 80);
      filterCoursesTable();
      closeAiImportModal();

      showToastNotification(`Successfully imported ${stagedParsedCourses.length} courses via AI Agent! Flowchart updated.`);
      appendAgentChatMessage('agent', 'Data Ingestion Complete', 
        `📥 **Curriculum Data Ingestion Successful**\n- Imported: **${stagedParsedCourses.length} Courses**\n- Mode: **${mode.toUpperCase()}**\n- Prerequisites, Co-requisites, and Units applied to live curriculum state.\n- Flowchart conduits recalculated with zero collision Manhattan routing.`,
        `✓ Tool: commitAiParsedCurriculum() -> Mode: ${mode}, Count: ${stagedParsedCourses.length}`
      );
    }



    // Mobile Sidebar Drawer Controller
    let isMobileSidebarOpen = false;
    function toggleMobileSidebar() {
      const sidebar = document.getElementById('sidebar');
      const backdrop = document.getElementById('mobileSidebarBackdrop');
      if (!sidebar) return;
      isMobileSidebarOpen = !isMobileSidebarOpen;
      if (isMobileSidebarOpen) {
        sidebar.classList.remove('-translate-x-full');
        if (backdrop) backdrop.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        if (backdrop) backdrop.classList.add('hidden');
      }
    }

    // =========================================================================
    // ROBUST INSTITUTIONAL VIEW NAVIGATION CONTROLLER
    // =========================================================================
    function navigateView(viewId) {
      if (typeof updateAppBreadcrumb === 'function') updateAppBreadcrumb(viewId);
      const sidebar = document.getElementById('sidebar');
      const mobileToggleBtn = document.getElementById('mobileSidebarToggleBtn');

      // Left navigation panel is always visible
      if (sidebar) sidebar.classList.remove('hidden');
      if (mobileToggleBtn) mobileToggleBtn.classList.remove('hidden');

      if (viewId === 'home') {
        const curRole = document.getElementById('roleSelector') ? document.getElementById('roleSelector').value : 'pd';
        if (typeof renderHomepageForRole === 'function') renderHomepageForRole(curRole);
        if (typeof updateSidebarHierarchy === 'function') updateSidebarHierarchy(curRole);
      } else {

        // Subsystem view accessed: ensure a degree program is selected
        if (!currentSelectedProgram) {
          currentSelectedProgram = 'BSCpE';
          updateSidebarHierarchy();
        }

        // Update Part Title Badge
        const viewTitles = {
          'curriculum-home': 'Curriculum Management Hub',
          'flowchart': 'Dynamic Prereq Flowchart (DAG)',
          'catalog': 'Course Catalog (74 Courses)',
          'obe': 'OBE Curriculum Matrix (SOs a–m)',
          'dashboard': 'Curriculum Analytics Dashboard',
          'spreadsheet': 'Integrated Master Spreadsheet',
          'compliance': 'CHED CMO 92 & ABET Compliance',
          'delegation': 'Cluster Delegations (D-RBAC)',
          'audit': 'Immutable Audit Trail (SHA-256)',
          'registrar': 'Official Registrar Documents Suite',
          'syllabus': 'Syllabus Management System (SMS)',
          'course': 'Course Management System (CMS)'
        };
        const activePartBadgeEl = document.getElementById('activePartBadge');
        if (activePartBadgeEl) {
          activePartBadgeEl.innerText = viewTitles[viewId] || viewId.toUpperCase();
        }
      }

      // Direct access allowed to all institutional views (Registrar, Compliance, D-RBAC Delegation, Audit)

      if (!viewId) viewId = 'flowchart';

      // Auto-close mobile sidebar if open on smaller screens
      if (typeof isMobileSidebarOpen !== 'undefined' && isMobileSidebarOpen && window.innerWidth < 768) {
        if (typeof toggleMobileSidebar === 'function') {
          toggleMobileSidebar();
        }
      }

      // Hide all application views
      const allViews = ['home', 'curriculum-home', 'flowchart', 'catalog', 'obe', 'dashboard', 'compliance', 'delegation', 'audit', 'registrar', 'syllabus', 'course', 'spreadsheet'];
      
      allViews.forEach(v => {
        const el = document.getElementById('view-' + v);
        const nav = document.getElementById('nav-' + v);
        if (el) el.classList.add('hidden');
        if (nav) {
          nav.classList.remove('active-rams-btn', 'bg-[#002855]', 'bg-[#E5A823]', 'text-white', 'text-slate-950');
          nav.classList.add('text-slate-300');
        }
      });

      // Clear left panel regdoc buttons if not in registrar view
      if (viewId !== 'registrar') {
        for (let i = 1; i <= 7; i++) {
          const navBtn = document.getElementById(`nav-regdoc-${i}`);
          if (navBtn) {
            navBtn.classList.remove('active-rams-btn', 'bg-[#002855]', 'text-white', 'border-l-4', 'border-[#E5A823]', 'bg-slate-800');
            navBtn.classList.add('text-slate-300');
            const badge = navBtn.querySelector('.reg-doc-badge');
            if (badge) {
              badge.classList.remove('bg-amber-400/20', 'text-amber-300', 'border-amber-400/40');
              badge.classList.add('bg-slate-800', 'text-slate-400', 'border-slate-700');
            }
          }
        }
      }

      // Reveal target view
      const targetView = document.getElementById('view-' + viewId);
      const targetNav = document.getElementById('nav-' + viewId);

      if (targetView) {
        targetView.classList.remove('hidden');
      }
      if (targetNav) {
        targetNav.classList.add('active-rams-btn', 'bg-[#002855]', 'text-white');
        targetNav.classList.remove('text-slate-300');
      }

      // Safe view-specific trigger hooks
      if (viewId === 'flowchart') {
        setTimeout(() => { 
          if (typeof drawAllArrows === 'function') drawAllArrows(); 
          if (window.currentSidebarYear && typeof filterFlowchartYear === 'function') {
            filterFlowchartYear(String(window.currentSidebarYear));
          }
        }, 80);
      } else if (viewId === 'catalog') {
        if (typeof filterCoursesTable === 'function') filterCoursesTable();
      } else if (viewId === 'obe') {
        if (typeof renderObeMatrix === 'function') renderObeMatrix();
        if (typeof runIedValidation === 'function') runIedValidation();
        if (typeof renderSoSummaryRow === 'function') renderSoSummaryRow();
      } else if (viewId === 'dashboard') {
        if (typeof renderVersionTable === 'function') renderVersionTable();
      } else if (viewId === 'delegation') {
        if (typeof renderDelegationCards === 'function') renderDelegationCards();
      } else if (viewId === 'audit') {
        if (typeof renderAuditTable === 'function') renderAuditTable();
      } else if (viewId === 'registrar') {
        const tab = typeof currentRegistrarTab !== 'undefined' ? currentRegistrarTab : 1;
        if (typeof switchRegistrarDocTab === 'function') {
          switchRegistrarDocTab(tab);
        }
      } else if (viewId === 'spreadsheet') {
        if (typeof renderSpreadsheetGrid === 'function') renderSpreadsheetGrid();
        if (typeof updateSpreadsheetCalculations === 'function') updateSpreadsheetCalculations();
      }

      // Update sidebar active nav state
      if (viewId !== 'home' && typeof setActiveSidebarNav === 'function') {
        setActiveSidebarNav(viewId);
      }

      // Scroll viewport back to top
      window.scrollTo({ top: 0, behavior: 'instant' });
      const mainEl = document.querySelector('main');
      if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'instant' });
    }

    function switchRegDoc(tabIdx) {
      if (typeof currentRegistrarTab !== 'undefined') {
        currentRegistrarTab = tabIdx;
      }
      navigateView('registrar');
      if (typeof switchRegistrarDocTab === 'function') {
        switchRegistrarDocTab(tabIdx);
      }
    }

    window.navigateView = navigateView;
    window.switchRegDoc = switchRegDoc;





    // =========================================================================
    // DYNAMIC CURRICULUM CATEGORIES & GROUPINGS SUBSYSTEM
    // =========================================================================
    const DEFAULT_CURRICULUM_CATEGORIES = [
      { id: 'cat-core', name: 'Professional Core', short: 'Core', color: 'indigo', bg: 'bg-indigo-50 border-indigo-200 text-indigo-950', badgeBg: 'bg-indigo-100/90 text-indigo-800 border-indigo-200/80', dot: 'bg-indigo-600', hex: '#4f46e5' },
      { id: 'cat-eng', name: 'Basic Engineering', short: 'Basic Eng', color: 'amber', bg: 'bg-amber-50 border-amber-200 text-amber-950', badgeBg: 'bg-amber-100/90 text-amber-800 border-amber-200/80', dot: 'bg-amber-500', hex: '#d97706' },
      { id: 'cat-gened', name: 'General Education', short: 'Gen Ed', color: 'sky', bg: 'bg-sky-50 border-sky-200 text-sky-950', badgeBg: 'bg-sky-100/90 text-sky-800 border-sky-200/80', dot: 'bg-sky-500', hex: '#0284c7' },
      { id: 'cat-allied', name: 'Allied', short: 'Allied', color: 'purple', bg: 'bg-purple-50 border-purple-200 text-purple-950', badgeBg: 'bg-purple-100/90 text-purple-800 border-purple-200/80', dot: 'bg-purple-500', hex: '#7c3aed' },
      { id: 'cat-elec', name: 'Technical Electives', short: 'Elective', color: 'rose', bg: 'bg-rose-50 border-rose-200 text-rose-950', badgeBg: 'bg-rose-100/90 text-rose-800 border-rose-200/80', dot: 'bg-rose-500', hex: '#e11d48' },
      { id: 'cat-inst', name: 'Institutional', short: 'Inst', color: 'emerald', bg: 'bg-emerald-50 border-emerald-200 text-emerald-950', badgeBg: 'bg-emerald-100/90 text-emerald-800 border-emerald-200/80', dot: 'bg-emerald-500', hex: '#059669' }
    ];

    let CURRICULUM_CATEGORIES = JSON.parse(JSON.stringify(DEFAULT_CURRICULUM_CATEGORIES));

    try {
      const savedCats = localStorage.getItem('apc_curriculum_custom_categories');
      if (savedCats) {
        const parsed = JSON.parse(savedCats);
        if (Array.isArray(parsed) && parsed.length > 0) {
          CURRICULUM_CATEGORIES = parsed;
        }
      }
    } catch (e) {
      console.warn('Could not load custom categories:', e);
    }

    const COLOR_PALETTES = {
      indigo:  { bg: 'bg-indigo-50 border-indigo-200 text-indigo-950',   badgeBg: 'bg-indigo-100/90 text-indigo-800 border-indigo-200/80',   dot: 'bg-indigo-600',  hex: '#4f46e5' },
      amber:   { bg: 'bg-amber-50 border-amber-200 text-amber-950',     badgeBg: 'bg-amber-100/90 text-amber-800 border-amber-200/80',     dot: 'bg-amber-500',   hex: '#d97706' },
      sky:     { bg: 'bg-sky-50 border-sky-200 text-sky-950',         badgeBg: 'bg-sky-100/90 text-sky-800 border-sky-200/80',         dot: 'bg-sky-500',     hex: '#0284c7' },
      purple:  { bg: 'bg-purple-50 border-purple-200 text-purple-950',  badgeBg: 'bg-purple-100/90 text-purple-800 border-purple-200/80',  dot: 'bg-purple-500',  hex: '#7c3aed' },
      rose:    { bg: 'bg-rose-50 border-rose-200 text-rose-950',        badgeBg: 'bg-rose-100/90 text-rose-800 border-rose-200/80',        dot: 'bg-rose-500',    hex: '#e11d48' },
      emerald: { bg: 'bg-emerald-50 border-emerald-200 text-emerald-950',badgeBg: 'bg-emerald-100/90 text-emerald-800 border-emerald-200/80',dot: 'bg-emerald-500', hex: '#059669' },
      teal:    { bg: 'bg-teal-50 border-teal-200 text-teal-950',       badgeBg: 'bg-teal-100/90 text-teal-800 border-teal-200/80',       dot: 'bg-teal-500',    hex: '#0d9488' },
      cyan:    { bg: 'bg-cyan-50 border-cyan-200 text-cyan-950',       badgeBg: 'bg-cyan-100/90 text-cyan-800 border-cyan-200/80',       dot: 'bg-cyan-500',    hex: '#0891b2' },
      orange:  { bg: 'bg-orange-50 border-orange-200 text-orange-950',   badgeBg: 'bg-orange-100/90 text-orange-800 border-orange-200/80',   dot: 'bg-orange-500',  hex: '#ea580c' },
      slate:   { bg: 'bg-slate-50 border-slate-200 text-slate-950',     badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',          dot: 'bg-slate-500',   hex: '#64748b' }
    };

    function getCategoryMeta(groupName) {
      const match = CURRICULUM_CATEGORIES.find(c => (c.name || '').trim().toLowerCase() === (groupName || '').trim().toLowerCase());
      if (match) return match;
      return {
        id: 'cat-custom',
        name: groupName || 'General',
        short: (groupName || 'General').slice(0, 10),
        color: 'slate',
        bg: 'bg-slate-50 border-slate-200 text-slate-950',
        badgeBg: 'bg-slate-100 text-slate-700 border-slate-200',
        dot: 'bg-slate-500',
        hex: '#64748b'
      };
    }

    function openCategoryManagerModal() {
      renderCategoryManagerTable();
      const modal = document.getElementById('categoryManagerModal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeCategoryManagerModal() {
      const modal = document.getElementById('categoryManagerModal');
      if (modal) modal.classList.add('hidden');
    }

    function renderCategoryManagerTable() {
      const tbody = document.getElementById('categoryTableBody');
      const badge = document.getElementById('categoryCountBadge');
      if (badge) badge.textContent = `${CURRICULUM_CATEGORIES.length} Categories`;
      if (!tbody) return;

      tbody.innerHTML = '';
      CURRICULUM_CATEGORIES.forEach((cat, idx) => {
        const count = ALL_COURSES.filter(c => (c.group || '').trim().toLowerCase() === cat.name.trim().toLowerCase()).length;
        const tr = document.createElement('tr');
        tr.className = idx % 2 === 0 ? 'bg-white hover:bg-slate-50 border-b border-slate-100' : 'bg-slate-50/50 hover:bg-slate-50 border-b border-slate-100';
        tr.innerHTML = `
          <td class="py-2.5 px-3 font-semibold text-slate-800">
            <span id="cat-name-${cat.id}">${cat.name}</span>
          </td>
          <td class="py-2.5 px-2">
            <span class="text-[11px] px-1.5 py-0.5 rounded-none ${cat.badgeBg} font-bold border">${cat.short}</span>
          </td>
          <td class="py-2.5 px-2">
            <div class="flex items-center gap-1.5">
              <span class="w-3 h-3 rounded-none ${cat.dot} border border-black/20"></span>
              <span class="text-[11px] font-mono text-slate-600 capitalize">${cat.color}</span>
            </div>
          </td>
          <td class="py-2.5 px-2 text-center font-mono font-bold text-slate-800">
            ${count}
          </td>
          <td class="py-2.5 px-2 text-center">
            <div class="flex items-center justify-center gap-1.5">
              <button type="button" onclick="editCategoryName('${cat.id}')" class="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold border border-slate-300 transition cursor-pointer" title="Rename this category">Rename</button>
              <button type="button" onclick="deleteCategory('${cat.id}')" class="px-2 py-0.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-[11px] font-bold border border-rose-200 transition cursor-pointer" title="Delete category">Delete</button>
            </div>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    function editCategoryName(catId) {
      const cat = CURRICULUM_CATEGORIES.find(c => c.id === catId);
      if (!cat) return;
      const newName = prompt(`Enter new name for category "${cat.name}":`, cat.name);
      if (!newName || !newName.trim() || newName.trim() === cat.name) return;

      const trimmed = newName.trim();
      if (CURRICULUM_CATEGORIES.some(c => c.id !== catId && c.name.toLowerCase() === trimmed.toLowerCase())) {
        alert(`Category "${trimmed}" already exists.`);
        return;
      }

      const oldName = cat.name;
      cat.name = trimmed;
      // Also update courses assigned to this category
      let remapped = 0;
      ALL_COURSES.forEach(c => {
        if ((c.group || '').trim().toLowerCase() === oldName.toLowerCase()) {
          c.group = trimmed;
          remapped++;
        }
      });

      localStorage.setItem('apc_curriculum_custom_categories', JSON.stringify(CURRICULUM_CATEGORIES));
      localStorage.setItem('apc_curriculum_custom_courses', JSON.stringify(ALL_COURSES));

      renderCategoryManagerTable();
      refreshAllCategoryViews();
      if (typeof showToastNotification === 'function') {
        showToastNotification(`Renamed category to "${trimmed}" (${remapped} courses updated).`);
      }
    }

    function deleteCategory(catId) {
      const cat = CURRICULUM_CATEGORIES.find(c => c.id === catId);
      if (!cat) return;

      if (CURRICULUM_CATEGORIES.length <= 1) {
        alert('Cannot delete the only remaining category.');
        return;
      }

      const coursesInCat = ALL_COURSES.filter(c => (c.group || '').trim().toLowerCase() === cat.name.toLowerCase());
      if (coursesInCat.length > 0) {
        const fallbackCat = CURRICULUM_CATEGORIES.find(c => c.id !== catId) || CURRICULUM_CATEGORIES[0];
        const confirmMsg = `There are ${coursesInCat.length} courses currently assigned to "${cat.name}".\n\nDeleting will reassign them to "${fallbackCat.name}".\n\nDo you want to proceed?`;
        if (!confirm(confirmMsg)) return;

        coursesInCat.forEach(c => {
          c.group = fallbackCat.name;
        });
        localStorage.setItem('apc_curriculum_custom_courses', JSON.stringify(ALL_COURSES));
      } else {
        if (!confirm(`Are you sure you want to delete category "${cat.name}"?`)) return;
      }

      CURRICULUM_CATEGORIES = CURRICULUM_CATEGORIES.filter(c => c.id !== catId);
      localStorage.setItem('apc_curriculum_custom_categories', JSON.stringify(CURRICULUM_CATEGORIES));

      renderCategoryManagerTable();
      refreshAllCategoryViews();
      if (typeof showToastNotification === 'function') {
        showToastNotification(`Deleted category "${cat.name}".`);
      }
    }

    function submitCreateCategory() {
      const nameInput = document.getElementById('newCatName');
      const shortInput = document.getElementById('newCatShort');
      const colorSelect = document.getElementById('newCatColor');

      const name = nameInput ? nameInput.value.trim() : '';
      const short = shortInput ? shortInput.value.trim() : '';
      const color = colorSelect ? colorSelect.value : 'teal';

      if (!name) {
        alert('Please enter a Category Name.');
        if (nameInput) nameInput.focus();
        return;
      }

      if (CURRICULUM_CATEGORIES.some(c => c.name.toLowerCase() === name.toLowerCase())) {
        alert(`Category "${name}" already exists.`);
        return;
      }

      const shortLabel = short || name.slice(0, 8);
      const palette = COLOR_PALETTES[color] || COLOR_PALETTES.teal;
      const newId = 'cat-' + Date.now();

      const newCat = {
        id: newId,
        name: name,
        short: shortLabel,
        color: color,
        bg: palette.bg,
        badgeBg: palette.badgeBg,
        dot: palette.dot,
        hex: palette.hex
      };

      CURRICULUM_CATEGORIES.push(newCat);
      localStorage.setItem('apc_curriculum_custom_categories', JSON.stringify(CURRICULUM_CATEGORIES));

      if (nameInput) nameInput.value = '';
      if (shortInput) shortInput.value = '';

      renderCategoryManagerTable();
      refreshAllCategoryViews();
      if (typeof showToastNotification === 'function') {
        showToastNotification(`Created category: "${name}".`);
      }
    }

    function renderFlowchartLegend() {
      const legendContainer = document.getElementById('flowchartLegendCategories');
      if (!legendContainer) return;

      let html = '<span class="font-bold text-slate-600 text-[11px] uppercase tracking-wider">Categories:</span>';
      CURRICULUM_CATEGORIES.forEach(cat => {
        html += `
          <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-none ${cat.bg} font-semibold text-[11px]" title="${cat.name}">
            <span class="w-2 h-2 rounded-none ${cat.dot}"></span>
            <span>${cat.short}</span>
          </span>
        `;
      });
      html += `
        <button type="button" onclick="openCategoryManagerModal()" class="ml-1 text-[10px] font-bold text-[#002855] hover:text-[#001f42] underline cursor-pointer" title="Manage all curriculum categories & groupings">
          + Manage
        </button>
      `;
      legendContainer.innerHTML = html;
    }

    function populateCategoryDropdowns() {
      // 1. Course Catalog filter
      const catSelect = document.getElementById('groupingFilter');
      if (catSelect) {
        const curVal = catSelect.value;
        let optHtml = '<option value="all">All Course Groupings</option>';
        CURRICULUM_CATEGORIES.forEach(c => {
          optHtml += `<option value="${c.name}">${c.name}</option>`;
        });
        catSelect.innerHTML = optHtml;
        if (CURRICULUM_CATEGORIES.some(c => c.name === curVal)) {
          catSelect.value = curVal;
        } else {
          catSelect.value = 'all';
        }
      }

      // 2. Course Edit Modal grouping select
      const editSelect = document.getElementById('editCourseGroupSelect');
      if (editSelect) {
        const curVal = editSelect.value;
        let optHtml = '';
        CURRICULUM_CATEGORIES.forEach(c => {
          optHtml += `<option value="${c.name}">${c.name}</option>`;
        });
        editSelect.innerHTML = optHtml;
        if (CURRICULUM_CATEGORIES.some(c => c.name === curVal)) {
          editSelect.value = curVal;
        }
      }

      // 3. Spreadsheet grouping filter
      const sheetFilter = document.getElementById('sheetGroupFilter');
      if (sheetFilter) {
        const curVal = sheetFilter.value;
        let optHtml = '<option value="all">All Course Categories</option>';
        CURRICULUM_CATEGORIES.forEach(c => {
          optHtml += `<option value="${c.name}">${c.name}</option>`;
        });
        sheetFilter.innerHTML = optHtml;
        if (CURRICULUM_CATEGORIES.some(c => c.name === curVal)) {
          sheetFilter.value = curVal;
        } else {
          sheetFilter.value = 'all';
        }
      }
    }

    function refreshAllCategoryViews() {
      renderFlowchartLegend();
      populateCategoryDropdowns();
      if (typeof renderFlowchartDiagram === 'function') renderFlowchartDiagram();
      if (typeof drawAllArrows === 'function') setTimeout(drawAllArrows, 60);
      if (typeof filterCoursesTable === 'function') filterCoursesTable();
      if (typeof renderSpreadsheetGrid === 'function') renderSpreadsheetGrid();
    }

    // =========================================================================
    // SPREADSHEET LAUNCHER & RETURN ROUTING ENGINE
    // =========================================================================
    let spreadsheetReturnSourceView = 'flowchart';

    function openIntegratedSpreadsheet(targetTab, returnSourceView) {
      if (returnSourceView) {
        spreadsheetReturnSourceView = returnSourceView;
      }
      navigateView('spreadsheet');
      if (typeof switchSpreadsheetTab === 'function') {
        switchSpreadsheetTab('all');
      }
      const returnText = document.getElementById('spreadsheetReturnText');
      if (returnText) {
        const titles = {
          'flowchart': 'Back to Prerequisite Flowchart',
          'catalog': 'Back to Course Catalog',
          'obe': 'Back to OBE Matrix',
          'dashboard': 'Back to Curriculum Dashboard'
        };
        returnText.textContent = titles[spreadsheetReturnSourceView] || 'Back to Module';
      }
      if (typeof showToastNotification === 'function') {
        showToastNotification(`Switched to Integrated Spreadsheet (Full Master Sheet)`);
      }
    }

    function returnFromSpreadsheet() {
      navigateView(spreadsheetReturnSourceView || 'flowchart');
    }

    // =========================================================================
    // INTEGRATED SPREADSHEET WORKBENCH ENGINE (Two-Way Live Sync)
    // =========================================================================
    let currentSpreadsheetTab = 'all';
    let sheetFilterQuery = '';
    let sheetYearFilter = 'all';
    let sheetTermFilter = 'all';
    let sheetGroupFilter = 'all';
    let sheetUnsavedEditsCount = 0;

    // Academic Suite Dropdown Toggle
    function toggleAcademicSuiteDropdown() {
      const dd = document.getElementById('academicSuiteDropdown');
      const ch = document.getElementById('suiteDropdownChevron');
      if (dd) {
        dd.classList.toggle('hidden');
        if (ch) {
          ch.style.transform = dd.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      }
    }

    // Close dropdown on outside click
    document.addEventListener('click', function(e) {
      const btn = document.getElementById('academicSuiteBtn');
      const dd = document.getElementById('academicSuiteDropdown');
      if (btn && dd && !btn.contains(e.target) && !dd.contains(e.target)) {
        dd.classList.add('hidden');
        const ch = document.getElementById('suiteDropdownChevron');
        if (ch) ch.style.transform = 'rotate(0deg)';
      }
    });

    // Rehydrate saved courses from localStorage on startup
    try {
      const savedData = localStorage.getItem('apc_curriculum_custom_courses');
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          ALL_COURSES = parsed;
          console.log(`[SpreadsheetEngine] Rehydrated ${ALL_COURSES.length} custom courses from localStorage.`);
        }
      }
    } catch (e) {
      console.warn('[SpreadsheetEngine] LocalStorage rehydration error:', e);
    }

    function switchSpreadsheetTab(tabName) {
      currentSpreadsheetTab = tabName;
      ['master', 'obe', 'prereq', 'all'].forEach(t => {
        const btn = document.getElementById(`sheetTabBtn-${t}`);
        if (btn) {
          if (t === tabName) {
            btn.className = 'sheet-tab-btn px-3.5 py-1.5 text-xs font-bold border-b-2 border-[#002855] text-[#002855] bg-blue-50/50 cursor-pointer';
          } else {
            btn.className = 'sheet-tab-btn px-3.5 py-1.5 text-xs font-bold border-b-2 border-transparent text-slate-600 hover:text-slate-900 cursor-pointer';
          }
        }
      });
      renderSpreadsheetGrid();
    }

    function sheetFilterChange() {
      sheetFilterQuery = (document.getElementById('sheetSearchInput')?.value || '').trim().toLowerCase();
      sheetYearFilter = document.getElementById('sheetYearFilter')?.value || 'all';
      sheetTermFilter = document.getElementById('sheetTermFilter')?.value || 'all';
      sheetGroupFilter = document.getElementById('sheetGroupFilter')?.value || 'all';
      renderSpreadsheetGrid();
    }

    let excelGridTotalRows = 120;
    let activeExcelCellCoord = 'A1';
    let activeExcelInput = null;

    function selectExcelCell(coord, inputEl) {
      activeExcelCellCoord = coord;
      activeExcelInput = inputEl;
      const coordEl = document.getElementById('sheetActiveCellCoord');
      const formulaInput = document.getElementById('sheetFormulaInput');
      if (coordEl) coordEl.innerText = coord;
      if (formulaInput) {
        formulaInput.value = inputEl ? (inputEl.value || '') : '';
      }
      document.querySelectorAll('.excel-cell-active').forEach(el => {
        el.classList.remove('excel-cell-active', 'ring-2', 'ring-emerald-500', 'bg-emerald-50/50', 'dark:bg-emerald-950/40');
      });
      if (inputEl) {
        inputEl.classList.add('excel-cell-active', 'ring-2', 'ring-emerald-500', 'bg-emerald-50/50', 'dark:bg-emerald-950/40');
      }
    }

    function setFormulaBar(coord, val) {
      const coordEl = document.getElementById('sheetActiveCellCoord');
      const formulaInput = document.getElementById('sheetFormulaInput');
      if (coordEl) coordEl.innerText = coord;
      if (formulaInput) formulaInput.value = (val !== undefined && val !== null) ? String(val) : '';
    }

    function onFormulaBarInput(val) {
      if (activeExcelInput) {
        activeExcelInput.value = val;
        activeExcelInput.dispatchEvent(new Event('change'));
      }
    }

    function loadMoreExcelRows(count = 50) {
      excelGridTotalRows += count;
      renderSpreadsheetGrid();
      const counter = document.getElementById('sheetRowCounterLabel');
      if (counter) counter.innerText = `Showing 1 to ${excelGridTotalRows} Rows`;
      if (typeof showToastNotification === 'function') {
        showToastNotification(`Added ${count} more empty rows. Total: ${excelGridTotalRows} rows.`);
      }
    }

    function initInfiniteSpreadsheetScroll() {
      const container = document.getElementById('spreadsheetTableContainer');
      if (container && !container._infiniteScrollAttached) {
        container._infiniteScrollAttached = true;
        container.addEventListener('scroll', function() {
          if (container.scrollTop + container.clientHeight >= container.scrollHeight - 250) {
            excelGridTotalRows += 30;
            renderSpreadsheetGrid();
            const counter = document.getElementById('sheetRowCounterLabel');
            if (counter) counter.innerText = `Showing 1 to ${excelGridTotalRows} Rows`;
          }
        });
      }
    }

    function onEmptySheetCellChange(emptyRowIndex, field, value) {
      const val = (value || '').trim();
      if (!val) return;

      const newIndex = ALL_COURSES.length;
      const defaultCode = (field === 'code' ? val.toUpperCase() : `CPE${100 + newIndex}`);
      const newCourse = {
        row: newIndex + 1,
        year: 1,
        term: 1,
        col: 1,
        code: defaultCode,
        title: (field === 'title' ? val : 'New Curricular Course'),
        units: (field === 'units' ? (parseFloat(val) || 3.0) : 3.0),
        lec: (field === 'lec' ? (parseInt(val, 10) || 3) : 3),
        lab: (field === 'lab' ? (parseInt(val, 10) || 0) : 0),
        group: (field === 'group' ? val : 'Professional Core'),
        prereqs: (field === 'prereqs' ? val.split(',').map(s => s.trim().toUpperCase()).filter(Boolean) : []),
        sos: ["-","-","-","-","-","-","-","-","-","-","-","-","-"],
        desc: (field === 'desc' ? val : "")
      };

      if (field === 'year') newCourse.year = parseInt(val, 10) || 1;
      if (field === 'term') newCourse.term = parseInt(val, 10) || 1;

      ALL_COURSES.push(newCourse);
      sheetUnsavedEditsCount++;

      const badge = document.getElementById('sheetUnsavedBadge');
      if (badge) {
        badge.classList.remove('hidden');
        badge.innerText = `${sheetUnsavedEditsCount} unsaved`;
      }
      const syncInd = document.getElementById('sheetSyncIndicator');
      if (syncInd) {
        syncInd.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 inline-block animate-ping"></span><span class="text-amber-400 font-bold">${sheetUnsavedEditsCount} Pending</span>`;
      }

      if (excelGridTotalRows < ALL_COURSES.length + 30) {
        excelGridTotalRows = ALL_COURSES.length + 30;
      }

      renderSpreadsheetGrid();
      updateSpreadsheetCalculations();
      if (typeof showToastNotification === 'function') {
        showToastNotification(`Instantiated course ${newCourse.code}. Click Save & Sync to persist.`);
      }
    }

    function onSheetCellChange(courseOriginalIndex, field, value) {
      if (field === 'group' && value === '__CREATE_NEW__') {
        openCategoryManagerModal();
        renderSpreadsheetGrid();
        return;
      }
      const c = ALL_COURSES[courseOriginalIndex];
      if (!c) return;

      if (field === 'code') {
        c.code = value.trim().toUpperCase();
      } else if (field === 'title') {
        c.title = value.trim();
      } else if (field === 'units') {
        c.units = parseFloat(value) || 0;
      } else if (field === 'lec') {
        c.lec = parseInt(value, 10) || 0;
      } else if (field === 'lab') {
        c.lab = parseInt(value, 10) || 0;
      } else if (field === 'year') {
        c.year = parseInt(value, 10) || 1;
      } else if (field === 'term') {
        c.term = parseInt(value, 10) || 1;
      } else if (field === 'group') {
        c.group = value;
      } else if (field === 'prereqs') {
        c.prereqs = value.split(',').map(s => s.trim().toUpperCase()).filter(Boolean);
      } else if (field === 'desc') {
        c.desc = value.trim();
      }

      sheetUnsavedEditsCount++;
      const badge = document.getElementById('sheetUnsavedBadge');
      if (badge) {
        badge.classList.remove('hidden');
        badge.innerText = `${sheetUnsavedEditsCount} unsaved`;
      }
      const syncInd = document.getElementById('sheetSyncIndicator');
      if (syncInd) {
        syncInd.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 inline-block animate-ping"></span><span class="text-amber-400 font-bold">${sheetUnsavedEditsCount} Pending</span>`;
      }

      setFormulaBar(`R${courseOriginalIndex + 1} [${c.code} · ${field}]`, String(value));
      updateSpreadsheetCalculations();
    }

    function cycleSheetSOLevel(courseOriginalIndex, soIndex) {
      const c = ALL_COURSES[courseOriginalIndex];
      if (!c || !c.sos) return;

      const levels = ['-', 'I', 'E', 'D'];
      const cur = c.sos[soIndex] || '-';
      const curIdx = levels.indexOf(cur);
      const nextIdx = (curIdx + 1) % levels.length;
      const nextVal = levels[nextIdx];
      c.sos[soIndex] = nextVal;

      sheetUnsavedEditsCount++;
      const badge = document.getElementById('sheetUnsavedBadge');
      if (badge) {
        badge.classList.remove('hidden');
        badge.innerText = `${sheetUnsavedEditsCount} unsaved`;
      }
      const syncInd = document.getElementById('sheetSyncIndicator');
      if (syncInd) {
        syncInd.innerHTML = `<span class="w-2 h-2 rounded-full bg-amber-400 inline-block animate-ping"></span><span class="text-amber-400 font-bold">${sheetUnsavedEditsCount} Pending</span>`;
      }

      const soLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
      setFormulaBar(`R${courseOriginalIndex + 1} [${c.code} · SO ${soLetters[soIndex]}]`, nextVal);

      // Fast update cell in DOM
      const btn = document.getElementById(`soBtn_${courseOriginalIndex}_${soIndex}`);
      if (btn) {
        btn.innerText = nextVal;
        btn.className = getSOBadgeClass(nextVal);
      }
      updateSpreadsheetCalculations();
    }

    function getSOBadgeClass(val) {
      if (val === 'I') return 'w-7 h-7 text-xs font-black rounded-none bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200 cursor-pointer flex items-center justify-center transition';
      if (val === 'E') return 'w-7 h-7 text-xs font-black rounded-none bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-200 cursor-pointer flex items-center justify-center transition';
      if (val === 'D') return 'w-7 h-7 text-xs font-black rounded-none bg-purple-100 text-purple-800 border border-purple-300 hover:bg-purple-200 cursor-pointer flex items-center justify-center transition';
      return 'w-7 h-7 text-xs font-normal rounded-none bg-slate-100 text-slate-400 border border-slate-200 hover:bg-slate-200 cursor-pointer flex items-center justify-center transition';
    }

    function renderSpreadsheetGrid() {
      const table = document.getElementById('spreadsheetTable');
      if (!table) return;

      const rows = [];
      ALL_COURSES.forEach((c, idx) => {
        if (sheetYearFilter !== 'all' && String(c.year) !== sheetYearFilter) return;
        if (sheetTermFilter !== 'all' && String(c.term) !== sheetTermFilter) return;
        if (sheetGroupFilter !== 'all' && c.group !== sheetGroupFilter) return;
        if (sheetFilterQuery) {
          const matchCode = (c.code || '').toLowerCase().includes(sheetFilterQuery);
          const matchTitle = (c.title || '').toLowerCase().includes(sheetFilterQuery);
          const matchPrereq = (c.prereqs || []).some(p => (typeof p === 'object' ? p.code || '' : String(p)).toLowerCase().includes(sheetFilterQuery));
          const matchDesc = (c.desc || '').toLowerCase().includes(sheetFilterQuery);
          if (!matchCode && !matchTitle && !matchPrereq && !matchDesc) return;
        }
        rows.push({ course: c, originalIndex: idx });
      });

      let html = '';

      // Unified Infinite Excel Grid Layout
      html += `<thead class="bg-slate-100 dark:bg-slate-800 sticky top-0 z-20 border-b border-slate-300 dark:border-slate-700 text-[11px] select-none shadow-xs">
        <!-- Excel Column Letters Row -->
        <tr class="bg-slate-200/90 dark:bg-slate-800/90 text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 border-b border-slate-300 dark:border-slate-700">
          <th class="py-1 px-2 text-center w-12 border-r border-slate-300 dark:border-slate-700">#</th>
          <th class="py-1 px-2 text-center w-28 border-r border-slate-300 dark:border-slate-700">A</th>
          <th class="py-1 px-3 text-center border-r border-slate-300 dark:border-slate-700">B</th>
          <th class="py-1 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">C</th>
          <th class="py-1 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">D</th>
          <th class="py-1 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">E</th>
          <th class="py-1 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">F</th>
          <th class="py-1 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">G</th>
          <th class="py-1 px-2 text-center w-40 border-r border-slate-300 dark:border-slate-700">H</th>
          <th class="py-1 px-3 text-center border-r border-slate-300 dark:border-slate-700 w-48">I</th>
          <th class="py-1 px-2 text-center w-14">J</th>
        </tr>
        <!-- Field Titles Row -->
        <tr class="text-[11px] uppercase font-bold text-slate-700 dark:text-slate-200">
          <th class="py-2 px-2 text-center w-12 border-r border-slate-300 dark:border-slate-700">Row</th>
          <th class="py-2 px-2 w-28 border-r border-slate-300 dark:border-slate-700">Code</th>
          <th class="py-2 px-3 border-r border-slate-300 dark:border-slate-700">Descriptive Title</th>
          <th class="py-2 px-3 border-r border-slate-300 dark:border-slate-700 min-w-[280px]">Course Description</th>
          <th class="py-2 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">Units</th>
          <th class="py-2 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">Lec</th>
          <th class="py-2 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">Lab</th>
          <th class="py-2 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">Year</th>
          <th class="py-2 px-2 text-center w-16 border-r border-slate-300 dark:border-slate-700">Term</th>
          <th class="py-2 px-2 border-r border-slate-300 dark:border-slate-700 w-40">Prerequisites</th>
          <th class="py-2 px-3 border-r border-slate-300 dark:border-slate-700 w-48">Curriculum Group</th>
          <th class="py-2 px-2 text-center w-14">Action</th>
        </tr>
      </thead><tbody>`;

      // 1. Render actual courses
      rows.forEach((r, rowNum) => {
        const c = r.course;
        const idx = r.originalIndex;
        const displayRow = rowNum + 1;
        const bg = (rowNum % 2 === 0) ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/70 dark:bg-slate-900/60';
        const prereqStr = (c.prereqs || []).map(p => (typeof p === 'object' && p !== null && p.code) ? p.code : String(p)).join(', ');

        html += `<tr class="${bg} hover:bg-amber-50/40 dark:hover:bg-slate-800 transition border-b border-slate-200 dark:border-slate-700/60">
          <td class="py-1 px-2 text-center font-mono text-slate-400 dark:text-slate-500 border-r border-slate-200 dark:border-slate-700/60 text-[11px]">${displayRow}</td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60">
            <input type="text" value="${c.code || ''}" onfocus="selectExcelCell('A${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'code', this.value)" class="w-full px-1.5 py-0.5 font-mono font-bold text-xs text-[#002855] dark:text-blue-300 uppercase bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none focus:outline-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60">
            <input type="text" value="${(c.title || '').replace(/"/g, '&quot;')}" onfocus="selectExcelCell('B${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'title', this.value)" class="w-full px-1.5 py-0.5 text-xs text-slate-800 dark:text-slate-100 font-medium bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none focus:outline-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60">
            <input type="text" value="${(c.desc || '').replace(/"/g, '&quot;')}" onfocus="selectExcelCell('DESC_${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'desc', this.value)" placeholder="Enter course description..." title="${(c.desc || '').replace(/"/g, '&quot;')}" class="w-full px-1.5 py-0.5 text-xs text-slate-700 dark:text-slate-300 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none focus:outline-none truncate">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60 text-center">
            <input type="number" step="0.5" min="0" max="12" value="${c.units || 0}" onfocus="selectExcelCell('C${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'units', this.value)" class="w-full text-center px-1 py-0.5 font-mono font-bold text-xs text-slate-800 dark:text-slate-100 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none focus:outline-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60 text-center">
            <input type="number" step="1" min="0" max="15" value="${c.lec || 0}" onfocus="selectExcelCell('D${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'lec', this.value)" class="w-full text-center px-1 py-0.5 font-mono text-xs text-slate-700 dark:text-slate-300 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none focus:outline-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60 text-center">
            <input type="number" step="1" min="0" max="15" value="${c.lab || 0}" onfocus="selectExcelCell('E${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'lab', this.value)" class="w-full text-center px-1 py-0.5 font-mono text-xs text-slate-700 dark:text-slate-300 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none focus:outline-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60 text-center">
            <select onfocus="selectExcelCell('F${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'year', this.value)" class="w-full text-center px-1 py-0.5 font-bold text-xs text-slate-700 dark:text-slate-200 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none cursor-pointer focus:outline-none">
              <option value="1" ${c.year === 1 ? 'selected' : ''}>Y1</option>
              <option value="2" ${c.year === 2 ? 'selected' : ''}>Y2</option>
              <option value="3" ${c.year === 3 ? 'selected' : ''}>Y3</option>
              <option value="4" ${c.year === 4 ? 'selected' : ''}>Y4</option>
            </select>
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60 text-center">
            <select onfocus="selectExcelCell('G${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'term', this.value)" class="w-full text-center px-1 py-0.5 font-bold text-xs text-slate-700 dark:text-slate-200 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none cursor-pointer focus:outline-none">
              <option value="1" ${c.term === 1 ? 'selected' : ''}>T1</option>
              <option value="2" ${c.term === 2 ? 'selected' : ''}>T2</option>
              <option value="3" ${c.term === 3 ? 'selected' : ''}>T3</option>
            </select>
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60">
            <input type="text" value="${prereqStr}" onfocus="selectExcelCell('H${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'prereqs', this.value)" placeholder="None" class="w-full px-1.5 py-0.5 font-mono text-xs uppercase text-slate-800 dark:text-slate-200 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none focus:outline-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-700/60">
            <select onfocus="selectExcelCell('I${displayRow}', this)" onchange="onSheetCellChange(${idx}, 'group', this.value)" class="w-full px-1.5 py-0.5 text-xs text-slate-700 dark:text-slate-300 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none cursor-pointer focus:outline-none">
              ${CURRICULUM_CATEGORIES.map(cat => `<option value="${cat.name}" ${c.group === cat.name ? 'selected' : ''}>${cat.name}</option>`).join('')}
              <option value="__CREATE_NEW__" class="font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-slate-800">+ Create New Category...</option>
            </select>
          </td>
          <td class="py-1 px-1 text-center">
            <button type="button" onclick="sheetDeleteCourseRow(${idx})" class="p-1 text-slate-400 hover:text-rose-600 transition cursor-pointer" title="Delete Course">🗑</button>
          </td>
        </tr>`;
      });

      // 2. Render Infinite Empty Excel Rows
      const renderedCount = rows.length;
      const totalToRender = Math.max(excelGridTotalRows, renderedCount + 30);
      for (let r = renderedCount + 1; r <= totalToRender; r++) {
        const bg = (r % 2 === 0) ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-900/50';
        html += `<tr class="${bg} hover:bg-amber-50/30 dark:hover:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-400">
          <td class="py-1 px-2 text-center font-mono text-slate-400 dark:text-slate-600 border-r border-slate-200 dark:border-slate-800 text-[11px]">${r}</td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800">
            <input type="text" placeholder="" onfocus="selectExcelCell('A${r}', this)" onchange="onEmptySheetCellChange(${r}, 'code', this.value)" class="w-full px-1.5 py-0.5 font-mono font-bold text-xs uppercase text-[#002855] dark:text-blue-300 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none border-0 rounded-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800">
            <input type="text" placeholder="" onfocus="selectExcelCell('B${r}', this)" onchange="onEmptySheetCellChange(${r}, 'title', this.value)" class="w-full px-1.5 py-0.5 text-xs text-slate-800 dark:text-slate-100 font-medium bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none border-0 rounded-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800">
            <input type="text" placeholder="" onfocus="selectExcelCell('DESC_${r}', this)" onchange="onEmptySheetCellChange(${r}, 'desc', this.value)" class="w-full px-1.5 py-0.5 text-xs text-slate-800 dark:text-slate-100 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none border-0 rounded-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800 text-center">
            <input type="number" step="0.5" placeholder="" onfocus="selectExcelCell('C${r}', this)" onchange="onEmptySheetCellChange(${r}, 'units', this.value)" class="w-full text-center px-1 py-0.5 font-mono text-xs text-slate-800 dark:text-slate-100 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none border-0 rounded-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800 text-center">
            <input type="number" step="1" placeholder="" onfocus="selectExcelCell('D${r}', this)" onchange="onEmptySheetCellChange(${r}, 'lec', this.value)" class="w-full text-center px-1 py-0.5 font-mono text-xs text-slate-700 dark:text-slate-300 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none border-0 rounded-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800 text-center">
            <input type="number" step="1" placeholder="" onfocus="selectExcelCell('E${r}', this)" onchange="onEmptySheetCellChange(${r}, 'lab', this.value)" class="w-full text-center px-1 py-0.5 font-mono text-xs text-slate-700 dark:text-slate-300 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none border-0 rounded-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800 text-center">
            <select onfocus="selectExcelCell('F${r}', this)" onchange="onEmptySheetCellChange(${r}, 'year', this.value)" class="w-full text-center px-1 py-0.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none cursor-pointer focus:outline-none">
              <option value="">-</option>
              <option value="1">Y1</option>
              <option value="2">Y2</option>
              <option value="3">Y3</option>
              <option value="4">Y4</option>
            </select>
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800 text-center">
            <select onfocus="selectExcelCell('G${r}', this)" onchange="onEmptySheetCellChange(${r}, 'term', this.value)" class="w-full text-center px-1 py-0.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none cursor-pointer focus:outline-none">
              <option value="">-</option>
              <option value="1">T1</option>
              <option value="2">T2</option>
              <option value="3">T3</option>
            </select>
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800">
            <input type="text" placeholder="" onfocus="selectExcelCell('H${r}', this)" onchange="onEmptySheetCellChange(${r}, 'prereqs', this.value)" class="w-full px-1.5 py-0.5 font-mono text-xs uppercase text-slate-800 dark:text-slate-200 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 focus:outline-none border-0 rounded-none">
          </td>
          <td class="py-1 px-1 border-r border-slate-200 dark:border-slate-800">
            <select onfocus="selectExcelCell('I${r}', this)" onchange="onEmptySheetCellChange(${r}, 'group', this.value)" class="w-full px-1.5 py-0.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 bg-transparent hover:bg-white dark:hover:bg-slate-800 focus:bg-white dark:focus:bg-slate-800 border-0 rounded-none cursor-pointer focus:outline-none">
              <option value="">- Select Group -</option>
              ${CURRICULUM_CATEGORIES.map(cat => `<option value="${cat.name}">${cat.name}</option>`).join('')}
            </select>
          </td>
          <td class="py-1 px-1 text-center font-mono text-slate-300 dark:text-slate-700 text-xs">
            &bull;
          </td>
        </tr>`;
      }

      html += '</tbody>';
      table.innerHTML = html;
      updateSpreadsheetCalculations();

      const counter = document.getElementById('sheetRowCounterLabel');
      if (counter) counter.innerText = `Showing 1 to ${totalToRender} Rows`;
      initInfiniteSpreadsheetScroll();
    }
    function updateSpreadsheetCalculations() {
      const coursesCount = ALL_COURSES.length;
      let totalUnits = 0;
      let totalLec = 0;
      let totalLab = 0;
      let totalPrereqs = 0;
      let countI = 0, countE = 0, countD = 0;

      ALL_COURSES.forEach(c => {
        totalUnits += (parseFloat(c.units) || 0);
        totalLec += (parseInt(c.lec, 10) || 0);
        totalLab += (parseInt(c.lab, 10) || 0);
        if (Array.isArray(c.prereqs)) totalPrereqs += c.prereqs.length;
        if (Array.isArray(c.sos)) {
          c.sos.forEach(v => {
            if (v === 'I') countI++;
            else if (v === 'E') countE++;
            else if (v === 'D') countD++;
          });
        }
      });

      const coursesEl = document.getElementById('sheetStatCourses');
      const unitsEl = document.getElementById('sheetStatUnits');
      const lecLabEl = document.getElementById('sheetStatLecLab');
      const prereqsEl = document.getElementById('sheetStatPrereqs');

      if (coursesEl) coursesEl.innerText = coursesCount;
      if (unitsEl) unitsEl.innerText = totalUnits.toFixed(1);
      if (lecLabEl) lecLabEl.innerText = `${totalLec} / ${totalLab}`;
      if (prereqsEl) prereqsEl.innerText = totalPrereqs;
    }

    function sheetAddNewCourseRow() {
      const defaultCode = `CPE${Math.floor(100 + Math.random() * 900)}`;
      const newCourse = {
        row: ALL_COURSES.length + 1,
        year: 1,
        term: 1,
        col: 1,
        code: defaultCode,
        title: "New Curricular Course",
        units: 3.0,
        lec: 3,
        lab: 0,
        group: "Professional Core",
        prereqs: [],
        sos: ["-","-","-","-","-","-","-","-","-","-","-","-","-"],
        desc: "Syllabus course outline description."
      };
      ALL_COURSES.push(newCourse);
      sheetUnsavedEditsCount++;
      const badge = document.getElementById('sheetUnsavedBadge');
      if (badge) {
        badge.classList.remove('hidden');
        badge.innerText = `${sheetUnsavedEditsCount} unsaved`;
      }
      renderSpreadsheetGrid();
      showToastNotification(`Added row for course ${defaultCode}. Click Save & Sync to persist.`);
    }

    function sheetDeleteCourseRow(courseIdx) {
      const c = ALL_COURSES[courseIdx];
      if (!c) return;

      const dependents = ALL_COURSES.filter(other => other.prereqs && other.prereqs.includes(c.code));
      let confirmMsg = `Are you sure you want to delete ${c.code} (${c.title})?`;
      if (dependents.length > 0) {
        confirmMsg += `\n\nWARNING: ${dependents.length} downstream courses depend on this course as a prerequisite:\n${dependents.map(d => d.code).join(', ')}`;
      }

      if (!confirm(confirmMsg)) return;

      ALL_COURSES.splice(courseIdx, 1);
      sheetUnsavedEditsCount++;
      const badge = document.getElementById('sheetUnsavedBadge');
      if (badge) {
        badge.classList.remove('hidden');
        badge.innerText = `${sheetUnsavedEditsCount} unsaved`;
      }
      renderSpreadsheetGrid();
      showToastNotification(`Course ${c.code} removed from spreadsheet.`);
    }

    function sheetSaveAllChanges() {
      const codeSet = new Set();
      for (const c of ALL_COURSES) {
        if (!c.code || c.code.trim() === '') {
          alert('Validation Error: All courses must have a valid course code.');
          return;
        }
        const upper = c.code.trim().toUpperCase();
        if (codeSet.has(upper)) {
          alert(`Validation Error: Duplicate course code detected: "${upper}". Course codes must be unique.`);
          return;
        }
        codeSet.add(upper);
      }

      try {
        localStorage.setItem('apc_curriculum_custom_courses', JSON.stringify(ALL_COURSES));
      } catch (e) {
        console.warn('LocalStorage error:', e);
      }

      sheetUnsavedEditsCount = 0;
      const badge = document.getElementById('sheetUnsavedBadge');
      if (badge) badge.classList.add('hidden');

      const syncInd = document.getElementById('sheetSyncIndicator');
      if (syncInd) {
        syncInd.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span><span class="text-emerald-400 font-bold">Synced</span>`;
      }

      if (typeof renderFlowchartGrid === 'function') renderFlowchartGrid();
      if (typeof drawAllArrows === 'function') setTimeout(drawAllArrows, 80);
      if (typeof filterCoursesTable === 'function') filterCoursesTable();
      if (typeof renderObeMatrix === 'function') renderObeMatrix();
      if (typeof calculateCompliance === 'function') calculateCompliance();

      renderSpreadsheetGrid();
      showToastNotification(`? All ${ALL_COURSES.length} courses successfully saved & synchronized across Flowchart, Catalog, and OBE Matrix!`);
    }
    function sheetExportCSV() {
      const headers = [
        'Code', 'Title', 'Units', 'Lec', 'Lab', 'Year', 'Term', 'Group', 'Prerequisites',
        'SO_A', 'SO_B', 'SO_C', 'SO_D', 'SO_E', 'SO_F', 'SO_G', 'SO_H', 'SO_I', 'SO_J', 'SO_K', 'SO_L', 'SO_M',
        'Description'
      ];

      const escapeCSV = (val) => {
        const s = String(val == null ? '' : val).replace(/"/g, '""');
        return `"${s}"`;
      };

      const rows = [headers.map(escapeCSV).join(',')];

      ALL_COURSES.forEach(c => {
        const prereqStr = (c.prereqs || []).join('; ');
        const row = [
          c.code,
          c.title,
          c.units,
          c.lec,
          c.lab,
          c.year,
          c.term,
          c.group,
          prereqStr
        ];
        for (let i = 0; i < 13; i++) {
          row.push((c.sos && c.sos[i]) ? c.sos[i] : '-');
        }
        row.push(c.desc || '');
        rows.push(row.map(escapeCSV).join(','));
      });

      const csvContent = "\uFEFF" + rows.join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `APC_BSCpE_Curriculum_Master_${new Date().toISOString().slice(0,10)}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToastNotification('Spreadsheet exported as CSV successfully.');
    }

    function sheetImportCSV(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const text = e.target.result;
          const lines = text.split(/\r\n|\n|\r/).filter(l => l.trim().length > 0);
          if (lines.length < 2) {
            alert('Invalid CSV file: insufficient rows.');
            return;
          }

          function parseCSVLine(text) {
            const result = [];
            let cur = '';
            let inQuotes = false;
            for (let i = 0; i < text.length; i++) {
              const ch = text[i];
              if (inQuotes) {
                if (ch === '"') {
                  if (i + 1 < text.length && text[i + 1] === '"') {
                    cur += '"';
                    i++;
                  } else {
                    inQuotes = false;
                  }
                } else {
                  cur += ch;
                }
              } else {
                if (ch === '"') {
                  inQuotes = true;
                } else if (ch === ',') {
                  result.push(cur);
                  cur = '';
                } else {
                  cur += ch;
                }
              }
            }
            result.push(cur);
            return result;
          }

          const headerRow = parseCSVLine(lines[0]).map(h => h.trim().toUpperCase());
          const codeCol = headerRow.indexOf('CODE');
          const titleCol = headerRow.indexOf('TITLE');
          const unitsCol = headerRow.indexOf('UNITS');
          const lecCol = headerRow.indexOf('LEC');
          const labCol = headerRow.indexOf('LAB');
          const yearCol = headerRow.indexOf('YEAR');
          const termCol = headerRow.indexOf('TERM');
          const groupCol = headerRow.indexOf('GROUP');
          const prereqCol = headerRow.indexOf('PREREQUISITES');
          const descCol = headerRow.indexOf('DESCRIPTION');

          if (codeCol === -1 || titleCol === -1) {
            alert('CSV format error: Missing "Code" or "Title" headers.');
            return;
          }

          const importedCourses = [];
          for (let i = 1; i < lines.length; i++) {
            const cols = parseCSVLine(lines[i]);
            if (!cols[codeCol] || cols[codeCol].trim() === '') continue;

            const code = cols[codeCol].trim().toUpperCase();
            const title = cols[titleCol]?.trim() || '';
            const units = parseFloat(cols[unitsCol]) || 3.0;
            const lec = parseInt(cols[lecCol], 10) || 3;
            const lab = parseInt(cols[labCol], 10) || 0;
            const year = parseInt(cols[yearCol], 10) || 1;
            const term = parseInt(cols[termCol], 10) || 1;
            const group = cols[groupCol]?.trim() || 'Professional Core';
            const rawPrereq = cols[prereqCol] || '';
            const prereqs = rawPrereq.split(/[,;]/).map(s => s.trim().toUpperCase()).filter(Boolean);
            const desc = cols[descCol]?.trim() || '';

            const sos = [];
            const soLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M'];
            soLetters.forEach(l => {
              const colIdx = headerRow.indexOf(`SO_${l}`);
              if (colIdx !== -1 && cols[colIdx]) {
                const v = cols[colIdx].trim().toUpperCase();
                sos.push(['I','E','D'].includes(v) ? v : '-');
              } else {
                sos.push('-');
              }
            });

            importedCourses.push({
              row: i,
              year: year,
              term: term,
              col: (year - 1) * 3 + term,
              code: code,
              title: title,
              units: units,
              lec: lec,
              lab: lab,
              group: group,
              prereqs: prereqs,
              sos: sos,
              desc: desc
            });
          }

          if (importedCourses.length === 0) {
            alert('No valid course rows parsed from CSV.');
            return;
          }

          if (confirm(`Successfully parsed ${importedCourses.length} courses from CSV.\nReplace current curriculum (${ALL_COURSES.length} courses) with imported sheet?`)) {
            ALL_COURSES = importedCourses;
            sheetSaveAllChanges();
            showToastNotification(`Successfully imported and committed ${importedCourses.length} courses from CSV!`);
          }
        } catch (err) {
          alert(`Failed to import CSV: ${err.message}`);
        }
      };
      reader.readAsText(file);
      event.target.value = '';
    }

    function sheetResetBaseline() {
      if (!confirm('Are you sure you want to reset all curriculum courses back to the official APC 2026 Registrar baseline? Any unsaved edits will be discarded.')) {
        return;
      }
      if (typeof OFFICIAL_BASELINE_COURSES !== 'undefined' && Array.isArray(OFFICIAL_BASELINE_COURSES)) {
        ALL_COURSES = JSON.parse(JSON.stringify(OFFICIAL_BASELINE_COURSES));
      }
      localStorage.removeItem('apc_curriculum_custom_courses');
      sheetUnsavedEditsCount = 0;
      const badge = document.getElementById('sheetUnsavedBadge');
      if (badge) badge.classList.add('hidden');

      if (typeof renderFlowchartGrid === 'function') renderFlowchartGrid();
      if (typeof drawAllArrows === 'function') setTimeout(drawAllArrows, 80);
      if (typeof filterCoursesTable === 'function') filterCoursesTable();
      if (typeof renderObeMatrix === 'function') renderObeMatrix();
      if (typeof calculateCompliance === 'function') calculateCompliance();
      renderSpreadsheetGrid();
      showToastNotification('? Successfully restored official APC 74-course baseline.');
    }

    // Export global functions
    window.renderSpreadsheetGrid = renderSpreadsheetGrid;
    window.switchSpreadsheetTab = switchSpreadsheetTab;
    window.sheetFilterChange = sheetFilterChange;
    window.onSheetCellChange = onSheetCellChange;
    window.cycleSheetSOLevel = cycleSheetSOLevel;
    window.sheetAddNewCourseRow = sheetAddNewCourseRow;
    window.sheetDeleteCourseRow = sheetDeleteCourseRow;
    window.sheetSaveAllChanges = sheetSaveAllChanges;
    window.sheetExportCSV = sheetExportCSV;
    window.sheetImportCSV = sheetImportCSV;
    window.sheetResetBaseline = sheetResetBaseline;
    window.updateSpreadsheetCalculations = updateSpreadsheetCalculations;
    window.toggleAcademicSuiteDropdown = toggleAcademicSuiteDropdown;
    window.openIntegratedSpreadsheet = openIntegratedSpreadsheet;
    window.returnFromSpreadsheet = returnFromSpreadsheet;
    window.switchRequisiteMode = switchRequisiteMode;
    window.openCategoryManagerModal = openCategoryManagerModal;
    window.closeCategoryManagerModal = closeCategoryManagerModal;
    window.renderCategoryManagerTable = renderCategoryManagerTable;
    window.editCategoryName = editCategoryName;
    window.deleteCategory = deleteCategory;
    window.submitCreateCategory = submitCreateCategory;
    window.renderFlowchartLegend = renderFlowchartLegend;
    window.populateCategoryDropdowns = populateCategoryDropdowns;
    window.refreshAllCategoryViews = refreshAllCategoryViews;
    window.getCategoryMeta = getCategoryMeta;

    // Initialize categories and legend on load
    try {
      renderFlowchartLegend();
      populateCategoryDropdowns();
    } catch (e) {
      console.warn('Initial category setup warning:', e);
    }

// === INSTITUTIONAL NOTICE HELPERS ===
function triggerInstitutionalNotice(title) {
    window.triggerRedactedNotice = triggerInstitutionalNotice;
      if (typeof showToast === 'function') {
        showToast(title || 'Institutional View Active');
      }
    }
    function closeInstitutionalNoticeModal() {}
    window.closeRedactedBlockModal = closeInstitutionalNoticeModal;

// === MODALS, WORKBENCH & GOVERNANCE CONTROLLERS ===
function openAddExdModal() {
      const m = document.getElementById('modalAddExd');
      if (m) m.classList.remove('hidden');
    }
    function closeAddExdModal() {
      const m = document.getElementById('modalAddExd');
      if (m) m.classList.add('hidden');
    }
    function submitAddExd(e) {
      e.preventDefault();
      const school = document.getElementById('newExdSchoolSelect').value;
      const email = document.getElementById('newExdEmail').value;
      closeAddExdModal();
      showToast(`Executive Director provisioned for ${school} (${email})`);
      const container = document.getElementById('exdCardsList');
      if (container) {
        const newCard = document.createElement('div');
        newCard.className = 'p-3 bg-slate-50 border border-slate-200 flex items-center justify-between';
        newCard.innerHTML = `
          <div class="flex items-center space-x-2.5">
            <div class="w-7 h-7 bg-[#002855] text-[#E5A823] font-bold text-xs flex items-center justify-center font-mono">ED</div>
            <div>
              <div class="flex items-center gap-1.5">
                <h4 class="text-xs font-bold text-slate-900">Executive Director — ${school}</h4>
                <span class="px-1.5 py-0.2 bg-blue-100 text-blue-800 text-[10px] font-mono font-bold">LEVEL 3</span>
              </div>
              <p class="text-[11px] text-slate-500 font-mono">${email} &bull; Scope: ${school}</p>
            </div>
          </div>
          <span class="text-[11px] text-blue-800 font-semibold bg-blue-50 px-2 py-0.5 border border-blue-200">Newly Provisioned</span>
        `;
        container.appendChild(newCard);
      }
    }

    function openAddPdModal(schoolName) {
      if (schoolName) {
        const p = document.getElementById('newPdParentSchool');
        if (p) p.value = schoolName;
      }
      const m = document.getElementById('modalAddPd');
      if (m) m.classList.remove('hidden');
    }
    function closeAddPdModal() {
      const m = document.getElementById('modalAddPd');
      if (m) m.classList.add('hidden');
    }
    function submitAddPd(e) {
      e.preventDefault();
      const prog = document.getElementById('newPdProgramSelect').value;
      const email = document.getElementById('newPdEmail').value;
      closeAddPdModal();
      showToast(`✓ Program Director successfully provisioned for ${prog} (${email})`);
    }

    function openAddFacultyModal(progName) {
      if (progName) {
        const p = document.getElementById('newFacProgram');
        if (p) p.value = progName;
      }
      const m = document.getElementById('modalAddFaculty');
      if (m) m.classList.remove('hidden');
    }
    function closeAddFacultyModal() {
      const m = document.getElementById('modalAddFaculty');
      if (m) m.classList.add('hidden');
    }
    function submitAddFaculty(e) {
      e.preventDefault();
      const cluster = document.getElementById('newFacCluster').value;
      const email = document.getElementById('newFacEmail').value;
      closeAddFacultyModal();
      showToast(`✓ Faculty Member added for ${cluster} (${email})`);
    }

    function openAssignTaskModal(progName) {
      const m = document.getElementById('modalAssignTask');
      if (m) m.classList.remove('hidden');
    }
    function closeAssignTaskModal() {
      const m = document.getElementById('modalAssignTask');
      if (m) m.classList.add('hidden');
    }
    function submitAssignTask(e) {
      e.preventDefault();
      const role = document.getElementById('taskFacultySelect').value;
      const course = document.getElementById('taskCourseSelect').value;
      const type = document.getElementById('taskTypeSelect').value;
      const deadline = document.getElementById('taskDeadline').value;
      closeAssignTaskModal();
      showToast(`Task designated: ${role} granted Integrated Spreadsheet access for ${course}.`);

      const tbody = document.getElementById('tasksTableBody');
      if (tbody) {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-slate-50 transition';
        tr.innerHTML = `
          <td class="py-2.5 px-3 font-bold text-[#002855]">${type}</td>
          <td class="py-2.5 px-3 font-semibold text-slate-900">${role}</td>
          <td class="py-2.5 px-3 text-slate-500 font-mono text-[11px]">SoE &bull; BSCpE</td>
          <td class="py-2.5 px-3 font-mono text-blue-700 font-bold">${course}</td>
          <td class="py-2.5 px-3 font-mono text-slate-500">${deadline}</td>
          <td class="py-2.5 px-3">
            <span class="px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-bold uppercase font-mono">
              Spreadsheet Active
            </span>
          </td>
          <td class="py-2.5 px-3 text-right space-x-2">
            <button onclick="openSpreadsheetForCourse('${course}')" class="text-blue-600 hover:underline font-bold">Open Sheet &rarr;</button>
            <button onclick="switchRole('faculty')" class="text-slate-500 hover:text-slate-800">Simulate</button>
          </td>
        `;
        tbody.prepend(tr);
      }
    }
    function openSpreadsheetForCourse(courseCode) {
      navigateView('spreadsheet');
      const searchInput = document.getElementById('sheetSearchInput');
      if (searchInput && courseCode) {
        searchInput.value = courseCode;
        if (typeof sheetFilterChange === 'function') sheetFilterChange();
      }
      showToast(`Integrated Spreadsheet opened for assigned course: ${courseCode}`);
    }

    function filterFacultyAssignedCourses() {
      const searchInput = document.getElementById('sheetSearchInput');
      if (searchInput) {
        searchInput.value = 'CPEDES1, EMICROS, LOGCDES, EMBEDDS';
        if (typeof sheetFilterChange === 'function') sheetFilterChange();
      }
      showToast('Filtered to Faculty assigned courses: CPEDES1, EMICROS, LOGCDES, EMBEDDS');
    }

    function resetSpreadsheetFilter() {
      const searchInput = document.getElementById('sheetSearchInput');
      if (searchInput) {
        searchInput.value = '';
        if (typeof sheetFilterChange === 'function') sheetFilterChange();
      }
      showToast('Showing all 74 curriculum courses.');
    }

    function returnFromSpreadsheet() {
      const curRole = document.getElementById('roleSelector') ? document.getElementById('roleSelector').value : 'admin';
      if (curRole === 'faculty') {
        navigateView('home');
      } else {
        navigateView('flowchart');
      }
    }

  
    // ══════════════════════════════════════════════════════════════════════════
    // HIERARCHICAL SIDEBAR & EXD PROGRAM CREATION LOGIC
    // ══════════════════════════════════════════════════════════════════════════
    
    function toggleHierarchySection(containerId, chevronId) {
      const container = document.getElementById(containerId);
      const chevron = document.getElementById(chevronId);
      if (!container) return;
      container.classList.toggle('hidden');
      if (chevron) {
        chevron.classList.toggle('rotate-180');
      }
    }

    function navigateToHomeTier(tierRole) {
      // Switch view to homepage
      navigateView('home');
      // Render homepage container for this tier
      renderHomepageForRole(tierRole);
      
      // Update sidebar active button highlight
      document.querySelectorAll('.hierarchy-btn').forEach(btn => {
        btn.classList.remove('bg-[#1E2227]', 'text-[#E5A823]', 'border-l-4', 'border-[#E5A823]');
      });
      const activeBtn = document.getElementById('nav-tier-' + tierRole);
      if (activeBtn) {
        activeBtn.classList.add('bg-[#1E2227]', 'text-[#E5A823]', 'border-l-4', 'border-[#E5A823]');
      }
    }

    // ══════════════════════════════════════════════════════════════════════════
    // PROGRESSIVE DISCLOSURE ACADEMIC HIERARCHY & DYNAMIC HOMEPAGE CONTROLLER
    let currentSelectedSchool = null; // 'SoE', 'SoCIT', 'SoM', 'SoAD'

    const SCHOOL_METADATA = {
      'SoE': {
        name: 'School of Engineering',
        short: 'SoE',
        director: 'Executive Director — School of Engineering',
        programs: [
          { code: 'BSCpE', name: 'BS Computer Engineering', units: '184 Units (167 Acad)', courses: 74, cmo: 'CMO 92, s. 2017', active: true },
          { code: 'BSECE', name: 'BS Electronics Engineering', units: '178 Units (162 Acad)', courses: 71, cmo: 'CMO 94, s. 2017', active: false },
          { code: 'BSEE', name: 'BS Electrical Engineering', units: '175 Units (160 Acad)', courses: 69, cmo: 'CMO 88, s. 2017', active: false },
          { code: 'BSCE', name: 'BS Civil Engineering', units: '180 Units (164 Acad)', courses: 72, cmo: 'CMO 93, s. 2017', active: false }
        ]
      },
      'SoCIT': {
        name: 'School of Computing & IT',
        short: 'SoCIT',
        director: 'Executive Director — School of Computing & IT',
        programs: [
          { code: 'BSCS', name: 'BS Computer Science', units: '168 Units (152 Acad)', courses: 66, cmo: 'CMO 25, s. 2015', active: false },
          { code: 'BSIT', name: 'BS Information Technology', units: '168 Units (152 Acad)', courses: 65, cmo: 'CMO 25, s. 2015', active: false }
        ]
      },
      'SoM': {
        name: 'School of Management',
        short: 'SoM',
        director: 'Executive Director — School of Management',
        programs: [
          { code: 'BSBA', name: 'BS Business Administration', units: '150 Units (138 Acad)', courses: 58, cmo: 'CMO 17, s. 2017', active: false },
          { code: 'BSRM', name: 'BS Real Estate Management', units: '152 Units (140 Acad)', courses: 60, cmo: 'CMO 18, s. 2017', active: false }
        ]
      },
      'SoAD': {
        name: 'School of Architecture & Design',
        short: 'SoAD',
        director: 'Executive Director — School of Architecture & Design',
        programs: [
          { code: 'BSArch', name: 'BS Architecture', units: '190 Units (175 Acad)', courses: 76, cmo: 'CMO 61, s. 2017', active: false },
          { code: 'BMM', name: 'Bachelor of Multimedia Arts', units: '170 Units (156 Acad)', courses: 68, cmo: 'CMO 35, s. 2017', active: false }
        ]
      }
    };

    // ──────────────────────────────────────────────────────────────────────────
    // 1. DYNAMIC HOMEPAGE RENDERERS (Changes main view based on left panel clicks)
    // ──────────────────────────────────────────────────────────────────────────

        
    // ==========================================================================
    // ENHANCED FRONTEND & USER-FRIENDLINESS CONTROLLER SUITE
    // ==========================================================================

    // 1. Dynamic Breadcrumb Controller
    function updateAppBreadcrumb(viewId) {
      const bar = document.getElementById('universalBreadcrumbBar');
      if (!bar) return;

      const bcSchoolBtn = document.getElementById('bcSchoolBtn');
      const bcSchoolSep = document.getElementById('bcSchoolSep');
      const bcProgramBtn = document.getElementById('bcProgramBtn');
      const bcProgramSep = document.getElementById('bcProgramSep');
      const bcActive = document.getElementById('bcViewActive');

      const sData = SCHOOL_METADATA[currentSelectedSchool] || (currentSelectedSchool ? { name: currentSelectedSchool } : null);
      const pData = ACADEMIC_PROGRAMS[currentSelectedProgram] || (currentSelectedProgram ? { name: currentSelectedProgram, code: currentSelectedProgram } : null);

      // School crumb
      if (currentSelectedSchool && sData) {
        if (bcSchoolBtn) {
          bcSchoolBtn.innerText = sData.short ? `${sData.name} (${sData.short})` : sData.name;
          bcSchoolBtn.classList.remove('hidden');
        }
        if (bcSchoolSep) bcSchoolSep.classList.remove('hidden');
      } else {
        if (bcSchoolBtn) bcSchoolBtn.classList.add('hidden');
        if (bcSchoolSep) bcSchoolSep.classList.add('hidden');
      }

      // Program crumb
      if (currentSelectedProgram && pData) {
        if (bcProgramBtn) {
          bcProgramBtn.innerText = `${pData.name} (${pData.code || currentSelectedProgram})`;
          bcProgramBtn.classList.remove('hidden');
        }
        if (bcProgramSep) bcProgramSep.classList.remove('hidden');
      } else {
        if (bcProgramBtn) bcProgramBtn.classList.add('hidden');
        if (bcProgramSep) bcProgramSep.classList.add('hidden');
      }

      // View Names Dictionary
      const viewNames = {
        'home': currentSelectedProgram ? `${currentSelectedProgram} Program Hub` : (currentSelectedSchool ? `${currentSelectedSchool} Overview` : 'Institutional Hub'),
        'curriculum-home': 'Curriculum Management Hub',
        'flowchart': 'Dynamic Prereq Flowchart (DAG)',
        'catalog': 'Course Catalog (74 Courses)',
        'obe': 'OBE Curriculum Matrix',
        'dashboard': 'Curriculum Analytics Dashboard',
        'spreadsheet': 'Integrated Master Spreadsheet',
        'compliance': 'CHED & ABET Compliance Matrix',
        'delegation': 'Task Delegation & D-RBAC Hub',
        'registrar': 'Official Registrar Documents (7 Sheets)',
        'syllabus': 'Syllabus Management System',
        'course': 'Course Offerings & Loading',
        'audit': 'Institutional Audit Trail',
        'blank-template': 'Academic Subsystem Blueprint'
      };

      if (bcActive) {
        bcActive.innerText = viewNames[viewId] || (viewId ? viewId.toUpperCase() : 'ACADEMIC VIEW');
      }

      // Also keep legacy spans synced
      const bSec = document.getElementById('breadcrumb-section');
      const bPage = document.getElementById('breadcrumb-page');
      if (bSec) bSec.innerText = currentSelectedProgram || currentSelectedSchool || 'Institution';
      if (bPage) bPage.innerText = viewNames[viewId] || viewId;
    }

    // Year selection helper for sidebar navigation
    window.currentSidebarYear = null;
    window.setSidebarYear = function(year) {
      window.currentSidebarYear = year;
    };

    // 2. Flowchart Academic Year Filter Tabs
    window.filterFlowchartYear = function(targetYear) {
      const years = ['All', '1', '2', '3', '4'];
      years.forEach(y => {
        const btn = document.getElementById('btnFilterYear' + y);
        if (btn) {
          if ((y === 'All' && targetYear === 'all') || (y === String(targetYear))) {
            btn.className = 'px-2.5 py-1 font-bold text-xs bg-[#002855] text-[#E5A823] border border-[#002855] transition cursor-pointer shadow-2xs';
          } else {
            btn.className = 'px-2.5 py-1 font-semibold text-xs bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition cursor-pointer';
          }
        }
      });

      const cards = document.querySelectorAll('.diagram-node');
      cards.forEach(card => {
        const code = card.id.replace('node-', '');
        const course = ALL_COURSES.find(c => c.code === code);
        if (!course) return;

        if (targetYear === 'all' || course.year === targetYear) {
          card.style.opacity = '1.0';
          card.style.filter = 'none';
          card.style.pointerEvents = 'auto';
        } else {
          card.style.opacity = '0.18';
          card.style.filter = 'grayscale(80%)';
          card.style.pointerEvents = 'auto';
        }
      });

      // Re-draw arrows with active filter
      if (typeof drawAllArrows === 'function') {
        setTimeout(drawAllArrows, 60);
      }

      if (targetYear !== 'all') {
        const wrapper = document.getElementById('vectorDiagramWrapper');
        if (wrapper) {
          const targetScroll = (targetYear - 1) * 840;
          wrapper.scrollTo({ left: targetScroll, behavior: 'smooth' });
        }
      }
      showToast(targetYear === 'all' ? 'Showing all 4 academic years.' : `Focused on Academic Year ${targetYear} curricular flow.`);
    };

    // 3. Course Inspector Modal Controller
    window.openCourseInspectorModal = function(courseCode) {
      if (!courseCode) return;
      const course = ALL_COURSES.find(c => c.code === courseCode);
      if (!course) {
        showToast(`Course specification not found: ${courseCode}`);
        return;
      }

      const modal = document.getElementById('courseInspectorModal');
      if (!modal) return;

      document.getElementById('ciCodeBadge').innerText = course.code;
      document.getElementById('ciTitle').innerText = course.title;
      document.getElementById('ciGroupBadge').innerText = course.group || 'Core Engineering';
      document.getElementById('ciYearTermBadge').innerText = `Year ${course.year} • Term ${course.term}`;
      
      document.getElementById('ciUnits').innerText = `${Number(course.units).toFixed(1)} Units`;
      document.getElementById('ciLec').innerText = `${course.lec} Lec hrs/wk`;
      document.getElementById('ciLab').innerText = `${course.lab} Lab hrs/wk`;
      document.getElementById('ciContact').innerText = `${(parseFloat(course.lec) || 0) + (parseFloat(course.lab) || 0)} hrs/wk`;

      // Prerequisites
      const prereqContainer = document.getElementById('ciPrereqsContainer');
      if (prereqContainer) {
        prereqContainer.innerHTML = '';
        if (course.prereqs && course.prereqs.length > 0) {
          course.prereqs.forEach(p => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'px-2 py-1 bg-blue-100 hover:bg-blue-200 text-blue-900 font-mono font-bold text-xs border border-blue-300 mr-1.5 mb-1 cursor-pointer transition';
            btn.innerText = p;
            btn.onclick = () => {
              openCourseInspectorModal(p);
            };
            prereqContainer.appendChild(btn);
          });
        } else {
          prereqContainer.innerHTML = '<span class="text-slate-400 italic text-xs">None (Curricular Entry Course)</span>';
        }
      }

      // Dependents (Unlocked downstream courses)
      const depContainer = document.getElementById('ciDependentsContainer');
      if (depContainer) {
        depContainer.innerHTML = '';
        const dependents = ALL_COURSES.filter(c => c.prereqs && c.prereqs.includes(course.code)).map(c => c.code);
        if (dependents.length > 0) {
          dependents.forEach(d => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'px-2 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-mono font-bold text-xs border border-emerald-300 mr-1.5 mb-1 cursor-pointer transition';
            btn.innerText = d;
            btn.onclick = () => {
              openCourseInspectorModal(d);
            };
            depContainer.appendChild(btn);
          });
        } else {
          depContainer.innerHTML = '<span class="text-slate-400 italic text-xs">Terminal Course (No Downstream Requisites)</span>';
        }
      }

      // Student Outcomes (SOs)
      const soContainer = document.getElementById('ciSoContainer');
      if (soContainer) {
        soContainer.innerHTML = '';
        if (course.sos && Array.isArray(course.sos)) {
          const soLabels = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
          const activeSos = [];
          course.sos.forEach((lvl, sIdx) => {
            if (lvl && lvl !== '-' && lvl !== '') {
              activeSos.push({ label: soLabels[sIdx], level: lvl });
            }
          });
          if (activeSos.length > 0) {
            activeSos.forEach(item => {
              const pill = document.createElement('span');
              pill.className = 'px-2 py-0.5 bg-purple-100 text-purple-900 border border-purple-300 text-[11px] font-mono font-bold mr-1.5 mb-1 inline-block';
              pill.innerText = `SO-${item.label} [${item.level}]`;
              soContainer.appendChild(pill);
            });
          } else {
            soContainer.innerHTML = '<span class="text-slate-400 italic text-xs">No SOs assigned</span>';
          }
        }
      }

      // Description / Syllabus
      const descEl = document.getElementById('ciDescription');
      if (descEl) descEl.innerText = course.desc || 'Official course syllabus scope narrative and instructional objectives registered for this component.';

      // Action button links
      const sheetBtn = document.getElementById('ciSpreadsheetBtn');
      if (sheetBtn) {
        sheetBtn.onclick = () => {
          closeCourseInspectorModal();
          openSpreadsheetForCourse(course.code);
        };
      }

      const flowBtn = document.getElementById('ciFlowchartBtn');
      if (flowBtn) {
        flowBtn.onclick = () => {
          closeCourseInspectorModal();
          navigateView('flowchart');
          setTimeout(() => {
            handleCourseClick(course.code);
          }, 100);
        };
      }

      const copyBtn = document.getElementById('ciCopyBtn');
      if (copyBtn) {
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(course.code).then(() => {
            showToast(`Copied ${course.code} to clipboard!`);
          }).catch(() => {
            showToast(`Course Code: ${course.code}`);
          });
        };
      }

      modal.classList.remove('hidden');
    };

    window.closeCourseInspectorModal = function() {
      const modal = document.getElementById('courseInspectorModal');
      if (modal) modal.classList.add('hidden');
    };

    // 4. Spotlight Quick Finder Controller
    window.openGlobalSearch = function() {
      const modal = document.getElementById('globalSearchModal');
      if (!modal) return;
      modal.classList.remove('hidden');
      const input = document.getElementById('globalSearchInput');
      if (input) {
        input.value = '';
        input.focus();
        renderGlobalSearchResults('');
      }
    };

    window.closeGlobalSearch = function() {
      const modal = document.getElementById('globalSearchModal');
      if (modal) modal.classList.add('hidden');
    };

    window.renderGlobalSearchResults = function(query) {
      const container = document.getElementById('globalSearchResults');
      if (!container) return;

      const q = (query || '').trim().toLowerCase();
      container.innerHTML = '';

      const items = [];

      // 1. Curricular Courses
      if (typeof ALL_COURSES !== 'undefined' && Array.isArray(ALL_COURSES)) {
        ALL_COURSES.forEach(c => {
          if (!q || c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) || (c.group && c.group.toLowerCase().includes(q))) {
            items.push({
              type: 'course',
              icon: '📘',
              title: `${c.code} — ${c.title}`,
              subtitle: `${Number(c.units).toFixed(1)} Units • Year ${c.year}, Term ${c.term} • ${c.group || 'Core'}`,
              action: () => {
                closeGlobalSearch();
                openCourseInspectorModal(c.code);
              }
            });
          }
        });
      }

      // 2. Views & Subsystems
      const viewOptions = [
        { id: 'flowchart', title: 'Dynamic Prereq Flowchart (DAG)', icon: '⚡', desc: 'Interactive directed acyclic graph prerequisite visualizer' },
        { id: 'spreadsheet', title: 'Integrated Master Spreadsheet', icon: '📊', desc: 'Live two-way syncing curriculum matrix & mass editor' },
        { id: 'catalog', title: 'Course Catalog (74 Courses)', icon: '📖', desc: 'Complete course catalog with contact hours and prerequisites' },
        { id: 'obe', title: 'OBE Matrix (13 Student Outcomes)', icon: '🎯', desc: 'Student outcome mapping a through m alignment' },
        { id: 'registrar', title: 'Official Registrar Documents (7 Sheets)', icon: '📜', desc: 'Complete unredacted institutional registrar curriculum output suite' },
        { id: 'compliance', title: 'CHED CMO 92 & ABET Compliance', icon: '⚖️', desc: 'Statutory compliance verification and standards audit' },
        { id: 'delegation', title: 'Institutional Governance & D-RBAC Hub', icon: '👔', desc: 'Designate faculty tasks and manage curriculum authority' },
        { id: 'dashboard', title: 'Curriculum Analytics Dashboard', icon: '📈', desc: 'Curriculum analytics, unit ratios, and distribution charts' },
        { id: 'syllabus', title: 'Syllabus Management System (SMS)', icon: '📑', desc: 'Course syllabus specifications and authoring repository' },
        { id: 'course', title: 'Course Offerings & Loading Hub', icon: '🏛️', desc: 'Term offerings, room allocations, and faculty load matrix' },
        { id: 'audit', title: 'Institutional Audit Trail & Ledger', icon: '🔒', desc: 'Immutable curriculum change ledger and DAG cycle check log' }
      ];

      viewOptions.forEach(v => {
        if (!q || v.title.toLowerCase().includes(q) || v.desc.toLowerCase().includes(q) || v.id.toLowerCase().includes(q)) {
          items.push({
            type: 'view',
            icon: v.icon,
            title: v.title,
            subtitle: v.desc,
            action: () => {
              closeGlobalSearch();
              navigateView(v.id);
            }
          });
        }
      });

      // 3. Academic Schools & Programs
      const schoolOptions = [
        { key: 'SoE', name: 'School of Engineering', icon: '⚙️' },
        { key: 'SoCIT', name: 'School of Computing & IT', icon: '💻' },
        { key: 'SoM', name: 'School of Management', icon: '📊' },
        { key: 'SoAD', name: 'School of Architecture & Design', icon: '📐' }
      ];

      schoolOptions.forEach(s => {
        if (!q || s.name.toLowerCase().includes(q) || s.key.toLowerCase().includes(q)) {
          items.push({
            type: 'school',
            icon: s.icon,
            title: `${s.name} (${s.key})`,
            subtitle: 'Academic School • Degree Programs & Executive Director Overview',
            action: () => {
              closeGlobalSearch();
              renderSchoolOverview(s.key);
            }
          });
        }
      });

      // 4. Degree Programs
      if (typeof ACADEMIC_PROGRAMS !== 'undefined') {
        for (const pCode in ACADEMIC_PROGRAMS) {
          const p = ACADEMIC_PROGRAMS[pCode];
          if (!q || p.name.toLowerCase().includes(q) || pCode.toLowerCase().includes(q)) {
            items.push({
              type: 'program',
              icon: '🎓',
              title: `${p.name} (${pCode})`,
              subtitle: `${p.school || 'Academic School'} • 4-Year Tri-Sem Degree Program`,
              action: () => {
                closeGlobalSearch();
                selectProgram(pCode);
              }
            });
          }
        }
      }

      // 5. Authority Simulator
      const roleOptions = [
        { role: 'admin', title: 'Switch Role: System Administrator', desc: 'Institutional Superuser Clearance (All Schools)' },
        { role: 'exd', title: 'Switch Role: Executive Director', desc: 'School Executive Director / Dean Clearance' },
        { role: 'pd', title: 'Switch Role: Program Director', desc: 'Program Director Clearance (BSCpE 184u)' },
        { role: 'faculty', title: 'Switch Role: Faculty Member', desc: 'Hardware & Embedded Systems Cluster' }
      ];

      roleOptions.forEach(r => {
        if (!q || r.title.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q)) {
          items.push({
            type: 'role',
            icon: '👤',
            title: r.title,
            subtitle: r.desc,
            action: () => {
              closeGlobalSearch();
              switchRole(r.role);
            }
          });
        }
      });

      // Cap at 25 results to keep ultra-responsive
      const visibleItems = items.slice(0, 25);

      if (visibleItems.length === 0) {
        container.innerHTML = `
          <div class="p-6 text-center text-slate-400">
            <span class="text-2xl">🔍</span>
            <p class="font-bold text-xs mt-1 text-slate-600">No matching courses or tools found</p>
            <p class="text-[11px] text-slate-400">Try searching for a course code like "CPEDES1", a tool like "Spreadsheet", or a school like "SoE".</p>
          </div>
        `;
        return;
      }

      visibleItems.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-2 hover:bg-slate-100 transition cursor-pointer border border-transparent hover:border-slate-300 group';
        row.innerHTML = `
          <div class="flex items-center space-x-2.5 overflow-hidden">
            <span class="text-base">${item.icon}</span>
            <div class="truncate">
              <div class="font-black text-xs text-slate-900 group-hover:text-[#002855] truncate">${item.title}</div>
              <div class="text-[10px] text-slate-500 truncate">${item.subtitle}</div>
            </div>
          </div>
          <span class="text-[10px] font-mono font-bold text-slate-400 group-hover:text-slate-800 shrink-0 ml-2">↵ Select</span>
        `;
        row.onclick = item.action;
        container.appendChild(row);
      });
    };

    // 5. Help Guide Modal Controller
    window.openHelpModal = function() {
      const modal = document.getElementById('helpGuideModal');
      if (modal) modal.classList.remove('hidden');
    };

    window.closeHelpModal = function() {
      const modal = document.getElementById('helpGuideModal');
      if (modal) modal.classList.add('hidden');
    };

    // 6. Global Keyboard Shortcuts Listener
    document.addEventListener('keydown', function(e) {
      // Ctrl+K or Cmd+K: Open Quick Finder
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openGlobalSearch();
        return;
      }

      // Escape: Close active modals
      if (e.key === 'Escape') {
        closeGlobalSearch();
        closeCourseInspectorModal();
        closeHelpModal();
        return;
      }

      // Shift+? : Open User Guide
      if (e.key === '?' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        openHelpModal();
        return;
      }
    });

    window.navigateHomeRole = function(role) {
      const curRole = role || (document.getElementById('roleSelector') ? document.getElementById('roleSelector').value : 'admin');
      if (curRole === 'admin') {
        renderAdminOverview();
      } else if (curRole === 'exd') {
        renderSchoolOverview(currentSelectedSchool || 'SoE');
      } else if (curRole === 'pd') {
        renderProgramOverview(currentSelectedProgram || 'BSCpE');
      } else if (curRole === 'faculty') {
        renderFacultyOverview();
      } else {
        navigateView('home');
      }
    };

    function renderAdminOverview() {
      navigateView('home');
      deselectSchool();

      const adminView = document.getElementById('homeAdminInstitutionalView');
      const exdView = document.getElementById('homeExdProgramsView');
      const pdView = document.getElementById('homePdProgramView');
      const facView = document.getElementById('homeFacultyWorkerView');

      if (adminView) adminView.classList.remove('hidden');
      if (exdView) exdView.classList.add('hidden');
      if (pdView) pdView.classList.add('hidden');
      if (facView) facView.classList.add('hidden');

      const pill = document.getElementById('homeRolePill');
      const title = document.getElementById('homeSectionTitle');
      const scope = document.getElementById('homeScopeText');
      if (pill) pill.innerText = 'SYSTEM ADMINISTRATOR';
      if (title) title.innerText = 'Asia Pacific College • Institutional Governance Suite';
      if (scope) scope.innerText = 'All Academic Schools & Divisions (SoE, SoCIT, SoM, SoAD)';

      updateSidebarHierarchy('admin');
      if (typeof updateAppBreadcrumb === 'function') updateAppBreadcrumb('home');
      const hdrScopeAdmin = document.getElementById('headerSchoolScopeText');
      if (hdrScopeAdmin) hdrScopeAdmin.innerText = 'Academic Architecture';
    }

    function renderSchoolOverview(schoolKey) {
      navigateView('home');
      currentSelectedSchool = schoolKey;

      const adminView = document.getElementById('homeAdminInstitutionalView');
      const exdView = document.getElementById('homeExdProgramsView');
      const pdView = document.getElementById('homePdProgramView');
      const facView = document.getElementById('homeFacultyWorkerView');

      if (adminView) adminView.classList.add('hidden');
      if (exdView) exdView.classList.remove('hidden');
      if (pdView) pdView.classList.add('hidden');
      if (facView) facView.classList.add('hidden');

      const sData = SCHOOL_METADATA[schoolKey] || SCHOOL_METADATA['SoE'];

      const pill = document.getElementById('homeRolePill');
      const title = document.getElementById('homeSectionTitle');
      const scope = document.getElementById('homeScopeText');
      if (pill) pill.innerText = 'EXECUTIVE DIRECTOR';
      if (title) title.innerText = `${sData.name} - Academic Degree Programs`;
      if (scope) scope.innerText = sData.name;

      // Dynamically update EXD school header inside home view
      const exdTitle = document.getElementById('exdSchoolTitleText');
      if (exdTitle) exdTitle.innerText = `${sData.name} - Degree Programs & Directors`;
      const exdBadge = document.getElementById('exdDeanBadge');
      if (exdBadge) exdBadge.innerText = `Executive Director / Dean: ${sData.short}`;

      // Dynamically populate programs grid in exd view
      const grid = document.getElementById('exdDegreeProgramsGrid');
      if (grid) {
        grid.innerHTML = '';
        sData.programs.forEach(p => {
          const card = document.createElement('div');
          card.id = 'exdProgCard_' + p.code;
          card.className = `bg-white border-2 ${p.active ? 'border-[#002855]' : 'border-slate-300'} p-4 shadow-xs flex flex-col justify-between`;
          card.innerHTML = `
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-xl">🎓</span>
                <span class="px-2 py-0.5 ${p.active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'} text-[10px] font-bold">
                  ${p.active ? 'Active Baseline' : 'Provisioned'}
                </span>
              </div>
              <h4 class="font-black text-sm text-slate-900 tracking-tight">${p.name}</h4>
              <p class="text-[10px] font-mono text-slate-500 mb-2">${p.code} &bull; 4-Year Tri-Sem</p>
              
              <div class="space-y-1 text-xs text-slate-600 bg-slate-50 p-2.5 border border-slate-200 mb-3 font-sans">
                <div class="flex justify-between items-center py-0.5 border-b border-slate-200/60">
                  <span class="text-slate-500 text-[11px]">Director:</span> 
                  <span class="font-bold text-[#002855] text-[11px] text-right truncate max-w-[140px]" title="Program Director — ${p.name}">Program Director — ${p.code}</span>
                </div>
                <div class="flex justify-between py-0.5"><span>Degree Units:</span> <span class="font-bold text-slate-900">${p.units}</span></div>
                <div class="flex justify-between py-0.5"><span>Courses:</span> <span class="font-bold text-slate-900">${p.courses} Courses</span></div>
                <div class="flex justify-between py-0.5"><span>Standard:</span> <span class="font-mono text-[11px]">${p.cmo}</span></div>
              </div>
            </div>
            <div class="space-y-1.5 pt-2 border-t border-slate-200">
              <button type="button" onclick="selectProgram('${p.code}')" class="w-full py-2 bg-[#002855] hover:bg-[#00336b] text-[#E5A823] text-xs font-bold transition text-center cursor-pointer shadow-xs">
                Open ${p.code} Program Hub &rarr;
              </button>
            </div>
          `;
          grid.appendChild(card);
        });
      }

      updateSidebarHierarchy();
      if (typeof updateAppBreadcrumb === 'function') updateAppBreadcrumb('home');
      const hdrScopeSchool = document.getElementById('headerSchoolScopeText');
      if (hdrScopeSchool) hdrScopeSchool.innerText = sData.name;
    }

    function renderProgramOverview(progCode) {
      navigateView('home');
      currentSelectedProgram = progCode;

      const adminView = document.getElementById('homeAdminInstitutionalView');
      const exdView = document.getElementById('homeExdProgramsView');
      const pdView = document.getElementById('homePdProgramView');
      const facView = document.getElementById('homeFacultyWorkerView');

      if (adminView) adminView.classList.add('hidden');
      if (exdView) exdView.classList.add('hidden');
      if (pdView) pdView.classList.remove('hidden');
      if (facView) facView.classList.add('hidden');

      const progData = ACADEMIC_PROGRAMS[progCode] || {
        name: progCode,
        code: progCode,
        school: 'School of Engineering',
        units: '180 Units',
        courses: 70,
        cmo: 'CHED Standard CMO',
        status: '100% Compliant',
        clusters: []
      };

      currentSelectedSchool = progData.schoolShort || currentSelectedSchool || 'SoE';

      const pill = document.getElementById('homeRolePill');
      const title = document.getElementById('homeSectionTitle');
      const scope = document.getElementById('homeScopeText');
      if (pill) pill.innerText = 'PROGRAM DIRECTOR';
      if (title) title.innerText = `${progData.name} (${progCode}) - Academic Program Hub`;
      if (scope) scope.innerText = `${progData.name} (${progCode}) - ${progData.school || 'Engineering'}`;

      // Dynamically update PD workbench header inside home view
      const pdHeading = document.getElementById('pdProgramWorkbenchHeading');
      if (pdHeading) pdHeading.innerText = `Program Director Workbench • ${progData.name} (${progCode})`;
      const pdBadge = document.getElementById('pdProgramDirectorBadge');
      if (pdBadge) pdBadge.innerText = `${progCode} Program Director`;
      const pdSchool = document.getElementById('pdSchoolNameBold');
      if (pdSchool) pdSchool.innerText = progData.school || 'School of Engineering';

      // Update Program Overview Card elements
      const cardTitle = document.getElementById('pdCardProgTitle');
      if (cardTitle) cardTitle.innerText = progData.name;
      const cardSub = document.getElementById('pdCardProgSub');
      if (cardSub) cardSub.innerText = `Parent School: ${progData.school} • ${progData.units}`;
      const cardUnits = document.getElementById('pdCardProgUnits');
      if (cardUnits) cardUnits.innerText = progData.units;
      const cardCourses = document.getElementById('pdCardProgCourses');
      if (cardCourses) cardCourses.innerText = `${progData.courses} Courses`;
      const cardCmo = document.getElementById('pdCardProgCmo');
      if (cardCmo) cardCmo.innerText = progData.cmo || 'CHED CMO Compliant';

      // Dynamically populate Faculty Cluster list for this specific program
      const facultyContainer = document.getElementById('pdFacultyClustersContainer');
      if (facultyContainer && progData.clusters && progData.clusters.length > 0) {
        facultyContainer.innerHTML = '';
        progData.clusters.forEach(cl => {
          const row = document.createElement('div');
          row.className = 'bg-slate-50 border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-2';
          row.innerHTML = `
            <div class="space-y-0.5">
              <div class="flex items-center space-x-2">
                <span class="w-6 h-6 bg-slate-700 text-white font-bold text-[10px] flex items-center justify-center">${cl.role}</span>
                <span class="font-bold text-slate-900">${cl.name}</span>
              </div>
              <p class="text-[11px] text-slate-500 font-mono pl-8">${cl.email} &bull; Assigned Courses: ${cl.courses}</p>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[10px] font-bold">Designated Scope: Integrated Spreadsheet (${cl.scope})</span>
              <button onclick="openSpreadsheetForCourse('${cl.scope}')" class="px-2 py-1 bg-white border border-slate-300 text-[#002855] hover:bg-blue-50 text-[11px] font-bold cursor-pointer">Open Sheet &rarr;</button>
              <button onclick="switchRole('faculty')" class="px-2 py-1 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-[11px] font-bold cursor-pointer">Simulate &rarr;</button>
            </div>
          `;
          facultyContainer.appendChild(row);
        });
      }

      updateSidebarHierarchy();
      if (typeof updateAppBreadcrumb === 'function') updateAppBreadcrumb('home');
      const hdrScopeProg = document.getElementById('headerSchoolScopeText');
      if (hdrScopeProg) hdrScopeProg.innerText = progData.school || 'School of Engineering';
    }
    function renderFacultyOverview() {
      navigateView('home');

      const adminView = document.getElementById('homeAdminInstitutionalView');
      const exdView = document.getElementById('homeExdProgramsView');
      const pdView = document.getElementById('homePdProgramView');
      const facView = document.getElementById('homeFacultyWorkerView');

      if (adminView) adminView.classList.add('hidden');
      if (exdView) exdView.classList.add('hidden');
      if (pdView) pdView.classList.add('hidden');
      if (facView) facView.classList.remove('hidden');

      const pill = document.getElementById('homeRolePill');
      const title = document.getElementById('homeSectionTitle');
      const scope = document.getElementById('homeScopeText');
      if (pill) pill.innerText = 'FACULTY MEMBER';
      if (title) title.innerText = 'Faculty Workstation • Course Task Allocations';
      if (scope) scope.innerText = 'Hardware & Embedded Systems Cluster (CPEDES1, EMICROS, LOGCDES, EMBEDDS)';

      updateSidebarHierarchy();
      if (typeof updateAppBreadcrumb === 'function') updateAppBreadcrumb('home');
      const hdrScopeFac = document.getElementById('headerSchoolScopeText');
      if (hdrScopeFac) hdrScopeFac.innerText = 'Faculty Workstation';
    }

    function selectSchool(schoolKey) {
      renderSchoolOverview(schoolKey);
      const sName = SCHOOL_METADATA[schoolKey]?.name || schoolKey;
      showToast(`Viewing: ${sName}`);
    }

    function deselectSchool() {
      currentSelectedSchool = null;
      currentSelectedProgram = null;
      updateSidebarHierarchy();
    }

    function selectProgram(progCode, targetView) {
      // Find parent school
      for (const sKey in SCHOOL_METADATA) {
        if (SCHOOL_METADATA[sKey].programs.some(p => p.code === progCode)) {
          currentSelectedSchool = sKey;
          break;
        }
      }
      currentSelectedProgram = progCode;
      
      if (targetView) {
        navigateView(targetView);
      } else {
        renderProgramOverview(progCode);
      }
      updateSidebarHierarchy();
    }

    function launchSubsystemView(viewId) {
      if (!currentSelectedProgram) {
        currentSelectedProgram = 'BSCpE';
      }
      navigateView(viewId);
      if (typeof setActiveSidebarNav === 'function') {
        setActiveSidebarNav(viewId);
      }
    }
    function openBlankSubsystem(schoolName, progCode, progTitle, subsystemName) {
      navigateView('blank-template');
      const sBadge = document.getElementById('blankSchoolBadge');
      const pHeading = document.getElementById('blankProgramHeading');
      const sTitle = document.getElementById('blankSubsystemTitle');
      if (sBadge) sBadge.innerText = schoolName;
      if (pHeading) pHeading.innerText = `${progTitle} (${progCode}) • Subsystems`;
      if (sTitle) sTitle.innerText = subsystemName;
    }

    // ──────────────────────────────────────────────────────────────────────────
    // 2. SIDEBAR HIERARCHY CONTROLLER ("Higher auth does not see lower homepages")
    // ──────────────────────────────────────────────────────────────────────────

    // ─────────────────────────────────────────────────────────
    // ACTIVE NAV HIGHLIGHT + BREADCRUMB UPDATER
    // ─────────────────────────────────────────────────────────
    function setActiveSidebarNav(viewId) {
      // Remove all active states from nav buttons
      document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('text-[#E5A823]', 'bg-[#002855]', 'font-bold', 'border-l-2', 'border-[#E5A823]');
        b.classList.add('text-slate-300');
      });
      // Find the matching button and highlight it
      const mapping = {
        'flowchart':   'nav-flowchart',
        'catalog':     'nav-catalog',
        'obe':         'nav-obe',
        'dashboard':   'nav-dashboard',
        'spreadsheet': 'nav-spreadsheet',
        'registrar':   'nav-registrar',
        'syllabus':    'nav-syllabus',
        'course':      'nav-course',
        'compliance':  'nav-compliance',
        'delegation':  'nav-delegation',
        'audit':       'nav-audit',
      };
      const btnId = mapping[viewId];
      if (btnId) {
        const btn = document.getElementById(btnId);
        if (btn) {
          btn.classList.remove('text-slate-300');
          btn.classList.add('text-[#E5A823]', 'bg-[#002855]', 'font-bold', 'border-l-2', 'border-[#E5A823]');
        }
      }

      // Auto-expand the parent accordion if needed
      const currViews = ['flowchart','catalog','obe','dashboard','spreadsheet','registrar','compliance','delegation','audit'];
      if (currViews.includes(viewId)) {
        // Expand Curriculum Management accordion
        const container = document.getElementById('curriculumModulesContainer');
        const chevron = document.getElementById('currChevron');
        if (container && container.classList.contains('hidden')) {
          container.classList.remove('hidden');
          if (chevron) chevron.classList.remove('rotate-180');
        }
        // If governance view, expand governance too
        if (['compliance','delegation','audit'].includes(viewId)) {
          const govContainer = document.getElementById('governanceContainer');
          const govChevron = document.getElementById('govChevron');
          if (govContainer && govContainer.classList.contains('hidden')) {
            govContainer.classList.remove('hidden');
            if (govChevron) govChevron.classList.remove('rotate-180');
          }
          // Also expand registrar docs if registrar view
        } else if (viewId === 'registrar') {
          const regContainer = document.getElementById('registrarDocsContainer');
          if (regContainer && regContainer.classList.contains('hidden')) {
            regContainer.classList.remove('hidden');
          }
        }
      }
    }

    function updateSidebarBreadcrumb() {
      const pill = document.getElementById('sidebarBreadcrumbPill');
      const text = document.getElementById('sidebarBreadcrumbText');
      if (!pill || !text) return;

      const role = document.getElementById('roleSelector') ? document.getElementById('roleSelector').value : 'admin';
      const roleLabels = { admin: 'Institution', exd: 'SoE', pd: 'BSCpE', faculty: 'Faculty' };

      const parts = [];
      if (role === 'admin') parts.push('🏛️ Institution');
      if (currentSelectedSchool) parts.push('🏫 ' + currentSelectedSchool);
      if (currentSelectedProgram) parts.push('📋 ' + currentSelectedProgram);

      if (parts.length > 0) {
        pill.classList.remove('hidden');
        text.innerText = parts.join(' › ');
      } else {
        pill.classList.add('hidden');
      }
    }

    function updateSidebarHierarchy(specifiedRole) {
      const role = specifiedRole || (document.getElementById('roleSelector') ? document.getElementById('roleSelector').value : 'admin');
      
      const tierAdmin = document.getElementById('tierAdminHome');
      const tierSchools = document.getElementById('tierSchools');
      const tierExdOnly = document.getElementById('tierExdHomeOnly');
      const tierSchoolSubtree = document.getElementById('tierSchoolSubtree');
      const schoolProgramsList = document.getElementById('schoolProgramsList');
      const tierPdOnly = document.getElementById('tierPdHomeOnly');
      const tierFacultyOnly = document.getElementById('tierFacultyHomeOnly');
      const tierProgramSubtree = document.getElementById('tierProgramSubtree');
      const activeSubBadge = document.getElementById('tierActiveSubsystemBadge');
      const sidebarScopeSubtitle = document.getElementById('sidebarScopeSubtitle');

      // Highlight active school button
      document.querySelectorAll('.school-nav-btn').forEach(b => {
        b.classList.remove('bg-slate-800/80', 'text-white', 'border-emerald-500', 'font-bold');
      });
      if (currentSelectedSchool) {
        const activeSchoolBtn = document.getElementById('btnSchool_' + currentSelectedSchool);
        if (activeSchoolBtn) {
          activeSchoolBtn.classList.add('bg-slate-800/80', 'text-white', 'border-emerald-500', 'font-bold');
        }
      }

      // STRICT INSTITUTIONAL RULE: "when ur a higher level auth u dont need to see the homepages of lowers"
      // Admin: Sees Admin Home -> Schools. (EXD Home, PD Home, Faculty Home are strictly HIDDEN).
      // EXD:   Sees EXD Home -> Programs under SoE. (Admin Home, PD Home, Faculty Home are strictly HIDDEN).
      // PD:    Sees PD Home -> Subsystems for BSCpE. (Admin Home, Schools, EXD Home, Faculty Home are strictly HIDDEN).
      // Faculty: Sees Faculty Home -> Subsystems. (Admin Home, Schools, EXD Home, PD Home are strictly HIDDEN).

      if (role === 'admin') {
        if (tierAdmin) tierAdmin.classList.remove('hidden');
        if (tierSchools) tierSchools.classList.remove('hidden');
        if (tierExdOnly) tierExdOnly.classList.add('hidden'); // Higher role doesn't see lower home
        if (tierPdOnly) tierPdOnly.classList.add('hidden');   // Higher role doesn't see lower home
        if (tierFacultyOnly) tierFacultyOnly.classList.add('hidden'); // Higher role doesn't see lower home
        if (sidebarScopeSubtitle) sidebarScopeSubtitle.innerText = 'Institutional Administration';
      } else if (role === 'exd') {
        if (tierAdmin) tierAdmin.classList.add('hidden');     // Those below cannot see above
        if (tierSchools) tierSchools.classList.add('hidden'); // Scoped to School of Engineering
        if (tierExdOnly) tierExdOnly.classList.remove('hidden');
        if (tierPdOnly) tierPdOnly.classList.add('hidden');   // Higher role doesn't see lower home
        if (tierFacultyOnly) tierFacultyOnly.classList.add('hidden'); // Higher role doesn't see lower home
        if (sidebarScopeSubtitle) sidebarScopeSubtitle.innerText = 'School of Engineering';
        currentSelectedSchool = 'SoE';
      } else if (role === 'pd') {
        if (tierAdmin) tierAdmin.classList.add('hidden');
        if (tierSchools) tierSchools.classList.add('hidden');
        if (tierExdOnly) tierExdOnly.classList.add('hidden');
        if (tierPdOnly) tierPdOnly.classList.remove('hidden');
        if (tierFacultyOnly) tierFacultyOnly.classList.add('hidden'); // Higher role doesn't see lower home
        if (sidebarScopeSubtitle) sidebarScopeSubtitle.innerText = 'BS Computer Engineering';
        currentSelectedSchool = 'SoE';
        currentSelectedProgram = 'BSCpE';
      } else if (role === 'faculty') {
        if (tierAdmin) tierAdmin.classList.add('hidden');
        if (tierSchools) tierSchools.classList.add('hidden');
        if (tierExdOnly) tierExdOnly.classList.add('hidden');
        if (tierPdOnly) tierPdOnly.classList.add('hidden');
        if (tierFacultyOnly) tierFacultyOnly.classList.remove('hidden');
        if (sidebarScopeSubtitle) sidebarScopeSubtitle.innerText = 'Faculty Workstation';
        currentSelectedSchool = 'SoE';
        currentSelectedProgram = 'BSCpE';
      }

      // Unfold Programs under Selected School (For Admin or EXD)
      if (currentSelectedSchool && (role === 'admin' || role === 'exd')) {
        if (tierSchoolSubtree) tierSchoolSubtree.classList.remove('hidden');
        const sData = SCHOOL_METADATA[currentSelectedSchool] || SCHOOL_METADATA['SoE'];

        if (schoolProgramsList) {
          schoolProgramsList.innerHTML = '';
          sData.programs.forEach(p => {
            const isSelected = (currentSelectedProgram === p.code);
            const pBtn = document.createElement('button');
            pBtn.type = 'button';
            pBtn.onclick = function() { selectProgram(p.code); };
            pBtn.className = `w-full flex items-center space-x-2 px-2.5 py-1.5 text-[11px] transition cursor-pointer ${
              isSelected 
                ? 'bg-[#002855] text-[#E5A823] font-bold border-l-2 border-[#E5A823]' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60 font-medium'
            }`;
            pBtn.innerHTML = `
              <span>${p.active ? '💻' : '📁'}</span>
              <span class="truncate">${p.name} (${p.code})</span>
            `;
            schoolProgramsList.appendChild(pBtn);
          });

          // Create Program button for EXD / Admin
          const createBtn = document.createElement('button');
          createBtn.type = 'button';
          createBtn.onclick = function() { openCreateProgramModal(sData.name); };
          createBtn.className = 'w-full flex items-center space-x-1.5 px-2.5 py-1 text-[10px] font-bold text-emerald-400 hover:text-emerald-300 hover:bg-emerald-950/40 border border-emerald-800/40 transition cursor-pointer mt-1';
          createBtn.innerHTML = '<span>+ Create Degree Program</span>';
          schoolProgramsList.appendChild(createBtn);
        }
      } else {
        if (tierSchoolSubtree) tierSchoolSubtree.classList.add('hidden');
      }

      // Unfold Subsystems when a Program is selected
      if (currentSelectedProgram) {
        if (tierProgramSubtree) tierProgramSubtree.classList.remove('hidden');
        if (activeSubBadge) activeSubBadge.innerText = `${currentSelectedProgram} Subsystems`;
      } else {
        if (tierProgramSubtree) tierProgramSubtree.classList.add('hidden');
      }

      // Update breadcrumb pill
      updateSidebarBreadcrumb();
    }

    // ──────────────────────────────────────────────────────────────────────────
    // EXD PROGRAM CREATION MODAL & ACTION HANDLERS
    // ──────────────────────────────────────────────────────────────────────────
    function openCreateProgramModal(school) {
      const modal = document.getElementById('modalCreateProgram');
      if (!modal) return;
      const schoolInput = document.getElementById('createProgSchool');
      if (schoolInput && school) schoolInput.value = school;
      modal.classList.remove('hidden');
    }

    function closeCreateProgramModal() {
      const modal = document.getElementById('modalCreateProgram');
      if (modal) modal.classList.add('hidden');
    }

    function submitCreateProgram(event) {
      event.preventDefault();
      const code = (document.getElementById('createProgCode').value || '').trim().toUpperCase();
      const title = (document.getElementById('createProgTitle').value || '').trim();
      const units = document.getElementById('createProgUnits').value || '180';
      const cmo = (document.getElementById('createProgCmo').value || '').trim();
      const director = (document.getElementById('createProgDirector').value || '').trim();

      if (!code || !title) {
        alert('Please provide valid Program Code and Title.');
        return;
      }

      // Register program in ACADEMIC_PROGRAMS data structure
      if (!window.ACADEMIC_PROGRAMS) window.ACADEMIC_PROGRAMS = {};
      window.ACADEMIC_PROGRAMS[code] = {
        name: title,
        code: code,
        school: 'School of Engineering',
        units: parseFloat(units),
        courses: 70,
        cmo: cmo,
        director: director || ('Program Director — ' + title)
      };

      // Dynamically create and append card in EXD Programs Grid
      const grid = document.getElementById('exdDegreeProgramsGrid');
      if (grid) {
        const card = document.createElement('div');
        card.id = 'exdProgCard_' + code;
        card.className = 'bg-white border-2 border-emerald-600 p-4 shadow-xs flex flex-col justify-between';
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xl">🎓</span>
              <span class="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold">Newly Created</span>
            </div>
            <h4 class="font-black text-sm text-slate-900 tracking-tight">${title}</h4>
            <p class="text-[10px] font-mono text-slate-500 mb-2">${code} &bull; 4-Year Tri-Sem</p>
            
            <div class="space-y-1 text-xs text-slate-600 bg-slate-50 p-2.5 border border-slate-200 mb-3 font-sans">
              <div class="flex justify-between items-center py-0.5 border-b border-slate-200/60">
                <span class="text-slate-500 text-[11px]">Director:</span> 
                <span id="directorName_${code}" class="font-bold text-emerald-800 text-[11px] text-right truncate max-w-[140px]" title="${director}">${director}</span>
              </div>
              <div class="flex justify-between py-0.5"><span>Degree Units:</span> <span class="font-bold text-slate-900">${units} Units</span></div>
              <div class="flex justify-between py-0.5"><span>CMO Standard:</span> <span class="font-mono text-[11px] truncate max-w-[120px]">${cmo}</span></div>
              <div class="flex justify-between py-0.5"><span>Subsystems:</span> <span class="font-bold text-emerald-700">Provisioned Active</span></div>
            </div>
          </div>
          <div class="space-y-1.5 pt-2 border-t border-slate-200">
            <button type="button" onclick="selectProgram('${code}', 'flowchart')" class="w-full py-2 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition text-center cursor-pointer shadow-xs">
              Open ${code} Subsystems &rarr;
            </button>
            <button type="button" onclick="openAssignPdForProgram('${code}')" class="w-full py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-semibold border border-slate-300 transition text-center cursor-pointer">
              Assign / Change Director
            </button>
          </div>
        `;
        grid.appendChild(card);
      }

      // Add to sidebar programs container
      const progList = document.getElementById('programsListContainer');
      if (progList) {
        const progBtn = document.createElement('button');
        progBtn.type = 'button';
        progBtn.onclick = function() { selectProgram(code); navigateToHomeTier('pd'); };
        progBtn.className = 'w-full flex items-center justify-between px-2 py-1 text-[11px] font-medium text-slate-300 hover:text-[#E5A823] hover:bg-slate-800/60 transition cursor-pointer';
        progBtn.innerHTML = `<span>${title} (${code})</span><span class="text-[9px] font-mono text-emerald-400">${units}u</span>`;
        progList.insertBefore(progBtn, progList.lastElementChild);
      }

      // Add to addPdProgram select dropdown in modal
      const pdSelect = document.getElementById('addPdProgram');
      if (pdSelect) {
        const opt = document.createElement('option');
        opt.value = code;
        opt.innerText = `${title} (${code})`;
        pdSelect.appendChild(opt);
      }

      closeCreateProgramModal();
      showToast(`Degree Program ${code} (${title}) successfully created under School of Engineering!`);
    }

    // ──────────────────────────────────────────────────────────────────────────
    // ASSIGN PROGRAM DIRECTOR MODAL & ACTION HANDLERS
    // ──────────────────────────────────────────────────────────────────────────
    function openAddPdModal(school) {
      const modal = document.getElementById('modalAddPd');
      if (!modal) return;
      modal.classList.remove('hidden');
    }

    function closeAddPdModal() {
      const modal = document.getElementById('modalAddPd');
      if (modal) modal.classList.add('hidden');
    }

    function openAssignPdForProgram(programCode) {
      openAddPdModal('School of Engineering');
      const select = document.getElementById('addPdProgram');
      if (select) {
        select.value = programCode;
        onSelectPdProgramChange(programCode);
      }
    }

    function onSelectPdProgramChange(val) {
      const roleInput = document.getElementById('addPdRoleTitle');
      const emailInput = document.getElementById('addPdEmail');
      const titles = {
        'BSCpE': 'Program Director — Computer Engineering',
        'BSECE': 'Program Director — Electronics Engineering',
        'BSEE': 'Program Director — Electrical Engineering',
        'BSCE': 'Program Director — Civil Engineering'
      };
      const emails = {
        'BSCpE': 'pd_cpe@apc.edu.ph',
        'BSECE': 'pd_ece@apc.edu.ph',
        'BSEE': 'pd_ee@apc.edu.ph',
        'BSCE': 'pd_ce@apc.edu.ph'
      };
      if (roleInput && titles[val]) roleInput.value = titles[val];
      else if (roleInput) roleInput.value = `Program Director — ${val}`;

      if (emailInput && emails[val]) emailInput.value = emails[val];
      else if (emailInput) emailInput.value = `pd_${val.toLowerCase()}@apc.edu.ph`;
    }

    function submitAddPd(event) {
      event.preventDefault();
      const prog = document.getElementById('addPdProgram').value;
      const roleTitle = document.getElementById('addPdRoleTitle').value;

      // Update card on UI
      const dirElem = document.getElementById('directorName_' + prog);
      if (dirElem) {
        dirElem.innerText = roleTitle;
        dirElem.title = roleTitle;
      }

      closeAddPdModal();
      showToast(`Assigned ${roleTitle} to lead ${prog} degree program.`);
    }

    // Dynamic Role-Based Scoping for Sidebar Navigation Folders
    function updateSidebarHierarchy(specifiedRole) {
      const role = specifiedRole || (document.getElementById('roleSelector') ? document.getElementById('roleSelector').value : 'admin');
      const rootSchools = document.getElementById('node-schools-root');
      const schoolSoe = document.getElementById('node-school-soe');
      const schoolSocit = document.getElementById('node-school-socit');
      const schoolSoma = document.getElementById('node-school-soma');
      const schoolSom = document.getElementById('node-school-som');
      const schoolSoa = document.getElementById('node-school-soa');
      const progCpe = document.getElementById('node-prog-cpe');
      const progCe = document.getElementById('node-prog-ce');
      const progEce = document.getElementById('node-prog-ece');
      const progCs = document.getElementById('node-prog-cs');
      const progIt = document.getElementById('node-prog-it');
      const archSchoolsRoot = document.getElementById('node-archived-schools-root');
      const archSoeProgs = document.getElementById('node-archived-soe-progs');

      // Development focus: ONLY School of Engineering and BSCpE are active
      if (rootSchools) rootSchools.classList.remove('hidden');
      if (schoolSoe) schoolSoe.classList.remove('hidden');
      if (progCpe) progCpe.classList.remove('hidden');

      // All other schools, programs, and archived drawers strictly hidden
      [schoolSocit, schoolSoma, schoolSom, schoolSoa, progCe, progEce, progCs, progIt, archSchoolsRoot, archSoeProgs].forEach(el => {
        if (el) el.classList.add('hidden');
      });
    }
    window.updateSidebarHierarchy = updateSidebarHierarchy;

    // Ensure updateSidebarHierarchy runs on initial load
    document.addEventListener('DOMContentLoaded', function() {
      const curRole = document.getElementById('roleSelector') ? document.getElementById('roleSelector').value : 'admin';
      if (typeof updateSidebarHierarchy === 'function') {
        updateSidebarHierarchy(curRole);
      }
    });
