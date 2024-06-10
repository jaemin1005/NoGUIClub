import { Data } from "@shared/modules/Data";
import { DataBase } from "./Database";
import { TransArrStrIntoStr } from "@shared/modules/TransArrStrIntoStr"
import { GetKeywords } from "./GetKeyword";

class NGCDatabase extends DataBase{

  SavePost(data : Data, fileName : string){
    const query = "INSERT INTO post_table (head, file_name, date, keywords) VALUES(?,?,?,?)"
    const keywords = GetKeywords(data.ReturnArrStr());
    const params = [data.head, fileName, data.date, TransArrStrIntoStr(keywords)];
    
    this.ExecQuery(query, params);
  }

  async FindPost(data : ICommandData, page : number){

    const nMinNum = (page - 1) * 10;
    const nMaxNum = page * 10 - 1

    const query = `SELECT * FROM post_table ORDER BY create_at DESC LIMIT ${nMinNum}, ${nMaxNum}`;
    const result = await this.ExecQuery(query);
    return result;
  }
}

export const db = new NGCDatabase("localhost", "root", "password", "NoGUIClub");
