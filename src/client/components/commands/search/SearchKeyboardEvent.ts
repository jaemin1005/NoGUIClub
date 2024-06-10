import { CommandKeyboardEvent } from "../../../modules/CommandKeyboardEvent";
import { AddChildInRootElement } from "../../../modules/AddChildInRootElement";
import { Data } from "../../../../shared/modules/Data";
import { IData } from "@shared/interface/IData";
import { CreateElement } from "client/modules/CreateElement";
import { postHeadStyle } from "client/styles/PostHeadElem";

export class SearchKeyboardEvent extends CommandKeyboardEvent{

  nCurPage : number; 
  mapPageData : Map<number, Array<Data>>
  
  constructor(elem: Element){
    super(elem);
    this.nCurPage = 1;
    this.mapPageData = new Map<number, Array<Data>>();
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
    
    const num = Number(this.watchElem.textContent);
    
    if(num <= 0 || num > 10) return;

    const arrData = this.mapPageData.get(this.nCurPage);
    
    if(arrData === undefined) return;

    const data = arrData[num];

    const head = CreateElement({elem : "div", property : {textContent : data.head}, style : postHeadStyle })
    const body : Array<Element> = []
    
    data.body.forEach(textcontent => {
      const elem = CreateElement({elem : "div", property : {textContent : textcontent}})
      body[body.length] = elem;
    })
    AddChildInRootElement(null, null, head, null, null, ...body);
  }

  EscapeCbFunc(event: KeyboardEvent): void {
    
  }
}