type SendData = (url : string, obj : {}, cbFunc : IResponseCbFunc, errCbFunc : IResponseCbFunc) => void;
type ProcessCmdIndexedDB = (obj : {}, cbFunc : Function, errCbFunc : Function ) => void;