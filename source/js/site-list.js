  var toggle = document.querySelector (".main-nav__toggle");
  var sitelist = document.querySelector(".site-list");

  toggle.addEventListener("click", function(event) {
    event.preventDefault();
    sitelist.classList.toggle("site-list--opened");
    toggle.classList.toggle("main-nav__toggle--close");
  })
