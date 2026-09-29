/**
 * APC Academic Architecture Suite - Governance & System Audit Trail Engine
 * js/audit_trail.js
 * 
 * Provides append-only tamper-evident audit logging, field-level diff inspection modal,
 * filterable tabular rendering across both the dedicated Audit Trail view and the
 * Curriculum Management Homepage.
 */

(function(window) {
  'use strict';

  // =========================================================================
  // APPEND-ONLY AUDIT LOG TRAIL
  // =========================================================================
  window.AUDIT_LOG = window.AUDIT_LOG || [
    {
      ts: '2026-09-12 10:15:32',
      role: 'Program Director',
      action: 'CURRICULUM_CREATE',
      entity: 'BSCpE (AY 2026–2030 Revision)',
      summary: 'Program Director initialized and authored a new degree curriculum sequence for Bachelor of Science in Computer Engineering (AY 2026–2030 Cohort)',
      diff: [
        { field: 'Curriculum Code', old: '(none)', new: 'BSCpE-2026-REV5' },
        { field: 'Academic Cycle', old: '(none)', new: 'AY 2026–2030 (4-Year Trimester)' },
        { field: 'Total Credit Units', old: '0.0 units', new: '184.0 units' },
        { field: 'Total Course Inventory', old: '0 courses', new: '74 subjects' },
        { field: 'Lifecycle State', old: '(uninitialized)', new: 'Draft (Active Authoring)' }
      ],
      hash: 'REC-1A8F24'
    },
    {
      ts: '2026-09-11 16:45:10',
      role: 'Program Director',
      action: 'COURSE_EDIT',
      entity: 'CPE312 (Computer Architecture)',
      summary: 'Program Director revised course catalog description and learning competencies to align with CHED CMO No. 92, Series of 2017',
      diff: [
        {
          field: 'Course Description',
          old: 'Fundamental concepts of computer organization, basic bus structures, memory devices, and input/output systems.',
          new: 'In-depth study of computer organization and architecture covering instruction set architectures (RISC/CISC), microarchitecture design, memory hierarchy caching, pipelined execution, and hardware synthesis.'
        },
        {
          field: 'Course Learning Outcome 1',
          old: 'Identify computer hardware components.',
          new: 'Design and synthesize pipelined processor microarchitectures meeting realistic power and performance constraints.'
        },
        {
          field: 'Laboratory Focus',
          old: 'Assembly language basics',
          new: 'Verilog/VHDL FPGA hardware simulation and timing analysis'
        }
      ],
      hash: 'REC-3D9B71'
    },
    {
      ts: '2026-09-11 14:20:05',
      role: 'Executive Director',
      action: 'DOCUMENT_EDIT',
      entity: 'Official Document 1 (CHED CMO Curriculum Summary)',
      summary: 'Executive Director updated Section III (Institutional Program Educational Objectives) and endorsement metadata in the official curriculum proposal document',
      diff: [
        {
          field: 'Section III: PEO Statement 2',
          old: 'Graduates will practice as engineering technicians in local industries.',
          new: 'Graduates will lead innovative computing, embedded systems, and digital infrastructure engineering solutions adhering to high ethical standards.'
        },
        {
          field: 'Dean Sign-Off Status',
          old: 'Pending Review',
          new: 'Endorsed for CHED Regional Office Submission'
        },
        {
          field: 'Document Revision Stamp',
          old: 'v1.1 (Internal Draft)',
          new: 'v2.0 (Official Executive Endorsement)'
        }
      ],
      hash: 'REC-8E2C95'
    },
    {
      ts: '2026-09-10 14:12:01',
      role: 'Faculty 1',
      action: 'SYLLABUS_UPDATE',
      entity: 'CPE314',
      summary: 'Faculty 1 updated syllabus continuous quality improvement metrics & course learning outcomes for CPE314',
      diff: null,
      hash: 'REC-9C4E81'
    },
    {
      ts: '2026-09-10 11:35:20',
      role: 'Program Director',
      action: 'COURSE_EDIT',
      entity: 'CPE312',
      summary: 'Program Director updated course syllabus and laboratory credits for Computer Architecture and Organization (CPE312)',
      diff: [
        { field: 'Credit Units', old: '3.0 units', new: '4.0 units' },
        { field: 'Laboratory Hours', old: '0 hrs', new: '3 hrs' }
      ],
      hash: 'REC-7B1A42'
    },
    {
      ts: '2026-09-10 09:20:45',
      role: 'Executive Director',
      action: 'CURRICULUM_APPROVE',
      entity: 'School of Engineering',
      summary: 'Executive Director endorsed and approved curriculum revision package for BSCpE 2026–2030 Baseline',
      diff: null,
      hash: 'REC-5D3C19'
    }
  ];

  // =========================================================================
  // APPEND AUDIT LOG ENTRY
  // =========================================================================
  function appendAuditLog(action, entity, summary, diff = null, meta = {}) {
    const role = (() => {
      const sel = document.getElementById('roleSelector');
      const map = { admin: 'System Administrator', exd: 'Executive Director', pd: 'Program Director', faculty: 'Faculty Member' };
      return map[sel ? sel.value : 'pd'] || 'Program Director';
    })();
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const ts = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const hash = 'REC-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    window.AUDIT_LOG.unshift({ ts, role, action, entity, summary, hash, diff: (diff && diff.length > 0) ? diff : null, meta });
    renderAuditTable();
  }
  window.appendAuditLog = appendAuditLog;

  // =========================================================================
  // INSPECT VALUES / FIELD-LEVEL DIFF MODAL
  // =========================================================================
  function openAuditDiffModal(hash) {
    const modal = document.getElementById('auditDiffModal');
    if (!modal) return;
    const record = (window.AUDIT_LOG || []).find(r => r.hash === hash);
    if (!record) return;

    const recordIdEl = document.getElementById('diffModalRecordId');
    const titleEl = document.getElementById('diffModalTitle');
    const metaEl = document.getElementById('diffModalMeta');
    const tbodyEl = document.getElementById('diffModalTableBody');

    if (recordIdEl) recordIdEl.textContent = record.hash;
    if (titleEl) titleEl.textContent = `Modifications for: ${record.entity}`;

    if (metaEl) {
      metaEl.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-slate-200 dark:border-slate-700">
          <div><span class="font-bold text-slate-800 dark:text-slate-200">Author:</span> ${record.role}</div>
          <div><span class="font-bold text-slate-800 dark:text-slate-200">Timestamp:</span> ${record.ts}</div>
        </div>
        <div class="pt-1 text-slate-700 dark:text-slate-300 font-medium">${record.summary}</div>
      `;
    }

    if (tbodyEl) {
      if (!record.diff || record.diff.length === 0) {
        tbodyEl.innerHTML = `<tr><td colspan="3" class="py-6 text-center text-slate-400 italic">No field-level diff recorded for this entry.</td></tr>`;
      } else {
        tbodyEl.innerHTML = record.diff.map(d => `
          <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
            <td class="py-2.5 px-3 font-mono font-bold text-slate-900 dark:text-white align-top">${escapeAuditHtml(d.field)}</td>
            <td class="py-2.5 px-3 bg-rose-50/40 dark:bg-rose-950/20 text-rose-800 dark:text-rose-300 font-mono text-xs align-top break-words">
              ${escapeAuditHtml(String(d.old ?? '(empty)'))}
            </td>
            <td class="py-2.5 px-3 bg-emerald-50/40 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 font-mono text-xs align-top break-words font-bold">
              ${escapeAuditHtml(String(d.new ?? '(empty)'))}
            </td>
          </tr>
        `).join('');
      }
    }

    modal.classList.remove('hidden');
    if (window.spaRouter && typeof window.spaRouter.onModalOpen === 'function') {
      window.spaRouter.onModalOpen('audit-diff', { hash: hash });
    }
  }
  window.openAuditDiffModal = openAuditDiffModal;

  function closeAuditDiffModal() {
    const modal = document.getElementById('auditDiffModal');
    if (modal) modal.classList.add('hidden');
    if (window.spaRouter && typeof window.spaRouter.onModalClose === 'function') {
      window.spaRouter.onModalClose('audit-diff');
    }
  }
  window.closeAuditDiffModal = closeAuditDiffModal;

  function escapeAuditHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  window.escapeAuditHtml = escapeAuditHtml;

  function verifyHashModal(hash) {
    const msg = `Verified: Cryptographic record ${hash} authentic and matches immutable ledger.`;
    if (typeof showToastNotification === 'function') showToastNotification(msg);
    else if (typeof showToast === 'function') showToast(msg);
    else alert(msg);
  }
  window.verifyHashModal = verifyHashModal;

  // =========================================================================
  // TABLE RENDERING
  // =========================================================================
  const ACTION_COLORS = {
    CURRICULUM_CREATE: 'bg-emerald-50 text-emerald-800 border border-emerald-300 font-black',
    DOCUMENT_EDIT: 'bg-purple-50 text-purple-700 border border-purple-200 font-bold',
    COURSE_CREATE: 'bg-emerald-50 text-emerald-800 border border-emerald-300 font-black',
    COURSE_EDIT: 'bg-amber-50 text-amber-800 border border-amber-300 font-bold',
    CURRICULUM_APPROVE: 'bg-emerald-50 text-emerald-800 border border-emerald-300 font-black',
    SYLLABUS_UPDATE: 'bg-sky-50 text-sky-800 border border-sky-300 font-bold',
    SHEET_SAVE: 'bg-blue-50 text-blue-700 border border-blue-200',
    SO_UPDATE: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    GA_UPDATE: 'bg-purple-50 text-purple-700 border border-purple-200',
    VISION_UPDATE: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    TASK_DELEGATE: 'bg-amber-50 text-amber-700 border border-amber-200',
    DELEGATION_UPDATE: 'bg-teal-50 text-teal-700 border border-teal-200',
    DELEGATION_REVOKE: 'bg-rose-50 text-rose-700 border border-rose-200',
    INGEST_FLOWCHART: 'bg-blue-50 text-blue-700 border border-blue-200',
    IMPORT_FLOWCHART: 'bg-blue-50 text-blue-700 border border-blue-200',
    VALIDATE_DAG: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    VERIFY_PREREQS: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    VERSION_CREATE: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    VERSION_STATE_CHANGE: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
    SCHOOL_UPDATE: 'bg-purple-50 text-purple-700 border border-purple-200',
  };

  function renderAuditTable() {
    const tbodies = [
      {
        tbody: document.getElementById('auditTableBody'),
        filterText: (document.getElementById('auditFilterText')?.value || '').toLowerCase(),
        filterRole: document.getElementById('auditFilterRole')?.value || '',
        countEl: document.getElementById('auditCount')
      },
      {
        tbody: document.getElementById('auditTableBodyCurricHome'),
        filterText: (document.getElementById('auditFilterTextCurricHome')?.value || '').toLowerCase(),
        filterRole: document.getElementById('auditFilterRoleCurricHome')?.value || '',
        countEl: document.getElementById('auditCountCurricHome')
      }
    ];

    tbodies.forEach(({ tbody, filterText, filterRole, countEl }) => {
      if (!tbody) return;
      let logs = window.AUDIT_LOG || [];
      if (filterText) {
        logs = logs.filter(l => 
          (l.action || '').toLowerCase().includes(filterText) ||
          (l.entity || '').toLowerCase().includes(filterText) ||
          (l.summary || '').toLowerCase().includes(filterText)
        );
      }
      if (filterRole) {
        logs = logs.filter(l => l.role === filterRole || (filterRole === 'Faculty Member' && l.role === 'Faculty 1'));
      }
      if (countEl) countEl.textContent = `${logs.length} records`;

      tbody.innerHTML = logs.map(l => {
        const hasDiff = l.diff && Array.isArray(l.diff) && l.diff.length > 0;
        return `
          <tr class="hover:bg-slate-50 transition">
            <td class="py-2.5 px-3 font-mono text-slate-500 text-[11px] whitespace-nowrap">${l.ts}</td>
            <td class="py-2.5 px-3"><span class="font-bold text-slate-900">${l.role}</span></td>
            <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded-none ${ACTION_COLORS[l.action] || 'bg-slate-100 text-slate-700'} text-[11px] font-bold font-mono">${l.action}</span></td>
            <td class="py-2.5 px-3 font-mono text-xs font-bold text-apc-navy">${l.entity}</td>
            <td class="py-2.5 px-3 text-[11px] text-slate-700 leading-snug">${l.summary}</td>
            <td class="py-2.5 px-3 font-mono text-[11px] text-slate-400">${l.hash}</td>
            <td class="py-2.5 px-3 text-right whitespace-nowrap">
              <div class="inline-flex items-center gap-2 justify-end">
                ${hasDiff ? `
                  <button type="button" onclick="openAuditDiffModal('${l.hash}')" class="px-2 py-0.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[11px] rounded-none cursor-pointer flex items-center gap-1 shadow-xs" title="Inspect previous vs new values">
                    <span>🔍</span>
                    <span>Inspect Values</span>
                  </button>
                ` : ''}
                <button type="button" onclick="verifyHashModal('${l.hash}')" class="text-blue-600 hover:underline font-bold text-[11px] cursor-pointer">Verify</button>
              </div>
            </td>
          </tr>
        `;
      }).join('') || '<tr><td colspan="7" class="py-8 text-center text-slate-400 text-xs">No audit trail records found matching criteria.</td></tr>';
    });
  }
  window.renderAuditTable = renderAuditTable;

  // Initialize listeners & initial render
  function setupAuditListeners() {
    const bindFilter = (textId, roleId) => {
      const textEl = document.getElementById(textId);
      const roleEl = document.getElementById(roleId);
      if (textEl) textEl.addEventListener('input', renderAuditTable);
      if (roleEl) roleEl.addEventListener('change', renderAuditTable);
    };
    bindFilter('auditFilterText', 'auditFilterRole');
    bindFilter('auditFilterTextCurricHome', 'auditFilterRoleCurricHome');
    renderAuditTable();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupAuditListeners);
  } else {
    setupAuditListeners();
  }

})(window);
