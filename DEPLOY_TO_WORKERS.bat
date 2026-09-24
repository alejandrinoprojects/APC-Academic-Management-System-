@echo off
title APC Academic Architecture Suite - Deploy to Cloudflare Workers
cd /d "%~dp0"
color 0B
echo =========================================================================
echo       APC RAMS ACADEMIC SUITE - DEPLOY TO CLOUDFLARE WORKERS
echo =========================================================================
echo.

set "NODE_DIR=C:\Users\aleja\AppData\Roaming\JetBrains\WebStorm2026.2\node\versions\24.21.0"
if exist "%NODE_DIR%" (
    set "Path=%NODE_DIR%;%LOCALAPPDATA%\Programs\Git\cmd;%Path%"
)

set "WRANGLER_BIN=%LOCALAPPDATA%\npm-cache\_npx\32026684e21afda6\node_modules\wrangler\bin\wrangler.js"

echo [1/3] Checking Cloudflare Authentication...
node "%WRANGLER_BIN%" whoami >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [*] Authentication needed. Opening browser to log in to Cloudflare...
    echo [*] Please click "Allow" in your browser when prompted.
    echo.
    node "%WRANGLER_BIN%" login
)

echo.
echo [2/3] Validating HTML integrity before deployment...
python scripts\validate_html.py
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] HTML validation failed. Aborting deployment.
    pause
    exit /b 1
)

echo.
echo [3/3] Deploying to Cloudflare Workers (apc-academic-management-system)...
node "%WRANGLER_BIN%" deploy

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =========================================================================
    echo [SUCCESS] Deployed to Cloudflare Workers!
    echo Live URL: https://apc-academic-management-system.alejandrinoprojects.workers.dev/schools
    echo =========================================================================
) else (
    echo.
    echo [ERROR] Wrangler deployment failed. Please check the error messages above.
)
pause
