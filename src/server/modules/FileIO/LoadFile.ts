import fs =  require("fs");
import { Response } from "express";

/**
 * * 파일을 로드하는 모듈
 * @param path 파일 경로
 * @param res 응답 객체
 */
export function LoadFile(path : string, res : Response){
  const stream = fs.createReadStream(path);
  
  stream.on("error", (err) => {
    console.log(err);
    res.status(500);
    res.end();
  })
  
  stream.pipe(res);
}
