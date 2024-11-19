/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-color' : '#EEEEEE',
        'text-color2' : '#00ADB5',
      },
      backgroundColor:{
        'main-color' : '#222831',
        'compo-color' : '#393E46',
        'bg-color' : '#00ADB5',
        'hoverbg-color' : '#0299a1'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

