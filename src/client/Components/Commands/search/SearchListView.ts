import { WritingData } from "@shared/modules/WritingData"
import { mapDOM } from "../../../modules/GetDOM"
import { CreateElement } from "../../../modules/CreateElement";

<<<<<<< HEAD
=======
/** 글 목록을 사용자에게 보여주기 */
>>>>>>> test_merge_2
export function SearchListView(arrData : Array<WritingData>){
  
  const mainElem = mapDOM.GetDOM("main-view");

  for(let nIdx = 0 ; arrData.length ; nIdx++){
   
    //TODO : 나중에 사용자 명을 추가해줘야함
    const textData = `${nIdx+1}. ${arrData[nIdx].head}`;
  
    //TODO : Style 정하기 :) 
<<<<<<< HEAD
    const elem = CreateElement({
      elem: "div",
      property : {
        textContent : textData
      }
    })

    
=======
    const elem = CreateElement({elem: "div", property : { textContent : textData }});

    mainElem?.appendChild(elem);
>>>>>>> test_merge_2
  }
}