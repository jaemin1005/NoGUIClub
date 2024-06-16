import { ConvertPostIntoData } from "../../../modules/ConvertPostIntoData";
import { InitStateView } from "client/controllers/InitStateView";
import { SendData } from "../SendData";
import { SaveSuccessFunc } from "./EscSaveCbFunc";
import { SaveFailFunc } from "./EscSaveCbFunc";

//* 1. 현재 작성한글을 서버로 전송한다.
//* 2. 명령어를 되돌린다.
//* 3. View를 되돌린다.

export function EscSaveFunc(rootElem : Element){

    //* 작성한 글을 데이터로 만들기.
    const data = ConvertPostIntoData(rootElem);
    
    InitStateView();

    //* 서버로 전송하기.
    SendData("/create", data, ()=> {SaveSuccessFunc(rootElem)}, ()=> {SaveFailFunc(rootElem)});
}


