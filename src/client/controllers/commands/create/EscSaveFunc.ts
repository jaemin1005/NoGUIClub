import { DeleteView } from "../../../modules/DeleteView";
import { OnDisplayView } from "../../../modules/OnDisplayView";
import { eventController } from "../../EventController";
import { NormalEvent } from "../../../modules/ArrNormalEvent";
import { ConvertPostIntoData } from "../../../modules/ConvertPostIntoData";
import { POSTFetch } from "../../../modules/POSTFetch";
import { CreateElement } from "client/modules/CreateElement";
import { InitStateView } from "client/controllers/InitStateView";

//* 1. 현재 작성한글을 서버로 전송한다.
//* 2. 명령어를 되돌린다.
//* 3. View를 되돌린다.

export function EscSaveFunc(rootElem : Element){

    //* 작성한 글을 데이터로 만들기.
    const data = ConvertPostIntoData(rootElem);
    
    InitStateView();

    //* 서버로 전송하기.
    POSTFetch("/create", JSON.stringify(data), (res)=> {SaveSuccessFunc(rootElem)}, (res)=> {SaveFailFunc(rootElem)});
}

function SaveSuccessFunc(rootElem : Element){ 
    const div = CreateElement({elem :"div"});
    div.textContent = "글 저장에 성공하였습니다";
    rootElem.appendChild(div);
}

/**
 * * 글 저장에 실패하였을 떄.
 * TODO 폰트 변환?
 * TODO 글 임시 저장?
 * @param rootElem 
 */
function SaveFailFunc(rootElem : Element){
    const div = CreateElement({elem : "div"});
    div.textContent = "글 저장에 실패하였습니다";
    rootElem.appendChild(div);
}

