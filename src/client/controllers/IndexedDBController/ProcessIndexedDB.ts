import { CreateCmdIndexedDB } from "./CreateCmdIndexedDB";
import { SearchCmdIndexedDB } from "./SearchCmdIndexedDB";
import { TypeSendData } from "client/interface/TypeSendData";
import { IsIData } from "client/modules/IsIData";
import { IsICommandData } from "client/modules/IsICommandData";

export const ProcessIndexedDB : TypeSendData = (url, obj, cbFunc, errCbFunc) => {
  if(url === "/create" && IsIData(obj)) CreateCmdIndexedDB(obj, cbFunc, errCbFunc);
  else if(url === "/search" && IsICommandData(obj)) SearchCmdIndexedDB(obj);
}