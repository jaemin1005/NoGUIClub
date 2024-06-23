import { ProcessData } from "@client/interface/TypeSendData";
import { ICommandData } from "@shared/interface/ICommand";

export function IsICommandData(obj : ProcessData) : obj is ICommandData {
  return ( obj as ICommandData ).command !== undefined && (obj as ICommandData).header !== undefined &&
    (obj as ICommandData).value !== undefined
}