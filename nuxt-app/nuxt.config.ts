// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui-pro', // must come BEFORE @nuxt/content
    '@nuxtjs/sitemap', // must come BEFORE @nuxt/content
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/scripts',
  ],
  // STYLES
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

  // ENV specific
  app: {
    baseURL: '/'
  },
  $production: {
    app: {
      baseURL: process.env.NUXT_APP_BASE_URL || '/'
    }
  },

  // NUXT SEO STUFF
  sitemap: {
    experimentalCompression: true,
    experimentalWarmUp: true,
    cacheMaxAgeSeconds: 60 * 60 * 24,
    xsl: false, // Disable XSL to fix xmlEscape undefined error
    sitemaps: {
      pages: {
        includeAppSources: true,
        chunkSize: 50000,
      },
      shop: {
        sources: ['/api/__sitemap__/shop/'],
        chunkSize: 50000,
      },
    }
  },
  ogImage: {
    enabled: false
  },
  linkChecker: {
    enabled: false
  },

  // NUXT SCRIPTS
  scripts: {
    registry: {
      googleAdsense: {
        client: "ca-pub-2343633734899216",
        autoAds: true,
      },
      googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ACCOUNT_ID as string,
      }
    },
  },
 
})