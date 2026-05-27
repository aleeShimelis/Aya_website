import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        "muted-bg": "var(--color-muted-bg)",
        "muted-text": "var(--color-muted-text)",
        charcoal: "var(--color-charcoal)",
        slate: "var(--color-slate)",
        teal: "var(--color-teal)",
        "teal-light": "var(--color-teal-light)",
        border: "var(--color-border)",
        "card-bg": "var(--color-card-bg)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        "focus-ring": "var(--color-focus-ring)"
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
        card: "var(--radius-card)"
      },
      boxShadow: {
        soft: "var(--shadow-sm)",
        elevated: "var(--shadow-md)",
        focus: "var(--shadow-focus)"
      },
      fontFamily: {
        sans: [
          "Candara",
          "Aptos",
          "Avenir Next",
          "Segoe UI Variable",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "Optima",
          "Aptos Display",
          "Candara",
          "Avenir Next",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      maxWidth: {
        site: "none",
        narrow: "760px",
        wide: "none"
      },
      spacing: {
        "section-sm": "3.5rem",
        "section-md": "4.5rem",
        "section-lg": "6rem"
      }
    }
  },
  plugins: []
};

export default config;
