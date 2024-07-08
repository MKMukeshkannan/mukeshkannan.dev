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
        publicSans: ["var(--publicSans-font)"],
        inter: ["var(--inter-font)"],
        carlgine: ["var(--carlgine-font)"],
        manolo: ["var(--manolo-font)"]
      },
      colors: {
        beige: "#F7F6F2",
        dead: "#0DEAE0",
        accentBlue: "#0234EF"
      },
    },
  },
  plugins: [],
};
export default config;
