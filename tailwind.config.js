/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      belle: "Bellefair, serif",
      barlow: '"Barlow Condensed", sans-serif',
    },
    fontSize: {
      xxl: "9.375rem",
    },
    extend: {
      colors: {
        dark: "#0B0D17",
        accent: "hsl( 231 77% 90% )",
      },
    },
  },
  plugins: [],
};
