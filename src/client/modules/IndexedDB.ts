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

  IsCorrect(table : string) {
    if(!this.__db === null) throw new Error("존재하지 않는 DB");
    if(!this.__tables.find(str => str == table)) throw new Error("존재하지 않는 테이블");
  }

  async Add(table : string, obj : {}) : Promise<boolean>{
  
    this.IsCorrect(table);

    const transaction = this.__db.transaction(table, "readwrite");
    const objStore = transaction.objectStore(table);
    objStore.add(obj);

    return await new Promise((res, rej) => {
      transaction.oncomplete = (event) => res(true);
      transaction.onerror = (event) => rej(false);
    })
  }

  async Get(table : string, key : number){
    
    this.IsCorrect(table);
    
    const transaction = this.__db.transaction(table, "readonly");
    const objStore = transaction.objectStore(table);
    const request = objStore.get(key);
    
    return new Promise((resolve, reject) => {
      request.onsuccess = () => {
        resolve(request.result);
      };
      request.onerror = () => {
        reject(request.error);
      };
    });
  }
}
