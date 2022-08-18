// displaying the mobile menu
const hamburgerMenu = document.querySelector(".navbar__toggle");
const menuLinks = document.querySelector(".navbar__menu");

const mobileMenu = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
};

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  menuLinks.classList.toggle("active");
})

document.querySelectorAll(".navbar__links").forEach(n => n.addEventListener("click", () => {
  hamburgerMenu.classList.remove("active");
  menuLinks.classList.remove("active");
}))

function readMore() {
  var expandInfo = document.getElementById("more-info-js");
  var mainHeadings = document.getElementById("main-headings-js");

  mainHeadings.style.transform = "scale(0.7)";
  expandInfo.style.height = "350px";
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < 5; i++) {
    var windowHeight = window.outerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
