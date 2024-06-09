import { IRouterCbFunc } from "../interfaces/IRouterCbfunc";
import { WriteFile } from "../modules/WriteFile"
import { TransObjIntoHash } from "../modules/TransObjIntoHash";
import { SimpleNAck } from "../modules/SimpleNAck";
import { db } from "../modules/NGCDatabase";
import { IData } from "@shared/interface/IData";
import { WritingData } from "@shared/modules/WritingData";


/**
 * * 글을 저장하는 컨트롤러.
 * * 파일명은 해당 객체의 해쉬화된 string
 * * 데이터는 해당 객체
 * @param req 
 * @param res 
 */
export const SavePostFunc: IRouterCbFunc = (req, res) => {

  if (req.body) {

    const {head, date, body} = req.body as IData;
    const data  = new WritingData(head,date,body);

    const path = "resources/post/"
    const extenstion = ".json"
    const jsonData = JSON.stringify(req.body);
    const fileName = TransObjIntoHash(data) + extenstion;
    WriteFile(path + fileName, jsonData, res);
    db.SavePost(data, fileName);

  } else {
    SimpleNAck(res);
  }
}