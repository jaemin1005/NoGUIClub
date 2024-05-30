import { CreateKeyboardEvent } from "./CreateCmdKeyboardEvent.js";
import { mapDOM } from "./GetDOM.js";
import { keydownEvent } from "./KeyboardEvent.js";
import { contentType } from "./ContentType.js";
import { CreateElement } from "./CreateElement.js";
import { AddChildInRootElement } from "./AddChildInRootElement.js";

/**
 * * Create의 명령어에 의해 호출된 함수
 * * 글 작성에 대한 이벤트를 작성해야 함으로 input에 대한 Event를 바꿔준다.
 * @param reqData 
 * @param command 
 */
export function ExecCreateCmd(reqData : ReqData, command :CreateCmd){
  const subCommand = command.subCommand;
  const main = mapDOM.GetDOM("main-view")!
  const input = mapDOM.GetDOM("command-text")! as HTMLInputElement; 
  const contentTypeElem = mapDOM.GetDOM("command-type")!;
  let createKeyboardEvent = null;

  InitView();

  //* -m 서브명령어일 경우
  if(subCommand === "-m"){
    createKeyboardEvent = new CreateKeyboardEvent(main, "body");

    const headElem = document.getElementById("post-header")!
    contentTypeElem.textContent = contentType.body;
    headElem.textContent = reqData.value;
  }

  //* -m 명령어일 경우
  else{
    createKeyboardEvent = new CreateKeyboardEvent(main, "head");
    contentTypeElem.textContent = contentType.header;
  }

  input.removeEventListener("keydown", keydownEvent);
  input.addEventListener("keydown",(event) =>  createKeyboardEvent.EnterEvent(event));
  input.addEventListener("input", (event) => createKeyboardEvent.InputEvent(event));
  input.addEventListener("keydown", (event) => createKeyboardEvent.EscapeEvent(event));  
}

function InitView(){

  let createHeadElem : ICustomElement<"div"> = {
    elem : "div",
    property : {
      id : "post-header"
    },
    style : {
      color : "rgb(255,255,0)",
      fontSize : "1.5rem",
      height : "1.5rem"
    }
  }


  let headElem = CreateElement(createHeadElem);
  AddChildInRootElement(null, null, headElem, null, null);
}