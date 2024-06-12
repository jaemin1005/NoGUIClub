import { CheckCommand, CorrectCommand } from "./CheckCommand";
import { ExecuteCommand } from "./commands/ExecCommand";
import { AddErrorInView } from "./commands/ErrorCommand";

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
      AddErrorInView("옳바른 값이 아닙니다", [`${value}을 다시 확인해 보세요`]);
    }
  }

  else{
    //TODO 에러처리를 해야 된다. 
    AddErrorInView("주요 커맨드가 아닙니다.", [`${value}은 옳바른 커맨드가 아닙니다.`]);
  }
}