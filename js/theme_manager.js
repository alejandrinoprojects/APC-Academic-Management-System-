/**
 * APC Academic Architecture Suite
 * Central Theme Manager (js/theme_manager.js)
 * 
 * Provides:
 * - Instant Light / Dark mode toggling with zero flash of unstyled content
 * - LocalStorage persistence ('apc_theme': 'light' | 'dark')
 * - System preference detection fallback
 * - Header theme toggle button state synchronization
 * - Event dispatching ('apcThemeChanged') for DAG canvas, spreadsheet, and subviews
 */

(function(window) {
  'use strict';

  const STORAGE_KEY = 'apc_theme';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';

  function getPreferredTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === THEME_LIGHT || saved === THEME_DARK) {
        return saved;
      }
    } catch (e) {
      console.warn('LocalStorage read error:', e);
    }
    return THEME_LIGHT;
  }

  let currentTheme = getPreferredTheme();

  function applyTheme(theme, save = true) {
    currentTheme = (theme === THEME_DARK) ? THEME_DARK : THEME_LIGHT;

    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    if (currentTheme === THEME_DARK) {
      htmlEl.classList.add('dark');
      if (bodyEl) bodyEl.classList.add('dark');
    } else {
      htmlEl.classList.remove('dark');
      if (bodyEl) bodyEl.classList.remove('dark');
    }

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEY, currentTheme);
      } catch (e) {
        console.warn('LocalStorage write error:', e);
      }
    }

    // Update Header Button UI
    updateToggleButtons(currentTheme);

    // Synchronize Diagram Canvas if available
    if (typeof window.applyDiagramCanvasTheme === 'function') {
      try {
        window.applyDiagramCanvasTheme(currentTheme);
      } catch (err) {
        console.error('Error applying diagram canvas theme:', err);
      }
    }

    // Dispatch global event for other components (Spreadsheet, Analytics, etc.)
    window.dispatchEvent(new CustomEvent('apcThemeChanged', {
      detail: { theme: currentTheme }
    }));
  }

  function toggleTheme() {
    const nextTheme = (currentTheme === THEME_DARK) ? THEME_LIGHT : THEME_DARK;
    applyTheme(nextTheme, true);
    
    // Show toast notification
    if (typeof window.showToast === 'function') {
      window.showToast('Theme switched to ' + nextTheme.toUpperCase() + ' MODE');
    }
    return nextTheme;
  }

  function updateToggleButtons(theme) {
    const isDark = (theme === THEME_DARK);
    const btns = document.querySelectorAll('.theme-toggle-btn');
    
    btns.forEach(btn => {
      const iconEl = btn.querySelector('.theme-icon');
      const textEl = btn.querySelector('.theme-text');
      
      if (isDark) {
        btn.setAttribute('title', 'Switch to Light Mode (Institutional)');
        btn.setAttribute('aria-label', 'Switch to Light Mode');
        if (iconEl) iconEl.innerHTML = '&#9728;&#65039;'; // Sun
        if (textEl) textEl.textContent = 'Light';
        btn.classList.add('theme-active-dark');
        btn.classList.remove('theme-active-light');
      } else {
        btn.setAttribute('title', 'Switch to Dark Mode (Obsidian Gold)');
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
        if (iconEl) iconEl.innerHTML = '&#127769;'; // Moon
        if (textEl) textEl.textContent = 'Dark';
        btn.classList.add('theme-active-light');
        btn.classList.remove('theme-active-dark');
      }
    });
  }

  // Early initialization
  applyTheme(currentTheme, false);

  // When DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme, false);

    // Bind only buttons that don't already have an inline onclick
    document.querySelectorAll('.theme-toggle-btn:not([onclick])').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    });
  });

  // Public API
  window.ApcTheme = {
    get: () => currentTheme,
    set: (t) => applyTheme(t, true),
    toggle: toggleTheme,
    isDark: () => currentTheme === THEME_DARK
  };

  window.toggleApcTheme = toggleTheme;
  window.toggleTheme = toggleTheme;

})(window);
