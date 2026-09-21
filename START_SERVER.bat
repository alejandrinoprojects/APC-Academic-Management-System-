@echo off
title APC Academic Architecture Suite - Web Server
cd /d "%~dp0"
echo =========================================================================
echo       APC RAMS ACADEMIC ARCHITECTURE SUITE - LOCAL WEB SERVER
echo =========================================================================
echo.
echo Serving URL: http://localhost:8080/
echo Root Application: index.html
echo.
echo Launching default web browser...
start "" "http://localhost:8080/"
echo.
echo Starting Python SPA Web Server on port 8080...
echo [Press Ctrl+C in this terminal window to stop the server]
echo.
python scripts\serve_spa.py 8080
pause
