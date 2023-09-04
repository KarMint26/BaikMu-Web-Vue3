/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,css}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      textColor: {
        primary: '#15D6F0',
      },
      backgroundColor: {
        primary: '#15D6F0',
      },
      colors: {
        primary: '#15D6F0',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

