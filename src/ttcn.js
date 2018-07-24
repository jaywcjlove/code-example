
const code = `module Templates {
  /* import types from ASN.1 */
  import from Types language "ASN.1:1997" all;

  /* During the conversion phase from ASN.1 to TTCN-3 */
  /* - the minus sign (Message-Type) within the identifiers will be replaced by underscore (Message_Type)*/
  /* - the ASN.1 identifiers matching a TTCN-3 keyword (objid) will be postfixed with an underscore (objid_)*/

  // simple types

  template SenderID localObjid := objid {itu_t(0) identified_organization(4) etsi(0)};

  // complex types

  /* ASN.1 Message-Type mapped to TTCN-3 Message_Type */
  template Message receiveMsg(template (present) Message_Type p_messageType) := {
    header := p_messageType,
    body := ?
  }

  /* ASN.1 objid mapped to TTCN-3 objid_ */
  template Message sendInviteMsg := {
      header := inviteType,
      body := {
        /* optional fields may be assigned by omit or may be ignored/skipped */
        description := "Invite Message",
        data := 'FF'O,
        objid_ := localObjid
      }
  }

  template Message sendAcceptMsg modifies sendInviteMsg := {
      header := acceptType,
      body := {
        description := "Accept Message"
      }
    };

  template Message sendErrorMsg modifies sendInviteMsg := {
      header := errorType,
      body := {
        description := "Error Message"
      }
    };

  template Message expectedErrorMsg := {
      header := errorType,
      body := ?
    };

  template Message expectedInviteMsg modifies expectedErrorMsg := {
      header := inviteType
    };

  template Message expectedAcceptMsg modifies expectedErrorMsg := {
      header := acceptType
    };

} with { encode "BER:1997" }
`;

export default code;
