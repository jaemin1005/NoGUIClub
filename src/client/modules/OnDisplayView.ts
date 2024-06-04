import { IsHTMLElement } from "./IsHTMLElement";

/**
 * * rootElem의 자식들 상태 변경
 * * Display : none => Display : block
 * @param rootElem 
 */
export function OnDisplayView(rootElem : Element){
  const children = rootElem.children;

  for(let elem of Array.from(children)){
    //* HTMLElement인지 확인, display 상태가 none인지
    if(IsHTMLElement(elem) && elem.style.display === "none"){
      elem.style.display = "block";
    }
  }
}