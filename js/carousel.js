var swiper = null; // Declare a variable to store the Swiper instance

function initializeSwiper() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;
  var slidesPerViewValue = screenWidth < 992 ? 1 : 2;

  if (swiper) {
    // If Swiper is already initialized, destroy it first
    swiper.destroy();
  }

  swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: slidesPerViewValue,
    speed: 600,
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });
}

// Initialize Swiper on page load
initializeSwiper();

// Reinitialize Swiper when the window is resized
window.addEventListener("resize", function () {
  initializeSwiper();
});

// Timer to change the slider every 4 seconds
setInterval(function () {
  swiper.slideNext();
}, 5000);
