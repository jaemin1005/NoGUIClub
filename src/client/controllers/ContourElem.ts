import { CreateElement } from "client/modules/CreateElement";
import { mapDOM } from "client/modules/GetDOM";

const line = "-----------------------------------------------------------------------------";
const mainView = mapDOM.GetDOM("main-view");

export function ContourElem(){
  mainView?.appendChild(CreateElement({
    elem : "div",
    property : {
      textContent : line
    }
  }))
}




