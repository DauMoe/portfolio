/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/10': '10%',
        '1/5': '20%',
        '1/4': '25%',
        '1/3': '33.33333333333333333%',
        '1/2': '50%'
      },
      width: {
        '4/10': '40%',
        '6/10': '60%'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
