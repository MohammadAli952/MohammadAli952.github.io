const navLinks = document.querySelectorAll(".nav-link");
const overlay = document.getElementById("overlay");
window.addEventListener("load", function () {
  overlay.style.display = "none";
  document.querySelector(".header-text").classList.add("header-text-animation");
});
document.querySelector("nav").style.borderBottom = "0.5px solid transparent";

document.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    // document.querySelector(".navbar-nav").style.display = "none";
    document.querySelector("nav").style.background = "#d33e4a";
    document.querySelector("nav").style.borderBottom = "0.5px solid #d33e4a";
  } else {
    document.querySelector("nav").style.background = "none";
    document.querySelector("nav").style.borderBottom =
      "0.5px solid transparent";
  }
});

// document.querySelector("nav").addEventListener("mouseover", (e) => {
//   document.querySelector(".navbar-nav").style.display = "flex";
//   document.querySelector("nav").style.background = "black";
//   document.querySelector("nav").style.borderBottom = "0.5px solid #262626";
// });

// document.querySelector("nav").addEventListener("mouseout", (e) => {
//   document.querySelector(".navbar-nav").style.display = "none";

//   document.querySelector("nav").style.background = "none";
//   document.querySelector("nav").style.borderBottom = "0.5px solid transparent";
// });
