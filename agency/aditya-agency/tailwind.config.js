/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryClr: "#6D95FC",
        whiteClr: "#FFFFFF",
        blackClr: "#000000",
      },
    },
  },
  plugins: [],
};
