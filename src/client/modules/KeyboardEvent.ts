import { ExecCmd } from "../Components/ExecCommandComponent.js";

/** Input KeyDown Type */
type KeyDownFunc = (elem : HTMLInputElement, idx : number) => number;



/** command 저장 */
const commands : Array<string> = [];
/** command 임시 저장 */
let stash : string = "";

/**
 * * 아래 방향키에 대한 이벤트
 * * commands를 탐색하는 동작을 한다. idx => idx+1
 * @param elem 호출한 Element
 * @param idx index
 * @returns 
 */
let KeyDownArrowUp : KeyDownFunc = function(elem, idx){
  
  if(idx == 0){
    return idx;
  }

  //* 임시 저장한다.
  if( idx == commands.length ){
    stash = elem.value;
  }

  elem.value = commands[--idx];
  return idx;
}

/**
 * * 위 방향키에 대한 이벤트
 * * commands를 탐색하는 이벤트이다 idx => idx-1;
 * @param elem 호출한 Element
 * @param idx cur index
 * @returns 
 */
let KeyDownArrowDown : KeyDownFunc = function(elem, idx){
  if(commands.length == 0 || idx == commands.length){
    return idx;
  }

  elem.value = ++idx == commands.length ? stash : commands[idx];
  return idx;
}

/** 
 * * EnterKey에 대한 이벤트
 * * input value를 클리어 해준다.
 */
let KeyDownEnter : KeyDownFunc = function(elem, idx){
  commands[commands.length] = elem.value;
  elem.value = "";
  return commands.length;
}

/**
 * * 키 down 이벤트에 대한 함수
 * @returns 
 */
export function KeyDownEvent() {
  let curIdx : number = commands.length;

  return function(this:HTMLInputElement, event : KeyboardEvent) : void{

    //* 문자가 조합중인 상태이면 빠져나가자
    if(event.isComposing == true) return;
    
    //* 키 입력에 따른 이벤트 :) 
    switch(event.key){
      case "ArrowUp":
        event.preventDefault();
        curIdx = KeyDownArrowUp(this, curIdx);
        break;
      case "ArrowDown":
        event.preventDefault();
        curIdx = KeyDownArrowDown(this, curIdx);
        break;
      case "Enter":
        event.preventDefault();
        ExecCmd(this.value);
        curIdx = KeyDownEnter(this, curIdx);
        break;
    }
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

/**
 * * Span을 임시로 생성하여 동적으로 Input의 크기를 변경하는 함수
 * @returns 
 */
export function AdjustWidth(){
  const $span = document.createElement('span');
  $span.style.visibility = 'hidden';
  $span.style.position = 'absolute';
  $span.style.whiteSpace = 'pre';

  return function(this: HTMLInputElement){
    $span.textContent = this.value || this.placeholder || ' ';
    $span.style.fontFamily = getComputedStyle(this).fontFamily;
    $span.style.fontSize = getComputedStyle(this).fontSize;

    document.body.appendChild($span);
    this.style.width = $span.offsetWidth + 'px';
    document.body.removeChild($span);
  }
}

export const keydownEvent = KeyDownEvent();