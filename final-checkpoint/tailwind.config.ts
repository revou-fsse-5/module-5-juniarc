const flowbite = require("flowbite-react/tailwind");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "gray-dark": "#232323",
        "green-light": "#179BAE",
        "green-dark": "#0A5173",
        "orange-light": "#FF8343",
        "red-light": "#FF5353",
        "trans-black": "rgba(0,0,0,0.9)",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      height: {
        '373': "23.3rem",
        '413': "413px",
        '640': "40rem",
      },
      minHeight: {
        "screen-with-header-footer": "calc(100vh - 176px - 130px)",
      },
      maxHeight: {
        '413': "413px",
      },
      width: {
        '440': "27.5rem",
        '500': "31.25rem",
        '572': "572px",
        '680': "680px",
      },
      maxWidth: {
        '500': "32rem",
        '680': "680px",
      },
    },
  },

  plugins: [
    flowbite.plugin()
  ],
};
export default config;
