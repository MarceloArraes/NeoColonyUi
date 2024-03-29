import { Pointer } from "lucide-react";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        green: {
          50: "#66ff00",
          100: "#5feb00",
          200: "#58d800",
          300: "#50c500",
          400: "#49b300",
          500: "#42a100",
          600: "#3b8f00",
          700: "#337d00",
          800: "#2c6c00",
          900: "#255c00",
        },
        red: {
          50: "#ca1616",
          100: "#bb1116",
          200: "#ab0c15",
          300: "#9c0814",
          400: "#8e0512",
          500: "#7f0311",
          600: "#70010e",
          700: "#62010b",
          800: "#540006",
          900: "#470000",
        },
        yellow: {
          500: "#c3cb00",
        },
        blue: {
          300: "#00ffff",
          400: "#5be7ff",
          500: "#2b5bcb",
        },
        gray: {
          400: "#6a6a6a",
          500: "#232323",
        },
      },
      backgroundImage: {
        moon: "background-image: url('https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_poles_1k.jpg') 16 16",
        stripes:
          "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)",
      },
      cursor: {
        // darkCursor1: "url(/cursor0.png), pointer",
        darkCursor: "url(/customcursor1.svg) 16 16, pointer",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
