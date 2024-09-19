/* const flowbite = require("flowbite-react/tailwind"); */
import flowbite from 'flowbite-react/tailwind';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}",
    flowbite.content(),
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        brandC: '#16a34a',
        cardBg: '#ecf4f0',
        brandD: '#01502b',
        textColor: '#4459a7'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Rubik: ["Mulish", "sans-serif"],
      },
    },
    screens: {
      xxs: "370px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
      xxl: '1900px',
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};