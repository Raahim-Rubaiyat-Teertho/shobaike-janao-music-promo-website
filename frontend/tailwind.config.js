/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-shade' : '#f0f8fa',
        'text-shade' :'#0E2125',
      }
    },
  },
  plugins: [],
}