import { browserName } from "client/modules/GetUsingBrowser"
import { osName } from "client/modules/GetUsingOS"
import { POSTFetch } from "client/modules/POSTFetch"

//* 초기 서버 상태, Init
const serverState : IServerState = {
  MySQLConnect : false,
}

const userInfo = {
  browserName : browserName,
  osName : osName
}

await POSTFetch("/userinfo", JSON.stringify(userInfo), async (res)  => {
  const data = await res.json() as IServerState
  let key : keyof typeof data

  for(key in data){
    serverState[key] = data[key];
  }
})

export {serverState};