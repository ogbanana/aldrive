const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  purge: ['./pages/*.tsx', './components/*.tsx'],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/images/background.jpg')",
      }),
    },
  },
  variants: {},
}
