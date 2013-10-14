@echo off
set NWFOLDER=E:\Camp\Documents\GitHub\mamboer\nwapp\nw
set NWEXE=nw.exe
set APPFOLDER= %cd%
copy %NWFOLDER%\*.dll %APPFOLDER%
copy %NWFOLDER%\nw.exe %APPFOLDER%
copy %NWFOLDER%\nw.pak %APPFOLDER%
start "" %NWEXE% --url="file:///E:/Camp/Documents/GitHub/oxox/projspirit/src/default.html"
exit