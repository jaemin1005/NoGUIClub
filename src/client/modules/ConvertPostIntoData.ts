import { IsHTMLElement } from "./IsHTMLElement";
import { enumPostElemName } from "./Enum/EnumPostElemName";
import { customDate } from "./CustomDate";
import { WritingData } from "./WritingData";

/** rootElem의 자식들(글 : textContnet)을 데이터로 변환한다, */
export function ConvertPostIntoData(rootElem : Element) : WritingData {
  const children = rootElem.children;
  
  let head : string = "";
  let date : number = customDate.GetUnixTime()
  let body : string[] = [];

  for(const child of children){
    if(IsHTMLElement(child) === true){
      if(child.id === enumPostElemName.header){
        head = child.textContent!;
      }
      
      if(Array.from(child.classList).find(name => name === `${enumPostElemName.body}`)){
        body[body.length] = child.textContent!;
      }
    }
  }

  return new WritingData(head, date, body); 
}