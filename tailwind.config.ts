import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,svg}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Gold
        secondary: "#F3E5AB", // Champagne
        accent: "#B76E79", // Rose Pink
        background: "#FFF7E6", // Soft Cream
        foreground: "#5A4A42", // Deep Brown
        "muted-foreground": "#E8D6B3", // Light Beige
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        niconne: ["var(--font-niconne)"],
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-hero.png')",
        event: "url('/bg-event.png')",
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
