import { CheckCommand, CorrectCommand } from "../modules/CheckCommand.js";
import { ExecuteCommand } from "./Commands/ExecCommand.js";

//* Command 실행 절차.
//* (1) Header가 있는지, Command 체크 => CheckCommand
//* (2) SubCommand가 있는지 => CorrectCommand
//* (3) Command 실행 => ExecuteCommand
export function ExecCmd(value : string){
  const isCommand = CheckCommand(value);
  if(isCommand){
    if(CorrectCommand(isCommand)){
      ExecuteCommand(isCommand);
    }

    else{
      //TODO 에러처리를 해야 된다.
      
    }
  }

  else{
    //TODO 에러처리를 해야 된다. 
  }
}