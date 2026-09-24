/**
 * APC Academic Management System
 * Single-Page Application (SPA) HTML5 History Router (js/spa_router.js)
 * 
 * Features:
 * 1. Synchronizes browser URL address bar dynamically on all page and tab navigation.
 * 2. Deep linking: Opening direct URLs (e.g. /cpe/flowchart?year=2) immediately renders that exact page & filter.
 * 3. Native Browser History: Supports browser Back (<) and Forward (>) buttons seamlessly via popstate.
 * 4. Hybrid URL support: Uses clean HTML5 History paths (pushState/replaceState) on HTTP/HTTPS,
 *    with safe hash fallback (#/...) on local file:// protocols to prevent browser security exceptions.
 * 5. Full state synchronization with Top Bar breadcrumbs, Sidebar tree, and Curriculum Workbench.
 */

(function(window) {
  'use strict';

  // --- ASYNCHRONOUS ROUTE SCRIPT LOADER (In-Flight Promise Cache) ---
  const _scriptPromises = new Map();

  function loadScriptOnce(src) {
    if (_scriptPromises.has(src)) {
      return _scriptPromises.get(src);
    }

    const promise = new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);

      if (existing) {
        if (existing.dataset.loaded === 'true') {
          resolve();
          return;
        }

        existing.addEventListener('load', resolve, { once: true });
        existing.addEventListener('error', reject, { once: true });
        return;
      }

      const script = document.createElement('script');
      script.src = src;

      script.onload = () => {
        script.dataset.loaded = 'true';
        resolve();
      };

      script.onerror = (err) => {
        _scriptPromises.delete(src);
        reject(err);
      };

      document.body.appendChild(script);
    });

    _scriptPromises.set(src, promise);
    return promise;
  }
  window.loadScriptOnce = loadScriptOnce;

  // --- PROGRAM & VIEW MAPPINGS ---
  const PROGRAM_SLUGS = {
    'cpe': 'BSCpE',
    'bscpe': 'BSCpE',
    'ce': 'BSCE',
    'bsce': 'BSCE',
    'ece': 'BSECE',
    'bsece': 'BSECE',
    'cs': 'BSCS',
    'bscs': 'BSCS',
    'it': 'BSIT',
    'bsit': 'BSIT',
    'mma': 'BMMA',
    'bmma': 'BMMA',
    'psych': 'BSPsych',
    'bspsych': 'BSPsych',
    'ba': 'BSBA',
    'bsba': 'BSBA',
    'acc': 'BSA',
    'bsa': 'BSA',
    'arch': 'BSArch',
    'bsarch': 'BSArch'
  };

  const PROGRAM_TO_SLUG = {
    'BSCpE': 'cpe',
    'BSCE': 'ce',
    'BSECE': 'ece',
    'BSCS': 'cs',
    'BSIT': 'it',
    'BMMA': 'mma',
    'BSPsych': 'psych',
    'BSBA': 'ba',
    'BSA': 'acc',
    'BSArch': 'arch'
  };

  const PROGRAM_TO_SCHOOL = {
    'BSCpE': 'soe',
    'BSCE': 'soe',
    'BSECE': 'soe',
    'BSCS': 'socit',
    'BSIT': 'socit',
    'BMMA': 'soma',
    'BSPsych': 'soma',
    'BSBA': 'som',
    'BSA': 'som',
    'BSArch': 'soa'
  };

  const VIEW_SLUGS = {
    'flowchart': 'flowchart',
    'spreadsheet': 'spreadsheet',
    'curriculum-home': 'curriculum-home',
    'curriculum': 'curriculum-home',
    'past-curriculums': 'past-curriculums',
    'historical': 'past-curriculums',
    'past-flowchart': 'past-flowchart',
    'dashboard': 'dashboard',
    'obe': 'obe',
    'obe-matrix': 'obe',
    'catalog': 'catalog',
    'syllabus': 'syllabus',
    'course': 'course',
    'registrar': 'registrar',
    'documents': 'registrar',
    'compliance': 'compliance',
    'delegation': 'delegation',
    'delegations': 'delegation',
    'audit': 'audit',
    'workbench': 'homePdProgramView',
    'homepdprogramview': 'homePdProgramView'
  };

  const VIEW_TO_SLUG = {
    'flowchart': 'flowchart',
    'spreadsheet': 'spreadsheet',
    'curriculum-home': 'curriculum-home',
    'past-curriculums': 'historical',
    'past-flowchart': 'past-flowchart',
    'dashboard': 'dashboard',
    'obe': 'obe',
    'catalog': 'catalog',
    'syllabus': 'syllabus',
    'course': 'course',
    'registrar': 'documents',
    'compliance': 'compliance',
    'delegation': 'delegations',
    'audit': 'audit',
    'homePdProgramView': 'workbench'
  };

  let isPopStateNavigating = false;
  let isInitialized = false;

  let currentModalState = null;

  /**
   * Notify router that a modal or drawer opened.
   */
  function onModalOpen(modalName, params = {}) {
    if (isPopStateNavigating) return;
    currentModalState = { modal: modalName, ...params };
    const state = parseCurrentLocation();
    state.modal = modalName;
    state.modalParams = params;
    updateBrowserUrl(state, false);
  }

  /**
   * Notify router that a modal or drawer closed.
   */
  function onModalClose(modalName) {
    if (isPopStateNavigating) return;
    if (currentModalState && currentModalState.modal === modalName) {
      currentModalState = null;
      const state = parseCurrentLocation();
      delete state.modal;
      delete state.modalParams;
      updateBrowserUrl(state, false);
    }
  }

  /**
   * Build clean canonical URL path for a given navigation state.
   */
  function buildUrlForState(state) {
    if (!state) return '/';

    if (state.type === 'login') {
      return '/login';
    }

    let basePath = '/';
    const queryParts = [];

    // 1. Root / Institutional overview
    if (state.type === 'admin' || state.targetView === 'home') {
      basePath = state.isRoot ? '/' : '/schools';
    } else if (state.type === 'school' && state.schoolId) {
      // 2. School EXD overview (/school/soe, /school/socit, etc.)
      basePath = `/school/${String(state.schoolId).toLowerCase()}`;
    } else {
      // 3. Program views
      const progCode = state.progCode || window.currentSelectedProgram || 'BSCpE';
      const progSlug = PROGRAM_TO_SLUG[progCode] || 'cpe';
      const schoolSlug = (state.schoolId || (PROGRAM_TO_SCHOOL[progCode] ? PROGRAM_TO_SCHOOL[progCode].toLowerCase() : 'soe'));

      const viewId = state.targetView || 'curriculum-home';
      const viewSlug = VIEW_TO_SLUG[viewId] || viewId;

      basePath = `/${schoolSlug}/${progSlug}/${viewSlug}`;

      // Flowchart year filter
      if (viewId === 'flowchart') {
        const year = state.year || (typeof window.getFlowchartActiveYear === 'function' ? window.getFlowchartActiveYear() : 'all');
        if (year && year !== 'all') {
          queryParts.push(`year=${year}`);
        }
      }
      // Spreadsheet year filter
      else if (viewId === 'spreadsheet') {
        const yearFilter = document.getElementById('sheetYearFilter');
        const year = state.year || (yearFilter ? yearFilter.value : 'all');
        if (year && year !== 'all') {
          queryParts.push(`year=${year}`);
        }
      }
      // Registrar document sheet index
      else if (viewId === 'registrar' || viewSlug === 'documents') {
        const sheet = state.regDocIdx || window.currentRegistrarTab || 1;
        queryParts.push(`sheet=${sheet}`);
        const year = state.year || window.currentSidebarYear;
        if (year && year !== 'all') {
          queryParts.push(`year=${year}`);
        }
      }
      // Historical Flowchart edition param
      else if (viewId === 'past-flowchart') {
        const edition = state.edition || 'BSCpE-2021';
        queryParts.push(`edition=${edition}`);
        if (state.year && state.year !== 'all') {
          queryParts.push(`year=${state.year}`);
        }
      }
    }

    // Append Modal / Drawer parameters
    const modalName = state.modal || (currentModalState ? currentModalState.modal : null);
    const modalParams = state.modalParams || (currentModalState || {});

    if (modalName) {
      if (modalName === 'course-detail' && modalParams.course) {
        queryParts.push(`course=${encodeURIComponent(modalParams.course)}`);
      } else if (modalName === 'past-course-detail' && modalParams.course) {
        queryParts.push(`past-course=${encodeURIComponent(modalParams.course)}`);
      } else if (modalName === 'copilot') {
        queryParts.push('drawer=copilot');
      } else {
        queryParts.push(`modal=${encodeURIComponent(modalName)}`);
        if (modalParams.course) {
          queryParts.push(`course=${encodeURIComponent(modalParams.course)}`);
        }
        if (modalParams.school) {
          queryParts.push(`school=${encodeURIComponent(modalParams.school)}`);
        }
        if (modalParams.prog) {
          queryParts.push(`prog=${encodeURIComponent(modalParams.prog)}`);
        }
        if (modalParams.pillar) {
          queryParts.push(`pillar=${encodeURIComponent(modalParams.pillar)}`);
        }
        if (modalParams.hash) {
          queryParts.push(`hash=${encodeURIComponent(modalParams.hash)}`);
        }
      }
    }

    if (queryParts.length > 0) {
      basePath += `?${queryParts.join('&')}`;
    }

    return basePath;
  }

  /**
   * Update browser URL address bar via pushState (or hash fallback on file://).
   */
  function updateBrowserUrl(state, replace = false) {
    if (isPopStateNavigating && !replace) return;

    const targetUrl = buildUrlForState(state);
    const isFile = window.location.protocol === 'file:';

    try {
      if (isFile) {
        if (targetUrl === '/' || targetUrl === '/schools') {
          // Keep root clean
        } else {
          const currentHash = window.location.hash.slice(1);
          if (currentHash !== targetUrl) {
            if (replace) {
              window.location.replace('#' + targetUrl);
            } else {
              window.location.hash = '#' + targetUrl;
            }
          }
        }
      } else {
        const currentFull = window.location.pathname + window.location.search;
        if (currentFull !== targetUrl) {
          const title = state?.pathText ? `APC RAMS - ${state.pathText}` : 'APC Academic Management System';
          if (replace) {
            window.history.replaceState(state, title, targetUrl);
          } else {
            window.history.pushState(state, title, targetUrl);
          }
          document.title = title;
        }
      }
    } catch (err) {
      console.warn('[SpaRouter] Unable to update browser URL:', err);
    }
  }

  /**
   * Parse current location (pathname, search query, or hash) into structured route state.
   */
  function parseCurrentLocation() {
    let rawPath = '';
    let rawSearch = '';

    // Check hash first (for file:// protocol or hash-based links)
    if (window.location.hash && window.location.hash.length > 1) {
      const hashContent = window.location.hash.slice(1);
      const qIdx = hashContent.indexOf('?');
      if (qIdx !== -1) {
        rawPath = hashContent.slice(0, qIdx);
        rawSearch = hashContent.slice(qIdx);
      } else {
        rawPath = hashContent;
      }
    } else {
      rawPath = window.location.pathname;
      rawSearch = window.location.search;
    }

    // Strip leading/trailing slashes and index.html
    const cleanPath = rawPath.replace(/^\/+|\/+$/g, '').replace(/^index\.html\/?/, '');
    const params = new URLSearchParams(rawSearch);
    const segments = cleanPath.split('/').filter(Boolean);

    // Parse modal and drawer params
    let modal = params.get('modal') || undefined;
    const modalParams = {};

    if (params.has('course')) {
      modalParams.course = params.get('course');
      if (!modal) modal = 'course-detail';
    }
    if (params.has('past-course')) {
      modalParams.course = params.get('past-course');
      if (!modal) modal = 'past-course-detail';
    }
    if (params.get('drawer') === 'copilot') {
      modal = 'copilot';
    }
    if (params.has('school')) {
      modalParams.school = params.get('school');
    }
    if (params.has('prog')) {
      modalParams.prog = params.get('prog');
    }
    if (params.has('pillar')) {
      modalParams.pillar = params.get('pillar');
    }
    if (params.has('hash')) {
      modalParams.hash = params.get('hash');
    }

    // Explicit login route
    if (segments[0] === 'login') {
      return {
        type: 'login',
        isRoot: false,
        modal: modal,
        modalParams: Object.keys(modalParams).length > 0 ? modalParams : undefined
      };
    }

    // Root or empty path -> landing or schools overview
    if (segments.length === 0 || segments[0] === 'schools' || segments[0] === 'home') {
      return {
        type: 'admin',
        targetView: 'home',
        isRoot: segments.length === 0 && !modal,
        modal: modal,
        modalParams: Object.keys(modalParams).length > 0 ? modalParams : undefined
      };
    }

    // School route: /school/:schoolId
    if (segments[0] === 'school' && segments[1]) {
      return {
        type: 'school',
        schoolId: segments[1].toLowerCase(),
        modal: modal,
        modalParams: Object.keys(modalParams).length > 0 ? modalParams : undefined
      };
    }

    let progCode = 'BSCpE';
    let schoolId = undefined;
    let viewSegment = '';

    // Check 3-part path: /soe/cpe/flowchart
    if (segments.length >= 2 && PROGRAM_SLUGS[segments[1].toLowerCase()]) {
      schoolId = segments[0].toLowerCase();
      progCode = PROGRAM_SLUGS[segments[1].toLowerCase()];
      viewSegment = segments[2] || 'curriculum-home';
    }
    // Check 2-part path: /cpe/flowchart (backwards compatible)
    else if (PROGRAM_SLUGS[segments[0].toLowerCase()]) {
      progCode = PROGRAM_SLUGS[segments[0].toLowerCase()];
      schoolId = PROGRAM_TO_SCHOOL[progCode] || 'soe';
      viewSegment = segments[1] || 'curriculum-home';
    } else {
      // Direct view slug: /flowchart
      viewSegment = segments[0];
      schoolId = PROGRAM_TO_SCHOOL[progCode] || 'soe';
    }

    const targetView = VIEW_SLUGS[viewSegment.toLowerCase()] || 'curriculum-home';
    const yearParam = params.get('year');
    const sheetParam = params.get('sheet');
    const editionParam = params.get('edition');

    return {
      type: 'program',
      schoolId: schoolId,
      progCode: progCode,
      targetView: targetView,
      year: yearParam ? parseInt(yearParam, 10) : undefined,
      regDocIdx: sheetParam ? parseInt(sheetParam, 10) : undefined,
      edition: editionParam || undefined,
      modal: modal,
      modalParams: Object.keys(modalParams).length > 0 ? modalParams : undefined
    };
  }

  /**
   * Apply route state to application views and controllers.
   */
  function applyRouteState(routeState, isInitial = false) {
    if (!routeState) return;

    isPopStateNavigating = true;
    try {
      const loginScreen = document.getElementById('loginLandingScreen');

      // If route is explicitly login, show login screen
      if (routeState.type === 'login') {
        if (loginScreen) {
          loginScreen.style.display = 'flex';
          loginScreen.classList.remove('hidden');
        }
        return;
      }

      // User has direct access without mandatory login requirement
      window.ramsAuthenticated = true;
      if (loginScreen) {
        loginScreen.style.display = 'none';
        loginScreen.classList.add('hidden');
      }

      if (routeState.type === 'admin') {
        if (typeof window.renderAdminOverview === 'function') {
          window.renderAdminOverview();
        }
      } else if (routeState.type === 'school') {
        if (typeof window.goToSchoolExd === 'function') {
          window.goToSchoolExd(routeState.schoolId);
        }
      } else {
        const prog = routeState.progCode || 'BSCpE';
        const view = routeState.targetView || 'curriculum-home';

        if (view === 'flowchart') {
          if (typeof window.selectProgram === 'function') {
            window.selectProgram(prog, 'flowchart');
          }
          if (routeState.year && typeof window.setFlowchartYearFilter === 'function') {
            window.setFlowchartYearFilter(routeState.year);
          }
          if (routeState.year && typeof window._expandSidebarYear === 'function') {
            window._expandSidebarYear(prog, routeState.year, 'flowchart');
          }
        } else if (view === 'spreadsheet') {
          if (routeState.year && typeof window.openSpreadsheetForYear === 'function') {
            window.openSpreadsheetForYear(routeState.year);
          } else if (typeof window.selectProgram === 'function') {
            window.selectProgram(prog, 'spreadsheet');
          }
        } else if (view === 'registrar') {
          const sheet = routeState.regDocIdx || 1;
          loadScriptOnce('js/registrar_docs.js').then(() => {
            if (typeof window.selectProgram === 'function') {
              window.selectProgram(prog, 'registrar', sheet);
            }
          }).catch(err => {
            console.error('[SPARouter] Failed to load registrar_docs.js:', err);
          });
        } else if (view === 'past-flowchart') {
          loadScriptOnce('js/past_flowchart_engine.js').then(() => {
            if (typeof window.openPastFlowchart === 'function') {
              window.openPastFlowchart(routeState.edition || 'BSCpE-2021');
            }
            if (routeState.year && typeof window.setPastFlowchartYear === 'function') {
              window.setPastFlowchartYear(routeState.year);
            }
          }).catch(err => {
            console.error('[SPARouter] Failed to load past_flowchart_engine.js:', err);
          });
        } else if (view === 'past-curriculums') {
          loadScriptOnce('js/past_flowchart_engine.js').then(() => {
            if (typeof window.selectProgram === 'function') {
              window.selectProgram(prog, 'past-curriculums');
            }
          }).catch(err => {
            console.error('[SPARouter] Failed to load past_flowchart_engine.js:', err);
          });
        } else if (view === 'homePdProgramView') {
          if (typeof window.selectProgram === 'function') {
            window.selectProgram(prog, 'homePdProgramView');
          }
        } else {
          if (typeof window.selectProgram === 'function') {
            window.selectProgram(prog, view);
          }
        }
      }

      // Keep in-app navHistoryIndex and buttons synchronized if available
      if (typeof window.syncNavHistoryFromPopState === 'function') {
        window.syncNavHistoryFromPopState(routeState);
      }

      // Handle Modals / Drawers Deep-Linking
      handleRouteModals(routeState);

    } finally {
      isPopStateNavigating = false;
      if (!routeState.isRoot) {
        updateBrowserUrl(routeState, true);
      }
    }
  }

  /**
   * Automatically opens or closes modals & drawers corresponding to routeState.
   */
  function handleRouteModals(routeState) {
    const modalName = routeState ? routeState.modal : null;
    const p = (routeState && routeState.modalParams) || {};

    // First dismiss any currently open modals if route specifies no modal or a different one
    if (!modalName) {
      currentModalState = null;
      closeAllAppModals();
      return;
    }

    currentModalState = { modal: modalName, ...p };

    setTimeout(() => {
      try {
        switch (modalName) {
          case 'role-switcher':
            if (typeof window.openLoginModal === 'function') window.openLoginModal();
            break;
          case 'edit-course':
            if (typeof window.openCourseEditModal === 'function') window.openCourseEditModal(p.course || '');
            break;
          case 'course-detail':
            if (p.course && typeof window.openFlowchartDrawer === 'function') window.openFlowchartDrawer(p.course);
            break;
          case 'past-course-detail':
            if (p.course && typeof window.openPastFlowchartDrawer === 'function') window.openPastFlowchartDrawer(p.course);
            break;
          case 'categories':
            if (typeof window.openCategoryManagerModal === 'function') window.openCategoryManagerModal();
            break;
          case 'ai-import':
            if (typeof window.openAiImportModal === 'function') window.openAiImportModal();
            break;
          case 'add-faculty':
            if (typeof window.openAddFacultyModal === 'function') window.openAddFacultyModal(p.prog || '');
            break;
          case 'assign-task':
            if (typeof window.openAssignTaskModal === 'function') window.openAssignTaskModal(p.course || '', p.faculty || '');
            break;
          case 'copilot':
            if (typeof window.openPersonalAgentDrawer === 'function') {
              window.openPersonalAgentDrawer();
            } else if (typeof window.togglePersonalAgentDrawer === 'function') {
              const drawer = document.getElementById('personalAiAgentDrawer');
              if (drawer && drawer.classList.contains('hidden')) window.togglePersonalAgentDrawer();
            }
            break;
          case 'add-school':
            if (typeof window.openAddSchoolModal === 'function') window.openAddSchoolModal();
            break;
          case 'edit-school':
            if (p.school && typeof window.openEditSchoolModal === 'function') window.openEditSchoolModal(p.school);
            break;
          case 'add-program':
            if (typeof window.openAddProgramModal === 'function') window.openAddProgramModal(p.school || null);
            break;
          case 'edit-program':
            if (p.prog && typeof window.openEditProgramModal === 'function') window.openEditProgramModal(p.prog);
            break;
          case 'pillar':
            if (p.pillar && typeof window.showPillarModal === 'function') window.showPillarModal(p.pillar);
            break;
          case 'audit-diff':
            if (p.hash && typeof window.openAuditDiffModal === 'function') window.openAuditDiffModal(p.hash);
            break;
          case 'cycle-simulator':
            if (typeof window.openCycleSimulatorModal === 'function') window.openCycleSimulatorModal();
            break;
          case 'assign-pd':
            if (typeof window.openAddPdModal === 'function') window.openAddPdModal(p.school || '');
            break;
        }
      } catch (err) {
        console.warn('[SpaRouter] Error applying modal route state:', err);
      }
    }, 60);
  }

  function closeAllAppModals() {
    try {
      const modalIds = [
        'loginModal',
        'courseEditModal',
        'flowchartDetailDrawer',
        'pastFlowchartDetailDrawer',
        'personalAiAgentDrawer',
        'personalAgentBackdrop',
        'categoryManagerModal',
        'aiImportModal',
        'modalAddFaculty',
        'modalAssignTask',
        'modalAddSchool',
        'modalEditSchool',
        'modalAddProgram',
        'modalEditProgram',
        'pillarModal',
        'auditDiffModal',
        'cycleModal',
        'modalAddPd'
      ];
      modalIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && !el.classList.contains('hidden')) {
          el.classList.add('hidden');
        }
      });
      document.body.style.overflow = '';
    } catch (e) {}
  }

  /**
   * Called by navigation hooks (recordNavigationStep, setFlowchartYearFilter, etc.)
   */
  function onNavStep(entry) {
    if (isPopStateNavigating) return;
    updateBrowserUrl(entry, false);
  }

  /**
   * Update a specific URL query parameter in place (e.g. ?year=2 or ?sheet=3)
   */
  function updateParam(key, value) {
    if (isPopStateNavigating) return;

    const currentRoute = parseCurrentLocation();
    if (key === 'year') {
      currentRoute.year = (value === 'all' || !value) ? undefined : parseInt(value, 10);
    } else if (key === 'sheet') {
      currentRoute.regDocIdx = parseInt(value, 10);
    }

    updateBrowserUrl(currentRoute, true);
  }

  /**
   * Listen to browser Back and Forward button events.
   */
  window.addEventListener('popstate', function(event) {
    const state = event.state || parseCurrentLocation();
    applyRouteState(state);
  });

  /**
   * Initialize router when DOM is loaded.
   */
  function initRouter() {
    if (isInitialized) return;
    isInitialized = true;

    window.ramsAuthenticated = true;
    window.ramsUserRole = window.ramsUserRole || 'admin';

    const route = parseCurrentLocation();
    const loginScreen = document.getElementById('loginLandingScreen');

    if (route && route.type === 'login') {
      if (loginScreen) {
        loginScreen.style.display = 'flex';
        loginScreen.classList.remove('hidden');
      }
    } else {
      if (loginScreen) {
        loginScreen.style.display = 'none';
        loginScreen.classList.add('hidden');
      }
      applyRouteState(route, true);
    }
  }

  // Execute immediately upon script evaluation to prevent any FOUC or page flash
  try {
    initRouter();
  } catch (e) {}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
  }

  // --- EXPORTS ON WINDOW ---
  window.spaRouter = {
    onNavStep: onNavStep,
    onModalOpen: onModalOpen,
    onModalClose: onModalClose,
    updateParam: updateParam,
    buildUrlForState: buildUrlForState,
    updateBrowserUrl: updateBrowserUrl,
    parseCurrentLocation: parseCurrentLocation,
    applyRouteState: applyRouteState,
    closeAllAppModals: closeAllAppModals
  };

})(window);
