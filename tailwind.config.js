/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf2f8',  // Very light pink (background)
          100: '#fce7f3',
          200: '#fbcfe8',  // Pastel pink
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',  // Base pink
          600: '#db2777',
          700: '#be185d',
        },
        mint: {
          100: '#e0f7f6',  // Very light mint
          200: '#b2efeb',  // Pastel mint
          300: '#80e7e0',
          400: '#4ddfd5',
          500: '#1ad7ca',  // Base mint
          600: '#17c2b6',
          700: '#14ada2',  // Darker mint
        },
      }
    }
  },
  plugins: [],
}