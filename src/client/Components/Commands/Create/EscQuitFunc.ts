import { DeleteView } from "../../../modules/DeleteView";
import { OnDisplayView } from "../../../modules/OnDisplayView";
import { eventController } from "../../EventController";
import { NormalEvent } from "../../../modules/ArrNormalEvent";

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