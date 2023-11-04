/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      darkGrey: "#888",
      darkBlue: "#120460",
      white: "#FFF",
      midBlue: "#004696",
      lightBlue: "#1E8EAB",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}
