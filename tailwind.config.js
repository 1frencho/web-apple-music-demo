/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)",
        primary: "var(--primary-color)",
        lightBg: "var(--light-bg)",
        bgColor: "var(--bg-color)",
      },
      fontFamily: {
        sans: ["San Francisco", "sans-serif"],
      },
    },
  },
  plugins: [],
};
