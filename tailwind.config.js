const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  content: ['./pages/*.tsx', './components/*.tsx'],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/images/background.jpg')",
      }),
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 80, 175, 0.20)',
      },
    },
  },
  variants: {},
}
