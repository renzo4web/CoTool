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

const rangePercern = document.getElementById("sliderColor");
const hexInput = document.getElementById("hexInput");
const alter = document.getElementById("alteredColor");
const inputColorBox = document.getElementById("inputColor");
const sliderText = document.querySelector(".slider-label");
const alterColorText = document.querySelector(".altercolor-text")


function reset() {
  hexInput.addEventListener("click", function () {
    rangePercern.value = 0;
    sliderText.textContent = "0%";
    inputColorBox.style.background = "white";
    alter.style.background = "white";
    alterColorText.textContent = "Altered Color";
    document.querySelector("#copy-hex").textContent = "Click To Copy"
  })
  toggleBtn.addEventListener("click", function () {

    rangePercern.value = 0;
    sliderText.textContent = "0%";
    inputColorBox.style.background = inputCheck(hexInput.value)
    alter.style.background = inputCheck(hexInput.value)
    alterColorText.textContent = "Altered Color";
    document.querySelector("#copy-hex").textContent = "Click To Copy"
  });
}

let colorAltered;


function sliderRange() {

  rangePercern.addEventListener("input", function () {
    const currentRange = rangePercern.value;

    console.log(currentRange);
    sliderText.textContent = `${currentRange}%`;
    if (lightenText.classList.contains("unselected")) {
      colorAltered = alterColor((inputCheck(hexInput.value)), -rangePercern.value);

    } else {
      colorAltered = alterColor((inputCheck(hexInput.value)), rangePercern.value);
    }
    alter.style.background = colorAltered;
    alterColorText.textContent = `Altered Color : ${colorAltered.toUpperCase()}`;


  });
}

sliderRange();

reset()


hexInput.addEventListener("keyup", () => {

  const hexValue = hexInput.value;
  let hexStriped = hexValue.replace("#", "");
  (!inputCheck(hexValue)) ? console.log("Error"):
    inputColorBox.style.background = "#" + hexStriped;
  alter.style.background = "#" + hexStriped;
  console.log(hexToRgb(("#" + hexStriped)))

})

document.querySelector("#copy-hex").addEventListener("click", copyText);

function copyText() {
  navigator.clipboard.writeText(colorAltered);

}