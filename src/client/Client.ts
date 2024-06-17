import { AdjustWidth } from "./modules/KeyboardEvent";
import { eventController } from "./controllers/EventController";
import { NormalEvent } from "./modules/ArrNormalEvent";
import { mainObserver } from "./controllers/MainViewObserver";

const $input = document.getElementById("command-text")! as HTMLInputElement;
$input.addEventListener("input", AdjustWidth());
eventController.AddStash(NormalEvent());
mainObserver.StartObserve();