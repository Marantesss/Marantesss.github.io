const baseUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : process.env.NUXT_ENV_BASE_URL

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  // https://nuxtjs.org/blog/going-full-static#new-config-option-target
  // ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Marantesss 👋',
    // favicon and stylesheets from google
    link: [
      // favicon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Poiret One Font
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poiret+One&display=swap',
      },
      // Montserrat
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700',
      },
    ],
    // meta tags
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        // to avoid any duplication when used in child component, please give a unique identifier with the hid key
        hid: 'description',
        name: 'description',
        content:
          'Hello, I am Gonçalo Marantes, a Software Engineering student from Portugal. And this is my personal website and blog about anything mildly interesting.',
      },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@marantesss' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: baseUrl,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Marantesss',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Hello, I am Gonçalo Marantes, a Software Engineering student from Portugal. And this is my personal website and blog about anything mildly interesting.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `${baseUrl}/social-card.png`,
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Marantesss',
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Marantesss' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nuxtjs.org',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Marantesss',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Hello, I am Gonçalo Marantes, a Software Engineering student from Portugal. And this is my personal website and blog about anything mildly interesting.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${baseUrl}/social-card.png`,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: `${baseUrl}/social-card.png`,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Marantesss',
      },
    ],
  },

  env: {
    baseUrl,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/css/main'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // gsap
    'nuxt-gsap-module',
    // google analytics
    '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  generate: {
    // https://content.nuxtjs.org/advanced/#static-site-generation
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
  },

  // https://google-analytics.nuxtjs.org/
  googleAnalytics: {
    id: process.env.NUXT_ENV_GOOGLE_ANALYTICS_ID,
    dev: process.env.NODE_ENV !== 'production',
    debug: process.env.NODE_ENV === 'development',
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
