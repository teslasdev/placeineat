/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      md: "768px",
      // => @media (max-width: 1200px) { ... }
      mb: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }
      ms: { max: "1040px" },
      // => @media (max-width: 1040px) { ... }
      tablet: { max: "940px" },
      // => @media (max-width: 940px) { ... }
      palm: { max: "800px" },
      // => @media (max-width: 800px) { ... }
      mobile: { max: "450px" },
      // => @media (max-width: 450px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
