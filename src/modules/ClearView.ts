import { IsHTMLElement } from "./IsHTMLElement";

export function ClearView(elem : Element, stash : Array<Element>){
  let children = elem.children;
  stash.length = 0;

  for(let elem of Array.from(children)){
    if(IsHTMLElement(elem)){
      elem.style.display = "none";
      stash[stash.length] = elem;
    }
  }
}

