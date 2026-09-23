@echo off
title APC Academic Architecture Suite - Cloudflare Tunnel
cd /d "%~dp0"
color 0E
echo =========================================================================
echo       APC RAMS ACADEMIC ARCHITECTURE SUITE - CLOUDFLARE TUNNEL
echo =========================================================================
echo.
python scripts\serve_tunnel.py
pause
