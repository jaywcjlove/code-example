const code = `CONFIGURATION DefaultCfg
    VAR_GLOBAL
        Start_Stop AT %IX0.0: BOOL; (* This is a comment *)
    END_VAR
    TASK NewTask  (INTERVAL := T#20ms);
    PROGRAM Main WITH NewTask : PLC_PRG;
END_CONFIGURATION

PROGRAM demo
    VAR_EXTERNAL
        Start_Stop: BOOL;
    END_VAR
    VAR
        a : REAL; // Another comment
        todTest: TIME_OF_DAY := TOD#12:55;
    END_VAR
    a := csq(12.5);
    TON1(IN := TRUE, PT := T#2s);
    16#FAC0 2#1001_0110
    IF TON1.Q AND a > REAL#100 THEN
        Start_Stop := TRUE;
    END_IF
END_PROGRAM;

/* Get a square of the circle */
FUNCTION csq : REAL
    VAR_INPUT
        r: REAL;
    END_VAR
    VAR CONSTANT
        c_pi: REAL := 3.14;
    END_VAR
    csq := ABS(c_pi * (r * 2));
END_FUNCTION`;

 export default code;