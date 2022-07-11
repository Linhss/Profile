/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      zIndex:{
        custom:'-1'
      },
      height:{
        custom:"961px"
      },
      gridTemplateColumns:{
        custom:'40px 1fr'
      },
      gridRow:{
        custom:'1'
      }
    },
  },
  plugins: [],
}
