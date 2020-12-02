// javascript

//check to see whether the input from the user is a valid
//hex color

//1. #000000 or 000000 if # stripe character
//2. check the length - should be either 3 or 6 characters

const inputCheck = (hexInput) => {

  if (!hexInput) return false;

  let hexChecked;
  hexInput.startsWith("#") ? hexChecked = Array.from(hexInput).filter(chart => chart !== "#") : hexChecked = Array.from(hexInput);

  // regex hex validator
  if (hexChecked.includes(/0[xX][0-9a-fA-F]+/)) return;

  if (hexChecked.length === 6 || hexChecked.length === 3) {

    return "#" + hexChecked.join("");
  }
  return false;
}

const hexInput = document.getElementById("hexInput");

const inputColorBox = document.getElementById("inputColor");

hexInput.addEventListener("keyup", () => {

  const hexValue = hexInput.value;
  const hexStriped = hexValue.replace("#", "");

  (!inputCheck(hexValue)) ? console.log("Error"):
    inputColorBox.style.backgroundColor = "#" + hexStriped;
  console.log(hexToRgb(("#" + hexStriped)))

})