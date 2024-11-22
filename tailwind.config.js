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
        primaryColor: "#a37535",
        secondaryColor: "#3563a3",
        thirdColor: "#905a98",
        thirdColorDark: "#794c80",
        lightBeigeColor: "#f5f1e9",
        creamyWhiteColor: "#e8d7c2",
        darkPrimaryColor: "#745325",
        mediumGrayColor: "#333333",
        ligthGrayColor: "#eaeaea",
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
