/** @type {import('tailwindcss').Config} */
module.exports = {
  // configurations
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      screens: {
        '2xl': '150px',
        '3xl': '639px'
      }
    },
  },
  variants: {},
  plugins: [],
}
