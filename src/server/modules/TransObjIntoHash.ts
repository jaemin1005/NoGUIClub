import { createHash } from "crypto";

/** 객체를 md5으로 해쉬화하여 반환한다. */
export function TransObjIntoHash(obj : {}) : string{
   return createHash("md5").update(JSON.stringify(obj)).digest("hex");
}