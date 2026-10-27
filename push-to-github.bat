@echo off
setlocal
set PATH=C:\Users\haris\AppData\Local\Programs\Git\cmd;%PATH%
cd /d "%~dp0"

echo ==========================================================
echo   Harish R K - Push Portfolio to GitHub Pages
echo ==========================================================
echo.

if not exist ".git" (
    echo Initializing git...
    git init
    git branch -M main
)

set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/USERNAME/portfolio.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No URL entered. Aborted.
    pause
    exit /b 1
)

git remote remove origin 2>nul
git remote add origin %REPO_URL%
git add .
git commit -m "feat: update portfolio website" 2>nul
echo.
echo Pushing to GitHub (main branch)...
git push -u origin main

echo.
echo ==========================================================
echo Done! Now go to your GitHub repo Settings -> Pages
echo and select 'GitHub Actions' as the Source!
echo ==========================================================
pause
