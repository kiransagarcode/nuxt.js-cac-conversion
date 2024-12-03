<template>
  <Nav />
  <!-- hero section -->
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

  
<scroll />

<!-- online auction -->
<section id="auction-scroll" class="online-auction py-5">
        <div class="container mx-lg-5 px-lg-5">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-12">
              <h1
                class="auction-heading text-center mb-4"
                style="color: #414042; font-size: 35px; font-weight: 600;"
              >
                ONLINE AUCTION
              </h1>
            </div>

            <div
              class="col col-lg order-md-1 auction-img order-lg-2 text-center me-sm-0 pe-sm-0 mb-4"
            >
              <a href="">
                <img
                  id="online-auction-img"
                  src="/img/auction.svg"
                  alt="Online Auction Image"
                />
              </a>
            </div>

            <div class="col-lg-8 order-md-1 ps-lg-5">
              <p class="auction__text text-justify line lh-base">
                Auctions are conducted every Wednesday and Saturday 9.30 am
                onwards. To perform auctions we introduced a user friendly app
                -CARDAMOM AUCTION.COM, which is available in ios app store &
                google play store. A time period of 1.5 minutes is allowed to
                every lot. One of the main advantage of our system is profile
                mapping. These scientifically labelled data can make your task
                easier. A 100 gram sample is analysed carefully for its liter
                weight, moisture content, grade, color & rejection types and is
                recorded with each 100 gram sample
              </p>

              <div
                class="d-flex justify-content-center justify-content-md-start mt-4"
              >
                <button id="see-more" class="custom-see-more">See More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

<!-- buysell -->

<section id="Buy-page" class="buy-sell-section">
        <!-- <div class="container ">

        <div class="row sell-buy align-items-center mx-lg-5 px-lg-5 ">
          <div class="col border text-center background-buy">
            <div class="img-buy">
              <img
                src="./img/buying.png"
                alt="Buying Image"
                class="img-fluid-buy"
              />
            </div>
          </div>

          <div class="col-md-6 pr-5 text-center text-md-start">
            <h1
              class="auction-heading mb-4 "
              style="color: #414042; font-size: 2.1rem"
            >
              BUYING
            </h1>
            <p id="buying-text" class="text-justify lh-base">
              You get maximum 1.5 minute to negotiate with a lot. There is an
              auto bid button in each lot number to place your bid and have an
              option to increase up to RS 100 from the current rate.
            </p>
          </div>
        </div>

        <div class="row sell-buy mb-5 align-items-center mx-lg-5 px-lg-5">
          <div class="col-md-6 order-md-2 text-center">
            <div class="rect-sell"></div>
            <div class="img-sell">
              <img
                src="./img/selling.png"
                alt="Selling Image"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="seling-head  col-md-6 order-md-1">
            <h1
              class="auction-heading mb-4 mt-3"
              style="color: #414042; font-size: 35px"
            >
              SELLING
            </h1>
            <p id="selling-text" class="text-justify lh-base">
              We gathering a no: of traders in a single, transparent platform to
              perform cardamom trading rather than going many shops to buy/sell
              cardamom. It provides an opportunity to see the product by many
              people and negotiate the price. We sell the goods only after
              getting confirmation from the sellers. We are responsible for the
              goods that are sold thorough our platform.
            </p>
          </div>
        </div>
      </div> -->

        <div class="container mb-md-3 mx-lg-5 px-lg-5">
          <div class="row buy-sell-row mt-2">
            <div class="col-md-6 order-md-2 align-content-md-end buy-text">
              <div>
                <h1 class="text-center fw-bold text-md-start">
                  <span class="buy-head">BUYING</span>
                </h1>
                <p class="text-justify line lh-base buy-p">
                  You get maximum 1.5 minute to negotiate with a lot. There is
                  an auto bid button in each lot number to place your bid and
                  have an option to increase up to RS 100 from the current rate.
                </p>
              </div>
            </div>

            <div class="col-md-6 order-md-1 buy-img" style="height: 300px">
              <div class="row buy-row1"></div>
              <div class="row buy-row2">
                <div class="circle-wrapper">
                  <div class="circle-buy">
                    <img src="/img/buying.png" id="buying-img" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 sell-text order-md-3 align-content-md-start">
              <div>
                <h1 class="text-center fw-bold text-md-start mt-4 mt-md-0">
                  <span class="buy-head">SELLING</span>
                </h1>
                <p class="text-justify line lh-base">
                  We gather a number of traders in a single, transparent
                  platform to perform cardamom trading rather than going to many
                  shops to buy/sell cardamom. It provides an opportunity to see
                  the product by many people and negotiate the price. We sell
                  the goods only after getting confirmation from the sellers. We
                  are responsible for the goods that are sold through our
                  platform.
                </p>
              </div>
            </div>

            <div class="col-md-6 sell-img order-md-4" style="height: 300px">
              <div class="row h-50" style="background-color: #39b54a"></div>
              <div class="row h-50">
                <div class="circle-wrapper">
                  <div class="circle-sell">
                    <img src="/img/selling.png" id="selling-img" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<!-- wholesale and retail -->

<section id="wholesale-scroll" class="wholesale">
        <div class="container ml-lg-5 mb-0 pb-0">
          <div class="row whole-head-text">
            <div class="col-12">
              <p
                class="wholesale-head text-center text-md-start mt-4 mb-md-2 pb-0"
              >
                WHOLESALE
              </p>
            </div>
          </div>
          <div class="row whole-head-text mt-0 pt-0">
            <div class="col-lg-11 col ms-md-4 mb-lg-3 ps-md-5">
              <p class="lead" id="wholesale-para">
                Cardamom can also be bought in a wholesale manner with the below
                qualities:
              </p>
            </div>
          </div>
        </div>
        <div class="yellow-box">
          <!-- Row for Paragraph -->
          <div class="container yellow-text pb-md-1">
            <div class="row text-center tight-row yellow-text-one ms-md-5">
              <div class="col-4 col-lg-auto mb-2">
                <p class="px-2 m-0">8.5mm+</p>
              </div>
              <div class="col-4 col-lg-auto mb-2">
                <p class="px-2 m-0">8mm+</p>
              </div>
              <div class="col-4 col-lg-auto mb-2">
                <p class="px-2 m-0">7.5-8.5mm</p>
              </div>
              <div class="col-4 col-lg-auto mb-2">
                <p class="px-2 m-0">7.5mm+</p>
              </div>
              <div class="col-4 col-lg-auto mb-2">
                <p class="px-2 m-0">7-8mm</p>
              </div>
              <div class="col-4 col-lg-auto mb-2">
                <p class="p-0 px-2 m-0">6.5mm-7.5mm</p>
              </div>
            </div>
          </div>

          <div class="container yellow-text yellow-text2">
            <div
              class="row row-cols-auto text-center me-md-4 tight-row ms-md-5 ps-md-5"
            >
              <div class="col-4 col-lg-auto mb-2">
                <p class="m-0 px-4">6-7mm</p>
              </div>
              <div class="col-5 col-lg-auto mb-2">
                <p class="m-0 px-4">5.5-6.5mm</p>
              </div>
              <div class="col-3 col-lg-auto mb-2">
                <p class="m-0 px-4">Pan</p>
              </div>
              <div class="col-md-auto text-center mb-2" id="joint-seed">
                <p class="m-0 px-4">Joint Seed & Single Seeds</p>
              </div>
            </div>
          </div>
        </div>
        <SwiperWhole />
      </section>

      <!-- retail section -->
      <section id="retail-scroll" class="retail">
        <div class="container pt-md-4 pb-md-2 mb-0 pb-0">
          <div class="col-12">
            <p class="wholesale-head text-center ms-lg-5  ps-lg-5 text-md-start pb-0">RETAIL</p>
          </div>

          <div class="row whole-head-text mt-0 pt-0">
            <div class="col-lg-11 col ms-md-4 ps-md-5 my-md-3">
              <p class="lead " id="retail-para">
                Cardamom packets available with 1 KG, 5KG, 50 KG quantities.
              </p>
            </div>
          </div>
          <div class="row whole-head-text mt-0 pt-0">
            <div class="col-lg-9 col ms-md-4 ms-lg-5 ps-md-5">
              <p class="lead text-white " id="retail-para-white">
                And also we provide cardamom with grades, Pan, Joint Seed and
                single seeds in desirable quantities.
              </p>
            </div>
          </div>
        </div>
        <div class="container yellow-text">
          <div class="row"></div>
          <div class="row text-center tight-row yellow-text-one pb-md-1 ms-md-5">
            <div class="col-4 col-lg-auto mb-2">
              <p class="px-2 m-0">8.5mm+</p>
            </div>
            <div class="col-4 col-lg-auto mb-2">
              <p class="px-2 m-0">8mm+</p>
            </div>
            <div class="col-4 col-lg-auto mb-2">
              <p class="px-2 m-0">7.5-8.5mm</p>
            </div>
            <div class="col-4 col-lg-auto mb-2">
              <p class="px-2 m-0">7.5mm+</p>
            </div>
            <div class="col-4 col-lg-auto mb-2">
              <p class="px-2 m-0">7-8mm</p>
            </div>
            <div class="col-4 col-lg-auto mb-2">
              <p class="p-0 px-2 m-0">6.5mm-7.5mm</p>
            </div>
          </div>
        </div>

        <div class="container yellow-text yellow-text2 ">
          <div
            class="row row-cols-auto text-center me-md-4 tight-row ms-md-5 ps-md-5"
          >
            <div class="col-4 col-lg-auto mb-2">
              <p class="m-0 px-4 pan">6-7mm</p>
            </div>
            <div class="col-5 col-lg-auto mb-2">
              <p class="m-0 px-4 pan">5.5-6.5mm</p>
            </div>
            <div class="col-3 col-lg-auto mb-2">
              <p class="m-0 px-4 pan">Pan</p>
            </div>
            <div class="col-md-auto text-center mb-2" id="joint-seed">
              <p class="m-0 px-4">Joint Seed & Single Seeds</p>
            </div>
          </div>
        </div>

        <SwiperRetail/>
      </section>

      <section class="map" style="background-color: #f4fffb">
      <div class="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.4662906236404!2d77.15322727402183!3d9.72651087768298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07aa365da2caed%3A0xbc209b8c60f19ed5!2sState%20Ware%20House!5e0!3m2!1sen!2sin!4v1732457869699!5m2!1sen!2sin"
          width="100%"
          height="400"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

  <Footer />
</template>

<script setup>


</script>


<style scoped src="~/assets/css/home.css"></style>