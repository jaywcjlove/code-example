
const code = `[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
interface HTMLImageElement : HTMLElement {
           attribute DOMString alt;
           attribute DOMString src;
           attribute DOMString srcset;
           attribute DOMString sizes;
           attribute DOMString? crossOrigin;
           attribute DOMString useMap;
           attribute boolean isMap;
           attribute unsigned long width;
           attribute unsigned long height;
  readonly attribute unsigned long naturalWidth;
  readonly attribute unsigned long naturalHeight;
  readonly attribute boolean complete;
  readonly attribute DOMString currentSrc;

  // also has obsolete members
};

partial interface HTMLImageElement {
  attribute DOMString name;
  attribute DOMString lowsrc;
  attribute DOMString align;
  attribute unsigned long hspace;
  attribute unsigned long vspace;
  attribute DOMString longDesc;

  [TreatNullAs=EmptyString] attribute DOMString border;
};

`;

export default code;
