import { ForceFocus } from "./modules/Focus.js";
import { KeyDownEvent, AdjustWidth, StartComposition, EndComposition} from "./modules/KeyboardEvent.js";

const $input = document.getElementById("command-text")! as HTMLInputElement;
//$input.focus();
//document.addEventListener("DOMContentLoaded", () => {ForceFocus($input)});
document.addEventListener("DOMContentLoaded", () => {$input.focus()});
$input.addEventListener("input", AdjustWidth());
$input.addEventListener("keydown", KeyDownEvent())
$input.addEventListener("keydown", AdjustWidth());

