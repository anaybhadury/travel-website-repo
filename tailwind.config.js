/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            clifford: '#da373d',
            'primary-color':'#FF5400',
          },
          backgroundImage:{
            'hero-bg': "url('./images/Group 13 (1) (1).png')",
            'first-bg': "url('./Images/Group 39.png')",
            'second-bg': "url('./Images/Group 40.png')",
            'third-bg': "url('./Images/Group 40089.png')"
          }
      },
    },
    plugins: [],
  }

