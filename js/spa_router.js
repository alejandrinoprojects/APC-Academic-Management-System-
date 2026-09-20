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

  /**
   * Build clean canonical URL path for a given navigation state.
   */
  function buildUrlForState(state) {
    if (!state) return '/';

    // If login landing screen is currently visible
    const loginScreen = document.getElementById('loginLandingScreen');
    if (loginScreen && !loginScreen.classList.contains('hidden') && state.isRoot) {
      return '/';
    }

    // 1. Root / Institutional overview
    if (state.type === 'admin' || state.targetView === 'home') {
      if (state.isRoot) return '/';
      return '/schools';
    }

    // 2. School EXD overview (/school/soe, /school/socit, etc.)
    if (state.type === 'school' && state.schoolId) {
      return `/school/${String(state.schoolId).toLowerCase()}`;
    }

    // 3. Program views
    const progCode = state.progCode || window.currentSelectedProgram || 'BSCpE';
    const progSlug = PROGRAM_TO_SLUG[progCode] || 'cpe';

    const viewId = state.targetView || 'curriculum-home';
    const viewSlug = VIEW_TO_SLUG[viewId] || viewId;

    let path = `/${progSlug}/${viewSlug}`;

    // Add query parameters for sub-states
    const queryParts = [];

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
    }
    // Historical Flowchart edition param
    else if (viewId === 'past-flowchart') {
      const edition = state.edition || 'BSCpE-2021';
      queryParts.push(`edition=${edition}`);
      if (state.year && state.year !== 'all') {
        queryParts.push(`year=${state.year}`);
      }
    }

    if (queryParts.length > 0) {
      path += `?${queryParts.join('&')}`;
    }

    return path;
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

    // Root or empty path -> landing or schools overview
    if (segments.length === 0 || segments[0] === 'schools' || segments[0] === 'home') {
      return { type: 'admin', targetView: 'home', isRoot: segments.length === 0 };
    }

    // School route: /school/:schoolId
    if (segments[0] === 'school' && segments[1]) {
      return { type: 'school', schoolId: segments[1].toLowerCase() };
    }

    let progCode = 'BSCpE';
    let viewSegment = '';

    // If first segment is a recognized program slug: /cpe/flowchart
    if (PROGRAM_SLUGS[segments[0].toLowerCase()]) {
      progCode = PROGRAM_SLUGS[segments[0].toLowerCase()];
      viewSegment = segments[1] || 'curriculum-home';
    } else {
      // Direct view slug: /flowchart
      viewSegment = segments[0];
    }

    const targetView = VIEW_SLUGS[viewSegment.toLowerCase()] || 'curriculum-home';
    const yearParam = params.get('year');
    const sheetParam = params.get('sheet');
    const editionParam = params.get('edition');

    return {
      type: 'program',
      progCode: progCode,
      targetView: targetView,
      year: yearParam ? parseInt(yearParam, 10) : undefined,
      regDocIdx: sheetParam ? parseInt(sheetParam, 10) : undefined,
      edition: editionParam || undefined
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
      const isAuth = Boolean(window.ramsAuthenticated);

      // If state is root '/', show login screen
      if (routeState.isRoot) {
        if (loginScreen) loginScreen.classList.remove('hidden');
        return;
      }

      // If user is not authenticated, keep login screen visible and save route
      if (!isAuth) {
        if (loginScreen) loginScreen.classList.remove('hidden');
        window._pendingRouteAfterLogin = routeState;
        return;
      }

      // User is authenticated: ensure login screen is hidden
      if (loginScreen) loginScreen.classList.add('hidden');

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
          if (typeof window.selectProgram === 'function') {
            window.selectProgram(prog, 'spreadsheet');
          }
          if (routeState.year && typeof window.openSpreadsheetForYear === 'function') {
            window.openSpreadsheetForYear(routeState.year);
          }
        } else if (view === 'registrar') {
          const sheet = routeState.regDocIdx || 1;
          if (typeof window.selectProgram === 'function') {
            window.selectProgram(prog, 'registrar', sheet);
          }
        } else if (view === 'past-flowchart') {
          if (typeof window.openPastFlowchart === 'function') {
            window.openPastFlowchart(routeState.edition || 'BSCpE-2021');
          }
          if (routeState.year && typeof window.setPastFlowchartYear === 'function') {
            window.setPastFlowchartYear(routeState.year);
          }
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

    } finally {
      isPopStateNavigating = false;
      if (!routeState.isRoot) {
        updateBrowserUrl(routeState, true);
      }
    }
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

    // Session storage disabled: purge any stale credentials
    try {
      sessionStorage.removeItem('rams_authenticated');
      sessionStorage.removeItem('rams_user_role');
    } catch (e) {}
    window.ramsAuthenticated = false;

    const route = parseCurrentLocation();
    const loginScreen = document.getElementById('loginLandingScreen');

    // Always ensure login screen is visible on initial load / reload
    if (loginScreen) loginScreen.classList.remove('hidden');

    if (!route.isRoot) {
      // Direct deep link accessed: save target route to fulfill upon login
      window._pendingRouteAfterLogin = route;
    } else {
      window._pendingRouteAfterLogin = null;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
  } else {
    setTimeout(initRouter, 30);
  }

  // --- EXPORTS ON WINDOW ---
  window.spaRouter = {
    onNavStep: onNavStep,
    updateParam: updateParam,
    buildUrlForState: buildUrlForState,
    updateBrowserUrl: updateBrowserUrl,
    parseCurrentLocation: parseCurrentLocation,
    applyRouteState: applyRouteState
  };

})(window);
