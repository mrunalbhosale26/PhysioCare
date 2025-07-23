/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a78bfa', // light purple
        secondary: '#f5f3ff', // lavender/white
        accent: '#7c3aed', // deep purple
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-to-r-purple': 'linear-gradient(to right, #a78bfa, #c084fc)',
        'gradient-to-br': 'linear-gradient(to bottom right, #f5f3ff, #ddd6fe)',
      },
      boxShadow: {
        fancy: '0 4px 20px rgba(124, 58, 237, 0.2)',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}

