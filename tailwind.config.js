/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Oswald'],
      
      },
      colors:{
        "purple":"#312e81",
        "white":"#fafafa",
      },
      
    },
  },
  plugins: [
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
  ],
}

