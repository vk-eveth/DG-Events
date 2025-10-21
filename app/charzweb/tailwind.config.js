/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#0d47a1', // DG Events blue
        'yellow-500': '#ffc107', // DG Events yellow // Adjust to match DG Events' blue
      },
    },
  },
  plugins: [],
}
