function CreateElement<T extends keyof HTMLElementTagNameMap>(customElem : ICustomElement<T>) : HTMLElementTagNameMap[T] {
  const elem = document.createElement(customElem.elem);

  if(customElem.property !== undefined){
    for(let key in customElem.property){
      elem[key] = customElem.property[key]!;
    }
  }

  if(customElem.style !== undefined){
    let key : keyof typeof customElem.style;
    for(key in customElem.style){
      elem.style[key] = customElem.style[key]!;
    }
  }

  return elem;
}