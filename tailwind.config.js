/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html"
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '451px',
      'laptop': '768px',
      'desktop': '1024px',
    },
    extend: {
      backgroundImage: {
        'bio': "url('../img/bio.jpg')",
        'skills': "url('../img/skills.jpg')",
        'experience': "url('../img/experience.jpg')",
        'contacts': "url('../img/contacts.jpg')",
      },
      fontFamily: {
        'inter': 'Inter, sans-serif',
      }
    },
  },
  plugins: [],
}
