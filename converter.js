//Create a function to convert Hex to RGB
//this should work with 3 or 6 character hex values
//Hint - useParseInt(16) to convert a hex value to a decimal value
//should return an object with 3 properties - r,g, and b
//Test your function with a few different use cases
const hexToRgb = (hex = "000000") => {
  // the hex value received have always "#"
  console.log(hex)
  let r, g, b;
  (hex.length > 4) ?
  (r = hex.slice(1, 3), g = hex.slice(3, 5), b = hex.slice(5, 7)) :
  (r = hex.slice(1, 2).repeat(2), g = hex.slice(2, 3).repeat(2), b = hex.slice(3, 4).repeat(2));

  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);

  console.log({
    r,
    g,
    b
  });
  return {
    r,
    g,
    b
  }

}
// FFB627  
const rgbToHex = (r = 00, g = 00, b = 00) => {


  const [hex1, hex2, hex3] = [r.toString(16), g.toString(16), b.toString(16)];
  const result = []

  for (hex of [hex1, hex2, hex3]) {
    if (hex <= 10) {
      result.push("0" + hex);
      console.log(hex);
    } else {
      result.push(hex);
    }
  }

  return "#" + result.join("");

}
rgbToHex(0, 255, 255);