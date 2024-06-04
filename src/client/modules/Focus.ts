export function ForceFocus(elem : HTMLElement){
  elem.focus();
  
  elem.addEventListener("blur", () => {
    setTimeout(() => {
      elem.focus();
    },0)
  })
}