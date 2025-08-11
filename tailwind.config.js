/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#A7D1E8',
        'pastel-green': '#B5EAD7',
        'pastel-purple': '#D4A5C6',
        'pastel-yellow': '#F2D7D9',
        'pastel-orange': '#F2D7D9',
      },
    },
  },
  plugins: [],
}
