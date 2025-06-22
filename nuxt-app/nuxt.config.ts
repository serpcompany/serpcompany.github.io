// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui-pro', // must come BEFORE @nuxt/content
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
  ],

  ui: {
    colorMode: false,
  },
  css: ['~/assets/css/main.css'],

  // Static site generation for GitHub Pages
  nitro: {
    preset: 'static',
  },

  experimental: {
    payloadExtraction: false,
  },

  app: {
    baseURL: '/'
  },

  $production: {
    app: {
      baseURL: process.env.NUXT_APP_BASE_URL || '/'
    }
  }
})