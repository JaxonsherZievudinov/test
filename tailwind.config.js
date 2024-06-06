/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '1140px', 'max': '1385px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '1033px', 'max': '1140px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '960px', 'max': '1033px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '400px', 'max': '960px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      'sa': {'min': '900px', 'max': '1146px'},
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}