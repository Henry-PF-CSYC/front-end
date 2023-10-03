/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    colors: {
      'blue-all' : '#1A8FE4',
      'backgroundBody' : '#ecfeff',
      'gray-palido' : '#565656'
    },
    backgroundImage: {
      'image1' : "url('../src/components/assets/Rectangle9.svg')" 
    },
    fontFamily: {
      'fontGeneral' : 'Fira Sans'
    }
  } },
  plugins: [],
}

