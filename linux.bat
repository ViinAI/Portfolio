@echo off
rem Linux Command Runner - Bridges Windows terminal to MSYS2 POSIX bash environment
set "MSYS2_PATH=C:\msys64\usr\bin"
set "MINGW_PATH=C:\msys64\mingw64\bin"
set "NODE_PATH=c:\Users\Madotra\Downloads\Portfolio\.tools\node-v20.18.0-win-x64"
set "VENV_PATH=c:\Users\Madotra\Downloads\Portfolio\.venv\bin"
set "PATH=%VENV_PATH%;%NODE_PATH%;%MINGW_PATH%;%MSYS2_PATH%;%PATH%"

if "%~1"=="" (
    "C:\msys64\usr\bin\bash.exe" -li
) else (
    "C:\msys64\usr\bin\bash.exe" -lc "%*"
)
