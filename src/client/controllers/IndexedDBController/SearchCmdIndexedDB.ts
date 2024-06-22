import { ICommandData } from "@shared/interface/ICommand";
import { StringToNumber } from "@shared/modules/StringToNumber";
import { indexedDB } from "./CallIndexedDB";
import { DbTableName } from "@client/modules/Enum/EnumDbTableName";
import { IData } from "@shared/interface/IData";

export const SearchCmdIndexedDB = (data : ICommandData) : Promise<IData[] | null> => {
  if(data.command.value === null) data.command.value = "1"
  
  const value = StringToNumber(data.command.value);
  const min = (value - 1) * 10;
  const max = value * 10 - 1;

  return indexedDB.Get<IData>(DbTableName.POST, min, max, "date");
}