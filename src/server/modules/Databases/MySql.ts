import mysql = require("mysql");

export abstract class MySql {

  db: mysql.Connection;
  private __host
  private __user
  private __password
  private __databaseName
  
  isConnect

  constructor(host: string, user: string, password: string, databaseName: string) {
    
    this.__host = host
    this.__user = user
    this.__password = password
    this.__databaseName = databaseName
    this.isConnect = false;

    this.db = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: databaseName
    })

    this.Connect();
  }

  Connect(cbfunc? : () => void) {
    this.db.connect((err) => {
      if (err) { this.HandlingError(err); return; }
      
      if(cbfunc) cbfunc();
      
      this.isConnect = true;
      console.log("Succcess Connect : " + this.db.threadId);
    });
  }

  async ExecQuery(query: string, params? : any) {
    return await new Promise((res,rej) => {this.db.query(query, params, (err, rows) => {
      if (err) {
        console.error('Error Exec Query : ' + err.stack);
        rej(null);
      }
      console.dir('Success Query : ' + rows);
      res(rows);
    })});
  }

  DisConnect(){
    this.db.end((err) => {
      if (err) throw new Error("DB Disconnect Error : " + err.stack);
      console.log("Success Disconnect")
    })
  }

  //* https://dev.mysql.com/doc/mysql-errors/8.0/en/server-error-reference.html
  //* Errono 확인하고 처리.
  HandlingError(err : mysql.MysqlError){
    if(err.errno === 1049) this.CrateDatabase();
    else if(err.errno === 2002) this.isConnect = false;
    else{
      this.isConnect = false;
    }
  }

  //* ER_BAD_DB_ERROR: Unknown database
  private CrateDatabase(){
    
    this.db = mysql.createConnection({
      host : this.__host,
      user : this.__user,
      password : this.__password,
    })

    this.Connect( async () => {
      await this.ExecQuery(`CREATE DATABASE ${this.__databaseName}`);
      await this.ExecQuery(`USE ${this.__databaseName}`);
      this.CreateTable();
    })
  }

  abstract CreateTable() : void
}

