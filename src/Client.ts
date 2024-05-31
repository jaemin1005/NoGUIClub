import { ForceFocus } from "./modules/Focus.js";
import { AdjustWidth, keydownEvent} from "./modules/KeyboardEvent.js";
import { eventController } from "./Components/EventController.js";
import { NormalEvent } from "./modules/ArrNormalEvent.js";


const $input = document.getElementById("command-text")! as HTMLInputElement;
document.addEventListener("DOMContentLoaded", () => {ForceFocus($input)});
//document.addEventListener("DOMContentLoaded", () => {$input.focus()});
$input.addEventListener("input", AdjustWidth());
eventController.AddStash(NormalEvent());

