/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {
    colors: {
      'blue-all' : '#1A8FE4',
      'backgroundBody' : '#ecfeff',
      'gray-palido' : '#565656',
        'onahau': {
          '50': '#f0f8ff',
          '100': '#dfefff',
          '200': '#c7e7ff',
          '300': '#79c9ff',
          '400': '#32aefe',
          '500': '#0793f0',
          '600': '#0075cd',
          '700': '#005ca6',
          '800': '#034f89',
          '900': '#094271',
          '950': '#06294b',
      },
    },

    backgroundImage: {
      'image1' : "url('../src/components/assets/Rectangle9.svg')" 
    },

    fontFamily: {
      'fontGeneral' : 'Fira Sans'
    },
    
  } },
  plugins: [],
}

