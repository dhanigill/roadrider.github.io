document.addEventListener("DOMContentLoaded", function () {

const mainnav = document.querySelector(".nav");
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const tab = document.querySelectorAll(".header_link");
const windowHref = document.location.pathname;

tab.forEach((tablink) => {
  if (tablink.href.includes(windowHref)) {
    tablink.classList.add("active");
  }
});

if (windowHref == "/") {
  tab[1].classList.remove("active");
  tab[2].classList.remove("active");
}

});