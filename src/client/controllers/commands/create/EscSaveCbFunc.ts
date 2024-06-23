import { CreateElement } from "@client/modules/DOM/CreateElement";

export function SaveSuccessFunc(rootElem : Element){ 
  const div = CreateElement({elem :"div"});
  div.textContent = "글 저장에 성공하였습니다";
  rootElem.appendChild(div);
}

/**
* * 글 저장에 실패하였을 떄.
* TODO 폰트 변환?
* TODO 글 임시 저장?
* @param rootElem 
*/
export function SaveFailFunc(rootElem : Element){
  const div = CreateElement({elem : "div"});
  div.textContent = "글 저장에 실패하였습니다";
  rootElem.appendChild(div);
}