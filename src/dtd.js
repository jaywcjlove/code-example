
const code = `<?xml version="1.0" encoding="UTF-8"?>

<!ATTLIST title
  xmlns CDATA #FIXED  "http://docbook.org/ns/docbook"
  role  CDATA #IMPLIED
  %db.common.attributes;
  %db.common.linking.attributes;
>

<!--
  Try: http://docbook.org/xml/5.0/dtd/docbook.dtd
-->

<!DOCTYPE xsl:stylesheet
  [
    <!ENTITY nbsp   "&#160;">
    <!ENTITY copy   "&#169;">
    <!ENTITY reg    "&#174;">
    <!ENTITY trade  "&#8482;">
    <!ENTITY mdash  "&#8212;">
    <!ENTITY ldquo  "&#8220;">
    <!ENTITY rdquo  "&#8221;">
    <!ENTITY pound  "&#163;">
    <!ENTITY yen    "&#165;">
    <!ENTITY euro   "&#8364;">
    <!ENTITY mathml "http://www.w3.org/1998/Math/MathML">
  ]
>

<!ELEMENT title (#PCDATA|inlinemediaobject|remark|superscript|subscript|xref|link|olink|anchor|biblioref|alt|annotation|indexterm|abbrev|acronym|date|emphasis|footnote|footnoteref|foreignphrase|phrase|quote|wordasword|firstterm|glossterm|coref|trademark|productnumber|productname|database|application|hardware|citation|citerefentry|citetitle|citebiblioid|author|person|personname|org|orgname|editor|jobtitle|replaceable|package|parameter|termdef|nonterminal|systemitem|option|optional|property|inlineequation|tag|markup|token|symbol|literal|code|constant|email|uri|guiicon|guibutton|guimenuitem|guimenu|guisubmenu|guilabel|menuchoice|mousebutton|keycombo|keycap|keycode|keysym|shortcut|accel|prompt|envar|filename|command|computeroutput|userinput|function|varname|returnvalue|type|classname|exceptionname|interfacename|methodname|modifier|initializer|ooclass|ooexception|oointerface|errorcode|errortext|errorname|errortype)*>

<!ENTITY % db.common.attributes "
  xml:id  ID #IMPLIED
  version CDATA #IMPLIED
  xml:lang CDATA #IMPLIED
  xml:base CDATA #IMPLIED
  remap CDATA #IMPLIED
  xreflabel CDATA #IMPLIED
  revisionflag (changed|added|deleted|off) #IMPLIED
  dir (ltr|rtl|lro|rlo) #IMPLIED
  arch CDATA #IMPLIED
  audience CDATA #IMPLIED
  condition CDATA #IMPLIED
  conformance CDATA #IMPLIED
  os CDATA #IMPLIED
  revision CDATA #IMPLIED
  security CDATA #IMPLIED
  userlevel CDATA #IMPLIED
  vendor CDATA #IMPLIED
  wordsize CDATA #IMPLIED
  annotations CDATA #IMPLIED
">
`;

export default code;
