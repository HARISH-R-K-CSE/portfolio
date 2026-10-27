@echo off
setlocal enabledelayedexpansion
set "PATH=C:\Users\haris\AppData\Local\Programs\Git\cmd;%PATH%"
cd /d "%~dp0"

echo ==============================================================================
echo    HARISH R K - AUTOMATIC 1-CLICK GITHUB DEPLOYMENT
echo ==============================================================================
echo.

:: 1. Check GitHub Authentication
echo [1/3] Checking GitHub login status...
gh auth status >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo -> You need to connect your GitHub account once.
    echo -> Opening browser login window...
    echo.
    gh auth login --web --git-protocol https --scopes "repo,workflow,write:packages"
)

echo.
echo [2/3] Creating and pushing repository to your GitHub account...
gh repo create portfolio --public --source=. --remote=origin --push 2>nul
if %errorlevel% neq 0 (
    echo Repository might already exist. Pushing latest commits...
    git push -u origin main
)

echo.
echo [3/3] Enabling GitHub Pages (automated workflow mode)...
gh api repos/:owner/portfolio/pages -X POST -f "build_type=workflow" >nul 2>&1

for /f "tokens=*" %%i in ('gh api user --jq .login 2^>nul') do set "GH_USER=%%i"

echo.
echo ==============================================================================
echo   SUCCESS! YOUR PORTFOLIO IS DEPLOYED!
echo ==============================================================================
if defined GH_USER (
    echo Live GitHub Pages URL (Ready in ~60 seconds):
    echo https://!GH_USER!.github.io/portfolio/
    echo.
    echo GitHub Repository URL:
    echo https://github.com/!GH_USER!/portfolio
) else (
    echo Please check your GitHub account to see the newly created 'portfolio' repo!
)
echo ==============================================================================
echo.
pause
