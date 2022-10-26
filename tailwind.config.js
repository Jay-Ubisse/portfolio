/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bio': "url('../img/bio.jpg')",
        'skills': "url('../img/skills.jpg')",
      },
      fontFamily: {
        'inter': 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
