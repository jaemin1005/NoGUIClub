import { DeleteView } from "../../../modules/DeleteView.js";
import { OnDisplayView } from "../../../modules/OnDisplayView.js";
import { eventController } from "../../EventController.js";
import { NormalEvent } from "../../../modules/ArrNormalEvent.js";

//* 1. 현재 작성한글을 서버로 전송한다.
//* 2. 명령어를 되돌린다.
//* 3. View를 되돌린다.

export function EscSaveFunc(rootElem : Element){

    //* 이벤트 되돌리기.
    eventController.AddStash(NormalEvent());

    //* View화면 되돌리기.
    DeleteView(rootElem);
    OnDisplayView(rootElem);
}