/* eslint-env node */
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93C5FD',
          DEFAULT: '#3B82F6',
          dark: '#1E3A8A',
        },
        secondary: {
          light: '#FDE68A',
          DEFAULT: '#F59E0B',
          dark: '#92400E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
