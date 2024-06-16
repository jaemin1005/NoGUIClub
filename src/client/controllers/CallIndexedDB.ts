import { IndexedDB } from "client/modules/IndexedDB/IndexedDB";
import { IndexedDBTable } from "client/modules/IndexedDB/IndexedDBTable";
import { DbTableName, DbTableKey } from "client/modules/Enum/EnumDbTableName";

const postTable = new IndexedDBTable(DbTableName.POST, DbTableKey.POST);
const indexedDB = new IndexedDB("NoGUIClub", [postTable]) 
await indexedDB.Connect();

export {indexedDB};