<template>
  <Navbar />
  <section
        id="download-sec"
        class="hero-section d-flex align-items-center position-relative overflow-hidden text-white"
      >
        <div class="container d-flex flex-column custom-gap text-start">
          <div class="row">
            <div class="col-12 text-center text-md-start">
              <h1 class="display-4 fw-normal text-white hero-text">
                INDIA’S FIRST & LARGEST<br />ONLINE CARDAMOM AUCTION<br />TRADING
                PLATFORM.
              </h1>
            </div>
          </div>

          <div class="row mt-4">
            <div
              class="col-12 d-flex justify-content-center justify-content-md-start gap-3 download__links"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.CardamomAuction.cad_mobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/01 Button 05 Google Play.svg"
                  alt="Google Play"
                />
              </a>

              <a
                href="https://apps.apple.com/us/app/cardamom-auction/id1553410114?platform=ipad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/01 Button 04 Apple Store.svg"
                  alt="Apple Store"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- <div
        class="position-absolute bottom-0 start-50 translate-middle-x toggle__buttons d-flex gap-2 pb-4"
      >
        <a href="/"
          ><img src="./img/toggle-left.svg" id="toggle-left" alt="Left Toggle"
        /></a>
        <a href="/"
          ><img
            src="./img/toggle-left.svg"
            id="toggle-right"
            alt="Right Toggle"
        /></a>
      </div> -->
      </section>


  <Footer />
</template>

<script setup>
import Navbar from "~/components/nav.vue"; // Importing navbar
import Footer from "~/components/footer.vue"; // Importing navbar
</script>


<style scoped src="~/assets/css/home.css"></style>