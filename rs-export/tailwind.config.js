import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: "#FAF4EA",
          foreground: "#191919",
          primary: {
            50: "#E6FFE6",
            100: "#C5FCC9",
            200: "#A4F6B5",
            300: "#83EDA8",
            400: "#62E29F",
            500: "#42D499",
            600: "#2AC393",
            700: "#16AF8E",
            800: "#167E62",
            900: "#114036",
            DEFAULT: "#16AF8E",
            foreground: "#ffffff",
          },
          focus: "#16AF8E",
        },
      },
    },
  })],
}

module.exports = config;