<template>
    <div class="container pb-5 mt-3">
      <div id="slider1" class="slider-container swiper">
        <div class="slider-content">
          <div class="card-wrapper swiper-wrapper">
            <div class="card1 swiper-slide" v-for="(image, index) in images" :key="index">
              <div class="d-flex justify-content-center">
                <img :src="image" alt="" />
              </div>
            </div>
          </div>
        </div>
  
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next swiper-navBtn"></div>
        <div class="swiper-button-prev swiper-navBtn"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import Swiper from 'swiper/bundle';
  import 'swiper/swiper-bundle.css'; // Ensure Swiper CSS is imported
  
  // Accept images as a prop
  const props = defineProps({
    images: {
      type: Array,
      required: true,
    }
  });
  
  // Swiper initialization inside onMounted hook
  onMounted(() => {
    new Swiper("#slider1 .slider-content", {
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
  
    console.log("Swiper initialized");
  });
  </script>
  
  <style scoped src="~/assets/css/home.css"></style>
  