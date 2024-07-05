import { EnumEnv } from "@client/modules/Enum/EnumEnv"
import { browserName } from "@client/modules/GetUsingBrowser"
import { osName } from "@client/modules/GetUsingOS"
import { POSTFetch } from "@client/modules/Request/POSTFetch"
import { IServerState } from "@shared/interface/IServerState"

//* 초기 서버 상태, Init
const serverState : IServerState = {
  MySQLConnect : false,
}

const userInfo : IUserInfo = {
  browserName : browserName,
  osName : osName
}

await new Promise((resolve,reject) => POSTFetch(EnumEnv.SERVER_URL!, "/userinfo", JSON.stringify(userInfo), async (res)  => {
  const data = await res.json() as IServerState
  let key : keyof typeof data

  for(key in data){
    serverState[key] = data[key];
  }

  resolve(null);
}, () => {reject()}))

export {serverState};