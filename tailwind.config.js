/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        premiumOrange: "hsl(7, 90%, 64%)",
        lightGray: "#f8f8f8",
        grayBg: "#f1f2f6",
        greenForButton: "hsl(152, 97%, 34%)",
        greenDark: "hsl(152, 98%, 19%)",
      },
    },
  },
  plugins: [],
};
