type PostType = "head" | "body";

/** 글 작성을 위한 준비 */
export function ReadyWritePost(elem : Element){
  const header : Array<Element> = [] 

  //* 공백 2칸 
  header[header.length] = document.createElement("div");
  header[header.length] = document.createElement("div");

  //* 머리글
  const headerDiv = document.createElement("div");
  headerDiv.id = "post-header";   
  header[header.length] = headerDiv;

  //* 공백
  header[header.length] = document.createElement("div");

  for(let child of header){
    elem.appendChild(child);
  }
}

/**
 * * 글 쓰기 작업을 한다.
 * * type에 따라 header에 적을지 body에 추가할지 정한다.
 * @param elem 
 * @param type 
 * @returns 
 */
export function WritePost(elem : Element, type : PostType){
  let curElem : null | Element = null;

  if(type === "head"){
    curElem = document.getElementById("post-header")!;
  }

  else{
    curElem = document.createElement("div");
    elem.appendChild(curElem);
  }

  return function(input : string){
    curElem.textContent = input;
  } 
}



