import { ExecCreateCmd } from "./create/ExecCreateCommand";
import { ICommandData, SearchCmd, HelpCmd } from "@shared/interface/ICommand";

//TODO 제네릭으로 수정하기.. Hmm
//* ExeCmd = (reqData : ReqData, command : ReqData.command) => void  
//* Command : SearchCmd | CreateCmd | HelpCmd, T에서 중 하나라는 걸 나타내고 싶다. 

export function ExecuteCommand(reqData : ICommandData) : void {
  const command = reqData.command;

  switch(command.main){
    case "search":
      ExecSearchCmd(reqData, command);
      break;  
    case "create":
      ExecCreateCmd(reqData, command);
      break;
    case "help":
      ExecHelpCmd(reqData, command);
      break;  
  }
}

function ExecSearchCmd(reqData : ICommandData, command : SearchCmd){
  const subCommand = command.sub;
  switch(subCommand){
    case "-f":
      break;
    case "-g":
      break;
    case null:
      break;
  }
}


function ExecHelpCmd(reqData : ICommandData, command : HelpCmd){

}

