/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myBlue': '#2D3663',
        'mySky': '#47CCCB',
      }
    },
  },
  plugins: [require('daisyui')],
}