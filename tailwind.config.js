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
        bgWhite: "#ffffff",
        txtWhite: "#ffffff",
        borderGrey: "#BAB2B5",
        inputBorderGray: "#e0e0e0",
        bgOrange: "	hsl(32, 98%, 93%)",
        lghtOrange: "#fdba74",
        txtRed: "#ef4444",
        txtGrey: "#6B7280",
        premiumOrangeBg: "hsl(8, 90%, 68%)",
        greenForPagination: "hsl(147, 58%, 56%)",
      },
    },
  },
  plugins: [],
};
