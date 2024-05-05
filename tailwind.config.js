/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ss: "560px",
        sm: "767px",
        md: "993px",
        lg: "1080px",
        xl: "1360px",
        xxl: "1580px"
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
}