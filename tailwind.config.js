/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      zIndex:{
        custom:'-1'
      },
      height:{
        custom:"789px"
      },
      gridTemplateColumns:{
        custom:'40px 1fr'
      },
      gridRow:{
        custom:'1'
      },
      margin:{
        custom:'-750px 0px 0px 0px'
      },
      animation:{
        scaleAnim: 'scaleAnim 1s ease-in-out',
      },
      keyframes:{
        scaleAnim: {
          '0%': { transform: 'translateY(-100%) scaleY(0)' },
          '100%': { transform: 'translateY(0) scaleY(1)' },
        }
      },
    },
  },
  plugins: [],
}
