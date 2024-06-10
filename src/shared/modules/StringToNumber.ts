export function StringToNumber(str : string) : number{
  return Number(str) || 0;
}

// console.log(StringToNumber("hi"));
// console.log(StringToNumber("1001"));