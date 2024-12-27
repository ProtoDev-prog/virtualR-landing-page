/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        themeColor:"#F57016",
        themeColor2:"#AD4112"
      }
    },
  },
  plugins: [],
}