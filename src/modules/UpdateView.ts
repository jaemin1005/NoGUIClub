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

export function WriteView(){

}

export function CreateHeader(){

}
