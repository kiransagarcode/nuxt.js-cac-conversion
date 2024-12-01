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
    <div class="container  py-3">

      <!-- accordion  -->

    <div class="accordion accordion-faq  " id="faqAccordion">


        <!-- FAQ Item 1 (Opened by default) -->
        <div class="accordion-item ">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    What is the objective of the company?
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div class="accordion-body  bg-dark text-white">
                    Our objective is to “Organize Information About the ‘Value’ And ‘Market’ Of Green Cardamom produced in India and make it accessible to everyone.”
                </div>
            </div>
        </div>
      
        <!-- FAQ Item 2 -->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What is profile mapping?
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet a voluptatibus inventore cupiditate fugiat modi facere explicabo fugit eius suscipit!
                </div>
            </div> 
        </div> 
    
        <!-- FAQ Item 3 -->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  What are the informations that we get from profile mapping?
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quibusdam repudiandae? Eos vitae vero aperiam dolorem exercitationem! Sed facilis corrupti, labore quam nobis fugit, vel, dolor delectus optio doloremque nemo!
                </div>
          </div>
        </div>
      
        <!-- FAQ Item 4 -->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  How to buy and sell?
                </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, molestias ab maiores ipsum libero enim odit tempora necessitatibus veritatis? Illum.
                </div>
            </div>
        </div>
      
        <!-- FAQ Item 5 -->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  How to use the App?
                </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-dark">
                  <iframe
                  width="90%" 
                  height="600" 
                  src="https://www.youtube.com/embed/y-KicubgMLE?autoplay=1&mute=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  style="max-width: 1380px; max-height: 300px; margin: 0 auto; display: block;"
                ></iframe>
                </div>
            </div>
        </div>
      
        <!-- FAQ Item 6 -->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  How to read and understand data in mobile application?
                </button>
            </h2>
            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-white">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint blanditiis facilis provident impedit repudiandae quo cum optio mollitia eaque vero.
                </div>
            </div>
        </div>
      
        <!-- FAQ Item 7 -->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingSeven">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  
                  What are Cardamom Auction.com Services?
                </button>
            </h2>
            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
                </div>
            </div>
        </div>
        <!-- FAQ Item 8 -->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingEight">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                  What are the documents needed to be a buyer in Cardamom Auction.com?
                </button>
            </h2>
            <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
                </div>
            </div>
        </div>
        <!-- FAQ Item 9 -->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingNine">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                  What are Cardamom Auction.com Unique Features?
                </button>
            </h2>
            <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
                </div>
            </div>
        </div>
        <!-- FAQ Item 10 -->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingTen">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                  What about Cardamom Auction.com Team?
                </button>
            </h2>
            <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#faqAccordion">
                <div class="accordion-body text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
                </div>
            </div>
        </div>
        <!-- FAQ Item 11-->
        <div class="accordion-item bg-light">
            <h2 class="accordion-header" id="headingEleven">
                <button class="accordion-button collapsed bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                  What are the cardamom qualities available in wholesale and retail manner?
                </button>
            </h2>
            <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#faqAccordion">
                <div class="accordion-body  text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia alias facere rerum molestias possimus qui est corrupti. Dolore debitis veritatis eligendi dicta assumenda! Accusantium!
                </div>
            </div>
        </div>
    
    </div>

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

