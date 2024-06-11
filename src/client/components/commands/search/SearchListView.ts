import { Data } from "@shared/modules/Data"
import { mapDOM } from "../../../modules/GetDOM"
import { CreateElement } from "../../../modules/CreateElement";

/** 글 목록을 사용자에게 보여주기 */
export function SearchListView(arrData : Array<Data>){
  
  const mainElem = mapDOM.GetDOM("main-view");

  for(let nIdx = 0 ; nIdx < arrData.length - 1 ; nIdx++){
   
    //TODO : 나중에 사용자 명을 추가해줘야함
    const textData = `${nIdx+1}. ${arrData[nIdx].head}`;
  
    //TODO : Style 정하기 :) 
    const elem = CreateElement({elem: "div", property : { textContent : textData }});
    mainElem?.appendChild(elem);
  }
}