<template>
  <Nav/>
  
  
  
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
          
        </div> 
      </section>
  <scroll-rest/>
  <section class="faq ">
  
      
      <div class="container  py-3">
  
        <!-- accordion  -->
  <Modal/>
      <Accordian/>
  
      <!-- accordion end -->
      
      <div class="row g-3 grid-faq mt-3 g-md-4 pb-md-5">
      <!-- First large square (left column) -->
      <div class="col-12 col-md-6">
        <div class="grid-item square">
          <div class="content">
            <h1 class="mt-md-3 big-square-head">What is the objective of the company?</h1>
            <p class="big-square-p">
              Our objective is into “Organizing Information About the ‘Value’ And ‘Market’ Of Green Cardamom produced in India and making it accessible to everyone”.
            </p>
            <button class="read-more" id="readMoreBtn">Read more</button>
          </div>
        </div>
      </div>
  
      <!-- Four squares in the second column (right column) -->
      <div class="col-12 col-md-6">
        <div class="row g-3 g-md-4">
          <div class="col-6">
            <div class="grid-item square">
              <div class="content">
                <h3 class="small-square-profile text-start">What is <br />profile <br />mapping?</h3>
                <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn2" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="grid-item square">
              <div class="content">
                <h4 class="text-start small-square-profile2">What are the<br />informations<br />that we get<br />from profile<br />mapping?</h4>
                <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn3" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="grid-item square">
              <div class="content">
                <h3 class="small-square-buy text-start">How to <br />buy and sell?</h3>
                <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn4" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="grid-item square">
              <div class="content">
                <h3 class="small-square-sell text-start">How to<br />Use the App?</h3>
                <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn5" />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Six squares in the third row -->
      <div class="col-12 col-md-4">
        <div class="grid-item square">
          <div class="content">
            <h3 class="text-start large-square1">How to read <br />and understand <br />data in mobile <br />application?</h3>
            <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn6" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="grid-item square">
          <div class="content">
            <h3 class="text-start large-square2">What are Cardamom <br />Auction.com <br />Services?</h3>
            <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn7" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="grid-item square">
          <div class="content">
            <h3 class="text-start large-square3">What are<br />Cardamom Auction.com <br />Unique Features?</h3>
            <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn8" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="grid-item square">
          <div class="content">
            <h3 class="text-start large-square4">What about <br />Cardamom<br />Auction.com <br />Team?</h3>
            <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn9" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="grid-item square">
          <div class="content">
            <h3 class="text-start large-square5">What are the <br />documents <br />needed to be a<br />buyer in <br />Cardamom <br />Auction.com?</h3>
            <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn10" />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="grid-item square">
          <div class="content">
            <h3 class="text-start large-square6">What are the <br />cardamom <br />qualities available <br />in wholesale and <br />retail manner?</h3>
            <FontAwesomeIcon :icon="['fas', 'chevron-right']" class="read-more-small" id="readMoreBtn11" />
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  <Footer/>    
  </template>
  



  <style scoped src="~/assets/css/faq.css"></style>
  
  