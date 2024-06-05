import { DeleteView } from "../../../modules/DeleteView";
import { OnDisplayView } from "../../../modules/OnDisplayView";
import { eventController } from "../../EventController";
import { NormalEvent } from "../../../modules/ArrNormalEvent";
import { ConvertPostIntoData } from "../../../modules/ConvertPostIntoData";
import { POSTFetch } from "client/modules/POSTfetch";

//* 1. 현재 작성한글을 서버로 전송한다.
//* 2. 명령어를 되돌린다.
//* 3. View를 되돌린다.

export function EscSaveFunc(rootElem : Element){

    //* 작성한 글을 데이터로 만들기.
    const data = ConvertPostIntoData(rootElem);
    
    //* 이벤트 되돌리기.
    eventController.AddStash(NormalEvent());

    //* View화면 되돌리기.
    DeleteView(rootElem);
    OnDisplayView(rootElem);

    //* 서버로 전송하기.
    POSTFetch("/create", JSON.stringify(data));
}