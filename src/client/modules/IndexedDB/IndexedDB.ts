import { IndexedDBTable, IDBTable } from "./IndexedDBTable";

export class IndexedDB {
  private __db! : IDBDatabase
  private __dbName;
  private __tables;

  constructor(db : string, tables : Array<IDBTable>){
    this.__dbName = db;
    this.__tables = tables
  }

  async Connect(){
    this.__db = await new Promise((res, rej) => {
      const open = indexedDB.open(this.__dbName);
  
      open.onupgradeneeded = (event) => {
        const db = open.result;

        for(const table of this.__tables){
          const objStore = db.createObjectStore(table.name, {autoIncrement: true});
          
            table.keys.forEach(key => {
            objStore.createIndex(key, key, {unique : false});
          })
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
    if(!this.__tables.find(str => str.name == table)) throw new Error("존재하지 않는 테이블");
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

  async Get<T>(table : string, min : number, max : number, keyName : string, range? : IDBKeyRange ) : Promise<Array<T> | null>{
    
    this.IsCorrect(table);
    
    const transaction = this.__db.transaction(table, "readonly");
    const objStore = transaction.objectStore(table);
    const index = objStore.index(keyName)
    const arr : Array<T> = [];
    let count = 0;

    return new Promise((res,rej) => index.openCursor(range, "prev").onsuccess = (event) => {
      const cursorWithValue : IDBCursorWithValue | null = (event.target as IDBRequest).result;
      if(cursorWithValue){

        if(count > max){
          return res(arr);
        }

        if(count >= min && count <= max){
          arr[arr.length] = cursorWithValue.value as T;
        }

        count++
        cursorWithValue.continue();
      }
      else{
        return res(arr);
      }
    })
  }

  async GetAll<T>(table : string, keyRange? : IDBKeyRange) : Promise<T[] | DOMException> {
    this.IsCorrect(table);

    const transaction = this.__db.transaction(table, "readonly");
    const objStore = transaction.objectStore(table);
    const request : IDBRequest<T[]> = objStore.getAll(keyRange);

    return new Promise((res, rej) => {
      request.onsuccess = () => {
        res(request.result);
      };
      request.onerror = () => {
        rej(request.error);
      }
    })
  }
}