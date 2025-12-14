/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#111318',
          orange: '#FF7331',
          purple: '#7331FF',
          yellow: '#FFC01E',
          grey: '#C0C0C0',
        },
      },
    },
  },
  plugins: [],
}

