/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#05422C',
        primary: '#17AF26',
        'neutral-400': '#F4F4F4'
      },
      backgroundImage: {
        'hero': "url('/assets/images/banner-desktop.jpg')",
      },
      backgroundSize: {
        '50%': '50%'
      }
    },
  },
  plugins: [],
}

