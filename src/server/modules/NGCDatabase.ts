import { DataBase } from "./Database";
import { IData } from "@shared/interface/IData"

class NGCDatabase extends DataBase{

  SavePost(data : IData, fileName : string){
    const query = "INSERT INTO post_table (head, file_name, date) VALUES(?,?,?)"
    const params = [data.head, fileName, data.date];
    
    this.ExecQuery(query, params);
  }
}

export const db = new NGCDatabase("localhost", "root", "password", "NoGUIClub");
