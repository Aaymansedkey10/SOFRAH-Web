// variables
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Add Event Listener to button for mobile menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

 const heroSwiper = new Swiper(".hero-swiper", {
   effect: "fade",
   fadeEffect: {
     crossFade: true,
   },
   loop: true,
   speed: 1000,
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
 var categoriesSwiper = new Swiper(".categories-swiper", {
   slidesPerView: 1.5,
   spaceBetween: 22,
   loop: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   breakpoints: {
     768: {
       slidesPerView: 3,
     },
     1024: {
       slidesPerView: 4,
     }
   },
 });
  

