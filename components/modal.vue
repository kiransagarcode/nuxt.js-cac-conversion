<template>
    <div class="container">
        <div class="modal bigmodal" id="firstSquareModal">
          <div class="modal-content bigmodal-content">
            <span class="close-btn">&times;</span>
            <h1 class="text-white">Objective of the Company</h1>
            <p class="text-white ">Our objective is into “Organizing Information About <br> the ‘Value’ And ‘Market’ Of Green Cardamom produced in<br> India and making it accessible to everyone”..</p>
          </div>
        </div>
      
  
  <!-- Modal 2 -->
  <div class="modal bigmodal" id="secondSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <h1 class="text-white">What is profile mapping?</h1>
      <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum modi, at ad quod doloribus perferendis nulla dolorem ipsam esse.</p>
    </div>
  </div>
  
  <!-- Modal 3 -->
  <div class="modal bigmodal" id="thirdSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <h1 class="text-white">What are the informations <br> that we get from profile mapping?</h1>
      <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur quos velit modi in? Adipisci eveniet explicabo molestiae laboriosam veritatis?</p>
    </div>
  </div>
  
  <!-- Modal 4 -->
  <div class="modal bigmodal" id="fourthSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <h1 class="text-white">How to buy and sell?</h1>
      <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam nostrum dignissimos totam consequatur voluptas sunt quae laudantium ullam consectetur.</p>
    </div>
  </div>
  
  <!-- Modal 5 -->
  <div class="modal bigmodal" id="fifthSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <iframe
      width="90%" 
      height="600" 
      src="https://www.youtube.com/embed/y-KicubgMLE?autoplay=1&mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      style="max-width: 1380px; margin: 0 auto; display: block;"
    ></iframe>
    </div>
  </div>
  
  <!-- Modal 6 -->
  <div class="modal bigmodal" id="sixthSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <h1 class="text-white">How to read and understand data in mobile application?</h1>
      <p class="text-white">Connecting farmers and traders through workshops, webinars, and events.</p>
    </div>
  </div>
  
  <!-- Modal 7 -->
  <div class="modal bigmodal" id="seventhSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <h1 class="text-white">What are Cardamom Auction.com Services?</h1>
      <p class="text-white">Conducting in-depth research to uncover the potential of the Green Cardamom market.</p>
    </div>
  </div>
  
  <!-- Modal 8 -->
  <div class="modal bigmodal" id="eighthSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <h1 class="text-white">What are Cardamom Auction.com Unique Features?</h1>
      <p class="text-white">Leveraging modern technology to provide real-time insights and updates.</p>
    </div>
  </div>
  
  <!-- Modal 9 -->
  <div class="modal bigmodal" id="ninthSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <h1 class="text-white">What about Cardamom Auction.com Team? </h1>
      <p class="text-white">Collaborating with agricultural experts and trade bodies for mutual growth.</p>
    </div>
  </div>
  
  <!-- Modal 10 -->
  <div class="modal bigmodal" id="tenthSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <h1 class="text-white">What are the documents needed to be a buyer in Cardamom Auction.com?</h1>
      <p class="text-white">Expanding to global markets while ensuring value for Indian farmers.</p>
    </div>
  </div>
  
  <!-- Modal 11 -->
  <div class="modal bigmodal" id="eleventhSquareModal">
    <div class="modal-content bigmodal-content">
      <span class="close-btn">&times;</span>
      <h1 class="text-white">What are the cardamom qualities available in wholesale and retail manner?</h1>
      <p class="text-white">We value your feedback to improve our services continually.</p>
    </div>
  </div>
  
      </div>
</template>


<script setup>

import { onMounted } from 'vue';


onMounted(() => {
  if (process.client) {
    const modalConfig = [
  { modalId: "firstSquareModal", buttonId: "readMoreBtn" },
  { modalId: "secondSquareModal", buttonId: "readMoreBtn2" },
  { modalId: "thirdSquareModal", buttonId: "readMoreBtn3" },
  { modalId: "fourthSquareModal", buttonId: "readMoreBtn4" },
  { modalId: "fifthSquareModal", buttonId: "readMoreBtn5" },
  { modalId: "sixthSquareModal", buttonId: "readMoreBtn6" },
  { modalId: "seventhSquareModal", buttonId: "readMoreBtn7" },
  { modalId: "eighthSquareModal", buttonId: "readMoreBtn8" },
  { modalId: "ninthSquareModal", buttonId: "readMoreBtn9" },
  { modalId: "tenthSquareModal", buttonId: "readMoreBtn10" },
  { modalId: "eleventhSquareModal", buttonId: "readMoreBtn11" }
];


    modalConfig.forEach(({ modalId, buttonId }) => {
      const modal = document.getElementById(modalId);
      const button = document.getElementById(buttonId);

      if (modal && button) {
        const closeBtn = modal.querySelector(".close-btn");
        const iframe = modal.querySelector("iframe");

        function restartVideo() {
          const videoSrc = iframe.src.split("?")[0];
          iframe.src = `${videoSrc}?autoplay=1&mute=1`;
        }

        button.addEventListener("click", () => {
          modal.style.display = "flex";
          restartVideo();
        });

        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
          iframe.src = iframe.src.split("?")[0];
        });

        window.addEventListener("click", (event) => {
          if (event.target === modal) {
            modal.style.display = "none";
            iframe.src = iframe.src.split("?")[0];
          }
        });
      }
    });
  }
});


</script>

<style scoped src="~/assets/css/faq.css"></style>