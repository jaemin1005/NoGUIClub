class MapDOM {

  mapDOM : Map<string, Element>

  constructor(){ 
    this.mapDOM = new Map(); 
    
    //* ID 속성을 포함한 Element를 불러온다.
    const elements = document.querySelectorAll('[id]');
    //* [id, element]로 저장.
    for(let elem of Array.from(elements)){
      this.mapDOM.set(elem.id, elem);
    }
  }

  /**
   * * 정적으로 id속성을 가진 Element를 가져온디
   * @param key Element Id
   * @returns Element | null ( 존재하지 않을 경우 )
   */
  GetDOM(key : string) : Element | null {
    if(this.mapDOM.has(key)){
      return this.mapDOM.get(key) as Element;
    }
    else
      return null;
  }
}

export const mapDOM = new MapDOM();