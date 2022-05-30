// DOM
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");

// Event
let isOpen = true;
menuIcon.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});

//Slideshow
let slides = document.querySelectorAll(".slider");
let slideIndex = 0;
showSlides();

function showSlides() {
  setInterval(function () {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.opacity = 0;
    }
    if (slideIndex > slides.length - 2) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    slides[slideIndex].style.opacity = 1;
  }, 3000);
}
