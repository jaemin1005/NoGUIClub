import { CommandKeyboardEvent } from "../../../modules/CommandKeyboardEvent";
import { AddChildInRootElement } from "../../../modules/AddChildInRootElement";
import { Data } from "../../../../shared/modules/Data";
import { IData } from "@shared/interface/IData";
import { CreateElement } from "client/modules/CreateElement";
import { postHeadStyle } from "client/styles/PostHeadElem";
import { eventController } from "client/components/EventController";
import { NormalEvent } from "client/modules/ArrNormalEvent";
import { DeleteView } from "client/modules/DeleteView";
import { mapDOM } from "client/modules/GetDOM";
import { OnDisplayView } from "client/modules/OnDisplayView";

export class SearchKeyboardEvent extends CommandKeyboardEvent<"input">{

  nCurPage : number; 
  mapPageData : Map<number, Array<Data>>
  mainView

  constructor(elem: HTMLInputElement){
    super(elem);
    this.nCurPage = 1;
    this.mapPageData = new Map<number, Array<Data>>();
    this.mainView = mapDOM.GetDOM("main-view")!;
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

    const data = arrData[num];

    const head = CreateElement({elem : "div", property : {textContent : data.head}, style : postHeadStyle })
    const body : Array<Element> = []
    
    data.body.forEach(textcontent => {
      const elem = CreateElement({elem : "div", property : {textContent : textcontent}})
      body[body.length] = elem;
    })

    DeleteView(this.mainView);
    OnDisplayView(this.mainView);
    AddChildInRootElement(null, null, head, null, null, ...body);
    AddChildInRootElement(null, null);
    eventController.AddStash(NormalEvent());
  }

  EscapeCbFunc(event: KeyboardEvent): void {
    DeleteView(this.mainView);
    OnDisplayView(this.mainView);
    eventController.AddStash(NormalEvent());
  }
}