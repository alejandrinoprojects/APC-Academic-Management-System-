/**
 * APC Academic Architecture Suite
 * Flowchart DAG Canvas Engine (js/diagram_canvas.js)
 * 
 * Features:
 * 1. Full 74-Course BSCpE 2026 Interactive Canvas & Swimlane Layout
 * 2. Pixel-Perfect Cursor-Anchored Zooming (Math.round raster alignment, zero drift, crisp rendering)
 * 3. Magnetic Snapping to Existing Elements (Left, Center, Right, Top, Middle, Bottom)
 * 4. Dynamic SVG Smart Alignment Guide Lines (HUD rulers & target node indicator)
 * 5. Grid Snapping fallback (28px) & Real-time Manhattan 90° Orthogonal Arrow Re-routing
 * 6. Interactive Node Repositioning & Persistence (localStorage)
 */

(function(window) {
  'use strict';

  // --- CONFIGURATION & STATE ---
  let diagramCanvasTheme = 'light';
  try {
    const savedTheme = localStorage.getItem('apc_theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      diagramCanvasTheme = savedTheme;
    }
  } catch (e) {}
  let diagramGridSnapEnabled = true;
  let diagramElementSnapEnabled = true;
  const GRID_SNAP_SIZE = 28;
  const ELEMENT_SNAP_THRESHOLD = 8; // Pixels in canvas space

  let diagramZoom = 0.85;
  let diagramPanX = 30;
  let diagramPanY = 20;
  let diagramLayoutMode = 'swimlanes';
  let showAllArrowsEnabled = true;
  let currentSelectedCode = null;
  let requisiteFilterMode = 'direct';

  // Custom coordinates persisted in localStorage
  let customNodeCoords = {};
  try {
    const saved = localStorage.getItem('apc_flowchart_node_coords');
    if (saved) {
      customNodeCoords = JSON.parse(saved) || {};
    }
  } catch (e) {
    console.warn('Could not read saved node coords:', e);
  }

  // Dragging & Panning State
  let isDraggingNode = false;
  let activeDragNode = null;
  let dragMouseStartX = 0;
  let dragMouseStartY = 0;
  let nodeStartPosX = 0;
  let nodeStartPosY = 0;
  let nodeDragDistance = 0;

  let isPanningCanvas = false;
  let panMouseStartX = 0;
  let panMouseStartY = 0;
  let panStartPanX = 0;
  let panStartPanY = 0;

  // Helper to safely get ALL_COURSES
  function getCourses() {
    if (typeof window.ALL_COURSES !== 'undefined' && Array.isArray(window.ALL_COURSES)) {
      return window.ALL_COURSES;
    }
    return [];
  }

  // =========================================================================
  // PIXEL-PERFECT ZOOM ENGINE
  // =========================================================================

  function getMinDiagramZoom() {
    const wrapper = document.getElementById('vectorDiagramWrapper') || document.getElementById('diagramCanvasContainer');
    const nodes = document.querySelectorAll('.diagram-node');
    if (!wrapper || nodes.length === 0) return 0.28;

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodes.forEach(node => {
      const x = parseFloat(node.style.left) || 0;
      const y = parseFloat(node.style.top) || 0;
      const w = node.offsetWidth || 224;
      const h = node.offsetHeight || 88;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x + w > maxX) maxX = x + w;
      if (y + h > maxY) maxY = y + h;
    });
    if (minX === Infinity) return 0.28;

    const totalW = maxX - minX + 100;
    const totalH = maxY - minY + 100;
    const containerW = wrapper.clientWidth || 1200;
    const containerH = wrapper.clientHeight || 800;

    const fitScale = Math.min((containerW - 40) / totalW, (containerH - 40) / totalH);
    return Math.max(0.25, Math.min(0.75, Number(fitScale.toFixed(2))));
  }

  function applyDiagramTransform() {
    const viewport = document.getElementById('diagramViewport');
    const zoomDisplay = document.getElementById('diagramZoomPercent');
    const hudDisplay = document.getElementById('hudZoomPercent');

    if (viewport) {
      // Crisp CSS configuration for pixel-perfection:
      viewport.style.transformOrigin = '0 0';
      viewport.style.willChange = 'transform';
      // Use translate3d with exact rounded integer pixels to avoid subpixel blurriness
      viewport.style.transform = `translate3d(${Math.round(diagramPanX)}px, ${Math.round(diagramPanY)}px, 0) scale(${diagramZoom})`;
    }

    const pctText = `${Math.round(diagramZoom * 100)}%`;
    if (zoomDisplay) zoomDisplay.innerText = pctText;
    if (hudDisplay) hudDisplay.innerText = pctText;

    updateZoomHudButtons();
  }

  function updateZoomHudButtons() {
    const minZ = getMinDiagramZoom();
    const btnOut = document.getElementById('btnDiagramZoomOut');
    const hudOut = document.getElementById('hudZoomOut');
    const isAtMin = diagramZoom <= minZ + 0.01;

    [btnOut, hudOut].forEach(btn => {
      if (!btn) return;
      if (isAtMin) {
        btn.classList.add('opacity-40', 'cursor-not-allowed');
      } else {
        btn.classList.remove('opacity-40', 'cursor-not-allowed');
      }
    });
  }

  /**
   * Cursor-Centered Pixel-Perfect Zooming
   * Keeps the canvas coordinate directly under the mouse cursor unchanged.
   */
  function zoomAtPoint(mouseX, mouseY, zoomFactor) {
    const minZoom = getMinDiagramZoom();
    const maxZoom = 2.50;

    let targetZoom = diagramZoom * zoomFactor;
    targetZoom = Math.min(maxZoom, Math.max(minZoom, targetZoom));
    // Clean rounding for zoom precision (avoid tiny floating point noise)
    targetZoom = Math.round(targetZoom * 1000) / 1000;

    if (Math.abs(targetZoom - diagramZoom) < 0.001) return;

    // Point in unscaled canvas coordinates before zoom
    const canvasX = (mouseX - diagramPanX) / diagramZoom;
    const canvasY = (mouseY - diagramPanY) / diagramZoom;

    // Calculate new pan so (canvasX, canvasY) stays exactly at (mouseX, mouseY)
    // Math.round() guarantees exact 1:1 physical pixel grid alignment
    diagramPanX = Math.round(mouseX - canvasX * targetZoom);
    diagramPanY = Math.round(mouseY - canvasY * targetZoom);
    diagramZoom = targetZoom;

    applyDiagramTransform();
  }

  function handleDiagramWheel(e) {
    const wrapper = document.getElementById('vectorDiagramWrapper');
    if (!wrapper) return;

    // Only zoom when mouse is over the diagram wrapper
    e.preventDefault();

    const rect = wrapper.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    let zoomFactor;
    if (e.ctrlKey || e.metaKey) {
      // Touchpad pinch
      zoomFactor = Math.exp(-e.deltaY * 0.01);
    } else {
      // Precise wheel notch
      const delta = Math.sign(e.deltaY);
      zoomFactor = delta < 0 ? 1.09 : 0.917;
    }

    zoomAtPoint(mouseX, mouseY, zoomFactor);
  }

  function diagramZoomIn() {
    const wrapper = document.getElementById('vectorDiagramWrapper');
    const cx = wrapper ? wrapper.clientWidth / 2 : 600;
    const cy = wrapper ? wrapper.clientHeight / 2 : 400;
    zoomAtPoint(cx, cy, 1.15);
  }

  function diagramZoomOut() {
    const wrapper = document.getElementById('vectorDiagramWrapper');
    const cx = wrapper ? wrapper.clientWidth / 2 : 600;
    const cy = wrapper ? wrapper.clientHeight / 2 : 400;
    zoomAtPoint(cx, cy, 0.87);
  }

  function diagramResetZoom() {
    const wrapper = document.getElementById('vectorDiagramWrapper');
    const cx = wrapper ? wrapper.clientWidth / 2 : 600;
    const cy = wrapper ? wrapper.clientHeight / 2 : 400;
    
    // Zoom to 1.0 (100%) centered on viewport
    const canvasX = (cx - diagramPanX) / diagramZoom;
    const canvasY = (cy - diagramPanY) / diagramZoom;
    diagramZoom = 1.0;
    diagramPanX = Math.round(cx - canvasX * 1.0);
    diagramPanY = Math.round(cy - canvasY * 1.0);
    applyDiagramTransform();
    if (typeof window.showToast === 'function') {
      window.showToast('Diagram zoom reset to 100% standard 1:1 pixel scale.');
    }
  }

  function diagramFitView() {
    const wrapper = document.getElementById('vectorDiagramWrapper');
    const nodes = document.querySelectorAll('.diagram-node');
    if (!wrapper || nodes.length === 0) return;

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodes.forEach(node => {
      const x = parseFloat(node.style.left) || 0;
      const y = parseFloat(node.style.top) || 0;
      const w = node.offsetWidth || 224;
      const h = node.offsetHeight || 88;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x + w > maxX) maxX = x + w;
      if (y + h > maxY) maxY = y + h;
    });

    if (minX === Infinity) return;

    const totalW = maxX - minX + 120;
    const totalH = maxY - minY + 120;
    const containerW = wrapper.clientWidth || 1200;
    const containerH = wrapper.clientHeight || 800;

    const scaleX = (containerW - 60) / totalW;
    const scaleY = (containerH - 60) / totalH;
    diagramZoom = Math.min(Math.max(Math.min(scaleX, scaleY), 0.25), 1.2);
    diagramZoom = Math.round(diagramZoom * 100) / 100;

    diagramPanX = Math.round((containerW - totalW * diagramZoom) / 2 - minX * diagramZoom + 40 * diagramZoom);
    diagramPanY = Math.round((containerH - totalH * diagramZoom) / 2 - minY * diagramZoom + 30 * diagramZoom);

    applyDiagramTransform();
    if (typeof window.showToast === 'function') {
      window.showToast(`Diagram fitted to view (${Math.round(diagramZoom * 100)}% zoom).`);
    }
  }

  // =========================================================================
  // MAGNETIC SNAPPING TO EXISTING ELEMENTS & GRID ENGINE
  // =========================================================================

  function toggleElementSnap() {
    diagramElementSnapEnabled = !diagramElementSnapEnabled;
    updateSnapButtonUI();
    if (typeof window.showToast === 'function') {
      window.showToast(diagramElementSnapEnabled 
        ? '🧲 Magnetic Snapping to Existing Elements: ENABLED (Aligns to edges/centers with smart guides).' 
        : 'Snap to elements DISABLED.');
    }
  }

  function toggleDiagramGridSnap() {
    diagramGridSnapEnabled = !diagramGridSnapEnabled;
    updateSnapButtonUI();
    if (typeof window.showToast === 'function') {
      window.showToast(diagramGridSnapEnabled 
        ? `⊞ Grid Snapping: ENABLED (${GRID_SNAP_SIZE}px grid).` 
        : 'Grid snap DISABLED.');
    }
  }

  function updateSnapButtonUI() {
    const btnElem = document.getElementById('btnToggleElemSnap');
    const btnGrid = document.getElementById('btnToggleGridSnap');
    const hudSnap = document.getElementById('hudSnapStatus');

    if (btnElem) {
      if (diagramElementSnapEnabled) {
        btnElem.className = 'px-2.5 py-1 bg-cyan-50 text-cyan-900 border border-cyan-400 font-bold text-xs flex items-center gap-1.5 transition shadow-xs cursor-pointer';
        btnElem.innerHTML = '<span>🧲</span><span>Element Snap: ON</span>';
      } else {
        btnElem.className = 'px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 text-xs flex items-center gap-1.5 transition hover:text-white cursor-pointer';
        btnElem.innerHTML = '<span>🧲</span><span>Element Snap: OFF</span>';
      }
    }

    if (btnGrid) {
      if (diagramGridSnapEnabled) {
        btnGrid.className = 'px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-400 font-bold text-xs flex items-center gap-1.5 transition shadow-xs cursor-pointer';
        btnGrid.innerHTML = '<span>⊞</span><span>Grid: 28px</span>';
      } else {
        btnGrid.className = 'px-2.5 py-1 bg-slate-800 text-slate-400 border border-slate-700 text-xs flex items-center gap-1.5 transition hover:text-white cursor-pointer';
        btnGrid.innerHTML = '<span>⊞</span><span>Grid: OFF</span>';
      }
    }

    if (hudSnap) {
      if (diagramElementSnapEnabled && diagramGridSnapEnabled) {
        hudSnap.innerText = 'Smart Snap (Elements & Grid)';
        hudSnap.className = 'text-[11px] font-mono text-cyan-400 font-semibold';
      } else if (diagramElementSnapEnabled) {
        hudSnap.innerText = 'Element Snap';
        hudSnap.className = 'text-[11px] font-mono text-cyan-400 font-semibold';
      } else if (diagramGridSnapEnabled) {
        hudSnap.innerText = 'Grid Snap (28px)';
        hudSnap.className = 'text-[11px] font-mono text-amber-400 font-semibold';
      } else {
        hudSnap.innerText = 'Free Drag';
        hudSnap.className = 'text-[11px] font-mono text-slate-400';
      }
    }
  }

  /**
   * Evaluates alignment candidates across all other existing course cards.
   * If within ELEMENT_SNAP_THRESHOLD, snaps and generates HUD guide lines.
   */
  function computeElementSnap(rawX, rawY, cardW, cardH, currentCardId) {
    const allCards = document.querySelectorAll('.diagram-node');
    let snappedX = rawX;
    let snappedY = rawY;
    let bestDistX = ELEMENT_SNAP_THRESHOLD + 1;
    let bestDistY = ELEMENT_SNAP_THRESHOLD + 1;
    let guideX = null;
    let guideY = null;

    // Dragged node bounds
    const A = {
      left: rawX,
      center: rawX + cardW / 2,
      right: rawX + cardW,
      top: rawY,
      middle: rawY + cardH / 2,
      bottom: rawY + cardH
    };

    allCards.forEach(card => {
      if (card.id === currentCardId) return;

      const bLeft = parseFloat(card.style.left) || 0;
      const bTop = parseFloat(card.style.top) || 0;
      const bW = card.offsetWidth || 224;
      const bH = card.offsetHeight || 88;

      const B = {
        card: card,
        code: card.id.replace('node-', ''),
        left: bLeft,
        center: bLeft + bW / 2,
        right: bLeft + bW,
        top: bTop,
        middle: bTop + bH / 2,
        bottom: bTop + bH
      };

      if (!diagramElementSnapEnabled) return;

      // 1. Horizontal X alignments (Vertical Guide Lines)
      // A.left == B.left
      let d = Math.abs(A.left - B.left);
      if (d < bestDistX) {
        bestDistX = d;
        snappedX = B.left;
        guideX = {
          lineX: B.left,
          type: 'Left',
          fromY: Math.min(A.top, B.top) - 24,
          toY: Math.max(A.bottom, B.bottom) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }
      // A.center == B.center
      d = Math.abs(A.center - B.center);
      if (d < bestDistX) {
        bestDistX = d;
        snappedX = B.center - cardW / 2;
        guideX = {
          lineX: B.center,
          type: 'Center',
          fromY: Math.min(A.top, B.top) - 24,
          toY: Math.max(A.bottom, B.bottom) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }
      // A.right == B.right
      d = Math.abs(A.right - B.right);
      if (d < bestDistX) {
        bestDistX = d;
        snappedX = B.right - cardW;
        guideX = {
          lineX: B.right,
          type: 'Right',
          fromY: Math.min(A.top, B.top) - 24,
          toY: Math.max(A.bottom, B.bottom) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }
      // Abutting: A.left == B.right
      d = Math.abs(A.left - B.right);
      if (d < bestDistX) {
        bestDistX = d;
        snappedX = B.right;
        guideX = {
          lineX: B.right,
          type: 'Adjacent',
          fromY: Math.min(A.top, B.top) - 24,
          toY: Math.max(A.bottom, B.bottom) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }
      // Abutting: A.right == B.left
      d = Math.abs(A.right - B.left);
      if (d < bestDistX) {
        bestDistX = d;
        snappedX = B.left - cardW;
        guideX = {
          lineX: B.left,
          type: 'Adjacent',
          fromY: Math.min(A.top, B.top) - 24,
          toY: Math.max(A.bottom, B.bottom) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }

      // 2. Vertical Y alignments (Horizontal Guide Lines)
      // A.top == B.top
      d = Math.abs(A.top - B.top);
      if (d < bestDistY) {
        bestDistY = d;
        snappedY = B.top;
        guideY = {
          lineY: B.top,
          type: 'Top',
          fromX: Math.min(A.left, B.left) - 24,
          toX: Math.max(A.right, B.right) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }
      // A.middle == B.middle
      d = Math.abs(A.middle - B.middle);
      if (d < bestDistY) {
        bestDistY = d;
        snappedY = B.middle - cardH / 2;
        guideY = {
          lineY: B.middle,
          type: 'Middle',
          fromX: Math.min(A.left, B.left) - 24,
          toX: Math.max(A.right, B.right) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }
      // A.bottom == B.bottom
      d = Math.abs(A.bottom - B.bottom);
      if (d < bestDistY) {
        bestDistY = d;
        snappedY = B.bottom - cardH;
        guideY = {
          lineY: B.bottom,
          type: 'Bottom',
          fromX: Math.min(A.left, B.left) - 24,
          toX: Math.max(A.right, B.right) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }
      // Stacked: A.top == B.bottom
      d = Math.abs(A.top - B.bottom);
      if (d < bestDistY) {
        bestDistY = d;
        snappedY = B.bottom;
        guideY = {
          lineY: B.bottom,
          type: 'Stacked',
          fromX: Math.min(A.left, B.left) - 24,
          toX: Math.max(A.right, B.right) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }
      // Stacked: A.bottom == B.top
      d = Math.abs(A.bottom - B.top);
      if (d < bestDistY) {
        bestDistY = d;
        snappedY = B.top - cardH;
        guideY = {
          lineY: B.top,
          type: 'Stacked',
          fromX: Math.min(A.left, B.left) - 24,
          toX: Math.max(A.right, B.right) + 24,
          targetCard: card,
          targetCode: B.code
        };
      }
    });

    // Fall back to 28px grid snap if not element-snapped
    if (!guideX && diagramGridSnapEnabled) {
      snappedX = Math.round(rawX / GRID_SNAP_SIZE) * GRID_SNAP_SIZE;
    }
    if (!guideY && diagramGridSnapEnabled) {
      snappedY = Math.round(rawY / GRID_SNAP_SIZE) * GRID_SNAP_SIZE;
    }

    return {
      x: Math.round(snappedX),
      y: Math.round(snappedY),
      guideX,
      guideY
    };
  }

  /**
   * Renders dynamic HUD alignment rulers in SVG
   */
  function renderSnapGuides(guideX, guideY) {
    let guidesGroup = document.getElementById('diagramSnapGuidesGroup');
    if (!guidesGroup) {
      const svg = document.getElementById('diagramSvg');
      if (svg) {
        guidesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        guidesGroup.id = 'diagramSnapGuidesGroup';
        svg.appendChild(guidesGroup);
      }
    }
    if (!guidesGroup) return;

    guidesGroup.innerHTML = '';
    document.querySelectorAll('.snap-target-highlight').forEach(el => {
      el.classList.remove('snap-target-highlight', 'ring-2', 'ring-cyan-400', 'ring-offset-1');
    });

    if (guideX) {
      // Guide Line
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', guideX.lineX);
      line.setAttribute('y1', guideX.fromY);
      line.setAttribute('x2', guideX.lineX);
      line.setAttribute('y2', guideX.toY);
      line.setAttribute('stroke', '#0284c7'); // Bright Blue/Cyan
      line.setAttribute('stroke-width', '2');
      line.setAttribute('stroke-dasharray', '5 3');
      line.setAttribute('class', 'snap-guide-line');
      guidesGroup.appendChild(line);

      // Endpoint Dots
      [guideX.fromY, guideX.toY].forEach(y => {
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', guideX.lineX);
        dot.setAttribute('cy', y);
        dot.setAttribute('r', '3.5');
        dot.setAttribute('fill', '#0284c7');
        guidesGroup.appendChild(dot);
      });

      // Badge Container with Background Pill
      const gBadge = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const labelStr = `${guideX.type} Snap: ${guideX.targetCode}`;
      const badgeW = labelStr.length * 6.8 + 12;
      rect.setAttribute('x', guideX.lineX + 4);
      rect.setAttribute('y', guideX.fromY);
      rect.setAttribute('width', badgeW);
      rect.setAttribute('height', '18');
      rect.setAttribute('fill', '#0284c7');
      rect.setAttribute('rx', '2');
      gBadge.appendChild(rect);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', guideX.lineX + 10);
      text.setAttribute('y', guideX.fromY + 13);
      text.setAttribute('fill', '#ffffff');
      text.setAttribute('font-size', '10px');
      text.setAttribute('font-family', 'JetBrains Mono, monospace');
      text.setAttribute('font-weight', 'bold');
      text.textContent = labelStr;
      gBadge.appendChild(text);
      guidesGroup.appendChild(gBadge);

      if (guideX.targetCard) {
        guideX.targetCard.classList.add('snap-target-highlight', 'ring-2', 'ring-sky-500', 'ring-offset-1');
      }
    }

    if (guideY) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', guideY.fromX);
      line.setAttribute('y1', guideY.lineY);
      line.setAttribute('x2', guideY.toX);
      line.setAttribute('y2', guideY.lineY);
      line.setAttribute('stroke', '#d97706'); // Warm Amber
      line.setAttribute('stroke-width', '2');
      line.setAttribute('stroke-dasharray', '5 3');
      line.setAttribute('class', 'snap-guide-line');
      guidesGroup.appendChild(line);

      [guideY.fromX, guideY.toX].forEach(x => {
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', x);
        dot.setAttribute('cy', guideY.lineY);
        dot.setAttribute('r', '3.5');
        dot.setAttribute('fill', '#d97706');
        guidesGroup.appendChild(dot);
      });

      const gBadge = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const labelStr = `${guideY.type} Snap: ${guideY.targetCode}`;
      const badgeW = labelStr.length * 6.8 + 12;
      rect.setAttribute('x', guideY.fromX);
      rect.setAttribute('y', guideY.lineY - 20);
      rect.setAttribute('width', badgeW);
      rect.setAttribute('height', '18');
      rect.setAttribute('fill', '#d97706');
      rect.setAttribute('rx', '2');
      gBadge.appendChild(rect);

      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', guideY.fromX + 6);
      text.setAttribute('y', guideY.lineY - 7);
      text.setAttribute('fill', '#ffffff');
      text.setAttribute('font-size', '10px');
      text.setAttribute('font-family', 'JetBrains Mono, monospace');
      text.setAttribute('font-weight', 'bold');
      text.textContent = labelStr;
      gBadge.appendChild(text);
      guidesGroup.appendChild(gBadge);

      if (guideY.targetCard) {
        guideY.targetCard.classList.add('snap-target-highlight', 'ring-2', 'ring-amber-500', 'ring-offset-1');
      }
    }
  }

  function clearSnapGuides() {
    const guidesGroup = document.getElementById('diagramSnapGuidesGroup');
    if (guidesGroup) guidesGroup.innerHTML = '';
    document.querySelectorAll('.snap-target-highlight').forEach(el => {
      el.classList.remove('snap-target-highlight', 'ring-2', 'ring-cyan-400', 'ring-amber-400', 'ring-offset-1');
    });
  }

  // =========================================================================
  // NODE ELEMENT DRAG & CANVAS PAN INTERACTION HANDLERS
  // =========================================================================

  function handleNodeMouseDown(e, card, course) {
    // Only primary mouse button initiates drag
    if (e.button !== 0) return;
    e.stopPropagation();

    isDraggingNode = true;
    activeDragNode = {
      card: card,
      code: course.code,
      width: card.offsetWidth || 224,
      height: card.offsetHeight || 88
    };

    dragMouseStartX = e.clientX;
    dragMouseStartY = e.clientY;
    nodeStartPosX = parseFloat(card.style.left) || 0;
    nodeStartPosY = parseFloat(card.style.top) || 0;
    nodeDragDistance = 0;

    card.classList.add('z-50', 'shadow-2xl', 'opacity-90', 'cursor-grabbing');
  }

  function handleWindowMouseMove(e) {
    if (isDraggingNode && activeDragNode) {
      const dx = (e.clientX - dragMouseStartX) / diagramZoom;
      const dy = (e.clientY - dragMouseStartY) / diagramZoom;
      nodeDragDistance = Math.hypot(e.clientX - dragMouseStartX, e.clientY - dragMouseStartY);

      if (nodeDragDistance > 4) {
        const rawX = nodeStartPosX + dx;
        const rawY = nodeStartPosY + dy;

        // Apply magnetic element snap + grid snap
        const snap = computeElementSnap(rawX, rawY, activeDragNode.width, activeDragNode.height, activeDragNode.card.id);

        activeDragNode.card.style.left = `${snap.x}px`;
        activeDragNode.card.style.top = `${snap.y}px`;

        // Render visual smart guides
        renderSnapGuides(snap.guideX, snap.guideY);

        // Update custom coordinates & re-route arrows in real time
        customNodeCoords[activeDragNode.code] = { x: snap.x, y: snap.y };
        drawAllArrows();
      }
    } else if (isPanningCanvas) {
      const dx = e.clientX - panMouseStartX;
      const dy = e.clientY - panMouseStartY;

      // Integer rounding for pixel-perfect pan
      diagramPanX = Math.round(panStartPanX + dx);
      diagramPanY = Math.round(panStartPanY + dy);
      applyDiagramTransform();
    }
  }

  function handleWindowMouseUp(e) {
    if (isDraggingNode && activeDragNode) {
      activeDragNode.card.classList.remove('z-50', 'shadow-2xl', 'opacity-90', 'cursor-grabbing');
      clearSnapGuides();

      if (nodeDragDistance > 4) {
        // Drag occurred: persist coordinates
        try {
          localStorage.setItem('apc_flowchart_node_coords', JSON.stringify(customNodeCoords));
        } catch (err) {}

        const finalX = parseFloat(activeDragNode.card.style.left) || 0;
        const finalY = parseFloat(activeDragNode.card.style.top) || 0;
        if (typeof window.showToast === 'function') {
          window.showToast(`Node ${activeDragNode.code} snapped & placed at (${finalX}px, ${finalY}px).`);
        }
      }

      isDraggingNode = false;
      activeDragNode = null;
    }

    if (isPanningCanvas) {
      isPanningCanvas = false;
      const wrapper = document.getElementById('vectorDiagramWrapper');
      if (wrapper) wrapper.classList.remove('cursor-grabbing');
    }
  }

  function setupCanvasPanListener() {
    const wrapper = document.getElementById('vectorDiagramWrapper');
    if (!wrapper) return;

    wrapper.onmousedown = (e) => {
      // Initiate canvas pan on middle button or left click on empty background
      if (e.button === 1 || (e.button === 0 && (e.target === wrapper || e.target.id === 'diagramViewport' || e.target.id === 'diagramSvg' || e.target.id === 'diagramSwimlanesBackdrop'))) {
        e.preventDefault();
        isPanningCanvas = true;
        panMouseStartX = e.clientX;
        panMouseStartY = e.clientY;
        panStartPanX = diagramPanX;
        panStartPanY = diagramPanY;
        wrapper.classList.add('cursor-grabbing');
      }
    };

    // Attach wheel zoom listener with { passive: false }
    wrapper.removeEventListener('wheel', handleDiagramWheel);
    wrapper.addEventListener('wheel', handleDiagramWheel, { passive: false });
  }

  // Window listeners for smooth, uninterrupted dragging outside canvas bounds
  window.removeEventListener('mousemove', handleWindowMouseMove);
  window.addEventListener('mousemove', handleWindowMouseMove);
  window.removeEventListener('mouseup', handleWindowMouseUp);
  window.addEventListener('mouseup', handleWindowMouseUp);

  // =========================================================================
  // FLOWCHART RENDERING & SWIMLANE BACKDROP
  // =========================================================================

  function renderFlowchartDiagram() {
    const courses = getCourses();
    const container = document.getElementById('diagramNodesContainer');
    const backdrop = document.getElementById('diagramSwimlanesBackdrop');
    if (!container || !backdrop) return;

    container.innerHTML = '';
    backdrop.innerHTML = '';

    // Update stats counters
    const totalUnits = courses.reduce((sum, c) => sum + (parseFloat(c.units) || 0), 0);
    const unitsCountEl = document.getElementById('diagramTotalUnitsCount');
    const coursesCountEl = document.getElementById('diagramTotalCoursesCount');
    if (unitsCountEl) unitsCountEl.innerText = totalUnits.toFixed(1);
    if (coursesCountEl) coursesCountEl.innerText = courses.length;

    const cardW = 224;
    const cardH = 88;
    const colGap = 56;
    const startX = 40;
    const startY = 85;

    // 1. Year Group Banners (4 Academic Years)
    const isDark = (diagramCanvasTheme === 'dark');
    const yearThemes = isDark ? [
      { name: 'YEAR 1', subtitle: 'General Engineering & Foundation', border: 'border-blue-700/60', bg: 'bg-blue-950/25', headerBg: 'bg-blue-900/60 text-blue-200 border border-blue-700/50' },
      { name: 'YEAR 2', subtitle: 'Intermediate Hardware & Software Core', border: 'border-teal-700/60', bg: 'bg-teal-950/25', headerBg: 'bg-teal-900/60 text-teal-200 border border-teal-700/50' },
      { name: 'YEAR 3', subtitle: 'Advanced Systems & Specialization Tracks', border: 'border-indigo-700/60', bg: 'bg-indigo-950/25', headerBg: 'bg-indigo-900/60 text-indigo-200 border border-indigo-700/50' },
      { name: 'YEAR 4', subtitle: 'Capstone Design & Industry Internships', border: 'border-amber-700/60', bg: 'bg-amber-950/25', headerBg: 'bg-amber-900/60 text-amber-200 border border-amber-700/50' }
    ] : [
      { name: 'YEAR 1', subtitle: 'General Engineering & Foundation', border: 'border-blue-300', bg: 'bg-blue-50/40', headerBg: 'bg-blue-100 text-blue-900 border border-blue-200' },
      { name: 'YEAR 2', subtitle: 'Intermediate Hardware & Software Core', border: 'border-teal-300', bg: 'bg-teal-50/40', headerBg: 'bg-teal-100 text-teal-900 border border-teal-200' },
      { name: 'YEAR 3', subtitle: 'Advanced Systems & Specialization Tracks', border: 'border-indigo-300', bg: 'bg-indigo-50/40', headerBg: 'bg-indigo-100 text-indigo-900 border border-indigo-200' },
      { name: 'YEAR 4', subtitle: 'Capstone Design & Industry Internships', border: 'border-amber-300', bg: 'bg-amber-50/40', headerBg: 'bg-amber-100 text-amber-900 border border-amber-200' }
    ];

    for (let y = 0; y < 4; y++) {
      const yStartX = startX + y * 3 * (cardW + colGap) - 16;
      const yWidth = 3 * (cardW + colGap) - colGap + 32;
      const yt = yearThemes[y];

      const yearBanner = document.createElement('div');
      yearBanner.className = `absolute rounded-none border ${yt.border} ${yt.bg} p-3 pointer-events-none transition-all`;
      yearBanner.style.left = `${yStartX}px`;
      yearBanner.style.top = '10px';
      yearBanner.style.width = `${yWidth}px`;

      const yearCourses = courses.filter(c => c.year === (y + 1));
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

    // 2. Term Columns and Courses (12 Trimesters)
    for (let col = 1; col <= 12; col++) {
      const colX = startX + (col - 1) * (cardW + colGap);
      const year = Math.ceil(col / 3);
      const term = ((col - 1) % 3) + 1;

      const termCourses = courses.filter(c => c.col === col || (c.year === year && c.term === term));
      const termUnits = termCourses.reduce((sum, c) => sum + (parseFloat(c.units) || 0), 0);

      // Term Header
      const termHeader = document.createElement('div');
      termHeader.className = isDark
        ? 'absolute font-mono text-xs rounded-none bg-[#131b28] border border-slate-700 px-3 py-1.5 flex items-center justify-between text-slate-200 shadow-xs pointer-events-none'
        : 'absolute font-mono text-xs rounded-none bg-white/95 border border-slate-300/90 px-3 py-1.5 flex items-center justify-between text-slate-800 shadow-xs pointer-events-none';
      termHeader.style.left = `${colX}px`;
      termHeader.style.top = '44px';
      termHeader.style.width = `${cardW}px`;
      termHeader.innerHTML = `
        <span class="font-black ${isDark ? 'text-slate-100' : 'text-slate-900'}">Y${year} &bull; Term ${term}</span>
        <span class="px-1.5 py-0.5 rounded-none ${isDark ? 'bg-amber-950/70 border-amber-500/40 text-amber-300' : 'bg-amber-50 border-amber-300 text-amber-900'} border text-[11px] font-bold">${termUnits.toFixed(1)}u &bull; ${termCourses.length}C</span>
      `;
      backdrop.appendChild(termHeader);

      // Render Course Cards
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

    // Setup interactive pan & zoom
    setupCanvasPanListener();
    applyDiagramTransform();

    // Re-route SVG arrows
    setTimeout(drawAllArrows, 60);
  }

  function getGroupCardBorder(group) {
    const meta = typeof window.getCategoryMeta === 'function' ? window.getCategoryMeta(group) : { color: 'slate' };
    const color = meta.color || 'slate';
    const borderColors = {
      indigo: 'border-l-indigo-600 hover:border-indigo-400',
      amber: 'border-l-amber-500 hover:border-amber-400',
      sky: 'border-l-sky-500 hover:border-sky-400',
      purple: 'border-l-purple-500 hover:border-purple-400',
      rose: 'border-l-rose-500 hover:border-rose-400',
      emerald: 'border-l-emerald-500 hover:border-emerald-400',
      teal: 'border-l-teal-500 hover:border-teal-400',
      cyan: 'border-l-cyan-500 hover:border-cyan-400',
      orange: 'border-l-orange-500 hover:border-orange-400',
      slate: 'border-l-slate-400 hover:border-slate-300'
    };
    return borderColors[color] || 'border-l-slate-400 hover:border-slate-300';
  }

  function createDiagramNodeElement(course, x, y, width, height) {
    const card = document.createElement('div');
    card.id = `node-${course.code}`;
    card.className = `diagram-node course-card absolute rounded-none border border-slate-200 border-l-4 bg-white text-slate-900 p-2.5 flex flex-col justify-between select-none shadow-xs hover:shadow-md transition-shadow cursor-grab ${getGroupCardBorder(course.group)}`;
    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
    card.style.width = `${width}px`;
    card.style.minHeight = `${height}px`;

    const unitsFormatted = Number(course.units || 0).toFixed(1);
    const prereqCount = course.prereqs ? course.prereqs.length : 0;

    card.innerHTML = `
      <!-- Left Port (Entry for prerequisite arrows) -->
      <div class="port-dot port-left" title="Prerequisite Entry Port"></div>
      <!-- Right Port (Exit for dependent arrows) -->
      <div class="port-dot port-right" title="Dependent Exit Port"></div>

      <!-- Top Bar: Course Code + Group Badge + Units + Quick Edit Button -->
      <div class="flex items-center justify-between font-mono leading-none">
        <div class="flex items-center gap-1.5">
          <span class="font-black text-blue-950 text-xs tracking-tight">${course.code}</span>
          <span class="text-[9px] px-1 py-0.2 rounded-none bg-slate-100 text-slate-700 font-sans truncate max-w-[85px]">${course.group || 'Core'}</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-[11px] px-1.5 py-0.5 rounded-none bg-slate-100 border border-slate-200 text-slate-800 font-bold font-mono">${unitsFormatted}u</span>
          <button type="button" onclick="event.stopPropagation(); if (typeof openCourseEditModal === 'function') openCourseEditModal('${course.code}');" class="p-0.5 text-slate-400 hover:text-amber-600 text-xs transition cursor-pointer" title="Quick Edit Course">
            ✏️
          </button>
        </div>
      </div>

      <!-- Middle: Descriptive Course Title -->
      <div class="text-[11px] font-semibold text-slate-800 leading-snug line-clamp-2 my-1" title="${course.title}">
        ${course.title}
      </div>

      <!-- Bottom Row: Meta Info & Prerequisite Counter -->
      <div class="flex items-center justify-between text-[11px] font-mono text-slate-500 border-slate-200 pt-1 border-t leading-none">
        <span>Y${course.year}&bull;T${course.term} (${course.lec || 0}L/${course.lab || 0}L)</span>
        <span class="px-1.5 py-0.5 rounded-none bg-slate-100 border border-slate-200 text-slate-700 font-bold ${prereqCount > 0 ? 'text-blue-800' : ''}">
          ${prereqCount > 0 ? `⛓️ ${prereqCount}` : 'Entry'}
        </span>
      </div>
    `;

    // Interactive Dragging on mousedown
    card.addEventListener('mousedown', (e) => handleNodeMouseDown(e, card, course));

    // Interactive Selection on click
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      if (nodeDragDistance < 5) {
        handleCourseClick(course.code);
      }
    });

    card.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      if (typeof window.openCourseEditModal === 'function') {
        window.openCourseEditModal(course.code);
      }
    });

    return card;
  }

  function renderFlowchartGrid() {
    renderFlowchartDiagram();
  }

  // =========================================================================
  // ARROW ROUTING ENGINE (0-Collision Manhattan 90-Degree Orthogonal Lines)
  // =========================================================================

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
    const courses = getCourses();
    const svg = document.getElementById('diagramSvg');
    const svgGroup = document.getElementById('diagramSvgPathsGroup');
    const viewport = document.getElementById('diagramViewport');
    if (!svg || !svgGroup || !viewport || courses.length === 0) return;

    svgGroup.innerHTML = '';

    const cardW = 224;
    const cardH = 88;
    const colGap = 56;
    const startX = 40;
    const startY = 85;
    const rowPitch = 106;

    const nodeMap = {};
    courses.forEach(c => {
      const col = c.col || ((c.year - 1) * 3 + c.term);
      const row = c.row || 1;
      let posX = startX + (col - 1) * (cardW + colGap);
      let posY = startY + (row - 1) * rowPitch;

      if (customNodeCoords[c.code]) {
        posX = customNodeCoords[c.code].x;
        posY = customNodeCoords[c.code].y;
      }

      nodeMap[c.code] = {
        code: c.code,
        col: col,
        row: row,
        x: posX,
        y: posY,
        prereqs: Array.isArray(c.prereqs) ? c.prereqs : []
      };
    });

    const edges = [];
    const outgoingMap = {};
    const incomingMap = {};

    function isTransitivePrereq(fromCode, tgtPrereqList) {
      for (let i = 0; i < tgtPrereqList.length; i++) {
        const item = tgtPrereqList[i];
        const siblingCode = (typeof item === 'object' && item !== null && item.code) ? item.code : String(item);
        if (siblingCode === fromCode) continue;

        const visited = new Set();
        const queue = [siblingCode];
        while (queue.length > 0) {
          const curr = queue.shift();
          const currCourse = courses.find(c => c.code === curr);
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

        if (requisiteFilterMode === 'direct' && isTransitivePrereq(pCode, tgt.prereqs)) {
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

    // Allocate arrival ports on target cards
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

    // Route Manhattan orthogonal conduits
    Object.keys(outgoingMap).forEach(pCode => {
      const outList = outgoingMap[pCode];
      const src = nodeMap[pCode];
      const x1 = src.x + cardW;
      const y1 = src.y + 44.0;
      const xTrunk = x1 + 12.0 + (((src.row - 1) % 4) * 8.0);

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
          colEdges.forEach(e => {
            const y2 = e.tgtPortY;
            const pts = [[x1, y1], [xTrunk, y1], [xTrunk, y2], [x1, y2]];
            renderSvgEdge(e, pts);
          });
        } else if (dc === 1) {
          colEdges.forEach(e => {
            const x2 = e.tgt.x;
            const y2 = e.tgtPortY;
            let pts;
            if (Math.abs(y1 - y2) < 2.0) {
              pts = [[x1, y1], [x2, y2]];
            } else {
              pts = [[x1, y1], [xTrunk, y1], [xTrunk, y2], [x2, y2]];
            }
            renderSvgEdge(e, pts);
          });
        } else {
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

    function renderSvgEdge(e, pts) {
      const pathData = generateRoundedPath(pts, 6);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('data-from', e.from);
      path.setAttribute('data-to', e.to);
      path.setAttribute('data-type', e.type || 'hard');
      path.setAttribute('class', 'dag-arrow');
      path.setAttribute('fill', 'none');

      if (e.type === 'co') {
        path.setAttribute('stroke', '#d97706');
        path.setAttribute('stroke-width', '1.9');
        path.setAttribute('stroke-dasharray', '6,4');
        path.setAttribute('marker-end', 'url(#diag-arrow-coreq)');
      } else if (e.type === 'soft') {
        path.setAttribute('stroke', '#8b5cf6');
        path.setAttribute('stroke-width', '1.8');
        path.setAttribute('stroke-dasharray', '2,3');
        path.setAttribute('marker-end', 'url(#diag-arrow-soft)');
      } else {
        path.setAttribute('stroke', '#64748b');
        path.setAttribute('stroke-width', '1.8');
        path.setAttribute('stroke-dasharray', 'none');
        path.setAttribute('marker-end', 'url(#diag-arrow-default)');
      }

      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.style.opacity = showAllArrowsEnabled ? '0.65' : '0';

      svgGroup.appendChild(path);
    }

    if (currentSelectedCode) {
      highlightPrereqTree(currentSelectedCode);
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
      return `M ${filtered[0][0].toFixed(1)} ${filtered[0][1].toFixed(1)} L ${filtered[1][0].toFixed(1)} ${filtered[1][0].toFixed(1)}`;
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

  // =========================================================================
  // COURSE FOCUS & HIGHLIGHT CONTROLLER
  // =========================================================================

  function switchRequisiteMode(mode) {
    requisiteFilterMode = mode;
    const sel = document.getElementById('flowchartRequisiteMode');
    if (sel) sel.value = mode;
    if (currentSelectedCode) {
      highlightPrereqTree(currentSelectedCode);
    } else {
      drawAllArrows();
    }
  }

  function handleCourseClick(code) {
    if (currentSelectedCode === code) {
      currentSelectedCode = null;
      resetVisualHighlights();
      const drawer = document.getElementById('flowchartDetailDrawer');
      if (drawer) drawer.classList.add('hidden');
    } else {
      currentSelectedCode = code;
      highlightPrereqTree(code);
      openDetailDrawer(code);
    }
  }

  function highlightPrereqTree(code) {
    const courses = getCourses();
    const allCards = document.querySelectorAll('.course-card');
    const allArrows = document.querySelectorAll('.dag-arrow');

    const targetCourse = courses.find(c => c.code === code);
    if (!targetCourse) return;

    const directFeeders = (targetCourse.prereqs || []).map(p => (typeof p === 'object' && p !== null && p.code) ? p.code : String(p));
    const directDependents = courses.filter(other => (other.prereqs || []).some(p => {
      const pCode = (typeof p === 'object' && p !== null && p.code) ? p.code : String(p);
      return pCode === code;
    })).map(other => other.code);

    allCards.forEach(card => {
      const id = card.id.replace('node-', '');
      card.classList.remove('active-selected', 'feeder-highlight', 'dependent-highlight', 'dimmed');

      if (id === code) {
        card.classList.add('active-selected');
      } else if (directFeeders.includes(id)) {
        card.classList.add('feeder-highlight');
      } else if (directDependents.includes(id)) {
        card.classList.add('dependent-highlight');
      } else {
        card.classList.add('dimmed');
      }
    });

    allArrows.forEach(arrow => {
      const from = arrow.getAttribute('data-from');
      const to = arrow.getAttribute('data-to');

      arrow.classList.remove('feeder-arrow', 'dependent-arrow', 'dimmed-arrow');

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
        arrow.style.opacity = '0';
      }
    });
  }

  function resetVisualHighlights() {
    const allCards = document.querySelectorAll('.course-card');
    const allArrows = document.querySelectorAll('.dag-arrow');

    allCards.forEach(card => {
      card.classList.remove('active-selected', 'feeder-highlight', 'dependent-highlight', 'dimmed');
    });

    allArrows.forEach(arrow => {
      arrow.classList.remove('feeder-arrow', 'dependent-arrow', 'dimmed-arrow');
      arrow.setAttribute('stroke', '#64748b');
      arrow.setAttribute('stroke-width', '1.8');
      arrow.setAttribute('marker-end', 'url(#diag-arrow-default)');
      arrow.style.opacity = showAllArrowsEnabled ? '0.65' : '0';
    });
  }

  function openDetailDrawer(code) {
    const courses = getCourses();
    const course = courses.find(c => c.code === code);
    if (!course) return;

    const drawer = document.getElementById('flowchartDetailDrawer');
    if (!drawer) return;

    const codeEl = document.getElementById('drawerCourseCode');
    const titleEl = document.getElementById('drawerCourseTitle');
    const metaEl = document.getElementById('drawerCourseMeta');

    if (codeEl) codeEl.innerText = course.code;
    if (titleEl) titleEl.innerText = course.title;
    if (metaEl) {
      metaEl.innerText = `Year ${course.year} • Term ${course.term} • ${Number(course.units || 0).toFixed(1)} Units (${course.lec || 0} Lec / ${course.lab || 0} Lab) • ${course.group || 'Core'}`;
    }

    drawer.classList.remove('hidden');
  }

  function closeDetailDrawer() {
    const drawer = document.getElementById('flowchartDetailDrawer');
    if (drawer) drawer.classList.add('hidden');
  }

  // Reset node positions to original swimlanes
  function resetDiagramPositions() {
    customNodeCoords = {};
    try {
      localStorage.removeItem('apc_flowchart_node_coords');
    } catch (e) {}
    renderFlowchartDiagram();
    if (typeof window.showToast === 'function') {
      window.showToast('All course nodes reset to official academic sequence.');
    }
  }

  // =========================================================================
  // EXPOSE GLOBAL API & PROPERTIES ON WINDOW
  // =========================================================================
  window.renderFlowchartDiagram = renderFlowchartDiagram;
  window.renderFlowchartGrid = renderFlowchartGrid;
  window.drawAllArrows = drawAllArrows;
  window.toggleShowAllArrows = toggleShowAllArrows;
  window.diagramZoomIn = diagramZoomIn;
  window.diagramZoomOut = diagramZoomOut;
  window.diagramResetZoom = diagramResetZoom;
  window.diagramFitView = diagramFitView;
  window.toggleElementSnap = toggleElementSnap;
  window.toggleDiagramGridSnap = toggleDiagramGridSnap;
  window.switchRequisiteMode = switchRequisiteMode;
  window.handleCourseClick = handleCourseClick;
  window.closeDetailDrawer = closeDetailDrawer;
  window.resetDiagramPositions = resetDiagramPositions;
  window.applyDiagramTransform = applyDiagramTransform;
  window.computeElementSnap = computeElementSnap;
  window.zoomAtPoint = zoomAtPoint;

  try {
    Object.defineProperty(window, 'diagramZoom', {
      get: () => diagramZoom,
      set: (v) => { diagramZoom = v; applyDiagramTransform(); },
      configurable: true
    });
    Object.defineProperty(window, 'diagramPanX', {
      get: () => diagramPanX,
      set: (v) => { diagramPanX = v; applyDiagramTransform(); },
      configurable: true
    });
    Object.defineProperty(window, 'diagramPanY', {
      get: () => diagramPanY,
      set: (v) => { diagramPanY = v; applyDiagramTransform(); },
      configurable: true
    });
    Object.defineProperty(window, 'diagramGridSnapEnabled', {
      get: () => diagramGridSnapEnabled,
      set: (v) => { diagramGridSnapEnabled = v; updateSnapButtonUI(); },
      configurable: true
    });
    Object.defineProperty(window, 'diagramElementSnapEnabled', {
      get: () => diagramElementSnapEnabled,
      set: (v) => { diagramElementSnapEnabled = v; updateSnapButtonUI(); },
      configurable: true
    });
  } catch (e) {
    window.diagramZoom = diagramZoom;
    window.diagramPanX = diagramPanX;
    window.diagramPanY = diagramPanY;
  }

  // Dynamic Theme Switcher for Flowchart Canvas
  function applyDiagramCanvasTheme(theme) {
    diagramCanvasTheme = (theme === 'dark') ? 'dark' : 'light';
    const container = document.getElementById('diagramNodesContainer');
    if (container && container.children.length > 0) {
      if (typeof renderFlowchartDiagram === 'function') {
        renderFlowchartDiagram();
      }
    }
  }
  window.applyDiagramCanvasTheme = applyDiagramCanvasTheme;

  // Auto-initialize when DOM is loaded or script runs
  function initDiagram() {
    const wrapper = document.getElementById('vectorDiagramWrapper');
    if (wrapper) {
      setupCanvasPanListener();
      updateSnapButtonUI();
      const flowView = document.getElementById('view-flowchart');
      if (flowView && !flowView.classList.contains('hidden')) {
        renderFlowchartDiagram();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDiagram);
  } else {
    setTimeout(initDiagram, 50);
  }

})(window);
