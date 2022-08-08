
import "../scss/style.scss";
let body = document.querySelector("body")
let menuBtn = document.querySelector(".icon-menu")
let menu = document.querySelector(".menu__body")
menuBtn.addEventListener("click", function () {
	menu.classList.toggle("active")
	menuBtn.classList.toggle("active")
})