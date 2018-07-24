
const code = `@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix geo: <http://www.w3.org/2003/01/geo/wgs84_pos#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

<http://purl.org/net/bsletten> 
    a foaf:Person;
    foaf:interest <http://www.w3.org/2000/01/sw/>;
    foaf:based_near [
        geo:lat "34.0736111" ;
        geo:lon "-118.3994444"
   ]


`;

export default code;
