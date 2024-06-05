import { Response } from "express";

export function SimpleAck(res : Response) : void{
  res.status(200);
  res.end();
}