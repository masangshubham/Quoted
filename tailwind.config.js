/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-pinkish-red": "#fc466b",
        "bg-bluish": "#3F5EFB",
      },
      spacing: {
        545: "34rem",
        326: "20rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
