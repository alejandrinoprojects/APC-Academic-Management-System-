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
echo Starting Python HTTP Web Server on port 8080...
echo [Press Ctrl+C in this terminal window to stop the server]
echo.
python -m http.server 8080
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [NOTICE] Port 8080 unavailable. Switching to port 8081...
    start "" "http://localhost:8081/"
    python -m http.server 8081
)
pause
