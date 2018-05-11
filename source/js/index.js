var toggle = document.querySelector(".main-nav__toggle");
var sitelist = document.querySelector(".site-list");
var mappictures = document.querySelector(".map__pictures");

toggle.classList.remove("main-nav__toggle--close");
sitelist.classList.remove("site-list--no-js");
mappictures.classList.add("map__hide");

toggle.addEventListener("click", function(event) {
  event.preventDefault();
  sitelist.classList.toggle("site-list--opened");
  toggle.classList.toggle("main-nav__toggle--close");
})
