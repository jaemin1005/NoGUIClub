import { IRouterCbFunc } from "server/interfaces/IRouterCbfunc";
import { SimpleNAck } from "server/modules/SimpleNAck";
import { db } from "server/modules/NGCDatabase";
import { IServerState } from "@shared/interface/IServerState";

export const UserInfoFunc : IRouterCbFunc = function(req, res){
  if(!req.body) { SimpleNAck(res); return }

  //TODO DataBase에 나중에 추가하자.
  const serverState : IServerState = {
    MySQLConnect : db.isConnect,
  }

  res.json(serverState);
}