<template>
  
  <footer class="footer py-4" style="background-color: #f4fffb">
        <div class="container">
          <div class="row align-items-center mb-4">
            <div class="col-md-12 text-center  pb-md-3 text-lg-start col-lg-1 text-center">
              <NuxtLink to="/"
                ><img
                  src="/img/logos/website-logo.svg"
                  alt="Website Logo"
                  class="footer-logo"
              /></NuxtLink>
            </div>
            <div class="col d-flex align-items-center ms-4">
              <div class="nav d-flex flex-column flex-md-row">
                <div class="nav-item">
                  <NuxtLink class="nav-link text-success" to="/#auction-scroll"
                    >Auction</NuxtLink
                  >
                </div>
                <div class="nav-item">
                  <NuxtLink class="nav-link text-success" href="/#Buy-page">Buy & Sell</NuxtLink>
                </div>
                <div class="nav-item">
                  <NuxtLink class="nav-link text-success" href="#">Data Analysis</NuxtLink>
                </div>
                <div class="nav-item">
                  <NuxtLink class="nav-link text-success" to="/contact"
                    >Contact</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-5">
              <form action="">
                <div class="d-flex align-items-center ms-4">
                  <input
                    type="text"
                    class="form-control me-2"
                    placeholder="Join our Newsletter"
                  />
                  <button class="btn btn-success">SEND</button>
                </div>
              </form>
            </div>
          </div>
  
          <hr />
  
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="nav justify-content-center justify-content-md-start">
                <div class="nav-item">
                  <a class="nav-link text-success" href="#">About</a>
                </div>
                <div class="nav-item">
                  <NuxtLink class="nav-link text-success" to="/faq">FAQ</NuxtLink>
                </div>
                <div class="nav-item">
                  <NuxtLink class="nav-link text-success" href="/#download-sec">Download</NuxtLink>
                </div>
                <div class="nav-item">
                  <NuxtLink
                    class="nav-link text-success"
                    to="https://cardamomauction.com/terms"
                    >Terms</NuxtLink
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 text-md-end">
              <div class="nav justify-content-center justify-content-md-end">
                <div class="nav-item">
                  <a class="nav-link" href="#"
                    ><img id="footer-icons" src="/img/logos/twitter.svg" alt="Twitter"
                  /></a>
                </div>
                <div class="nav-item">
                  <a class="nav-link" href="#"
                    ><img id="footer-icons" src="/img/logos/linkidn.svg" alt="LinkedIn"
                  /></a>
                </div>
                <div class="nav-item">
                  <a class="nav-link" href="#"
                    ><img id="footer-icons" src="/img/logos/google sign.svg" alt="Google"
                  /></a>
                </div>
                <div class="nav-item">
                  <NuxtLink class="nav-link" to="https://www.facebook.com/cardamomauction/"
                    ><img id="footer-icons"  src="/img/logos/facebook.svg" alt="Facebook"
                  /></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  
  
  </template>
  
  <style scoped src="~/assets/css/footer.css"></style>