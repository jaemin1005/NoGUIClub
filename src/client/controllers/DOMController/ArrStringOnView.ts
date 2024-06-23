import { mapDOM } from "@client/modules/DOM/GetDOM";
import { ContourElem } from "./ContourElem";
import { CreateElement } from "@client/modules/DOM/CreateElement";

export function ArrStringOnView(arr : string[], isContour : boolean, style?  : Partial<CSSStyleDeclaration>){
  const $mainView = mapDOM.GetDOM("main-view")!;

  if(isContour) ContourElem();

  arr.forEach(str => 
    $mainView.appendChild(CreateElement({
      elem : "div",
      property : {
        textContent : str
      },
      style : style     
    })))

    if(isContour) ContourElem();
}