import '../styles/index.scss';
import '../styles/_normalize.scss';
import {alter, copyText, hexInput, inputCheck, inputColorBox, reset, sliderRange} from "./check-input";
import {hexToRgb, rgbToHex} from "./converter";

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

export const lightenText = document.getElementById('ligthenText');
export const darkenText = document.getElementById('darkenText');
export const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', function () {
    toggleBtn.classList.toggle('toggled');
    darkenText.classList.toggle('unselected');
    lightenText.classList.toggle('unselected');
});



sliderRange();


reset();

hexInput.addEventListener('keyup', () => {
    const hexValue = hexInput.value;
    let hexStriped = hexValue.replace('#', '');
    !inputCheck(hexValue)
        ? console.log('Error')
        : (inputColorBox.style.background = '#' + hexStriped);
    alter.style.background = '#' + hexStriped;
    console.log(hexToRgb('#' + hexStriped));
});

document.querySelector('#copy-hex').addEventListener('click', copyText);
