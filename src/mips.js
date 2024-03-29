const code = `# A[i] = A[i/2] + 1;
    lw     $t0, 0($gp)       # fetch i
    srl    $t1, $t0, 1       # i/2
    sll    $t1, $t1, 2       # turn i/2 into a byte offset (*4)
    add    $t1, $gp, $t1     # &A[i/2] - 28
    lw     $t1, 28($t1)      # fetch A[i/2]
    addi   $t1, $t1, 1       # A[i/2] + 1
    sll    $t2, $t0, 2       # turn i into a byte offset
    add    $t2, $t2, $gp     # &A[i] - 28
    sw     $t1, 28($t2)      # A[i] = ...
# A[i+1] = -1;
    addi   $t1, $zero, -1    # -1
    sw     $t1, 32($t2)      # A[i+1] = -1
`;

 export default code;