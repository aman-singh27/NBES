import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "off-white": "#F5F4EF",
        black: "#111111",
        charcoal: "#2C2C2C",
        "mid-grey": "#6B6B6B",
        border: "#E4E3DE",
        accent: "#0047CC",
        "accent-dark": "#003399",
        "accent-light": "#EBF0FF",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(60px, 8vw, 110px)", { lineHeight: "0.88", fontWeight: "800" }],
        "display-lg": ["clamp(40px, 5vw, 72px)", { lineHeight: "0.92", fontWeight: "800" }],
        "display-md": ["clamp(28px, 3.5vw, 48px)", { lineHeight: "1.0", fontWeight: "700" }],
        "display-sm": ["clamp(20px, 2.5vw, 28px)", { lineHeight: "1.1", fontWeight: "700" }],
      },
      spacing: {
        18: "72px",
      },
      borderRadius: {
        btn: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
