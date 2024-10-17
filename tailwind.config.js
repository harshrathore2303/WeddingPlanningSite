/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        base:{
          nav:'rgb(246, 246, 246)',
          but:'rgb(129, 56, 56)',
          butHover:'rgb(52, 22, 22)',
        }
      }
    },
  },
  plugins: [],
}

