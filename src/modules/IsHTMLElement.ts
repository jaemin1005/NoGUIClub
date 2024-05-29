/** Element가 HTMLElement가 맞는지 검사 */
export function IsHTMLElement(elem : Element) : elem is HTMLElement{
  return "style" in Element;
}