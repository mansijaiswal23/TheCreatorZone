/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f97316', // Tailwind orange-500 hex
      },
      fontFamily: {
        legal: ['"Times New Roman"', 'serif'], // Default system font
        // OR for a custom font:
        //legal: ['"EB Garamond"', 'serif'], // Google Font
      },
    },
  },
    variants: {},

  plugins: [],
};
