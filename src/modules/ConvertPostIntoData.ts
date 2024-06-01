import { IsHTMLElement } from "./IsHTMLElement";
import { enumPostElemName } from "./Enum/EnumPostElemName";
import { customDate } from "./CustomDate";

export function ConvertPostIntoData(rootElem : Element){
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
}