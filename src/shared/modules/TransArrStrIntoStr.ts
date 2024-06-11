/** 문자열 배열을 하나의 문자열로 만들어 준다 */
export function TransArrStrIntoStr(arrStr : Array<string>, separator : string = " ") : string{
  let returnStr = "";
  
  for(let nIdx = 0 ; nIdx < arrStr.length ; nIdx++){
    if(nIdx === arrStr.length -1) continue;

    returnStr += arrStr[nIdx] + separator;
  }

  return returnStr;
}

//console.log(TransArrStrIntoStr(["반갑다", "문혜림", "배성빈", "잘가라", "여기까지다", "소코마테다"]));