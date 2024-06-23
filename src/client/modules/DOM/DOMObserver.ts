export class DOMObserver {
  observer
  mutationObserver
  option

  constructor(observerElem : Element, callback: MutationCallback, option? : MutationObserverInit){
    this.observer = observerElem;
    this.mutationObserver = new MutationObserver(callback);
    this.option = option;
  }

  StartObserve(){
    this.mutationObserver.observe(this.observer, this.option);
  }

  EndObserve(){
    this.mutationObserver.disconnect();
  }
}

