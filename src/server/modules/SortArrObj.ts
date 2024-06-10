/** number 타입만 허용하게 한다 */
type NumericKey<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T]

/** 객체의 배열을 Key를 이용하여 순회한다. */
export function SortArrObj<T>(arrObj: T[], key: NumericKey<T>){
  return arrObj.sort((a, b) => (b[key] as number) - (a[key] as number))
}