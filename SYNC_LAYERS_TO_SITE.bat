@echo off
title APC Academic Suite - Sync HTML Layers to Live Site
cd /d "%~dp0"
echo ===============================================================================
echo APC ACADEMIC SUITE: SYNCHRONIZE HTML LAYERS TO LIVE WEBSITE
echo ===============================================================================
echo.
echo Scanning html_layers/ for edits and patching into index.html...
echo.
python scripts\sync_layers_to_site.py
echo.
echo ===============================================================================
echo Sync check complete. Press any key to exit.
pause >nul
