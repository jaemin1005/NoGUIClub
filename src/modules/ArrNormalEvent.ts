import { AdjustWidth, keydownEvent } from "./KeyboardEvent.js";

const keydown : IEventMap<"keydown", HTMLInputElement> = {
  type : "keydown",
  func : keydownEvent
}

const adjust : IEventMap<"keydown", HTMLInputElement> = {
  type : "keydown",
  func : AdjustWidth()
}

export const arrNormalMap = [keydown, adjust];