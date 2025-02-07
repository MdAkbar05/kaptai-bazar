/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E2A5E",
        secondary: "#55679C",
        coffe: "#FFF5EB",
        background: "#DDF2FD",
        hightlight: "#E1D7B7",
        dashNav: "#ffffff41",
        dashText: "#5e7d8b",
        dashBorder: "#CFD8DC",
        dashActive: "#383838",
      },
      fontFamily: {
        body: ["Poppins", "Arial", "sans-serif"],
      },
      screens: {
        sm: "354px",
        md: "768px",
        lg: "924px",
        xl: "1280px",
      },
      // fontSize: {
      //   xs: "0.75rem",
      //   sm: "0.875rem",
      //   base: "1rem",
      //   lg: "1.125rem",
      //   xl: "1.25rem",
      // },
    },
  },
  plugins: [],
};
