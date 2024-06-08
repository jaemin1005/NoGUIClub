import { IData } from "@shared/interface/IData"

export class SearchKeyboardEvent{

  nCurPage : number; 
  mapPageData : Map<number, Array<IData>>
  elem : Element

  constructor(elem: Element){
    this.nCurPage = 0;
    this.mapPageData = new Map<number, IData[]>();
    this.elem = elem;
  }

  Enter(event : KeyboardEvent){
    if (event.isComposing == true || event.key !== "Enter") return;
  }
}