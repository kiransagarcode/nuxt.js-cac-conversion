<template>
  <navbar>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="web-logo ms-5 py-3">
          <NuxtLink to="/">
            <img src="../public/img/logos/website-logo.svg" alt="" />
          </NuxtLink>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="ms-auto d-flex justify-content-center">
            <!-- Center links when expanded -->
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item mx-2">
                <NuxtLink
                  to="/"
                  :class="{ active: $route.path === '/' }"
                  class="nav-link ms-3"
                >
                  HOME
                </NuxtLink>
              </li>
              <li class="nav-item mx-2">
                <NuxtLink
                  to="/history"
                  :class="{ active: $route.path === '/history' }"
                  class="nav-link ms-2"
                >
                  HISTORY
                </NuxtLink>
              </li>
              <li class="nav-item mx-2">
                <NuxtLink
                  to="/contact"
                  :class="{ active: $route.path === '/contact' }"
                  class="nav-link ms-2"
                >
                  CONTACT
                </NuxtLink>
              </li>
              <li class="nav-item mx-2">
                <NuxtLink
                  to="/faq"
                  :class="{ active: $route.path === '/faq' }"
                  class="nav-link ms-4"
                >
                  FAQ
                </NuxtLink>
              </li>
            </ul>
          </div>
          <!-- Social Media Icons in a Horizontal Row -->
          <div class="d-flex justify-content-center align-items-center mt-3 mb-lg-1 mt-lg-0 me-lg-5 pe-lg-5">
            <a class="mx-3" href="#">
              <img src="/img/logos/twitter.svg" id="logo-home" alt="twitter" />
            </a>
            <a class="mx-3" href="#">
              <img src="/img/logos/linkidn.svg" id="logo-home" alt="linkedin" />
            </a>
            <a class="mx-3" href="#">
              <img src="/img/logos/google sign.svg" id="logo-home" alt="google" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </navbar>
</template>
  
  <style scoped src="~/assets/css/nav.css">






</style>
  