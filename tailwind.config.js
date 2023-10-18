/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.{html,js}',
    "index.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      pop: ['Poppins']
    },
    colors: {
      red: colors.red,
      green: colors.green,
      'blue': '#0098D1',
      'white': '#FFFFFF',
      'black': '#000000'
    },
  },
  plugins: [],
}


