import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#232D364",
        "secondary-light": "#00B09C",
        "primary-dark": "#101D25",
        "secondary-dark": "#202C33",
        "font-dark": "#202C33",
      },
    },
  },
  plugins: [],
} satisfies Config;
