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
            'hero-bg': "linear-gradient(180.00deg, rgba(19, 19, 24, 0.8),rgba(19, 19, 24, 0) 100%), url('./Images/main.png')",
            'first-bg': "url('./Images/Group 39.png')",
            'second-bg': "url('./Images/Group 40.png')",
            'third-bg': "url('./Images/Group 40089.png')",
            'forth-bg': "url('./Images/Rectangle 8 (1).png')"
          }
      },
    },
    plugins: [],
  }

