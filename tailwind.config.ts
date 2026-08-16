import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          navy: "#0c1e3d",
          blue: "#0f3a6b",
          teal: "#0d9488",
          mint: "#ecfdf5",
          sand: "#f1f5f9",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 58, 107, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
