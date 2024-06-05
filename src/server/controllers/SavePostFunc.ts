import { IRouterCbFunc } from "server/interfaces/IRouterCbfunc";
import { WriteFile } from "server/modules/WriteFile";
import { TransObjIntoHash } from "server/modules/TransObjIntoHash";
import dotenv = require("dotenv");
dotenv.config();

export const SavePostFunc : IRouterCbFunc = (req, res) => {
  const data = JSON.stringify(req.body);
  const fileName = TransObjIntoHash(data); 

  WriteFile(fileName, data, res);
}