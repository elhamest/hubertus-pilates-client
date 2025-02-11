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
        trueGray: colors.neutral,
        accentColorBlue: "#4a5f73",
        accentColorGary: "#a6a6a6",
        accentColorBlueDark: "#3a4a5c",
        pureWhiteColor: "#fff",
        neutralWhiteColor: "#d1d7e0",
        offWhiteColor: "#f9f9f9",
        primaryColor: "#905a98",
        vibrantPurple: "#7e3f8f",
        darkPrimaryColor: "#6a4c6f",
        darkSecondaryColor: "#6a4c6f",
        ligthSecondaryColor: "#b695b9",
        darkGrayColor: "#151b23",
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
