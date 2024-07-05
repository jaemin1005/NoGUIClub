export async function POSTFetch(host: string, url : string, data : string, callback? : IResponseCbFunc, errCallback? : IResponseCbFunc){
  let res = await fetch(host+url,{ 
    method : "POST",
    headers : {
      'Content-Type': 'application/json'
    },
    body : data });
  if(res.status === 200){
    if(callback) callback(res);
  }else{
    if(errCallback) errCallback(res);
  }
}