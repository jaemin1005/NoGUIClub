interface SearchCmd {
  command : "search";
  subCommand : "-f" | "-g" | null;
}

interface CreateCmd {
  command : "create";
  subCommand? : "-m" | null;
}

interface HelpCmd{
  command : "help";
  subCommand? : "-d" | null;
}

type Command = SearchCmd | CreateCmd | HelpCmd;

interface reqData {
  header : "ngc";
  command : Command;
  value : string | null;
}

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
 * * CheckCommand 확인
 * * 
 * @param strCommand
 * @returns 
 */
export function CheckCommand(strCommand : string) : reqData | null{
  
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
  else{
    const command : SearchCmd = {command : "search", subCommand: null}
    return {header : "ngc", command : command , value : strCommand};
  }
}

export function TestCheckCommand(cmd : string){
  console.dir(CheckCommand(cmd));
}


