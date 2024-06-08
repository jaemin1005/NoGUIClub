import { CommandKeyboardEvent } from "../../../modules/CommandKeyboardEvent";
import { AddChildInRootElement } from "../../../modules/AddChildInRootElement";
import { WritingData } from "../../../../shared/modules/WritingData";

export class SearchKeyboardEvent extends CommandKeyboardEvent{

  nCurPage : number; 
  mapPageData : Map<number, Array<WritingData>>

  constructor(elem: Element){
    super(elem);
    this.nCurPage = 0;
    this.mapPageData = new Map<number, Array<WritingData>>();
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
}