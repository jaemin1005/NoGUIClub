export interface IDBTable{
  name : string,
  keys: string[]
}

export class IndexedDBTable<T> implements IDBTable {
  name: string;
  keys: string[]

  /** keys는 객체의 키의 묶음이어야 합니다. */
  constructor(name : string, keys : string[]){
    this.name = name;
    this.keys = keys
  }
}