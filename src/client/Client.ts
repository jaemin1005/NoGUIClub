import { ForceFocus } from "./modules/Focus";
import { AdjustWidth, keydownEvent} from "./modules/KeyboardEvent";
import { eventController } from "./controllers/EventController";
import { NormalEvent } from "./modules/ArrNormalEvent";
import { DOMObserver } from "./modules/DOMObserver";
import { mainObserver } from "./controllers/MainViewObserver";

const $input = document.getElementById("command-text")! as HTMLInputElement;
document.addEventListener("DOMContentLoaded", () => {ForceFocus($input)});
//document.addEventListener("DOMContentLoaded", () => {$input.focus()});
$input.addEventListener("input", AdjustWidth());
eventController.AddStash(NormalEvent());
mainObserver.StartObserve();
