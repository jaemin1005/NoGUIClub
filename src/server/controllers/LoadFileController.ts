import { LoadFile } from "server/modules/LoadFile";
import { ModifyPath } from "server/modules/ModifyPath";
import { IRouterCbFunc } from "server/interfaces/IRouterCbfunc";

export const LoadFileController : IRouterCbFunc = (req, res) => {
  const path = ModifyPath(req.url);
  LoadFile(path, res);
}