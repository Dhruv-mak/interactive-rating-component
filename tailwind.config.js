/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        orange_mod: 'hsl(25, 97%, 53%)',
        white_mod: 'hsl(0, 0%, 100%)',
        light_grey: 'hsl(217, 12%, 63%)',
        medium_grey: 'hsl(216, 12%, 54%)',
        dark_blue: 'hsl(213, 19%, 18%)',
        very_dark_blue: 'hsl(216, 12%, 8%)',
        background: 'hsl(213, 20%, 22%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      keyframes: {
        'slide-in' : {
          '0%': {
            transform: 'translateX(120%)'
          },
          '50%': {
            transform: 'translateX(0%)'
          },
          '100%':{
            transform: 'translateX(-10px)'
          }
        },
        'slide-out' : {
          '0%': {
            transform: 'translateX(0%)'
          },
          '30%': {
            transform: 'translateX(-10px)'
          },
          '50%': {
            tranasform: 'translateX(0px)'
          },
          '100%':{
            transform: 'translateX(120%)'
          }
        }
      },
      animation: {
        'slide-in' : 'slide-in 1s ease-in-out 0.1ms forwards',
        'close' : 'slide-out 1s ease-in-out 0.1ms forwards',
      }
    },
  },
  plugins: [],
}

