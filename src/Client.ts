import { ForceFocus } from "./modules/Focus.js";
import { AdjustWidth, keydownEvent} from "./modules/KeyboardEvent.js";

const $input = document.getElementById("command-text")! as HTMLInputElement;
document.addEventListener("DOMContentLoaded", () => {ForceFocus($input)});
//document.addEventListener("DOMContentLoaded", () => {$input.focus()});
$input.addEventListener("input", AdjustWidth());
$input.addEventListener("keydown", keydownEvent)
$input.addEventListener("keydown", AdjustWidth());

