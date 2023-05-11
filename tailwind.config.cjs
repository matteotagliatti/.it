/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    extend: {
      colors: {
        background: "#050505",
        bubble: "#fafcff14",
        para: "#ffffffcc",
      },
    },
  },
  plugins: [],
};
