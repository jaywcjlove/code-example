const code = `rem *******Begin Comment**************
rem This program starts the superapp batch program on the network,
rem directs the output to a file, and displays the file
rem in Notepad.
rem *******End Comment**************
@echo off
if exist C:\output.txt goto EMPTYEXISTS
setlocal
  path=g:\programs\superapp;%path%
  call superapp>C:\output.txt
endlocal
:EMPTYEXISTS
start notepad c:\output.txt`;

 export default code;