import { POSTFetch } from "../../../modules/POSTFetch"
import { SearchKeyboardEvent } from "./SearchKeyboardEvent"
import { mapDOM } from "../../../modules/GetDOM"
import { IData } from "@shared/interface/IData";
import { SearchListView } from "./SearchListView";

export function ExecSearchCmd(reqData : ReqData, command : SearchCmd){
  POSTFetch("/search", JSON.stringify(reqData), SearchSuccessCbFunc)
}

async function SearchSuccessCbFunc(res : Response){
  const elem = mapDOM.GetDOM("command-text")!;
  const data : IData[] = await res.json();  
  const KeyboardEvent = new SearchKeyboardEvent(elem);
  KeyboardEvent.SetMapPageData(1, data);
  SearchListView(KeyboardEvent.GetCurrentPage()!);
}





