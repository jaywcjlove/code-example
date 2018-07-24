
const code = `; This is a comment
!ifdef ERROR
    !error "Something went wrong"
!endif

OutFile "demo.exe"
RequestExecutionLevel user
SetDetailsPrint listonly

!include "LogicLib.nsh"
!include "WinVer.nsh"

Section -mandatory

    Call logWinVer

    \${If} 1 > 0
      MessageBox MB_OK "Hello world"
    \${EndIf}

SectionEnd

Function logWinVer

    \${If} \${IsWin10}
        DetailPrint "Windows 10!"
    \${ElseIf} \${AtLeastWinVista}
        DetailPrint "We're post-XP"
    \${Else}
        DetailPrint "Legacy system"
    \${EndIf}

FunctionEnd

`;

export default code;
