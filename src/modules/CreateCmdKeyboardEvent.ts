import { mapDOM } from "./GetDOM.js";
import { WritePost } from "./WritePost.js";
import { contentType } from "./ContentType.js";
import { EnumCreateEscCmd } from "./EnumCreateEscCmd.js";

//* Create 명령어에 대한 KeyboarEvent
export class CreateKeyboardEvent {

  curElem: Element;
  mainElem: Element;

  //* Esc Event에 필요한 프로퍼티 :) 
  isEsc: boolean
  tempCurElem: Element | null;
  tempText : string;

  constructor(mainElem: Element, start: "head" | "body") {
    this.curElem = WritePost(mainElem, start);
    this.mainElem = mainElem;
    this.isEsc = false;
    this.tempCurElem = null;
    this.tempText = "";
  }

  //* keydown - Enter에 대한 이벤트
  EnterEvent(event: KeyboardEvent) {
    if (event.isComposing == true || event.key !== "Enter") return;

    const elem = mapDOM.GetDOM("command-type");

    if (elem) {
      if (elem.textContent === contentType.header) {
        elem.textContent = contentType.body;
        this.curElem = WritePost(this.mainElem, "body");
      }

      else if (elem.textContent === contentType.body) {
        elem.textContent = contentType.body;
        this.curElem = WritePost(this.mainElem, "body");
      }

      else if (elem.textContent === contentType.esc) {
        const input = event.target as HTMLInputElement;
        const command = input.value;

        //* 나가기 명령어
        if(command === EnumCreateEscCmd.quit){
          
        }
      }
    }

    else {
      throw Error("잘못된 content-type");
    }

    //* Enter시 초기화 :) 
    let inputElem = event.target as HTMLInputElement
    inputElem.value = "";
  }

  //* input - Input에 대한 이벤트
  InputEvent(event: Event) {
    //* Esc 키 이벤트 중 :) 
    if (this.isEsc === true) return;

    let inputElem = event.target as HTMLInputElement;
    this.curElem.textContent = inputElem.value;
  }

  //* keydown - Esc키에 대한 이벤트
  EscapeEvent(event: KeyboardEvent) {
    if (event.isComposing === true || event.key !== "Escape") return;


    this.isEsc = !this.isEsc
    const elem = mapDOM.GetDOM("command-type")!;
    const input = event.target as HTMLInputElement;

    if (this.isEsc === true) {
      elem.textContent = contentType.esc;
      this.tempCurElem = this.curElem;
      this.tempText = input.value;
      input.value = "";
    }

    else {
      this.curElem = this.tempCurElem!;
      if (this.curElem.id === "post-header") {
        elem.textContent = contentType.header;
      }
      else {
        this.curElem.id = contentType.body;
      }
      input.value = this.tempText;
    }
  }
}
