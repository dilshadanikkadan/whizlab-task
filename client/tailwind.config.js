/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#B6202E",
        secondary:"#C85E6A",
        info:"#9597A0",
        main:"#3E2829",
        text:"#333448"
      },
    }
  },
  plugins: [],
}

