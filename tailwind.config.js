/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/*.jsx",
    "./src/*.js,",
    "./src/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.html",
    "./src/**/**/*.html",
    "./src/**/**/*.jsx",
    "./src/**/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // pri: "#2c3e50",
        pri: "hsl(210, 29%, 20%)",
        priFade: "hsl(210, 29%, 24%)",
        priFader: "hsl(210, 29%, 28%)",
        sec: "#d4af37",
        acc: "#d7b9c4",
        com: "#a9a9a9",
      },
    },
  },
  plugins: [],
};
