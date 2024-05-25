let composing = false;
document.getElementById("command-text")!.contentEditable = "true";


export function CompositionStart() {
  composing = true;
}

export function CompositionEnd() {
  const $commandText = document.getElementById("command-text")!;

  return function(event : CompositionEvent){
    composing = false; // IME 입력 종료
    $commandText.textContent += event.data; // 최종 조합된 문자 추가
  }
}

export function KeyDownEvent(){
  const $commandText = document.getElementById("command-text")!;

  return function(event : KeyboardEvent){
    if(!composing && event.key.length === 1){
      $commandText.textContent += event.key;       
    }
  }
}

export function KeyEnterDownEvent(event: KeyboardEvent){
  if(event.key === "Enter"){
    const $elem = event.target as HTMLInputElement;
    $elem.value = "";
  }
}

export function KeyBackspaceEvent(){
  const $commadText = document.getElementById("command-text")!;

  return function(event: KeyboardEvent){
    if(event.key === "Backspace" && $commadText.textContent !== null){
        $commadText.textContent = $commadText.textContent.slice(0, -1);
    }
  }
}

export function AdjustWidth(){
  const tempSpan = document.createElement('span');
  tempSpan.style.visibility = 'hidden';
  tempSpan.style.position = 'absolute';
  tempSpan.style.whiteSpace = 'pre';

  return function(this: HTMLInputElement){
    tempSpan.textContent = this.value || this.placeholder || ' ';
    tempSpan.style.fontFamily = getComputedStyle(this).fontFamily;
    tempSpan.style.fontSize = getComputedStyle(this).fontSize;

    document.body.appendChild(tempSpan);
    this.style.width = tempSpan.offsetWidth + 'px';
    document.body.removeChild(tempSpan);
  }
}
