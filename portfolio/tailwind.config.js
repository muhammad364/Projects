/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* CSS-variable-driven palette — values set in globals.css */
        "themed-bg": "var(--color-bg)",
        "themed-surface": "var(--color-surface)",
        "themed-surface-hover": "var(--color-surface-hover)",
        "themed-card": "var(--color-card)",
        "themed-card-hover": "var(--color-card-hover)",
        "themed-border": "var(--color-border)",
        "themed-border-hover": "var(--color-border-hover)",
        "themed-text": "var(--color-text)",
        "themed-text-secondary": "var(--color-text-secondary)",
        "themed-text-muted": "var(--color-text-muted)",
        "themed-footer": "var(--color-footer)",
        accent: "#3B82F6",
        "accent-hover": "#2563EB",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "72rem",
      },
      boxShadow: {
        "card-hover": "0 8px 30px -4px var(--color-shadow)",
        "card-glow": "0 0 20px -5px var(--color-accent-glow)",
      },
    },
  },
  plugins: [],
};
