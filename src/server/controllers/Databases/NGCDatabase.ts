import { Data } from "@shared/modules/Data";
import { MySql } from "../../modules/Databases/MySql";
import { TransArrStrIntoStr } from "@shared/modules/TransArrStrIntoStr"
import { GetKeywords } from "../../modules/GetKeyword";
import { ICommandData } from "@shared/interface/ICommand";

require("dotenv").config();

const HOST = process.env.DATABASE_HOST || "localhost";
const USER = process.env.DATABASE_USER || "root";
const PASSWORD = process.env.DATABASE_PASSWORD || "password";
const DATABASE_NAME = process.env.DATABSE_NAME || "NoGUIClub";




class NGCDatabase extends MySql{

  SavePost(data : Data, fileName : string){
    const query = "INSERT INTO post_table (head, file_name, date, keywords) VALUES(?,?,?,?)"
    const keywords = GetKeywords(data.ReturnArrStr());
    const params = [data.head, fileName, data.date, TransArrStrIntoStr(keywords)];
    
    this.ExecQuery(query, params);
  }

  async FindPost(data : ICommandData, page : number){

    const nMinNum = (page - 1) * 10;
    const nMaxNum = page * 10;

    const query = `SELECT * FROM post_table ORDER BY create_at DESC LIMIT ${nMinNum}, ${nMaxNum}`;
    const result = await this.ExecQuery(query);
    return result;
  }

  CreateTable(){
    this.ExecQuery("Create Table post_table ( head TEXT, date INT, user_id VARCHAR(20), create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, file_name TEXT NOT NULL, keywords TEXT NOT NULL )");
  }
}

export const db = new NGCDatabase(HOST, USER, PASSWORD, DATABASE_NAME);
