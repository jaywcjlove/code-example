const code = `REPORT zrosetta_base64_encode_data.

DATA: li_client  TYPE REF TO if_http_client,
      lv_encoded TYPE string,
      lv_data    TYPE xstring.


cl_http_client=>create_by_url(
  EXPORTING
    url    = 'http://rosettacode.org/favicon.ico'
  IMPORTING
    client = li_client ).

li_client->send( ).
li_client->receive( ).

lv_data = li_client->response->get_data( ).

CALL FUNCTION 'SSFC_BASE64_ENCODE'
  EXPORTING
    bindata = lv_data
  IMPORTING
    b64data = lv_encoded.

WHILE strlen( lv_encoded ) > 100.
  WRITE: / lv_encoded(100).
  lv_encoded = lv_encoded+100.
ENDWHILE.
WRITE: / lv_encoded.
`;

 export default code;