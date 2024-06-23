import { CheckCommand, CorrectCommand } from "./CheckCommand";
import { ExecuteCommand } from "./ExecCommand";
import { AddErrorInView } from "./ErrorCommand";

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
      AddErrorInView("It is not the correct value", [`"${value}" please check again`]);
    }
  }

  else{
    //TODO 에러처리를 해야 된다. 
    AddErrorInView("command not found.", [`"${value}" is not a valid command.`, "To see a list of supported ngc commands, run:", "\u00A0\u00A0\u00A0\u00A0\u00A0ngc help"]);
  }
}