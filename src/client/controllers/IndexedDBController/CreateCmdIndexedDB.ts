import { indexedDB } from "./CallIndexedDB";
import { DbTableName } from "client/modules/Enum/EnumDbTableName";



export const CreateCmdIndexedDB : ProcessCmdIndexedDB = async (obj, cbFunc, errCbFunc ) => {
  const result = await indexedDB.Add(DbTableName.POST, obj);
  if(result) cbFunc();
  else errCbFunc();
}