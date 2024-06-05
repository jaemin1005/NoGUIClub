import { IRouterCbFunc } from "../interfaces/IRouterCbfunc";
import { WriteFile } from "../modules/WriteFile"
import { TransObjIntoHash } from "../modules/TransObjIntoHash";



/**
 * * 글을 저장하는 컨트롤러.
 * * 파일명은 해당 객체의 해쉬화된 string
 * * 데이터는 해당 객체
 * @param req 
 * @param res 
 */
export const SavePostFunc: IRouterCbFunc = (req, res) => {

  if (req.body) {
    const data = JSON.stringify(req.body);
    const fileName = TransObjIntoHash(data);
    WriteFile(fileName, data, res);
  }
}