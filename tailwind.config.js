/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'tilt-font': ["Tilt Neon", "sans-serif"],
        'kanit': ["Kanit", "sans-serif"],
        'rubik-mono-one': ['Rubik Mono One', 'monospace'],
        'oxanium': ['Oxanium', 'sans-serif'],
        'bangers':["Bangers", 'system-ui']
      },

      backgroundImage: {
        'hero-background': "url('/src/assets/hero-background.jpg')",
      },
    },

  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.rotate-y-0': {
          transform: 'rotateY(0deg)',
        },
        '.rotate-y-45': {
          transform: 'rotateY(45deg)',
        },
        '.rotate-y-90': {
          transform: 'rotateY(90deg)',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.rotate-y-360': {
          transform: 'rotateY(360deg)',
        },
        '.-rotate-y-180': {
          transform: 'rotateY(-180)',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
