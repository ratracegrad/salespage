export default defineAppConfig({
  ui: {
    primary: 'purple',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'The Bland SaaS'
  },
  header: {
    logo: {
      alt: 'The Bland SaaS',
      light: 'i-mdi-rocket-launch',
      dark: 'i-mdi-rocket-launch'
    },
    search: true,
    colorMode: true
    // links: [{
    //   'icon': 'i-mdi-github',
    //   'to': 'https://github.com/nuxt-ui-pro/docs',
    //   'target': '_blank',
    //   'aria-label': 'Docs template on GitHub'
    // }]
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: false,
  },
  toc: {
    title: 'Table of Contents',
    // bottom: {
    //   title: 'Community',
    //   edit: 'https://github.com/nuxt-ui-pro/docs/edit/main/content',
    //   links: [{
    //     icon: 'i-heroicons-star',
    //     label: 'Star on GitHub',
    //     to: 'https://github.com/nuxt/ui',
    //     target: '_blank'
    //   }, {
    //     icon: 'i-heroicons-book-open',
    //     label: 'Nuxt UI Pro docs',
    //     to: 'https://ui.nuxt.com/pro/guide',
    //     target: '_blank'
    //   }, 
    // ]
    // }
  }
})
