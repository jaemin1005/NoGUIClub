import { DeleteView } from "@client/controllers/DOMController/DeleteView";
import { mapDOM } from "@client/modules/DOM/GetDOM";
import { OnDisplayView } from "@client/controllers/DOMController/OnDisplayView";
import { eventController } from "../../modules/DOM/EventController";
import { NormalEvent } from "@client/controllers/Event/ArrNormalEvent";

export function InitStateView(){
  const mainView = mapDOM.GetDOM("main-view")!;
  const commandText = mapDOM.GetDOM("command-text")! as HTMLInputElement;

  DeleteView(mainView);
  OnDisplayView(mainView);
  eventController.AddStash(NormalEvent());

  commandText.value = "";
  commandText.style.width = "0px";
}