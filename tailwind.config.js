/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2C3E",
          light: "#1A3F54",
        },
        accent: {
          DEFAULT: "#C9A227",
          hover: "#B08E1F",
        },
        bg: "#F8F9FA",
        surface: "#FFFFFF",
        "text-primary": "#1A1A1A",
        "text-secondary": "#5A6573",
        border: "#E2E8F0",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
}