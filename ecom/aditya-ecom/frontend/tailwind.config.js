/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PrimaryColor: "#9290C3",
        SecondaryColor: "#535C91",
        DarkColor: "#1B1A55",
        ExtraDarkColor: "#070F2B",
      },
    },
  },
  plugins: [],
};
