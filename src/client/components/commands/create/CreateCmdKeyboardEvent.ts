import { mapDOM } from "../../../modules/GetDOM";
import { WritePost } from "./WritePost";
import { contentType } from "../../../modules/ContentType";
import { EnumCreateEscCmd } from "../../../modules/EnumCreateEscCmd";
import { ESCQuitFunc } from "./EscQuitFunc";
import { enumPostElemName } from "../../../modules/Enum/EnumPostElemName";
import { EscSaveFunc } from "./EscSaveFunc"
import { CommandKeyboardEvent } from "../../../modules/CommandKeyboardEvent";

//* Create 명령어에 대한 KeyboarEvent
export class CreateKeyboardEvent extends CommandKeyboardEvent<"input">{

  typeElem: Element;
  mainElem: Element;

  //* Esc Event에 필요한 프로퍼티 :) 
  isEsc: boolean
  tempText : string;

  constructor(targetElem : HTMLInputElement, mainElem: Element, start: "head" | "body") {
    super(targetElem);
    this.typeElem = WritePost(mainElem, start);
    this.mainElem = mainElem;
    this.isEsc = false;
    this.tempText = "";
  }

  //* keydown - Enter에 대한 이벤트
  EnterCbFunc(event: KeyboardEvent) {
    const elem = mapDOM.GetDOM("command-type");

    if (elem) {
      if (elem.textContent === contentType.header) {
        elem.textContent = contentType.body;
        this.typeElem = WritePost(this.mainElem, "body");
      }

      else if (elem.textContent === contentType.body) {
        elem.textContent = contentType.body;
        this.typeElem = WritePost(this.mainElem, "body");
      }

      else if (elem.textContent === contentType.esc) {
        const input = event.target as HTMLInputElement;
        const command = input.value;

        switch(command){
          //* 나가기 명령어
          case EnumCreateEscCmd.quit:
            elem.textContent = "";
            ESCQuitFunc(this.mainElem);
            break;
          //* 저장 명령어
          case EnumCreateEscCmd.save:
            elem.textContent = "";
            EscSaveFunc(this.mainElem);
            break;
          //* 임시저장 명령어
          //* 아직 구현 (X)
          case EnumCreateEscCmd.stash:
            break;
          //* 에러를 화면에 보낼까?
          default:
            break;
        }
      }
    }

    else {
      throw Error("잘못된 content-type");
    }

    //* Enter시 초기화 :) 
    //let inputElem = event.target as HTMLInputElement
    this.watchElem.value = "";
  }

  //* input - Input에 대한 이벤트
  InputEvent(event: Event) {
    //* Esc 키 이벤트 중 :) 
    if (this.isEsc === true) return;
    this.typeElem.textContent = this.watchElem.value;
  }

  //* keydown - Esc키에 대한 이벤트
  EscapeCbFunc(event: KeyboardEvent) {

    this.isEsc = !this.isEsc
    const elem = mapDOM.GetDOM("command-type")!;

    if (this.isEsc === true) {
      elem.textContent = contentType.esc;
      this.tempText = this.watchElem.value;
      this.watchElem.value = "";
    }

    else {
      if (this.typeElem.id === enumPostElemName.header) {
        elem.textContent = contentType.header;
      }
      else {
        elem.textContent = contentType.body;
      }
      this.watchElem.value = this.tempText;
    }
  }
}
