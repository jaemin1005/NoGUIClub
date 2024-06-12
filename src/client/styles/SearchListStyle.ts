
const searchListStyle : Partial<CSSStyleDeclaration> = {
  "fontSize" : "1rem",
  "marginTop" : "0.5rem",
  "marginBottom" : "0.5rem"
}

const searchListStyleMap : StyleMap = new Map<Theme, Partial<CSSStyleDeclaration>>();
searchListStyleMap.set("origin", searchListStyle);

export {searchListStyleMap};