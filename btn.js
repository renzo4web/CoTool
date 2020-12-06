//lightenText, darkenText, toggleBtn

const lightenText = document.getElementById("ligthenText");
const darkenText = document.getElementById("darkenText");
const toggleBtn = document.getElementById("toggleBtn")


toggleBtn.addEventListener("click", function () {

  toggleBtn.classList.toggle("toggled")
  darkenText.classList.toggle("unselected")
  lightenText.classList.toggle("unselected")

})