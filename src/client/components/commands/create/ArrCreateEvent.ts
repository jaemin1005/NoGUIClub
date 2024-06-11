import { CreateKeyboardEvent } from "./CreateCmdKeyboardEvent";
import { AdjustWidth } from "../../../modules/KeyboardEvent";

export function CreateEvent(mainElem : Element, start : "head" | "body"){
  const execCreateEvent = new CreateKeyboardEvent(mainElem, start);
   
  const enter : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => execCreateEvent.Enter(event)
  };

  const input : IEventMap<"input", HTMLInputElement> = {
    type : "input",
    func : (event) => execCreateEvent.InputEvent(event)
  }
  
  const escape : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => execCreateEvent.Escape(event)
  }

  const adjust : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : AdjustWidth()
  }

  return [enter, input, escape, adjust];
}


