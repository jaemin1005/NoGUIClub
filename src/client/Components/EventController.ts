import { mapDOM } from "../modules/GetDOM"

/**
 * * 이벤트 컨트롤러
 */
class EventController<T extends Element>  {
  
  private stash : Array<UseEventMap>
  elem : T

  constructor(controlElem : T){
    this.elem = controlElem;
    this.stash = []
  }

  /** stash에 있는 이벤트를 추가하여 elem의 이벤트에 등록한다. */
  AddStash(eventMap : Array<UseEventMap>){
    
    this.RemoveAllListener();
    
    this.stash = this.stash.concat(eventMap);

    for(let elemMap of this.stash){
      this.elem.addEventListener(elemMap.type, elemMap.func as (event : Event) => void);
    }
  }

  /** stash에 있는 이벤트를 이용하여 elem의 이벤트를 제거한다. */
  RemoveAllListener(){    
    for(let eventMap of this.stash){
      this.elem.removeEventListener(eventMap.type, eventMap.func as (event : Event) => void);
    }

    this.stash = [];
  }
}

const controlElem = mapDOM.GetDOM("command-text")! as HTMLInputElement;
export const eventController = new EventController(controlElem);