const newLocal = "@tailwindcss/aspect-ratio";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./index.html"],
  theme: {
    extend: {
      colors:{
        primary:'#1566C0',

      },
      backgroundImage:{
        bgHeader:"linear-gradient(to bottom,rgb(0,0,0), rgba(0,0,0,0.1)), url('/img/header.jpg')",
        bgFooter:"url('/img/footer.jpg')",
        bgCard1:"linear-gradient(to bottom, rgb(0,0,0), rgba(0,0,0,0.1)),url('/img/1.png')",
        bgCard2:"linear-gradient(to bottom, rgb(0,0,0), rgba(0,0,0,0.1)),url('/img/2.png')",
        bgCard3:"linear-gradient(to bottom, rgb(0,0,0), rgba(0,0,0,0.1)),url('/img/3.png')",
        bgCard4:"linear-gradient(to bottom, rgb(0,0,0), rgba(0,0,0,0.1)),url('/img/4.png')"

      }
    }
  },
  plugins: [],
}
