import { mapDOM } from "../../../modules/GetDOM";
import { contentType } from "../../../modules/ContentType";
import { CreateElement } from "../../../modules/CreateElement";
import { AddChildInRootElement } from "../../../modules/AddChildInRootElement";
import { eventController } from "../../EventController";
import { CreateEvent } from "./ArrCreateEvent";
import { ClearView } from "../../../modules/ClearView";
import { enumPostElemName } from "../../../modules/Enum/EnumPostElemName";
import { ICommandData, CreateCmd } from "@shared/interface/ICommand";

/**
 * * Create의 명령어에 의해 호출된 함수
 * * 글 작성에 대한 이벤트를 작성해야 함으로 input에 대한 Event를 바꿔준다.
 * @param reqData 
 * @param command 
 */
export function ExecCreateCmd(reqData : ICommandData, command :CreateCmd){
  const subCommand = command.sub;
  const main = mapDOM.GetDOM("main-view")!
  const contentTypeElem = mapDOM.GetDOM("command-type")!;
  let style : "head" | "body" | null;

  ClearView(main);
  InitView();

  //* -m 서브명령어일 경우
  if(subCommand === "-m"){
    const headElem = document.getElementById(enumPostElemName.header)!
    contentTypeElem.textContent = contentType.body;
    headElem.textContent = reqData.value;
    style = "body";
  }

  //* -m 명령어일 경우
  else{
    contentTypeElem.textContent = contentType.header;
    style = "head";
  }

  eventController.AddStash(CreateEvent(main, style));
  
}

function InitView(){

  let createHeadElem : ICustomElement<"div"> = {
    elem : "div",
    property : {
      id : `${enumPostElemName.header}`,
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