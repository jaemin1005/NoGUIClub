import { HexaIntoRGB } from "client/modules/HexaIntoRGB";

const postHeadStyle : Partial<CSSStyleDeclaration> = {
  color : HexaIntoRGB("#F4BF4F"),
  fontSize : "1.5rem",
  height : "1.5rem",
}

const postHeadStyleMap : StyleMap = new Map();
postHeadStyleMap.set("origin", postHeadStyle);

export { postHeadStyleMap };