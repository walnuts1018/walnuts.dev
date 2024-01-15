import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        "neumorphism-button": "15px 10px 15px -7px rgba(70, 70, 70, 0.2) inset, 10px 10px 25px 0px rgba(0, 0, 0, 0.25), 0px 0px 8px 1px rgba(255, 255, 255, 0.3)",
        "neumorphism-button-pressed": "15px 10px 15px -7px rgba(70, 70, 70, 0.3) inset, 10px 10px 25px 0px rgba(0, 0, 0, 0.25), 0px 0px 8px 1px rgba(255, 255, 255, 0.3)",
      }
    },
    fontFamily: {
      Nunito: ["var(--font-Nunito)"],
    },
  },
  plugins: [],
}
export default config
