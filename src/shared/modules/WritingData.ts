import {IData} from "@shared/interface/IData";
import { enumPostElemName } from "../../client/modules/Enum/EnumPostElemName";
import { CreateElement } from "../../client/modules/CreateElement";

export class WritingData implements IData {
  head: string;
  date: number;
  body: string[];

  constructor(head : string, date : number, body : string[]){
    this.head = head;
    this.date = date;
    this.body = body;
  }


  TransHeadIntoElem() : Element{
    return CreateElement({
      elem : "div",
      property : {
        id : `${enumPostElemName.header}`,
        textContent : this.head
      },
      style : {
        color : "rgb(255,255,0)",
        fontSize : "1.5rem",
        height : "1.5rem"
      }
    });
  }

  TransBodyIntoElem() : Array<Element>{
    let arrElem : Array<Element> = [];

    for(const content of this.body){
      arrElem[arrElem.length] = CreateElement({
        elem : "div",
        property : {
          className : `${enumPostElemName.body}`,
          textContent : content
        },
      })
    }

    return arrElem;
  }

  ReturnArr() : Array<string>{
    const arr : Array<string> = [];
    arr[arr.length] = this.head;

    this.body.forEach(str => arr[arr.length] = str);
  }
}