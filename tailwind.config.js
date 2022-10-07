/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        fancy: ["Lato"],
      },
      colors: {
        "bizpotta-purple": "#121F4C",
        "bizpotta-green": "#94F236",
        "bizpotta-green-500": "rgba(148, 242, 54, 0.64)",
        "bizpotta-green-100": "#F2FFE4",
        "bizpotta-gray": {
          500: "#A5A5A5",
          600: "#565656",
          700: "#233245",
          800: "#282828",
        },
        darkBlue: "#121F4C",
        seaBlue: "#3771C8",
        darkText: "#282828"
      },
      backgroundImage: (theme) => ({
        "auth-pattern": "url('/images/authLayoutImg.png')",
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};
