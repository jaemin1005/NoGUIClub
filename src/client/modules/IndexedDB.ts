class IndexedDB {
  private __db! : IDBDatabase
  private __dbName;
  private __tables;

  constructor(db : string, tables : string[]){
    this.__dbName = db;
    this.__tables = tables
  }

  async Connect(){
    this.__db = await new Promise((res, rej) => {
      const open = indexedDB.open(this.__dbName);
  
      open.onupgradeneeded = (event) => {
        const db = open.result;

        for(const table of this.__tables){
          db.createObjectStore(table, {autoIncrement: true});
        }
      }
  
      //* 연결이 성공했을 때
      open.onsuccess = (event) => {
        console.log(open.result.name);
        res(open.result);
      }
  
      //* 연결 에러
      open.onerror = (event) => {
        rej(open.result);
      }
    })
  }
}
