/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Glaucous: "#287fb8",
        Powder: "#FAFFFD",
        Onyx: "#223944",
        Gray: "#2b3d4f",
        Sha: "#1c5d8d",
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
