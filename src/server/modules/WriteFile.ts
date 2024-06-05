import fs = require("fs");

/**
 * * path 경로에 data(json) 저장
 * @param path : 경로
 * @param data : Json
 */
export function WriteFile(path : string, data : string | Buffer){
  const writeStream = fs.createWriteStream(path);
  writeStream.write(data);
}




