/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      "--c-primary": "#5ece7b",
      "--c-primary-variant": "#9EE2B0",
      "--c-secondary": "#1D1F22",
      "--c-secondary-variant": "#43464E",
    },
    extend: {},
  },
  plugins: [],
};
