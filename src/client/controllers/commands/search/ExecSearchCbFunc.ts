import { IData } from "@shared/interface/IData";
import { ICommandData } from "@shared/interface/ICommand";
import { ClearView } from "@client/controllers/DOMController/ClearView";
import { mapDOM } from "@client/modules/DOM/GetDOM";
import { SearchKeyboardEvent } from "./SearchKeyboardEvent";
import { eventController } from "@client/modules/DOM/EventController";
import { ArrSearchEvent } from "./ArrSearchEvent";
import { SearchListView } from "./SearchListView";

/** Search 명령어가 성공했을 떄 콜백되는 메소드 */
export async function SearchSuccessCbFunc(data : IData[], commandData : ICommandData){

  if(data.length === 0) return;

  const elem = mapDOM.GetDOM("command-text")! as HTMLInputElement;
  ClearView(mapDOM.GetDOM("main-view")!);
  const keyboardEvent = new SearchKeyboardEvent(elem, commandData);
  keyboardEvent.SetMapPageData(1, data);
  eventController.AddStash(ArrSearchEvent(keyboardEvent));
  SearchListView(keyboardEvent.GetCurrentPage()!);
}