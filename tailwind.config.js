/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '900px',
      'laptop': '1024px',
    },
    extend: {
      backgroundImage: {
        'background': "url('../img/background.jpg')",
        'background-mobile': "url('../img/background-mobile.jpg')",
      },
      fontFamily: {
        'inter': 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
