// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'The Bland SaaS',
      viewport: 'width=device-width,initial-scale=1',
      charset: 'utf-8',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt Saas Template using Tailwind, Supabase and Prisma' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
      htmlAttrs: {
        lang: 'en',
      },
    },
    // https://v3.nuxtjs.org/api/configuration/nuxt-config/#layouttransition
    layoutTransition: { name: 'layout', mode: 'out-in' },

    // https://v3.nuxtjs.org/api/configuration/nuxt-config/#pagetransition
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  colorMode: {
    classSuffix: '',
  },

  compatibilityDate: '2024-07-27',

  content: {
    highlight: {
      theme: 'github-light',
    },
  },

  css: [
    '~/assets/css/styles.css',
    '~/assets/css/tailwind.css',
  ],

  devtools: { enabled: true },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  googleFonts: {
    display: 'swap',
    families: {
      'Merriweather': true,
      'JetBrains Mono': true,
      'Inter': true,
    },
    subsets: 'latin-ext',
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'ENG',
        file: 'en.json',
        name: 'English',
        flag: 'i-flag-us-4x3',
      },
      {
        code: 'DEU',
        file: 'de.json',
        name: 'Deutsch',
        flag: 'i-flag-de-4x3',
      },
      {
        code: 'JPN',
        file: 'ja.json',
        name: '日本語',
        flag: 'i-flag-jp-4x3',
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'ENG',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
  },

  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon',
  ],

  runtimeConfig: {
    // runtimeConfig has 2 keys: public and server
    // public will be available on client side
    // server will be available on server side
    stripeSecret: '',
    stripeWebhookSecret: '',
    public: {
      stripeKey: process.env.STRIPE_SECRET,
    },
  },
  
  supabase: {
    redirect: false,
  },
})
