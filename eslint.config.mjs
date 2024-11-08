import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'tailwindcss/migration-from-tailwind-2': 'off',
    },
    settings: {
        tailwindcss: {
            config: path.join(__dirname, "./tailwind.config.js"),
        },
    },
  },
)
