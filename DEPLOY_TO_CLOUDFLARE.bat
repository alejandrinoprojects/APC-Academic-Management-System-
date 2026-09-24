@echo off
title APC Academic Suite - Git Push & Deploy to Cloudflare
cd /d "%~dp0"
color 0B
echo =========================================================================
echo       APC RAMS ACADEMIC SUITE - GIT PUSH & CLOUDFLARE DEPLOY
echo =========================================================================
echo.

set "GIT_CMD=git"
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" (
        set "GIT_CMD=%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
    )
)

set "NODE_DIR=C:\Users\aleja\AppData\Roaming\JetBrains\WebStorm2026.2\node\versions\24.21.0"
if exist "%NODE_DIR%" (
    set "Path=%NODE_DIR%;%LOCALAPPDATA%\Programs\Git\cmd;%Path%"
)
set "WRANGLER_BIN=%LOCALAPPDATA%\npm-cache\_npx\32026684e21afda6\node_modules\wrangler\bin\wrangler.js"

echo [1/3] Validating HTML structure...
python scripts\validate_html.py
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] HTML validation failed. Please fix syntax errors before deploying.
    pause
    exit /b 1
)
echo.

echo [2/3] Staging, committing and pushing to GitHub (origin main)...
"%GIT_CMD%" add -A
set /p COMMIT_MSG="Enter commit message (press Enter for auto-message): "
if "%COMMIT_MSG%"=="" (
    for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set CDATE=%%a-%%b-%%c
    for /f "tokens=1-2 delims=: " %%a in ('time /t') do set CTIME=%%a:%%b
    set "COMMIT_MSG=Update academic suite - %CDATE% %CTIME%"
)
"%GIT_CMD%" commit -m "%COMMIT_MSG%"
"%GIT_CMD%" push origin main
echo.

echo [3/3] Deploying live build to Cloudflare Workers...
node "%WRANGLER_BIN%" deploy

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =========================================================================
    echo [SUCCESS] Site pushed to GitHub and deployed live to Cloudflare Workers!
    echo Live URL: https://apc-academic-management-system.alejandrinoprojects.workers.dev/schools
    echo =========================================================================
) else (
    echo.
    echo [WARNING] Cloudflare deploy encountered an issue. Please review output above.
)
pause
