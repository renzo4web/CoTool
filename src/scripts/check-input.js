import {lightenText, toggleBtn} from "./index";
import {hexToRgb, rgbToHex} from "./converter";

export const inputCheck = (hexInput) => {
    if (!hexInput) return false;

    let hexChecked;
    hexInput.startsWith('#')
        ? (hexChecked = Array.from(hexInput).filter((chart) => chart !== '#'))
        : (hexChecked = Array.from(hexInput));

    // regex hex validator
    if (hexChecked.includes(/0[xX][0-9a-fA-F]+/)) return;

    if (hexChecked.length === 6 || hexChecked.length === 3) {
        return '#' + hexChecked.join('');
    }
    return false;
};

const rangePercern = document.getElementById('sliderColor');
const hexInput = document.getElementById('hexInput');
const alter = document.getElementById('alteredColor');
const inputColorBox = document.getElementById('inputColor');
const sliderText = document.querySelector('.slider-label');
const alterColorText = document.querySelector('.altercolor-text');

export function reset() {
    hexInput.addEventListener('click', function () {
        rangePercern.value = 0;
        sliderText.textContent = '0%';
        inputColorBox.style.background = 'white';
        alter.style.background = 'white';
        alterColorText.textContent = 'Altered Color';
        document.querySelector('#copy-hex').textContent = 'Click To Copy';
    });
    toggleBtn.addEventListener('click', function () {
        rangePercern.value = 0;
        sliderText.textContent = '0%';
        inputColorBox.style.background = inputCheck(hexInput.value);
        alter.style.background = inputCheck(hexInput.value);
        alterColorText.textContent = 'Altered Color';
        document.querySelector('#copy-hex').textContent = 'Click To Copy';
    });
}

export let colorAltered;

export function sliderRange() {
    rangePercern.addEventListener('input', function () {
        const currentRange = rangePercern.value;

        sliderText.textContent = `${currentRange}%`;
        if (lightenText.classList.contains('unselected')) {
            colorAltered = alterColor(
                inputCheck(hexInput.value),
                -rangePercern.value
            );
        } else {
            colorAltered = alterColor(inputCheck(hexInput.value), rangePercern.value);
        }
        alter.style.background = colorAltered;
        alterColorText.textContent = `Altered Color : ${colorAltered.toUpperCase()}`;
    });
}

export function copyText() {
    navigator.clipboard.writeText(colorAltered);
}


export const alterColor = (hex, percentage) => {
    const per = Math.floor((percentage / 100) * 255);
    const rgbToDarker = hexToRgb(hex);
    const rgbAltered = [];
    for (const property in rgbToDarker) {
        const color = rgbToDarker[property];
        let colorResult = Math.floor(color + per);
        if (colorResult >= 255) {
            rgbAltered.push(255);
        } else if (colorResult < 0) {
            rgbAltered.push(0);
        } else {
            rgbAltered.push(colorResult);
        }
    }

    console.log(rgbAltered[0], rgbAltered[1], rgbAltered[2]);

    return rgbToHex(rgbAltered[0], rgbAltered[1], rgbAltered[2]);
};

export {
    rangePercern,
    hexInput,
    alter,
    inputColorBox,
    sliderText,
    alterColorText,
};
