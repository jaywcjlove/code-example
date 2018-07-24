
const code = `  FUNCTION_BLOCK Fuzzy_FB
      VAR_INPUT
          TimeDay : REAL; (* RANGE(0 .. 23) *)
          ApplicateHost: REAL;
          TimeConfiguration: REAL;
          TimeRequirements: REAL;
      END_VAR

      VAR_OUTPUT
          ProbabilityDistribution: REAL;
          ProbabilityAccess: REAL;
      END_VAR

      FUZZIFY TimeDay
          TERM inside := (0, 0) (8, 1) (22,0);
          TERM outside := (0, 1) (8, 0) (22, 1);
      END_FUZZIFY

      FUZZIFY ApplicateHost
          TERM few := (0, 1) (100, 0) (200, 0);
          TERM many := (0, 0) (100, 0) (200, 1);
      END_FUZZIFY

      FUZZIFY TimeConfiguration
          TERM recently := (0, 1) (30, 1) (120, 0);
          TERM long := (0, 0) (30, 0) (120, 1);
      END_FUZZIFY

      FUZZIFY TimeRequirements
          TERM recently := (0, 1) (30, 1) (365, 0);
          TERM long := (0, 0) (30, 0) (365, 1);
      END_FUZZIFY

      DEFUZZIFY ProbabilityAccess
          TERM hight := 1;
          TERM medium := 0.5;
          TERM low := 0;
          ACCU: MAX;
          METHOD: COGS;
          DEFAULT := 0;
      END_DEFUZZIFY

      DEFUZZIFY ProbabilityDistribution
          TERM hight := 1;
          TERM medium := 0.5;
          TERM low := 0;
          ACCU: MAX;
          METHOD: COGS;
          DEFAULT := 0;
      END_DEFUZZIFY

      RULEBLOCK No1
          AND : MIN;
          RULE 1 : IF TimeDay IS outside AND ApplicateHost IS few THEN ProbabilityAccess IS hight;
          RULE 2 : IF ApplicateHost IS many THEN ProbabilityAccess IS hight;
          RULE 3 : IF TimeDay IS inside AND ApplicateHost IS few THEN ProbabilityAccess IS low;
      END_RULEBLOCK

      RULEBLOCK No2
          AND : MIN;
          RULE 1 : IF ApplicateHost IS many THEN ProbabilityDistribution IS hight;
      END_RULEBLOCK

  END_FUNCTION_BLOCK

`;

export default code;
