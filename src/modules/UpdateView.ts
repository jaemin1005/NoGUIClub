//* Main DOM
const $mainDOM = document.getElementById("main-view")!;
//* 임시 저장할 공간.
const stash : Array<Element> = [];


export function UpdateView(arrStr : string[]) : void {
  const $mainView = document.getElementById("main-view")!;

  for(let content of arrStr){
    const $div = document.createElement("div");
    $div.textContent = content;
    $mainView.appendChild($div);
  }
}

/** 화면을 클리어하고 임시 stash에 children들을 저장한다. */
export function CleareView(){
  let children = $mainDOM.children;
  stash.length = 0;

  while($mainDOM.children.length > 0){
    stash[stash.length] = children[0];
    children[0].remove();
  }
}

