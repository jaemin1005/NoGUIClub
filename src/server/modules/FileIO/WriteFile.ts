import { Response } from "express";
import { SimpleAck } from "../Response/SimpleAck";
import { SimpleNAck } from "../Response/SimpleNAck";

import fs = require("fs");

/**
 * * path 경로에 data(json) 저장
 * @param path : 경로
 * @param data : Json
 */
export function WriteFile(path : string, data : string | Buffer, res : Response){
  const writeStream = fs.createWriteStream(path);

  writeStream.on("error", (err) => {
    console.log(err);
    SimpleNAck(res);
  })

  writeStream.on("finish", () => {
    SimpleAck(res);
  })

  writeStream.write(data);
  writeStream.end();
}




