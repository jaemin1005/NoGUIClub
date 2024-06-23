import { AdjustWidth } from "@client/controllers/Event/KeyboardEvent";
import { SearchKeyboardEvent } from "./SearchKeyboardEvent";

export function ArrSearchEvent(searchKeyboardEvent : SearchKeyboardEvent){

  const enter : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => searchKeyboardEvent.Enter(event)
  };
  
  const escape : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => searchKeyboardEvent.Escape(event)
  }

  const arrow : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : (event) => searchKeyboardEvent.Arrow(event)
  }

  const adjust : IEventMap<"keydown", HTMLInputElement> = {
    type : "keydown",
    func : AdjustWidth()
  }

  return [enter, escape, arrow, adjust];
}


