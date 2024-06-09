/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,vue}",],
  theme: {
    extend: {
      colors: {
        lightBackground: '#fff',
        darkBackground: '#0f172a',
        lightText: '#111827',
        darkText: '#fff',
        primary: '#10b981',
        secondary: '#fff',
        bannerLightBackground: '#10b981',
        bannerDarkBackground: '#10b981',
        bannerLightText: '#fff',
        bannerDarkText: '#fff',
        navbarLightBackground: '#10b9811a',
        navbarDarkBackground: '#0f172a',
        navbarLightText: '#111827',
        navbarDarkText: '#fff',
        heroLightBackground: '#10b9811a',
        heroDarkBackground: '#0f172a',
        heroLightText: '#0f172a',
        heroDarkText: '#fff',
        pricingLightBackground: '#47c4a9',
        pricingDarkBackground: '#0f172a',
        pricingLightText: '#333',
        pricingDarkText: '#fff',
        loginLightBackground: '#d1d5db',
        loginDarkBackground: '#0f172a',
        registerLightBackground: '#d1d5db',
        registerDarkBackground: '#0f172a',
        testimonialLightBackground: '#e5e7eb',
        testimonialDarkBackground: '#0f172a',
        testimonialLightText: '#0f172a',
        testimonialDarkText: '#fff',
        faqLightBackground: '#f7f7f7',
        faqDarkBackground: '#0f172a',
        faqLightText: '#111827',
        faqDarkText: '#fff',
        featureLightBackground: '#10b9811a',
        featureDarkBackground: '#0f172a',
        featureLightText: '#0f172a',
        featureDarkText: '#fff',
        statsLightBackground: '#fff',
        statsDarkBackground: '#0f172a',
        statsLightText: '#111827',
        statsDarkText: '#fff',
        footerLightBackground: '#47c4a9',
        footerDarkBackground: '#0f172a',
        footerLightText: '#111827',
        footerDarkText: '#fff',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: 'Roboto, ui-serif', // Adds a new `font-display` class
        header: 'Poppins, ui-sans', // Adds a new `font-header` class
        body: ['Roboto'],
      },
      boxShadow: {
        pricing: '3px 4px 5px 0#00000024,inset 3px 4px 5px 0#fff70',
        pricingButton: '2px 1px 2px 0 #1212125c,inset 0-1px 0 0#24a184'
      },
      backgroundImage: {
         'banner-pattern': "linear-gradient(43deg, #4158d0 0, #c850c0 46%, #ffcc70 100%)",
         'fir-tree': "linear-gradient(to right, rgb(16, 185, 129), rgb(6, 78, 59))",
         'powder': "linear-gradient(to right, rgb(221, 214, 254), rgb(251, 207, 232))",
         'rosebud': "linear-gradient(to right, rgb(236, 72, 153), rgb(244, 63, 94))",
         'snowflake': "linear-gradient(to right, rgb(217, 70, 239), rgb(6, 182, 212))"
      },
    },
  },
  plugins: [],
}
