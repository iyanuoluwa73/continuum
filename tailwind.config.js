/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,js}',
    "index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },

    colors: {
      'blue': '#0098D1',
      'white': '#FFFFFF',
      'black': '#000000'
    },
  },
  plugins: [],
}


