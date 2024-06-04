import {IData} from "@shared/interface/IData";

export class WritingData implements IData {
  head: string;
  date: number;
  body: string[];

  constructor(head : string, date : number, body : string[]){
    this.head = head;
    this.date = date;
    this.body = body;
  }
}