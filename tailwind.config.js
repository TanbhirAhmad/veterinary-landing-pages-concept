/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
      },
      colors: {
        'color-yellow': '#fcc302',
        'color-green': '#00bec9',
      },
      backgroundImage: {
        'doctor-dog': "url('/images/doctor-dog.jpg')",
      },
    },
  },
  plugins: [],
}

