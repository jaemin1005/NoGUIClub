import { Response } from "express";

export function SimpleNAck(res : Response){
  res.status(400);
  res.end();
}