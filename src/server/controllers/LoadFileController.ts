import { LoadFile } from "../modules/FileIO/LoadFile";
import { ModifyPath } from "../modules/FileIO/ModifyPath";
import { IRouterCbFunc } from "../interfaces/IRouterCbfunc";

export const LoadFileController : IRouterCbFunc = (req, res) => {
  const path = ModifyPath(req.url);
  LoadFile(path, res);
}