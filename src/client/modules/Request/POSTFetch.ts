export async function POSTFetch(host: string, url: string, data: string, callback?: IResponseCbFunc, errCallback?: IResponseCbFunc) {
  try {
    let res = await fetch(host + url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });
    if (res.status === 200) {
      if (callback) callback(res);
    } else {
      if (errCallback) errCallback(res);
    }
  }
  catch (err) {
    alert('서버와의 연결에 실패했습니다. 로컬로 기록됩니다.');
  }
}