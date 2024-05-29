import { mapDOM } from "./GetDOM.js";
import { WritePost } from "./WritePost.js";
import { contentType } from "./ContentType.js";

export class CreateKeyboardEvent {
   
  curElem : Element;
  mainElem : Element;

  constructor(mainElem : Element, start : "head" | "body"){
    this.curElem = WritePost(mainElem, start);
    this.mainElem = mainElem;
  }

  EnterEvent(event : KeyboardEvent){
    if(event.isComposing == false) return;

    if(event.key === "Enter"){   
      const elem = mapDOM.GetDOM("content-type");
      
      if(elem){
        if(elem.textContent === contentType.header){
          elem.textContent = contentType.body;
          this.curElem = WritePost(this.mainElem, "body");
        }

        else if(elem.textContent === contentType.body){
          elem.textContent = contentType.header;
          this.curElem = WritePost(this.mainElem, "body");
        }

      }
      else{
        throw Error("잘못된 content-type");
      }
    }
  }

  InputEvent(event : Event){
    let inputElem = event.target as HTMLInputElement;
    this.curElem.textContent = inputElem.value;
  }
}
