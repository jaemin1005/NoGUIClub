export function ClearView(elem : Element, stash : Array<Element>){
  let children = elem.children;
  stash.length = 0;

  while(elem.children.length > 0){
    stash[stash.length] = children[0];
    children[0].remove();
  }
}