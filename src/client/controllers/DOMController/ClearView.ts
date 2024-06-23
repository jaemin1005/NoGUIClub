import { IsHTMLElement } from "../../modules/TypeGuard/IsHTMLElement";

/**
 * * rootElem의 자식들의 상태 변경
 * * Display block => Display none으로 바꿔주는 작업을 합니다.
 * @param rootElem 
 */
export function ClearView(rootElem : Element){
  let children = rootElem.children;

  for(let elem of Array.from(children)){
    if(IsHTMLElement(elem)){
      elem.style.display = "none";
    }
  }
}

