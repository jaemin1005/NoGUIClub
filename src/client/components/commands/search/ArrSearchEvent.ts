import { AdjustWidth } from "client/modules/KeyboardEvent";
import { SearchKeyboardEvent } from "./SearchKeyboardEvent";
import { mapDOM } from "client/modules/GetDOM";


export function ArrSearchEvent(mainElem : Element, start : "head" | "body"){
  const execCreateEvent = new SearchKeyboardEvent(mapDOM.GetDOM("command-text")!);

  const enter : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => execCreateEvent.Enter(event)
  };
  
  const escape : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => execCreateEvent.Escape(event)
  }

  const adjust : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : AdjustWidth()
  }

  return [enter, escape, adjust];
}


