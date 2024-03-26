/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Root.{js,jsx,ts,tsx}",
    "./pages/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary:'#1E7B7B',
        secondary:'#ADEBEB'
      },
    },
  },
  plugins: [],
}

