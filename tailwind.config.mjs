/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cmdColor: "#4ade80", 
      },
      fontSize: {
        "1xl": ["1.2rem", { lineHeight: "1rem" }], 
      },
    },
    fontFamily: {
      font: ["Courier Prime", "monospace"],
    },
  },
  plugins: [],
};
