import { ClearView } from "./ClearView";
import { CreateKeyboardEvent } from "./CreateCmdKeyboardEvent";
import { mapDOM } from "./GetDOM";
import { ReadyWritePost } from "./WritePost";
import { KeyDownEvent } from "./KeyboardEvent";

//type ExecCreateCmd = (reqData : ReqData, event : KeyboardEvent) => void;
//! 명령어 시나리오 1 -> 2
//* 이벤트 연결 해제를 해야겠다. :)
let ExecCreateCmd_NULL = function(reqData : ReqData){

  const subCommand = reqData.command.subCommand;
  const main = mapDOM.GetDOM("main-view")!
  const input = mapDOM.GetDOM("command-text")! as HTMLInputElement; 
  let createKeyboardEvent = null;

  ReadyWritePost(main);

  if(subCommand === "-m"){
    createKeyboardEvent = new CreateKeyboardEvent(main, "body"); 

  }
  else{
    createKeyboardEvent = new CreateKeyboardEvent(main, "head");
  }


  input.removeEventListener("keydown", KeyDownEvent);
  input.addEventListener("keydown", createKeyboardEvent.EnterEvent);
  input.addEventListener("input", createKeyboardEvent.InputEvent);
}



export function ExecCreateCmd(reqData : ReqData, command :CreateCmd){
  const subCommand = command.subCommand;
  switch(subCommand){
    case "-m":
      ExecCreateCmd_M(reqData);
      break;
    case null:
      ExecCreateCmd_NULL(reqData);
      break;
  }
}
