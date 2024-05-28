

/** Command인제 체커하는 함수 */
function IsCommand(command : string, subCommand : string | null) : Command | null{

  switch(command){
    case "search":
      if(subCommand === "-f" || subCommand === "-g" || subCommand === null){
        return { command : command, subCommand : subCommand}
      }
      break;
    case "create":
      if(subCommand === "-m" || subCommand === null){
        return {command : command, subCommand : subCommand}
      }
      break;
    case "help":
      if(subCommand === "-d" || subCommand === null){
        return {command : command, subCommand : subCommand}
      }
     break;
    default:
      return null;
  }
  return null;
}

/**
 * * 단순 Command의 유무를 확인합니다.
 * @param strCommand
 * @returns 
 */
export function CheckCommand(strCommand : string) : ReqData | null{
  
  const splitCommand = strCommand.split(" ");

  if(strCommand.length > 2 && splitCommand[0] === "ngc"){
    const header = splitCommand[0];
    const command = splitCommand[1];
    const subCommand = splitCommand[3] !== undefined ? splitCommand[2] : null;
    const value = splitCommand[3] === undefined ? (splitCommand[2] !== undefined ? splitCommand[2] : null)  : splitCommand[3];
    
    const isCommand = IsCommand(command, subCommand);
    
    if(isCommand){
      return {header : header, command : isCommand, value : value}
    }
    else{
      return null;
    }
  }

  //* Default
  //* Command가 아닐 경우 default로 Search Command를 보낸다. 
  else{
    const command : SearchCmd = {command : "search", subCommand: null}
    return {header : "ngc", command : command , value : strCommand};
  }
}

export function TestCheckCommand(cmd : string){
  console.dir(CheckCommand(cmd));
}

/**
 * * 올바른 Command인지 체크
 * @param reqData 
 * @returns 
 */
export function CorrectCommand(reqData : ReqData) : boolean{
  const command = reqData.command.command;

  switch(command){
    case "search": 
      return reqData.value !== null ? true : false;
    case "create":
      return true;
    case "help":
      return true;
  }
}