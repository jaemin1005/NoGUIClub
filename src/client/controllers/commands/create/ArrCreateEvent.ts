import { CreateKeyboardEvent } from "./CreateCmdKeyboardEvent";
import { AdjustWidth } from "../../Event/KeyboardEvent";

export function ArrCreateEvent(createKeyboardEvent : CreateKeyboardEvent){
   
  const enter : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => createKeyboardEvent.Enter(event)
  };

  const input : IEventMap<"input", HTMLInputElement> = {
    type : "input",
    func : (event) => createKeyboardEvent.InputEvent(event)
  }
  
  const escape : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => createKeyboardEvent.Escape(event)
  }

  const adjust : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : AdjustWidth()
  }

  return [enter, input, escape, adjust];
}


