/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "geist-regular": ["Geist Regular", "sans-serif"],
        "geist-medium": ["Geist Medium", "sans-serif"],
        "geist-semibold": ["Geist Semibold", "sans-serif"],
        "geist-bold": ["Geist Bold", "sans-serif"],
      },
      screens: {
        sm: { min: "375px", max: "767px" },

        md: { min: "768px", max: "1023px" },

        lg: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
