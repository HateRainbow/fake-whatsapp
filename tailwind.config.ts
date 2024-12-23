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
        foreground: "#9FA2A7",
        "chat-background": "#101D25",
        "chat-reply": "#00B09C",
      },
    },
  },
  plugins: [],
} satisfies Config;
