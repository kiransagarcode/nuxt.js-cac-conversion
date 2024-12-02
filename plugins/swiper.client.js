import Swiper from 'swiper'; // Ensure that Swiper is imported

export default defineNuxtPlugin(() => {
  // First Swiper instance


  var swiper1 = new Swiper("#slider1 .slider-content", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    
    navigation: {
      nextEl: "#slider1 .swiper-button-next",
      prevEl: "#slider1 .swiper-button-prev",
    },

    pagination: {
      el: "#slider1 .swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 3000, // Delay between transitions
      disableOnInteraction: false, // Continue autoplay after user interactions
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        navigation: true
      },
      520: {
        slidesPerView: 2,
        pagination: false
      },
      1000: {
        slidesPerView: 3,
        pagination: false
      },
      1200: {
        slidesPerView: 4,
        pagination: false
      }
    },
  });

  // Second Swiper instance
  var swiper2 = new Swiper("#slider2 .slider-content", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    
    navigation: {
      nextEl: "#slider2 .swiper-button-next",
      prevEl: "#slider2 .swiper-button-prev",
    },

    pagination: {
      el: "#slider2 .swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        navigation: true
      },
      520: {
        slidesPerView: 2,
        pagination: false
      },
      1000: {
        slidesPerView: 3,
        pagination: false
      },
      1200: {
        slidesPerView: 4,
        pagination: false
      }
    },
  });
});
