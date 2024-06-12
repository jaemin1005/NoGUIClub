export function HexaIntoRGB(strHexa : string) : string {
  if(strHexa[0] === "#") strHexa = strHexa.substring(1);

  if(strHexa.length !== 6) return `rgb(0,0,0)`;
  
  const red = parseInt(strHexa.slice(0,2), 16);
  const green = parseInt(strHexa.slice(2,4), 16);
  const blue = parseInt(strHexa.slice(4,6), 16);

  return `rgb(${red},${green},${blue})`;
}
