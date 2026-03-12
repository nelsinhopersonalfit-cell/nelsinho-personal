import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── CORES ───────────────────────────────────────────────
      colors: {
        brand: {
          // Primárias
          orange: "#E85D04",
          "orange-light": "#FF7A2F",
          black: "#0A0A0A",

          // Superfícies
          surface: "#141414",
          "surface-2": "#1E1E1E",
          "surface-3": "#2A2A2A",

          // Texto
          offwhite: "#F5F0EB",
          muted: "#9A9A9A",
          subtle: "#5A5A5A",

          // Bordas
          border: "#2A2A2A",
          "border-light": "#3A3A3A",
        },
      },

      // ─── TIPOGRAFIA ──────────────────────────────────────────
      fontFamily: {
        "barlow-condensed": ["var(--font-barlow-condensed)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },

      fontSize: {
        // Display — headlines heroicas
        "display-2xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15" }],

        // UI padrão
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "label-lg": ["0.875rem", { lineHeight: "1", letterSpacing: "0.1em" }],
        "label-sm": ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em" }],
      },

      // ─── ESPAÇAMENTO ─────────────────────────────────────────
      spacing: {
        // Seções
        "section-y": "6rem",
        "section-y-sm": "4rem",
        "section-y-lg": "8rem",

        // Container interno
        "container-px": "1rem",
        "container-px-md": "2rem",
        "container-px-lg": "3rem",

        // Gaps comuns
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },

      // ─── BORDER RADIUS ───────────────────────────────────────
      borderRadius: {
        card: "1rem",
        "card-lg": "1.5rem",
        badge: "9999px",
        btn: "0.5rem",
      },

      // ─── SOMBRAS ─────────────────────────────────────────────
      boxShadow: {
        "orange-glow": "0 0 40px rgba(232, 93, 4, 0.25)",
        "orange-glow-sm": "0 0 20px rgba(232, 93, 4, 0.15)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.6)",
      },

      // ─── GRADIENTES ──────────────────────────────────────────
      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.85) 100%)",
        "gradient-section": "linear-gradient(to bottom, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)",
        "gradient-card": "linear-gradient(135deg, #141414 0%, #1E1E1E 100%)",
        "gradient-orange": "linear-gradient(135deg, #E85D04 0%, #FF7A2F 100%)",
        "gradient-dark-up": "linear-gradient(to top, #0A0A0A 0%, transparent 100%)",
      },

      // ─── ANIMAÇÕES ───────────────────────────────────────────
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      transitionDuration: {
        250: "250ms",
        350: "350ms",
        450: "450ms",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },

      // ─── ALTURA / LARGURA ────────────────────────────────────
      height: {
        "screen-90": "90dvh",
        "hero": "100dvh",
      },

      maxWidth: {
        "container": "1400px",
        "prose-wide": "75ch",
      },

      // ─── Z-INDEX ─────────────────────────────────────────────
      zIndex: {
        navbar: "50",
        overlay: "40",
        modal: "60",
        floating: "70",
      },
    },
  },
  plugins: [],
};

export default config;
