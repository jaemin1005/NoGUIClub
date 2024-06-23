import { mapDOM } from "../../modules/DOM/GetDOM";

/**
 * * mainElem에 element를 넣는 클로저를 반환한다.
 * * 클로저는 배열에 null이 있을 경우 공백역활을 하는 div를 넣는다.
 * @param mainElem : root Element의 역활
 * @returns 
 */
const Func = function(mainElem : Element){
  const root = mainElem;
  
  return function(...arrElem : Array<Element | null>){
      for(let elem of arrElem){
        if(elem != null)
          root.appendChild(elem);
        else{
          root.appendChild(document.createElement("div"));
        }
      }
  }
}

const mainElem = mapDOM.GetDOM("main-view")!;
export const AddChildInRootElement = Func(mainElem);