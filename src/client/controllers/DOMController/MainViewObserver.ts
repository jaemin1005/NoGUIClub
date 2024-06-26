import { DOMObserver } from "@client/modules/DOM/DOMObserver";
import { mapDOM } from "../../modules/DOM/GetDOM";
import { IsHTMLElement } from "../../modules/TypeGuard/IsHTMLElement";

const $main = mapDOM.GetDOM("main")!;
const $mainView = mapDOM.GetDOM("main-view")!;

const MainViewObserverCallback : MutationCallback = (mutations, observer) => {
  for (const mutation of mutations){
    if(mutation.type === "childList"){
      $main.scrollTop = $main.scrollHeight
    }
  }
}

export const mainObserver = new DOMObserver($mainView, MainViewObserverCallback, { childList : true });
