import { WritingData } from "@shared/modules/WritingData"
import { mapDOM } from "../../../modules/GetDOM"
import { CreateElement } from "../../../modules/CreateElement";

export function SearchListView(arrData : Array<WritingData>){
  
  const mainElem = mapDOM.GetDOM("main-view");

  for(let nIdx = 0 ; arrData.length ; nIdx++){
   
    //TODO : 나중에 사용자 명을 추가해줘야함
    const textData = `${nIdx+1}. ${arrData[nIdx].head}`;
  
    //TODO : Style 정하기 :) 
    const elem = CreateElement({
      elem: "div",
      property : {
        textContent : textData
      }
    })

    
  }
}