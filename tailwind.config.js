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
        primary: '#1a1a1a',
        secondary: '#666666',
        accent: '#3b82f6',
        'dark-bg': '#121212',
        'dark-card': '#1e1e1e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}

