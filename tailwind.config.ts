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
      },
      colors: {
        beige: "#f7f6f2",
      },
    },
  },
  plugins: [],
};
export default config;
