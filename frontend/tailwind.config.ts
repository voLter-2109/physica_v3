/** @type {import('tailwindcss').Config} */

const twColors = require("tailwindcss/colors");

const colors = {
  transparent: twColors.transparent,
  // light
  "bg-black": "#000",
  "bg-light": "#ffffff",
  "colors-light-dark": "#3d4d60",
  "colors-light-light": "#ffffff",
  "bg-light-bu": "#c1a583",
  // dark
  "bd-dark": "#222629",
  "colors-dark-dark": "#fce9bf",
  "bg-dark-bu": "#f4a701",
  "colors-dakr-light": "#6a6e71",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        mobile: "768px",
        tablet: "992px",
        desktop: "1300px",
      },
      padding: {
        DEFAULT: "1rem",
        mobile: "1rem",
        tablet: "2rem",
        desktop: "3rem",
      },
    },
    screens: {
      maxSm: { max: "639px" },
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors,
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto-mono)"],
        bree: ["var(--font-bree-serif)"],
        mystero: ["var(--font-mystero-mono)"],
      },
    },
    export: {
      backgroundImage: {
        "home-black": "url(./bg-par-black.jpg)",
        "home-light": "url('/bg-par-light.jpg')",
      },
    },
    extends: {},
  },
  darkMode: "class",
  plugins: [
    require("autoprefixer"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
