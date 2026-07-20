import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1310px",
        "2xl": "1400px",
        "3xl": "1700px"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        // --- Millaz theatre brand tokens (anchored on the logo) ---
        stage: {
          DEFAULT: "#16110F", // warm near-black — heroes, footer, dark sections
          800: "#221A17", // elevated dark surface (cards/panels on dark)
        },
        curtain: {
          DEFAULT: "#CB271E", // primary accent + primary CTA (logo red)
          dark: "#A81F17", // hover / pressed
        },
        spotlight: {
          DEFAULT: "#079C1C", // supporting accent, ticket / secondary CTA (logo green)
          dark: "#06841A", // hover
        },
        footlight: "#E0A93B", // gold — kickers, dividers, swiper bullets
        paper: {
          DEFAULT: "#FBF7F2", // cream — light section backgrounds
          dim: "#E9E2DC", // body text on dark stage backgrounds
        },
        ink: {
          DEFAULT: "#1A1414", // primary text / headings on light
          muted: "#5A514E", // secondary / body text on light
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "light-gray": "#CACCCF",
        tundora: "#444444",
        "stroke-color": "#E3E5EA",
        monochrome: "#292929",
        "app-gray": "#C4C4C4",
        "inactive-blue": "#F3F9FF",
        "secondary-info": "#A0A4A8",
        "body-gray": "#64696D",
        "default-black": "#25282B",
        "app-destructive": "#F40B0B",
        "destructive-light": "##F83737",
        "inactive-error": "#FEA0A0",
        "faint-error": "#F86666",
        monochromatic: "#101828",
        "nexus-gray": "#C6CCD6",
        "success-light": "#ECFDF3",
        success: "#1AB759",
        "success-100": "#D1FADF",
        "low-bg": "#F4F4F4",
        "light-motive": "#FAFAFB",
        "success-50": "#ECFDF3",
        "primary-dark": "#161616",
        "dark-green": "#079C1C",
        "inactive-warning": "#FFF1CF",
        "warning-dark": "#CB271E",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)" },
          "60%, 100%": { transform: "translateX(220%) skewX(-12deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 55s linear infinite",
      },
    },
  },
  plugins:  [require("tailwindcss-animate")],
};
export default config;
