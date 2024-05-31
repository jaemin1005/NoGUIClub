import { IsHTMLElement } from "./IsHTMLElement.js";

/**
 * * Display가 none이 아닌 경우만 삭제해야한당 :)
 * @param rootElem 
 */
export function DeleteView(rootElem : Element){
  let children = rootElem.children;
  let idx = 0;
  
  while(idx !== children.length){
    const elem = children[idx];
    
    //* Element가 HTMLElement가 아닐 경우 넘어간다. 
    if(IsHTMLElement(elem) === false){
      idx++;
      continue;
    }

    if(elem.style.display !== "none"){
      rootElem.removeChild(elem);
    }
    
    else{
      idx++;
    }
  }  
}