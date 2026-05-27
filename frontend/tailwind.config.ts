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
        background: "#0b1326",
        surface: "#131b2e",
        surfaceDim: "#0b1326",
        surfaceBright: "#31394d",
        surfacePanel: "#171f33",
        surfacePanelHigh: "#222a3d",
        surfacePanelHighest: "#2d3449",
        primary: "#c3c0ff",
        primaryStrong: "#4f46e5",
        secondary: "#4edea3",
        tertiary: "#89ceff",
        text: "#dae2fd",
        muted: "#c7c4d8",
        outline: "#464555",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(2, 6, 23, 0.42)",
        panel: "0 12px 40px rgba(15, 23, 42, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
      },
      backgroundImage: {
        vault:
          "radial-gradient(circle at top, rgba(195, 192, 255, 0.14), transparent 22%), radial-gradient(circle at 80% 20%, rgba(137, 206, 255, 0.08), transparent 20%), linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-geist)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
