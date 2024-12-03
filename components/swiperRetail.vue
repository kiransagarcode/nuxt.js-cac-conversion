<template>

<div class="container pb-5">
          <div id="slider2" class="slider-container swiper">
            <div class="slider-content">
              <div class="card-wrapper swiper-wrapper">
                <div class="card1 swiper-slide">
                  <div class="d-flex justify-content-center">
                    <img src="./img/Thumbnail Image 1-retail.png" alt="" />
                  </div>
                </div>
                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 2-retail.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 3-retail.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 4-retail.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="d-flex justify-content-center">
                    <img src="./img/Thumbnail Image 1-retail.png" alt="" />
                  </div>
                </div>
                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 2-retail.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 3-retail.png" alt="" />
                    </div>
                  </div>
                </div>

                <div class="card1 swiper-slide">
                  <div class="image-content">
                    <div class="d-flex justify-content-center">
                      <img src="./img/Thumbnail Image 4-retail.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-pagination"></div>
            <div
              class="swiper-button-next swiper-navBtn"
              style="color: #fff; border: 1px solid #fff"
            ></div>
            <div
              class="swiper-button-prev swiper-navBtn"
              style="color: #fff; border: 1px solid #fff"
            ></div>
          </div>

          <!--swiper-->
        </div>
</template>


<script setup>
import { onMounted } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css'; // Ensure Swiper CSS is imported

// Swiper initialization inside onMounted hook
onMounted(() => {

// Second Swiper instance
new Swiper("#slider2 .slider-content",{
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
      navigation:true
    },
    520: {
      slidesPerView: 2,
      pagination:false
    },
    1000: {
      slidesPerView: 3,
      pagination:false
    },
    1200: {
      slidesPerView: 4,
      pagination:false
    }
  },
});

});

console.log("swiper2");

</script>

<style scoped src="~/assets/css/home.css"></style>