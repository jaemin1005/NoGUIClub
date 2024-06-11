import { DeleteView } from "client/modules/DeleteView";
import { mapDOM } from "client/modules/GetDOM";
import { OnDisplayView } from "client/modules/OnDisplayView";
import { eventController } from "./EventController";
import { NormalEvent } from "client/modules/ArrNormalEvent";

export function InitStateView(){
  const mainView = mapDOM.GetDOM("main-view")!;
  const commandText = mapDOM.GetDOM("command-text")! as HTMLInputElement;

  DeleteView(mainView);
  OnDisplayView(mainView);
  eventController.AddStash(NormalEvent());

  commandText.value = "";
  commandText.style.width = "0px";
}