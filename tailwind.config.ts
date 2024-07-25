import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regonia: ['regonia', 'sans-serif'],
        regradeBold: ['regradeBold', 'sans-serif'],
      },
      letterSpacing: {
        'wide-5': '5px',
      },
      colors: {
        "mainBlack": "#323232",
        "background": "#f0f0f0"
      },
    },
    whiteSpace: {
      'pre-line': 'pre-line',
    },
  },
  plugins: [],
};
export default config;
