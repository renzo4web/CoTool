//Create the alterColor function which accepts hex value and percentage
//convert the hex value to rgb
//increase each r,g,b value by appropriate amount (percentage of 255)
//use the new r,g,b values to convert to a hex value
//return the hex value
const alterColor = (hex, percentage) => {
  //amount (percentage / 100) * r || g || b;
  const per = Math.floor(((percentage / 100) * 255));
  const rgbToDarker = hexToRgb(hex);
  const rgbAltered = []
  for (const property in rgbToDarker) {
    const color = rgbToDarker[property];
    let colorResult = (Math.floor(color + per))
    if (colorResult > 255) {
      rgbAltered.push(255);
    }
    if (colorResult < 0) {

      rgbAltered.push(0);
    } else {
      rgbAltered.push(colorResult);
    }
  }


  return rgbToHex(rgbAltered[0], rgbAltered[1], rgbAltered[2])
}