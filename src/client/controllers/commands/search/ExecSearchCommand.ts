import { ICommandData, SearchCmd } from "@shared/interface/ICommand";
import { SendData } from "../../SendData";
import { SearchSuccessCbFunc } from "./ExecSearchCbFunc";

export function ExecSearchCmd(commandData : ICommandData, command : SearchCmd){
  SendData("/search", commandData, async (res) => {
    const data = await res.json();
    SearchSuccessCbFunc(data, commandData)})
}






