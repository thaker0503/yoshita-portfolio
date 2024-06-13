import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#02004F",
        "secondary": "#FF9700",
        "highlight": "#FF002B",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;