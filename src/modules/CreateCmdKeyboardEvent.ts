import { mapDOM } from "./GetDOM.js";
import { WritePost } from "./WritePost.js";
import { contentType } from "./ContentType.js";

//* Create 명령어에 대한 KeyboarEvent
export class CreateKeyboardEvent {
   
  curElem : Element;
  mainElem : Element;

  constructor(mainElem : Element, start : "head" | "body"){
    this.curElem = WritePost(mainElem, start);
    this.mainElem = mainElem;
  }

  EnterEvent(event : KeyboardEvent){
    if(event.isComposing == true) return;

    if(event.key === "Enter"){   
      const elem = mapDOM.GetDOM("command-type");
      
      if(elem){
        if(elem.textContent === contentType.header){
          elem.textContent = contentType.body;
          this.curElem = WritePost(this.mainElem, "body");
        }

        else if(elem.textContent === contentType.body){
          elem.textContent = contentType.body;
          this.curElem = WritePost(this.mainElem, "body");
        }

      }
      else{
        throw Error("잘못된 content-type");
      }

      //* Enter시 초기화 :) 
      let inputElem = event.target as HTMLInputElement
      inputElem.value = "";
    }
  }

  InputEvent(event : Event){
    let inputElem = event.target as HTMLInputElement;
    this.curElem.textContent = inputElem.value;
  }
}
