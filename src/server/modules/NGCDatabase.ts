import { Data } from "@shared/modules/Data";
import { DataBase } from "./Database";
import { TransArrStrIntoStr } from "@shared/modules/TransArrStrIntoStr"

class NGCDatabase extends DataBase{

  SavePost(data : Data, fileName : string){
    const query = "INSERT INTO post_table (head, file_name, date) VALUES(?,?,?)"
    const params = [data.head, fileName, data.date];
    
    const keywords = TransArrStrIntoStr(data.ReturnArrStr());

    this.ExecQuery(query, params);
  }
}

export const db = new NGCDatabase("localhost", "root", "password", "NoGUIClub");
