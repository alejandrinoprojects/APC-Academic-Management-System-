@echo off
title APC Academic Architecture Suite - Push to Cloudflare
cd /d "%~dp0"
echo =========================================================================
echo       APC RAMS ACADEMIC SUITE - AUTO-DEPLOY TO CLOUDFLARE PAGES
echo =========================================================================
echo.

set "GIT_CMD=git"
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    if exist "%LOCALAPPDATA%\Programs\Git\cmd\git.exe" (
        set "GIT_CMD=%LOCALAPPDATA%\Programs\Git\cmd\git.exe"
    )
)

echo [1/3] Syncing layers to live site...
python scripts/sync_layers_to_site.py
echo.

echo [2/3] Staging and committing adjustments...
"%GIT_CMD%" add -A
set /p COMMIT_MSG="Enter commit message (press Enter for auto-message): "
if "%COMMIT_MSG%"=="" (
    for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set CDATE=%%a-%%b-%%c
    for /f "tokens=1-2 delims=: " %%a in ('time /t') do set CTIME=%%a:%%b
    set "COMMIT_MSG=Update academic architecture suite - %CDATE% %CTIME%"
)
"%GIT_CMD%" commit -m "%COMMIT_MSG%"

echo.
echo [3/3] Pushing to GitHub (origin main)...
"%GIT_CMD%" push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo =========================================================================
    echo [SUCCESS] Changes pushed to GitHub!
    echo Cloudflare Pages is now auto-building and deploying the updated site.
    echo =========================================================================
) else (
    echo.
    echo [ERROR] Git push failed. Please check network and permissions.
)
pause
