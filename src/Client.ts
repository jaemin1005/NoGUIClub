import { ForceFocus } from "./modules/Focus.js";
import { KeyDownEvent, AdjustWidth} from "./modules/KeyboardEvent.js";

const $input = document.getElementById("command-text")! as HTMLInputElement;
document.addEventListener("DOMContentLoaded", () => {ForceFocus($input)});
//document.addEventListener("DOMContentLoaded", () => {$input.focus()});
$input.addEventListener("input", AdjustWidth());
$input.addEventListener("keydown", KeyDownEvent())
$input.addEventListener("keydown", AdjustWidth());

