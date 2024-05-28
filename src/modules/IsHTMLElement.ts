export function IsHTMLElement(elem : Element) : elem is HTMLElement{
  return "style" in Element;
}