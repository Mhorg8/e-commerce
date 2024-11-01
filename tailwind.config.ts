import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
      },
      colors: {
        softGreen: "#606c38",
        green: "#283618",
        cream: "#fefae0",
        lightBrown: "#dda15e",
        brown: "#bc6c25",
        gray: "#C0C0C0",
      },
    },
  },
  plugins: [],
};
export default config;
