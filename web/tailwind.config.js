/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      karla: ["Karla", "sans-serif"],
    },
    maxWidth: {
      wrapper: "1200px",
    },
    extend: {},
  },
  plugins: [],
};
