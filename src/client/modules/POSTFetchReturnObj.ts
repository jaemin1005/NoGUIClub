export async function POSTFetchReturnObj<T>(url : string, data : string){
  const host = window.location.origin + url; 
  
  let res = await fetch(host,{ 
    method : "POST",
    headers : {
      'Content-Type': 'application/json'
    },
    body : data });

  const obj = await res.json() as T;
  return obj
}