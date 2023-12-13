/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('../src/assets/img/back.jpg')",
       // 'emp':"url('../src/assets/img/emp.png')"
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

