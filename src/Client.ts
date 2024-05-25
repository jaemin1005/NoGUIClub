import { KeyBackspaceEvent, KeyDownEvent, CompositionStart, CompositionEnd, AdjustWidth, KeyEnterDownEvent } from "./modules/KeyboardEvent.js";
import { ForceFocus } from "./modules/Focus.js";


document.addEventListener("DOMContentLoaded", () => document.getElementById("command-text")!.focus());
let $input = document.getElementById("command-text")!;

$input.addEventListener("input", AdjustWidth());
$input.addEventListener("keydown", (event) => {KeyEnterDownEvent(event)});
$input.addEventListener("keydown", AdjustWidth());
// window.addEventListener("keydown", KeyDownEvent());
// window.addEventListener("keydown", KeyBackspaceEvent());
// window.addEventListener("compositionstart", CompositionStart);
// window.addEventListener("compositionend", CompositionEnd());
