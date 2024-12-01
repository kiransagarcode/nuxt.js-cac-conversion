export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@700&family=Lato:wght@100;300;400;700;900&display=swap',
        },
      ],
    },
  },

  css: [
    'swiper/swiper-bundle.css',
    './assets/global.css',
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-svg-core/styles.css', // Add Font Awesome styles
  ],

  modules: ['@nuxt/fonts', 'nuxt-swiper', '@vesp/nuxt-fontawesome'],

  build: {
    transpile: ['@fortawesome/vue-fontawesome'], // Ensure Font Awesome components are transpiled
  },

  plugins: [
    // Register the modal plugin
    '~/plugins/modal.js'
  ]
});