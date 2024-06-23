import { indexedDB } from "./CallIndexedDB";
import { DbTableName } from "@client/modules/Enum/EnumDbTableName";
import { IData } from "@shared/interface/IData";
import { SaveFailFunc, SaveSuccessFunc } from "../commands/create/EscSaveCbFunc";
import { mapDOM } from "@client/modules/DOM/GetDOM";

export const CreateCmdIndexedDB = async (obj : IData, cbFunc? : Function, errCbFunc? : Function ) => {
  const result = await indexedDB.Add(DbTableName.POST, obj);
  if(result){
    SaveSuccessFunc(mapDOM.GetDOM("main-view")!);
  }
  else{
    SaveFailFunc(mapDOM.GetDOM("main-view")!);
  }
}