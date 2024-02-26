/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '960px',
      md: '1024px',
      lg: '1440px',
      xl: '1820px',
    },
    extend: {
      colors: {
        'lightDarkishBlue': '#0006B1',
        'purplishBlue': '#E6E6F7',
        'veryDarkGrey': '#060A0A',
        'yellow': '#FFF6E6',
        'purple': '#F0E6F7',
        'darkPurplishBlue': '#B0B2E7',
        'lighterPurple': '#D2B0E7',
        'orange': '#FFA500',
        'veryDarkBlue': '#00034A',
        'darkPurple': '#6D00B0',
      }
    },
  },
  plugins: [],
}

