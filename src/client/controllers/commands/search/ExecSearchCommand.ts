import { SearchKeyboardEvent } from "./SearchKeyboardEvent"
import { mapDOM } from "../../../modules/GetDOM"
import { IData } from "@shared/interface/IData";
import { SearchListView } from "./SearchListView";
import { ICommandData, SearchCmd } from "@shared/interface/ICommand";
import { eventController } from "client/controllers/EventController";
import { ArrSearchEvent } from "./ArrSearchEvent";
import { ClearView } from "client/modules/ClearView";
import { SendData } from "../SendData";

export function ExecSearchCmd(commandData : ICommandData, command : SearchCmd){
  SendData("/search", commandData, async (res) => {
    const data = await res.json();
    SearchSuccessCbFunc(data, commandData)})
}

export async function SearchSuccessCbFunc(data : IData[], commandData : ICommandData){
  const elem = mapDOM.GetDOM("command-text")! as HTMLInputElement;
  ClearView(mapDOM.GetDOM("main-view")!);
  const keyboardEvent = new SearchKeyboardEvent(elem, commandData);
  keyboardEvent.SetMapPageData(1, data);
  eventController.AddStash(ArrSearchEvent(keyboardEvent));
  SearchListView(keyboardEvent.GetCurrentPage()!);
}





