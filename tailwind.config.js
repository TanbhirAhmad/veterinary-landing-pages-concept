/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins'],
      },
      colors: {
        'custom-green': '#00bec9',
        'custom-yellow': '#fcc302',
        'custom-yellow-transparent': '#f0c31fbb',
      },
      backgroundImage: {
        'doctor-dog': "url('/images/doctor-dog.jpg')",
        'video-img': "url('/images/video-img.jpg')",
        'video-img2': "url('/images/service-02.jpg')",
      },
    },
  },
  plugins: [],
}

