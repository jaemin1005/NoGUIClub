import { CreateElement } from "@client/modules/DOM/CreateElement";
import { mapDOM } from "@client/modules/DOM/GetDOM";
import { theme } from "@client/modules/Theme";
import { postHeadStyleMap } from "@client/styles/PostHeadElem";

const line = "-----------------------------------------------------------------------------";
const mainView = mapDOM.GetDOM("main-view");

export function ContourElem(){
  mainView?.appendChild(CreateElement({
    elem : "div",
    property : {
      textContent : line
    },
    style : {
      color : postHeadStyleMap.get(theme.Theme)?.color
    }
  }))
}




