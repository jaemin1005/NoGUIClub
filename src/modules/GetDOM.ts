class MapDOM {

  mapDOM : Map<string, Element>

  constructor(){ 
    this.mapDOM = new Map(); 
    
    const elements = document.querySelectorAll('[id]');
    for(let elem of Array.from(elements)){
      this.mapDOM.set(elem.id, elem);
    }
  }

  GetDOM(key : string) : Element | null {
    if(this.mapDOM.has(key)){
      return this.mapDOM.get(key) as Element;
    }
    else
      return null;
  }
}


export const mapDOM = new MapDOM();