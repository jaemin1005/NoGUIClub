import { ForceFocus } from "./modules/Focus";
import { AdjustWidth, keydownEvent} from "./modules/KeyboardEvent";
import { eventController } from "./components/EventController";
import { NormalEvent } from "./modules/ArrNormalEvent";


const $input = document.getElementById("command-text")! as HTMLInputElement;
document.addEventListener("DOMContentLoaded", () => {ForceFocus($input)});
//document.addEventListener("DOMContentLoaded", () => {$input.focus()});
$input.addEventListener("input", AdjustWidth());
eventController.AddStash(NormalEvent());

