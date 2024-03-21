/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Plus Jakarta Sans Variable", sans - serif],
      },
      spacing: {
        desktop: "1024px",
        wide: "1366px",
      },
      colors: {
        primary: {
          400: "#f40000",
          500: "#b70000",
          950: "#220202",
        },
      },
    },
  },
  plugins: [],
};
