import { ExecCreateCmd } from "./ExecCreateCommand.js";


//TODO 제네릭으로 수정하기.. Hmm
//* ExeCmd = (reqData : ReqData, command : ReqData.command) => void  
//* Command : SearchCmd | CreateCmd | HelpCmd, T에서 중 하나라는 걸 나타내고 싶다. 

export function ExecuteCommand(reqData : ReqData) : void {
  const command = reqData.command;

  switch(command.command){
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

function ExecSearchCmd(reqData : ReqData, command : SearchCmd){
  const subCommand = command.subCommand;
  switch(subCommand){
    case "-f":
      break;
    case "-g":
      break;
    case null:
      break;
  }
}


function ExecHelpCmd(reqData : ReqData, command : HelpCmd){

}

