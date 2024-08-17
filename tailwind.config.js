/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Arial", "Tahoma", "Verdana", "sans-serif"],
      },
      columnCount: {
        2: "2",
      },
      // Thêm lớp tùy chỉnh cho column-gap
      columnGap: {
        "12px": "12px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".column-count-2": {
            columnCount: "2",
          },
          ".column-gap-12px": {
            columnGap: "12px",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
