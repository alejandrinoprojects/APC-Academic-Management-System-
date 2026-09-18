@echo off
title APC Academic Suite - Watch and Auto-Sync HTML Layers
cd /d "%~dp0"
echo ===============================================================================
echo APC ACADEMIC SUITE: HTML LAYERS REAL-TIME WATCHER
echo ===============================================================================
echo.
echo Watching html_layers/ for changes...
echo [Press Ctrl+C to stop watching]
echo.
python scripts\watch_html_layers.py
pause
