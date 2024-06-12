import { POSTFetch } from "../../../modules/POSTFetch"
import { SearchKeyboardEvent } from "./SearchKeyboardEvent"
import { mapDOM } from "../../../modules/GetDOM"
import { IData } from "@shared/interface/IData";
import { SearchListView } from "./SearchListView";
import { ICommandData, SearchCmd } from "@shared/interface/ICommand";
import { eventController } from "client/controllers/EventController";
import { ArrSearchEvent } from "./ArrSearchEvent";
import { ClearView } from "client/modules/ClearView";

export function ExecSearchCmd(commandData : ICommandData, command : SearchCmd){
  POSTFetch("/search", JSON.stringify(commandData), (res) => SearchSuccessCbFunc(res, commandData))
}

async function SearchSuccessCbFunc(res : Response, commandData : ICommandData){
  const elem = mapDOM.GetDOM("command-text")! as HTMLInputElement;
  const data : IData[] = await res.json();
  
  ClearView(mapDOM.GetDOM("main-view")!);

  const keyboardEvent = new SearchKeyboardEvent(elem, commandData);
  keyboardEvent.SetMapPageData(1, data);
  eventController.AddStash(ArrSearchEvent(keyboardEvent));
  SearchListView(keyboardEvent.GetCurrentPage()!);
}





