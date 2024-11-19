import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: '#ffffff',
        darkBackground: '#1b1b1f',
        lightText: '#3c3c43',
        darkText: '#d4d4d8',
      },
      backgroundImage: {
        'saas': 'linear-gradient(120deg, #bd34fe 30%, #41d1ff)',
      },
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
    },
  },
}
