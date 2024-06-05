import { LoadFile } from "../modules/LoadFile";
import { ModifyPath } from "../modules/ModifyPath";
import { IRouterCbFunc } from "../interfaces/IRouterCbfunc";

export const LoadFileController : IRouterCbFunc = (req, res) => {
  const path = ModifyPath(req.url);
  LoadFile(path, res);
}