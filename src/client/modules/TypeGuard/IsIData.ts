import { IData } from "@shared/interface/IData";
import { ProcessData } from "@client/interface/TypeSendData";

export function IsIData(obj : ProcessData) : obj is IData {
  return (obj as IData).head !== undefined && (obj as IData).date !== undefined && (obj as IData).body !== undefined
}