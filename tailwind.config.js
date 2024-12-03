/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gray-background': '#464646',
        'pastel-blue': '#D1E9F6',
        'pastel-yellow': '#F6EACB',
        'dusty-pink': '#EECAD5',
        'light-gray-text': "#CDCDCD"
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-pastel-blue',
    'bg-pastel-yellow',
    'bg-dusty-pink',
    'text-pastel-blue',
    'text-pastel-yellow',
    'text-dusty-pink',
  ]
}