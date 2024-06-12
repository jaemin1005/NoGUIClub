import { AddChildInRootElement } from "../../modules/AddChildInRootElement";
import { CreateElement } from "../../modules/CreateElement";

export function AddErrorInView(errMsg : string, arrErrSubMsg : string[]){
  
  const arrErrorSubCustomElem : Array<ICustomElement<"div">> = [];
  const arrErrorSubElem : Array<Element> = [];

  const errorHead : ICustomElement<"div"> = {
    elem : "div",
    property : {
      textContent : errMsg
    },
    style : {
      color : "Red",
      height : "1.5rem",
      fontSize : "1.5rem"
    }
  }

  const errorHeadElem = CreateElement(errorHead);

  for(let subMsg of arrErrSubMsg){
    arrErrorSubCustomElem[arrErrorSubCustomElem.length] = {
      elem : "div",
      property : {
        textContent : subMsg
      },
    }
  }

  for(let subElem of arrErrorSubCustomElem){
    arrErrorSubElem[arrErrorSubElem.length] = CreateElement(subElem);
  }

  AddChildInRootElement(null, null, errorHeadElem, null, ...arrErrorSubElem);
}