type GetDOM = () => HTMLElement;

export const GetCommandElem : GetDOM =  function(){
  const $elem = document.getElementById("command-text");

  if($elem){
    return $elem;
  }
  else{
    throw new Error("command-text의 Element를 찾을 수 없음");
  }
}