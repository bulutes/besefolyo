import type { Config } from "tailwindcss";
import { theme as customTheme } from "./src/app/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: customTheme.colors.primary,
        secondary: customTheme.colors.secondary,
        accent: customTheme.colors.accent,
        background: customTheme.colors.background,
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "primary-gradient": customTheme.gradients.primary,
        "secondary-gradient": customTheme.gradients.secondary,
        "accent-gradient": customTheme.gradients.accent,
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient": "gradient 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite",
        "space-float": "space-float 10s ease-in-out infinite",
        "shooting-star": "shooting-star 2s ease-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "space-float": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(5px, 5px) rotate(2deg)" },
          "50%": { transform: "translate(0, 10px) rotate(0deg)" },
          "75%": { transform: "translate(-5px, 5px) rotate(-2deg)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: customTheme.shadows,
      transitionDuration: customTheme.animations.duration,
      transitionTimingFunction: customTheme.animations.timing,
      screens: customTheme.breakpoints,
    },
  },
  plugins: [],
};

export default config;
