
const code = `.syntax unified
.global main

/* 
 *  A
 *  multi-line
 *  comment.
 */

@ A single line comment.

main:
        push    {sp, lr}
        ldr     r0, =message
        bl      puts
        mov     r0, #0
        pop     {sp, pc}

message:
        .asciz "Hello world!<br />"

`;

export default code;
