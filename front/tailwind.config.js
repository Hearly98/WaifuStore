/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['"Work Sans"', 'sans-serif']
      },
      colors:{
        'grape': '#7300D8',
        'magenta': '#F44E77',
        'lightBlue':'#F2F6FF',
        'coral': '#F3766D',
        'blackout': '#313030',
        'darkBlue': '#121139',
        'info': '#7B8298'
      }
    },
   
  },
  plugins: [],
}