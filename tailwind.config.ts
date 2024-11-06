import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "neumorphism-button":
          "15px 10px 15px -7px rgba(70, 70, 70, 0.1) inset, 10px 10px 25px 0px rgba(0, 0, 0, 0.25), 0px 0px 8px 1px rgba(255, 255, 255, 0.3)",
        "neumorphism-button-pressed":
          "15px 10px 15px -7px rgba(70, 70, 70, 0.3) inset, 10px 10px 25px 0px rgba(0, 0, 0, 0.25), 0px 0px 8px 1px rgba(255, 255, 255, 0.3",
      },
      screens: {
        'card': '1700px',
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-y": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "marquee-horizontal": "marquee-x var(--duration) infinite linear",
        "marquee-vertical": "marquee-y var(--duration) linear infinite",
      },
    },
    fontFamily: {
      Nunito: ["var(--font-Nunito)"],
      Noto: ["var(--font-Noto)"],
      ZenMaruGothic: ["var(--font-ZenMaruGothic)"],
    },
    transitionTimingFunction: {
      slow: "cubic-bezier(.405, 0, .025, 1)",
      "minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
    }
  },
  plugins: [],
};
export default config;
