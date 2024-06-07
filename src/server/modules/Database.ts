import mysql = require("mysql");

export class DataBase {

  db: mysql.Connection;

  constructor(host: string, user: string, password: string, databaseName: string) {
    this.db = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: databaseName
    })

    this.Connect();
  }

  Connect() {
    this.db.connect((err) => {
      if (err) throw new Error("DB Connect Error : " + err.stack);
      console.log("Succcess Connect : " + this.db.threadId);
    });
  }

  ExecQuery(query: string, params? : any) {
    this.db.query(query, params, (err, rows) => {
      if (err) {
        console.error('Error Exec Query : ' + err.stack);
        return;
      }
      console.log('Success Query : ' + rows);
    });
  }

  DisConnect(){
    this.db.end((err) => {
      if (err) throw new Error("DB Disconnect Error : " + err.stack);
      console.log("Success Disconnect")
    })
  }
}

