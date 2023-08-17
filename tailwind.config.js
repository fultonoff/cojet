/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT( {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: "#AC906F",
        dark: "rgba(13,13,14,.95)",
        darkbg: "#0D0D0E",
        goldLight: "#F2E9D0",
      },
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Playfair: ["Playfair"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwind-scrollbar'),],
})
