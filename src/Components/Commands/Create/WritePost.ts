/**
 * * 글 쓰기 작업을 한다.
 * * type에 따라 header, body에 글을 쓴다.
 * @param elem 
 * @param type 
 * @returns 
 */
export function WritePost(elem : Element, type : PostType) : Element{
  let curElem : null | Element = null;

  if(type === "head"){
    curElem = document.getElementById("post-header")!;
  }

  else{
    curElem = document.createElement("div");
    curElem.className = "bodyText";
    elem.appendChild(curElem);
  }

  return curElem;
}



