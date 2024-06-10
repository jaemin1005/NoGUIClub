import { POSTFetch } from "../../../modules/POSTFetch"
import { SearchKeyboardEvent } from "./SearchKeyboardEvent"
import { mapDOM } from "../../../modules/GetDOM"
import { IData } from "@shared/interface/IData";
import { SearchListView } from "./SearchListView";
import { ICommandData, SearchCmd } from "@shared/interface/ICommand";
import { eventController } from "client/components/EventController";
import { ArrSearchEvent } from "./ArrSearchEvent";

export function ExecSearchCmd(reqData : ICommandData, command : SearchCmd){
  POSTFetch("/search", JSON.stringify(reqData), SearchSuccessCbFunc)
}

async function SearchSuccessCbFunc(res : Response){
  const elem = mapDOM.GetDOM("command-text")!;
  const data : IData[] = await res.json();  
  const keyboardEvent = new SearchKeyboardEvent(elem);
  keyboardEvent.SetMapPageData(1, data);
  eventController.AddStash(ArrSearchEvent(keyboardEvent));
  SearchListView(keyboardEvent.GetCurrentPage()!);
}





