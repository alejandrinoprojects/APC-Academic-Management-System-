# Asia Pacific College · RAMS Academic Architecture Suite

Official institution-wide Outcomes-Based Education (OBE) and CHED CMO No. 92, s. 2017 Academic Curriculum Management Platform.

---

## 📁 Clean WebStorm-Optimized Project Structure

```
untitled1/
├── assets/                          # Visual assets, seal, logos, and favicons
├── css/                             # APC Academic Suite complete styling (apc_styles.css)
├── js/                              # Core frontend logic, datasets, and registrar engine
│   ├── app.js                       # SPA router, DAG lineage, Kahn cycle engine, modals
│   ├── apc_data.js                  # 74-Course BSCpE master curriculum dataset
│   ├── registrar_docs.js            # Official registrar sheets 1-7 engine
│   ├── theme_manager.js             # Theme synchronization engine
│   └── top_bar_nav.js               # Interactive breadcrumbs & command palette
│
├── html_layers/                     # 32 Modular HTML layers (00_... to 31_...)
├── scripts/                         # Automation & synchronization engines
│   ├── sync_layers_to_site.py       # Bidirectional HTML layers -> live site sync
│   └── watch_html_layers.py         # Real-time background layer file watcher
│
├── index.html                       # Core SPA entry point (< 1 MB, WebStorm optimized)
├── package.json                     # NPM dependencies (Tailwind CSS, Prettier)
├── tailwind.config.js               # WebStorm Tailwind LSP class & color configuration
│
├── START_SERVER.bat                 # 1-click local development web server (port 8080)
├── SYNC_LAYERS_TO_SITE.bat          # 1-click batch sync from html_layers/
├── WATCH_AND_SYNC_LAYERS.bat        # 1-click background watch & sync
└── .idea/runConfigurations/         # 1-click WebStorm top toolbar Run buttons
```

---

## 🚀 WebStorm Quick Start Guide

### 1. WebStorm 1-Click Run Toolbar (Top Right)
In WebStorm, look at the top-right toolbar next to the green **Play (▶)** button:
- Select **`1. Start Local Server`** and press **▶** to launch `http://localhost:8080`.
- Select **`2. Watch & Sync Layers`** and press **▶** to auto-sync layer edits in real-time.
- Select **`3. Sync Layers to Site`** to manually push layer edits to `index.html`.
- Select **`4. Dry Run Validation`** to check synchronization status without modifying files.

### 2. Built-in Visual Live Preview (Split View)
1. Open [`index.html`](index.html) or any file in [`html_layers/`](html_layers/).
2. Look at the top right of the code editor for the browser icons.
3. Click **Built-in Preview** and select **Editor and Preview (Split)**.
4. As you edit code or Tailwind utility classes, the preview updates instantly without saving or refreshing!

### 3. Tailwind CSS IntelliSense & Visual Color Pickers
- `tailwind.config.js` is fully linked.
- Press **`Ctrl + Space`** anywhere inside `class="..."` for instant class autocomplete.
- Every color class displays a clickable color swatch in the left editor gutter.
- Press **`Ctrl + Q`** over any class to preview its exact rendered CSS.

---

## 🎨 Design System Constraints
- **Corners**: Strict 90-degree corners throughout (`rounded-none` / `border-radius: 0px`).
- **Colors**: APC Blue (`#0B2545`), Navy (`#13315C`), Gold (`#D4AF37` / `#fbbf24`), Emerald (`#047857`).
- **Infinite Grid**: Spreadsheet features infinite downward scroll and active coordinate tracking (`fx`).
