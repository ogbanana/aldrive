const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  purge: ['./pages/*.tsx', './components/*.tsx'],
  plugins: [],
  theme: {
    screens: {
      sm: { min: '200px', max: '1400px' },
      md: { min: '1001px', max: '1500px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1535px' },
      '2xl': { min: '1536px' },
    },
    extend: {},
  },
  variants: {},
}
