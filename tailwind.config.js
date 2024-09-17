/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        lightBackground: '#ffffff',
        darkBackground: '#1b1b1f',
        textLight: '#3c3c43',
        textDark: '#ffffff',
      },
      backgroundImage: {
        'fir-tree': 'linear-gradient(to right, #10B981, #064E3B)',
        'powder': 'linear-gradient(to right, #DDD6FE, #FBCFE8)',
        'rosebud': 'linear-gradient(to right, #EC48E8, #F43F5E)',
        'snowflake': 'linear-gradient(to right, #D946EF, #06B6D4)',
        'hibiscus': 'linear-gradient(to right, #a855f7, #581c87)',
        'saas': 'linear-gradient(120deg, #bd34fe 30%, #41d1ff)',
        'hero': 'linear-gradient(-45deg, rgb(189, 52, 254) 50%, rgb(71, 202, 255) 50%)',
      },
    },
  },
  plugins: [],
}

