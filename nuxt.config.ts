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
    disableTransition: true
  },

  compatibilityDate: '2024-07-27',

  // content: {
  //   documentDriven: true,
  //   highlight: {
  //     theme: 'light-plus',
  //   },
  // },

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

  extends: ['@nuxt/ui-pro'],

  future: {
    compatibilityVersion: 4
  },
  
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxthq/studio',
    'nuxt-og-image',
    '@nuxt/image'
  ],

  routeRules: {
    '/api/search.json': { prerender: true }
  },

  site: { 
    url: 'https://theblandsaas.com', 
    name: 'The SaaS Template you always wanted', 
  }, 

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})