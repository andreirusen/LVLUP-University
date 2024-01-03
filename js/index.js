// Loader
// var preloader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//   preloader.style.display = "none";
// });

//Navigation
// const navEL = document.querySelector(".navbar");
// let lastScrollY = window.scrollY;

// Parallax Effect
let headerShowcase = document.querySelector("#header-showcase");
const progressBarEl = document.getElementById("progress-bar");



// Close the navbar when clicking outside of it
document.addEventListener('click', function (event) {
  var target = event.target;
  if (!target.closest('.navbar')) {
    closeNavbar();
  }
});

window.addEventListener("scroll", function () {
  // Navbar
  // if (lastScrollY < window.scrollY) {
  //   navEL.classList.add("navbar--hidden");
  // } else {
  //   navEL.classList.remove("navbar--hidden");
  // }
  // lastScrollY = window.scrollY;

  // Parallax Effect
  let value = window.scrollY;
  headerShowcase.style.marginTop = value * 1.2 + "px";

  // Progress Bar
  let height = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;
  let width = (scrollPosition / height) * 100;
  progressBarEl.style.width = `${width}%`;
});

// Button To Top - Right
let btnToTop = document.querySelector(".btn-to-top");
let socialFloat = document.querySelector(".float-sm");

// Scroll Function 
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 650 ||
    document.documentElement.scrollTop > 650
  ) {
    btnToTop.style.display = "block";
    socialFloat.style.display = "none";
  } else {
    btnToTop.style.display = "none";
    socialFloat.style.display = "block";
  }
}
// Go top function 
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Reveal Section
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 40;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Cookie
console.clear();
("use strict");

(function () {
  var offcanvas = document.getElementById("offcanvas");
  
  if (!sessionStorage.getItem("offcanvasShown")) {
    var bs_offcanvas = new bootstrap.Offcanvas(offcanvas);
    bs_offcanvas.show();

    sessionStorage.setItem("offcanvasShown", true);
  }
})();

// Google Map
let map;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 44.434831044470364, lng: 26.147003026598945 },
    zoom: 15,
  });
  new google.maps.Marker({
    position: { lat: 44.434831044470364, lng: 26.147003026598945 },
    map: map,
    title: "RA Athletic",
    Animation: google.maps.Animation.BOUNCE,
  });
}
initMap();
