import { AdjustWidth, keydownEvent } from "./KeyboardEvent";

export function NormalEvent(){
  const keydown : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : keydownEvent
  }
  
  const adjust : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : AdjustWidth()
  }

  return [keydown, adjust];
}
