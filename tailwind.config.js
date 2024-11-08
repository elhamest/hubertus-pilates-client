const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

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
        primaryTextColor: "#1e1915",
        pureWhiteColor: "#ffffff",
        secondaryColor: "#3563a3",
        lightBeigeColor: "#f5f1e9",
        creamyWhiteColor: "#e8d7c2",
        primaryColor: "#a37535",
        darkPrimaryColor: "#745325",
        lightGrayColor: "#333333",
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
  plugins: [],
};

module.exports = config;
