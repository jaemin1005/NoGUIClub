import { DeleteView } from "../../../modules/DeleteView.js";
import { OnDisplayView } from "../../../modules/OnDisplayView.js";
import { eventController } from "../../EventController.js";
import { NormalEvent } from "../../../modules/ArrNormalEvent.js";

/**
 * 
 * @param rootElem 
 */
export function ESCQuitFunc(rootElem : Element){

  //* 이벤트 되돌리기.
  eventController.AddStash(NormalEvent());

  //* View화면 되돌리기.

  DeleteView(rootElem);
  OnDisplayView(rootElem);
}