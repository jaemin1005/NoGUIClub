type ExecCreateCmd = (reqData : ReqData) => void;

let ExecCreateCmd_M : ExecCreateCmd = function(reqData){}
let ExecCreateCmd_NULL : ExecCreateCmd = function(reqData){}




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
