import { CommandKeyboardEvent } from "../../../modules/CommandKeyboardEvent";
import { AddChildInRootElement } from "../../../modules/AddChildInRootElement";
import { WritingData } from "../../../../shared/modules/WritingData";
import { IData } from "@shared/interface/IData";

export class SearchKeyboardEvent extends CommandKeyboardEvent{

  nCurPage : number; 
  mapPageData : Map<number, Array<WritingData>>
  
  constructor(elem: Element){
    super(elem);
    this.nCurPage = 1;
    this.mapPageData = new Map<number, Array<WritingData>>();
  }

  SetMapPageData(page: number, arrData: IData[]){
    const arrWritingData : Array<WritingData> = [];

    for(const data of arrData){
      arrWritingData[arrWritingData.length] = new WritingData(data.head, data.date, data.body);    
    }

    this.mapPageData.set(page, arrWritingData);
  }

  GetCurrentPage() : Array<WritingData> | undefined {
    return this.mapPageData.get(this.nCurPage);
  }

  EnterCbFunc(event: KeyboardEvent): void {
    if(this.watchElem === null) return;
    
    const num = Number(this.watchElem.textContent);
    
    if(num <= 0 || num > 10) return;

    const arrData = this.mapPageData.get(this.nCurPage);
    
    if(arrData === undefined) return;

    const data = arrData[num];

    AddChildInRootElement(null, null, data.TransHeadIntoElem(), null, null, ...data.TransBodyIntoElem());
  }

  EscapeCbFunc(event: KeyboardEvent): void {
    
  }
}

1