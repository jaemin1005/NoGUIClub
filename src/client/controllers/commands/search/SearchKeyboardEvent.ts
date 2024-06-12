import { CommandKeyboardEvent } from "../../../modules/CommandKeyboardEvent";
import { AddChildInRootElement } from "../../../modules/AddChildInRootElement";
import { Data } from "../../../../shared/modules/Data";
import { IData } from "@shared/interface/IData";
import { CreateElement } from "client/modules/CreateElement";
import { postHeadStyleMap } from "client/styles/PostHeadElem";
import { eventController } from "client/controllers/EventController";
import { NormalEvent } from "client/modules/ArrNormalEvent";
import { mapDOM } from "client/modules/GetDOM";
import { InitStateView } from "client/controllers/InitStateView";
import { ICommandData } from "@shared/interface/ICommand";
import { POSTFetch } from "client/modules/POSTFetch";
import { SearchListView } from "./SearchListView";
import { DeleteView } from "client/modules/DeleteView";
import { theme } from "client/modules/Theme";
import { ContourElem } from "client/controllers/ContourElem";


export class SearchKeyboardEvent extends CommandKeyboardEvent<"input">{

  nCurPage : number; 
  mapPageData : Map<number, Array<Data>>
  mainView
  commandData

  constructor(elem: HTMLInputElement, commandData : ICommandData){
    super(elem);
    this.nCurPage = 1;
    this.mapPageData = new Map<number, Array<Data>>();
    this.mainView = mapDOM.GetDOM("main-view")!;
    this.commandData = commandData;
  }

  SetMapPageData(page: number, arrData: IData[]){
    const arrWritingData : Array<Data> = [];

    for(const data of arrData){
      arrWritingData[arrWritingData.length] = new Data(data.head, data.date, data.body);    
    }

    this.mapPageData.set(page, arrWritingData);
  }

  GetCurrentPage() : Array<Data> | undefined {
    return this.mapPageData.get(this.nCurPage);
  }

  EnterCbFunc(event: KeyboardEvent): void {

    if(this.watchElem === null) return;
    
    const num = Number(this.watchElem.value);
    
    if(num <= 0 || num > this.GetCurrentPage()!.length) return;

    const arrData = this.mapPageData.get(this.nCurPage);
    
    if(arrData === undefined) return;

    const data = arrData[num-1];

    const head = CreateElement({elem : "div", property : {textContent : data.head}, style : postHeadStyleMap.get(theme.Theme) })
    const body : Array<Element> = []
    
    data.body.forEach(textcontent => {
      const elem = CreateElement({elem : "div", property : {textContent : textcontent}})
      body[body.length] = elem;
    })

    InitStateView();
    ContourElem();
    AddChildInRootElement(null, null, head, null, null, ...body);
    AddChildInRootElement(null, null);
    ContourElem();
    eventController.AddStash(NormalEvent());
  }

  Arrow(event : KeyboardEvent){
    if( event.isComposing == true || !(event.key === "ArrowRight" || event.key === "ArrowLeft")) return
      this.ArrowCbFunc(event.key);
  }

  ArrowCbFunc(key : "ArrowRight" | "ArrowLeft"){
    const nTempPage = this.nCurPage;
    key === "ArrowRight" ? this.nCurPage += 1  : this.nCurPage -= 1;
    
    if(this.nCurPage <= 0){
      this.nCurPage = nTempPage;
      return;
    }

    if(this.mapPageData.has(this.nCurPage)){
      DeleteView(mapDOM.GetDOM("main-view")!)
      SearchListView(this.GetCurrentPage()!);
    }

    else{
      this.commandData.command.value = this.nCurPage.toString();
      POSTFetch("/search", JSON.stringify(this.commandData), async (res) => {
        let data : IData[] = await res.json(); 

        if(data.length === 0){
          this.nCurPage = nTempPage;
          return;
        }
        
        this.SetMapPageData(this.nCurPage, data);
        DeleteView(mapDOM.GetDOM("main-view")!);
        SearchListView(this.GetCurrentPage()!);
      }, 
      (res) => { 
        this.nCurPage = nTempPage 
      })
    }
  }

  EscapeCbFunc(event: KeyboardEvent): void {
    InitStateView();
  }
}