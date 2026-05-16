import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vault: {
          slate: "#14232B",
          soft: "#F7FAFC",
          cyan: "#22D3EE",
        },
      },
      boxShadow: {
        "vault-card": "0 26px 80px rgba(148, 163, 184, 0.35)",
        "cyan-glow": "0 24px 70px rgba(34, 211, 238, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
