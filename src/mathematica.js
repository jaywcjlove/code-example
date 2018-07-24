
const code = `(* example Mathematica code *)
(* Dualisiert wird anhand einer Polarität an einer
   Quadrik $x^t Q x = 0$ mit regulärer Matrix $Q$ (also
   mit $det(Q) \neq 0$), z.B. die Identitätsmatrix.
   $p$ ist eine Liste von Polynomen - ein Ideal. *)
dualize::"singular" = "Q must be regular: found Det[Q]==0.";
dualize[ Q_, p_ ] := Block[
    { m, n, xv, lv, uv, vars, polys, dual },
    If[Det[Q] == 0,
      Message[dualize::"singular"],
      m = Length[p];
      n = Length[Q] - 1;
      xv = Table[Subscript[x, i], {i, 0, n}];
      lv = Table[Subscript[l, i], {i, 1, m}];
      uv = Table[Subscript[u, i], {i, 0, n}];
      (* Konstruiere Ideal polys. *)
      If[m == 0,
        polys = Q.uv,
        polys = Join[p, Q.uv - Transpose[Outer[D, p, xv]].lv]
        ];
      (* Eliminiere die ersten n + 1 + m Variablen xv und lv
         aus dem Ideal polys. *)
      vars = Join[xv, lv];
      dual = GroebnerBasis[polys, uv, vars];
      (* Ersetze u mit x im Ergebnis. *)
      ReplaceAll[dual, Rule[u, x]]
      ]
    ]

`;

export default code;
