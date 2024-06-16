import { ICommandData } from "@shared/interface/ICommand";
import { IData } from "@shared/interface/IData";

export type ProcessData = IData | ICommandData;
export type TypeSendData = (url : string, obj : ProcessData, cbFunc : IResponseCbFunc, errCbFunc : IResponseCbFunc) => void;
export type ProcessCmdIndexedDB = (obj : {}, cbFunc : Function, errCbFunc : Function ) => void;