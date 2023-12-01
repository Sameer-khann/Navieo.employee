/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/img/back.jpg')",
       
    },
    },
    screens: {
   

      'md': '1140px',
      // => @media (min-width: 1140px) { ... }
      'sm': '200px',

    }
  },
  plugins: [],
}

