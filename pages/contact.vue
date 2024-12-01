<template>
<Nav />

<section
      class="hero-section vh-100 d-flex align-items-center position-relative overflow-hidden text-white"
    >
      <div class="container d-flex flex-column custom-gap text-start">
        <div class="row">
          <div class="col-12 text-center text-md-end">
            <h1 class="display-4 fw-normal text-white hero-text">
              INDIA’S FIRST & LARGEST<br />ONLINE CARDAMOM AUCTION<br />TRADING
              PLATFORM.
            </h1>
          </div>
        </div>
        <!-- <div
        class="position-absolute bottom-0 start-50 translate-middle-x toggle__buttons d-flex gap-2 pb-4"
      >
        <a href="/"
          ><img src="./images/toggle-left.svg" id="toggle-left" alt="Left Toggle"
        /></a>
        <a href="/"
          ><img
            src="./images/toggle-left.svg"
            id="toggle-right"
            alt="Right Toggle"
        /></a>
      </div> -->
      </div>
    </section>
   <Scroll-rest/>
   <section class="contact">
  <div class="container mb-lg-3">
    <div class="row mx-lg-5 px-lg-5">
      <div class="col text-center mt-5">
        <h1 class="contact-head">Contact Us!</h1>   
      </div>
    </div>
    
    <div class="row mx-md-5 py-md-5">
      <div class="col-12 col-md-6"> 
        <div class="col-12 ps-2">
          <div class="d-flex align-items-center my-3">
            <img src="/img/location-icon.svg" alt="">
            <p class="contact-text ps-4 mb-0" style="color:#8B8D8F">Kerala State Warehousing Corporation
              Vandenmedu, Kerala 685551, India</p>
          </div>
        </div>
          
        <div class="col-12 ps-2">
          <div class="d-flex align-items-center my-3">
            <img src="/img/mail-icon.svg" alt="">
            <p class="contact-text ps-3 mb-0" style="color:#8B8D8F">info@cardamomauction.com</p>
          </div>
        </div>
          
        <div class="col-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.4662906236404!2d77.15322727402183!3d9.72651087768298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07aa365da2caed%3A0xbc209b8c60f19ed5!2sState%20Ware%20House!5e0!3m2!1sen!2sin!4v1732205150687!5m2!1sen!2sin" 
            referrerpolicy="no-referrer-when-downgrade"
            style="width: 100%; height: auto; border: 0;"
          >
          </iframe>
        </div>
      </div>
        
      <div class="col-12 col-md-6"> 
        <div class="col-12 ps-2 mt-3">
          <form class="contact-form" action="">
            <input type="text" placeholder="NAME" class="contact-input">  
            <div class="col my-3">
              <input type="text" placeholder="EMAIL" class="contact-input">  
            </div>
            <div class="col my-3">
      <textarea name="messgae" placeholder="MESSAGE" id="messgae-contact" row="6" ></textarea> 
    </div>
            <button class="btn-contact">SUBMIT</button>  
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
</template>

<style scoped src="~/assets/css/contact.css"></style>