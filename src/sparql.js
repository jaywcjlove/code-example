const code = `  SELECT ?x ?name
  {
    ?x  foaf:mbox <mailto:alice@example> .
    ?x  foaf:knows ?a1 .
    ?a1 foaf:knows ?a2 .
    ?a2 foaf:name ?name .
  }
`;

 export default code;