/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#0077FF',
          600: '#0066FF',
          700: '#0055FF',
        }
      },
    },
  },
  plugins: [],
}