/* eslint-disable no-undef */
export function sliderRange() {
  const rangePercern = document.getElementById("sliderColor");

  rangePercern.addEventListener("input", function () {
    const sliderText = document.querySelector(".slider-label");
    const currentRange = rangePercern.value;
    console.log(currentRange);
    sliderText.textContent = `${currentRange}%`;
  });
}