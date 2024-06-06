export async function POSTFetch(url : string, data : string, callback? : IResponseCbFunc, errCallback? : IResponseCbFunc){
  const host = window.location.origin + url; 

  let res = await fetch(host,{ 
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