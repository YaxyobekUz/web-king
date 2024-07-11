/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            500: "#0D5FF9",
            700: "#0a43ac",
          },

          dark: {
            900: "#222222",
          },
        },
      },

      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
      },

      backgroundImage: {
        working: "url(./images/others/working.webp)",
      },
    },
  },
  plugins: [],
};
