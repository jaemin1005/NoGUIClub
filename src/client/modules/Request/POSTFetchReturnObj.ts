export async function POSTFetchReturnObj<T>(host : string, url : string, data : string){
  
  let res = await fetch(host+url,{ 
    method : "POST",
    headers : {
      'Content-Type': 'application/json'
    },
    body : data });

  const obj = await res.json() as T;
  return obj
}