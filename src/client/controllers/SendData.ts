import { POSTFetch } from "@client/modules/Request/POSTFetch";
import { serverState } from "./GetServerState";
import { TypeSendData as TypeSendData } from "@client/interface/TypeSendData";
import { ProcessIndexedDB } from "./IndexedDBController/ProcessIndexedDB";

export const SendData : TypeSendData = (url, obj, cbFunc, errCbFunc) => {
  if(serverState.MySQLConnect === false){
    ProcessIndexedDB(url,obj, cbFunc, errCbFunc);
  }
  else{
    POSTFetch(url, JSON.stringify(obj), cbFunc, errCbFunc);
  }
}