
const code = `PREFIX a: <http://www.w3.org/2000/10/annotation-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

# Comment!

SELECT ?given ?family
WHERE {
  {
    ?annot a:annotates <http://www.w3.org/TR/rdf-sparql-query/> .
    ?annot dc:creator ?c .
    OPTIONAL {?c foaf:givenName ?given ;
                 foaf:familyName ?family }
  } UNION {
    ?c !foaf:knows/foaf:knows? ?thing.
    ?thing rdfs
  } MINUS {
    ?thing rdfs:label "剛柔流"@jp
  }
  FILTER isBlank(?c)
}
`;

export default code;
