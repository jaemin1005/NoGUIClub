export function ForceFocus(elem : HTMLElement){
  
  elem.addEventListener("focus", () => {
    setTimeout(()=> {
      elem.focus();
    },0);
  });

  elem.addEventListener("blur", () => {
    setTimeout(() => {
      elem.focus();
    },0)
  })
}