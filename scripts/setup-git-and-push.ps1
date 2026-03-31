# Run this in PowerShell from the project root AFTER:
# 1) Install Git: https://git-scm.com/download/win
# 2) Create an empty repo on GitHub (no README needed)
#
# Usage:
#   .\scripts\setup-git-and-push.ps1
#   .\scripts\setup-git-and-push.ps1 -RepoUrl "https://github.com/YOUR_USER/YOUR_REPO.git"

param(
  [string]$RepoUrl = ""
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $root

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Host "Git is not installed or not in PATH. Install from: https://git-scm.com/download/win" -ForegroundColor Red
  exit 1
}

if (-not (Test-Path ".git")) {
  git init
  git branch -M main
}

git add .
$staged = git diff --cached --name-only
if ($staged) {
  git commit -m "chore: initial portfolio commit for Netlify"
} else {
  Write-Host "Nothing new to commit (working tree clean)." -ForegroundColor Yellow
}

if ($RepoUrl) {
  $existing = git remote get-url origin 2>$null
  if ($LASTEXITCODE -eq 0) {
    git remote set-url origin $RepoUrl
  } else {
    git remote add origin $RepoUrl
  }
  Write-Host "Pushing to $RepoUrl ..." -ForegroundColor Cyan
  git push -u origin main
  Write-Host "Done. Next: Netlify -> Add site -> Import from Git -> pick this repo." -ForegroundColor Green
} else {
  Write-Host ""
  Write-Host "Next steps (run in this folder):" -ForegroundColor Cyan
  Write-Host '  git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git'
  Write-Host '  git push -u origin main'
  Write-Host ""
  Write-Host "Or re-run with: .\scripts\setup-git-and-push.ps1 -RepoUrl `"https://github.com/YOUR_USER/YOUR_REPO.git`""
}
