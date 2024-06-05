import { Response, Request } from "express"
export type IRouterCbFunc = (req : Request, res : Response) => void;