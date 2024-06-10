import { SimpleNAck } from "../modules/SimpleNAck";
import { IRouterCbFunc } from "../interfaces/IRouterCbfunc";
import { db } from "../modules/NGCDatabase";
import { StringToNumber } from "@shared/modules/StringToNumber";
import { IDbColumn } from "../interfaces/IDbColumn";
import { ReadJsonFiles } from "../modules/ReadJSONFile"
import { IData } from "@shared/interface/IData";

export const SearchFunc : IRouterCbFunc = async (req, res) => {
  if(!req.body) { SimpleNAck(res); return; }

  const {header, command, value} = req.body as ICommandData

  //* search cmd가 아니면 잘못들어온 데이터이다.
  if(command.main !== "search") {SimpleNAck(res); return;}
  if(command.value === null) command.value = "1"

  const arrIDbColumn = await db.FindPost(req.body, StringToNumber(command.value)) as IDbColumn[];
  const paths : Array<string> = [];
 
  for(const value of arrIDbColumn){
    const {file_name} = value;
    const path = "resources/post/" + file_name;
    paths[paths.length] = path;
  }

  const arrIData : Array<IData> = await ReadJsonFiles(...paths);
  res.json(arrIData);
}