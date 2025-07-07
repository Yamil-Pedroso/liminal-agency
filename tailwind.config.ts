import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6F6F6",
        secondary: "#C0C0C0",
        accent: "#8A8A91",
        background: "#1E1E1E",
        border: "#464648",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        script: ["Playball", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
