import { indexedDB } from "./CallIndexedDB";
import { DbTableName } from "client/modules/Enum/EnumDbTableName";
import { IData } from "@shared/interface/IData";

export const CreateCmdIndexedDB = async (obj : IData, cbFunc : Function, errCbFunc : Function ) => {
  const result = await indexedDB.Add(DbTableName.POST, obj);
  if(result) cbFunc();
  else errCbFunc();
}