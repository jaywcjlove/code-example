
const code = `#include    "ti83plus.inc"
#define     progStart   $9D95
    .org progStart-2
    .db $BB,$6D

    bcall(_ClrLCDFull)
    ld hl,0
    ld (CurCol),hl
    ld hl,Message
    bcall(_PutS) ; Displays the string
    bcall(_NewLine)
    ret
Message:
    .db "Hello world!",0

`;

export default code;
