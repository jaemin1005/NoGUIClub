import { CheckCommand, CorrectCommand } from "../modules/CheckCommand";
import { ExecuteCommand } from "../modules/ExecCommand";

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