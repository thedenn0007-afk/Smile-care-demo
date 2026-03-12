import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9FBFC",
        primary: "#2E86DE",
        secondary: "#E8F1FA",
        textDark: "#1A1A1A",
        primaryDark: "#1a6bbf",
        primaryLight: "#5ba4e8",
        accent: "#00C896",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(46, 134, 222, 0.08)",
        cardHover: "0 12px 40px rgba(46, 134, 222, 0.18)",
        soft: "0 2px 16px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #1a3a5c 0%, #2E86DE 60%, #00C896 100%)",
        "section-gradient": "linear-gradient(180deg, #F9FBFC 0%, #E8F1FA 100%)",
        "card-gradient": "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
