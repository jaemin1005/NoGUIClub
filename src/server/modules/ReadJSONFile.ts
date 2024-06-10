import { readFile } from "fs";

/** 해당 경로의 파일들을 모두 읽어 객체의 배열로 반환한다. */
async function ReadJsonFiles<T>(...filePaths : string[]){
  
  const arrObj : T[] = [];

  const getFiles = filePaths.map((filePath) => {
    return new Promise((res, rej) => {
      readFile(filePath, (err, data) => {
          if(err) rej();
          else res(data);
      })
    })
    .then(res => JSON.parse(res as string))
    .then((data : T)=>  arrObj[arrObj.length] = data);
  }); 

  await Promise.all(getFiles);
  return arrObj;
}

ReadJsonFiles("resources/post/17fe9c411e7615bfb1be9d512840511f.json", "resources/post/b21880ed4fc63d497097f18a92e00b3a.json");