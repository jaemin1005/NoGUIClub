import { Command, ICommandData, SearchCmd } from "@shared/interface/ICommand";

/** Command인제 체커하는 함수 */
function IsCommand(command: string, subCommand: string | null): Command | null {

  switch (command) {
    case "search":
      if (subCommand === "-f" || subCommand === "-g" || subCommand === null) {
        return { main: command, sub: subCommand, value: "1" }
      }
      break;
    case "create":
      if (subCommand === "-m" || subCommand === null) {
        return { main: command, sub: subCommand, value: null }
      }
      break;
    case "help":
      if (subCommand === null) {
        return { main: command, sub: subCommand, value: null }
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
export function CheckCommand(strCommand: string): ICommandData | null {

  const splitCommand = strCommand.split(" ");

  if(splitCommand.length >= 2 && splitCommand[0] === "ngc") {
    const header = splitCommand[0];
    const command = splitCommand[1];
    let subCommand : string | null = null;
    let value : string | null = null;

    if (splitCommand.length >= 3) {
      if(splitCommand[2].length === 2 && splitCommand[2][0] === '-' )
      {
        subCommand = splitCommand[2];
      }

      else{
        value = splitCommand.slice(2).join(" ");
      }

      if(value === null && splitCommand.length >= 4){
        value = splitCommand.slice(3).join(" ");
      }
    }

    console.log(`${header} ${command} ${subCommand} ${value}`);

    const isCommand = IsCommand(command, subCommand);
    if (isCommand) {
      return { header: header, command: isCommand, value: value }
    }
    else {
      return null;
    }
  }

  //* Default
  //* Command가 아닐 경우 default로 Search Command를 보낸다.
  //* 명령어가 아닌 경우 return null로 반환하자  
  else {
    // const command : SearchCmd = {main : "search", sub: null, value : "1"}
    // return {header : "ngc", command : command , value : strCommand};
    return null;
  }
}

/**
 * * 올바른 Command인지 체크
 * @param reqData 
 * @returns 
 */
export function CorrectCommand(reqData: ICommandData): boolean {
  const command = reqData.command.main;

  switch (command) {
    case "search":
      return true;
    case "create":
      return true;
    case "help":
      return reqData.value === null ? true : false;
  }
}