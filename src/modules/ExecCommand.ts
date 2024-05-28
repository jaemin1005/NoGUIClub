import { findSourceMap } from "module";

function ExecuteCommand(reqData : ReqData) : void {
  const command = reqData.command.command;

  switch(command){
    case "search":
      ExecSearchCmd(reqData);
      break;  
    case "create":
      ExecCreateCmd(reqData);
      break;
    case "help":
      ExecHelpCmd(reqData);
      break;  
  }
}

function ExecSearchCmd(reqData : ReqData){

}

function ExecCreateCmd(reqData : ReqData){

}

function ExecHelpCmd(reqData : ReqData){

}