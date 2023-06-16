/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkGray: "#493843",
        DarkGreen: "#61988E",
        LightGreen: "#A0B2A6",
        Gray: "#CBBFBB",
        LightGray: "#ECEBF3",
        Clean: "#EABDA8",
      },
      fontFamily: {
        Manrope: [
          "https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap",
        ],
      },
    },
  },
  plugins: [],
};
