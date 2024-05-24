export function UpdateView(arrStr : string[]) : void {
  const $mainView = document.getElementById("main-view")!;

  for(let content of arrStr){
    const $div = document.createElement("div");
    $div.textContent = content;
    $mainView.appendChild($div);
  }
}