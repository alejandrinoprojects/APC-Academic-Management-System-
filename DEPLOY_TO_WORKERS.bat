@echo off
title APC Academic Suite - Cloudflare Deployer
cd /d "%~dp0"
color 0B

set "NODE_DIR=C:\Users\aleja\AppData\Roaming\JetBrains\WebStorm2026.2\node\versions\24.21.0"
if exist "%NODE_DIR%" (
    set "Path=%NODE_DIR%;%LOCALAPPDATA%\Programs\Git\cmd;%Path%"
)
set "WRANGLER_BIN=%LOCALAPPDATA%\npm-cache\_npx\32026684e21afda6\node_modules\wrangler\bin\wrangler.js"

echo =========================================================================
echo       APC RAMS ACADEMIC SUITE - CLOUDFLARE WORKERS DEPLOYMENT
echo =========================================================================
echo.
echo  Target: https://apc-academic-management-system.alejandrinoprojects.workers.dev
echo.
echo  [1] Log In to Cloudflare (Opens browser to authorize 'alejandrinoprojects')
echo  [2] Deploy directly (If already logged in)
echo  [3] Log In and then Deploy (Recommended)
echo.
set /p CHOICE="Select an option (1, 2, or 3) [Press Enter for 3]: "
if "%CHOICE%"=="" set CHOICE=3

if "%CHOICE%"=="1" (
    echo.
    echo [*] Opening browser to authenticate Cloudflare account...
    node "%WRANGLER_BIN%" login
    echo.
    echo Login complete! You can now run option 2 to deploy.
    pause
    exit /b 0
)

if "%CHOICE%"=="3" (
    echo.
    echo [*] Step 1 of 2: Opening browser to authenticate Cloudflare account...
    node "%WRANGLER_BIN%" login
)

echo.
echo [*] Step 2 of 2: Deploying latest build to Cloudflare Workers...
python scripts\validate_html.py
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] HTML validation failed. Aborting deployment.
    pause
    exit /b 1
)

node "%WRANGLER_BIN%" deploy

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =========================================================================
    echo [SUCCESS] Deployed successfully to Cloudflare Workers!
    echo Live URL: https://apc-academic-management-system.alejandrinoprojects.workers.dev/schools
    echo =========================================================================
) else (
    echo.
    echo [ERROR] Wrangler deployment failed. Please check the error messages above.
)
pause
