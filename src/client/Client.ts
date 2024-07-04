import { AdjustWidth } from "./controllers/Event/KeyboardEvent";
import { eventController } from "./modules/DOM/EventController";
import { NormalEvent } from "./controllers/Event/ArrNormalEvent";
import { mainObserver } from "./controllers/DOMController/MainViewObserver";
import '../../public/scss/main.scss';

const $input = document.getElementById("command-text")! as HTMLInputElement;
$input.addEventListener("input", AdjustWidth());
eventController.AddStash(NormalEvent());
mainObserver.StartObserve();