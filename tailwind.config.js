const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: "#86508e",
        primaryColorDark: "#77477e",
        richBlack: "#0d1f22",
        accentColorBlue: "#4a5f73",
        silverChalice: "#a6a6a6",
        accentColorBlueDark: "#3a4a5c",
        pureWhiteColor: "#fff",
        offWhiteColor: "#f8f9fa",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".ltr": { direction: "ltr" },
        ".rtl": { direction: "rtl" },
      });
    }),
  ],
};

module.exports = config;
