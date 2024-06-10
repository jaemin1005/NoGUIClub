import { AdjustWidth } from "client/modules/KeyboardEvent";
import { SearchKeyboardEvent } from "./SearchKeyboardEvent";
import { mapDOM } from "client/modules/GetDOM";


export function ArrSearchEvent(searchKeyboardEvent : SearchKeyboardEvent){

  const enter : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => searchKeyboardEvent.Enter(event)
  };
  
  const escape : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => searchKeyboardEvent.Escape(event)
  }

  const adjust : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : AdjustWidth()
  }

  return [enter, escape, adjust];
}


