/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./index.html"],
  theme: {
    extend: {
      colors:{
        primary:'#1566C0',

      },
      backgroundImage:{
        bgHeader:"url('./img/header.png')",
        bgFooter:"url('./img/footer.jpg')"
      }
    },
  },
  plugins: [],
}
