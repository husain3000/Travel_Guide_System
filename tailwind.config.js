/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          8: "#fafafa",
          7: "#eaeaea",
          6: "#999",
          5: "#888",
          4: "#666",
          3: "#444",
          2: "#333",
          1: "#111",
        },
        geist: {
          foreground: "#fff",
          background: "#000",
          selection: "#f81ce5",
          link: "#3291ff",
        },
        secondary: {
          lighter: "#333",
          light: "#444",
          DEFAULT: "#888",
          dark: "#eaeaea",
        },
        marketing: {
          gray: "#111",
        },
        code: "#fff",
        error: {
          DEFAULTL: "red",
          lighter: "#f7d4d6",
          dark: "#e60000",
        },
        success: {
          DEFAULT: "#0070f3",
          lighter: "#d3e5ff",
          light: "#3291ff",
          dark: "#0761d1",
        },
      },
    },
  },
  plugins: [],
};
