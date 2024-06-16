import { ICommandData } from "@shared/interface/ICommand";
import { StringToNumber } from "@shared/modules/StringToNumber";
import { indexedDB } from "./CallIndexedDB";
import { DbTableName } from "client/modules/Enum/EnumDbTableName";
import { IData } from "@shared/interface/IData";
import { SearchSuccessCbFunc } from "../commands/search/ExecSearchCommand";

export const SearchCmdIndexedDB = async (data : ICommandData) => {
  if(data.command.value === null) return;
  
  const value = StringToNumber(data.command.value);
  const min = (value - 1) * 10;
  const max = value * 10 - 1;


  const datas = await indexedDB.Get<IData>(DbTableName.POST, min, max, "date");
  
  if(datas === null) return;

  SearchSuccessCbFunc(datas, data);
}