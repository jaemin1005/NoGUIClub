import { CreateKeyboardEvent } from "../Components/Commands/Create/CreateCmdKeyboardEvent.js";
import { AdjustWidth } from "./KeyboardEvent.js";

export function CreateEvent(mainElem : Element, start : "head" | "body"){
  const execCreateEvent = new CreateKeyboardEvent(mainElem, start);
   
  const enter : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => execCreateEvent.EnterEvent(event)
  };

  const input : IEventMap<"input", HTMLInputElement> = {
    type : "input",
    func : (event) => execCreateEvent.InputEvent(event)
  }
  
  const escape : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => execCreateEvent.EscapeEvent(event)
  }

  const adjust : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : AdjustWidth()
  }

  return [enter, input, escape, adjust];
}

