import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Festival custom colors
        gold: {
          DEFAULT: "hsl(var(--gold))",
          dark: "hsl(var(--gold-dark))",
          light: "hsl(var(--gold-light))",
        },
        ember: {
          DEFAULT: "hsl(var(--ember))",
          dark: "hsl(var(--ember-dark))",
        },
        fire: "hsl(var(--fire))",
        neon: {
          orange: "hsl(var(--neon-orange))",
          glow: "hsl(var(--neon-glow))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        festival: ["Cinzel", "serif"],
        sans: ["Inter", "sans-serif"],
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
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            filter: "drop-shadow(0 0 20px rgba(255, 107, 0, 0.8))",
          },
          "50%": { 
            filter: "drop-shadow(0 0 40px rgba(255, 215, 0, 1))",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "ember-rise": {
          "0%": { 
            transform: "translateY(100vh) translateX(0) scale(1)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.8" },
          "100%": { 
            transform: "translateY(-20vh) translateX(30px) scale(0.3)",
            opacity: "0",
          },
        },
        "spotlight": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        "equalizer": {
          "0%, 100%": { height: "20%" },
          "50%": { height: "100%" },
        },
        "countdown-pulse": {
          "0%, 100%": { 
            transform: "scale(1)",
            boxShadow: "0 0 20px rgba(255, 107, 0, 0.4)",
          },
          "50%": { 
            transform: "scale(1.02)",
            boxShadow: "0 0 40px rgba(255, 107, 0, 0.7)",
          },
        },
        "neon-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "scale-in": "scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "ember-rise": "ember-rise 5s ease-out infinite",
        "spotlight": "spotlight 3s ease-in-out infinite",
        "equalizer": "equalizer 0.8s ease-in-out infinite",
        "countdown-pulse": "countdown-pulse 2s ease-in-out infinite",
        "neon-flicker": "neon-flicker 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold": "linear-gradient(135deg, #ffd700 0%, #ff8c00 50%, #ffd700 100%)",
        "gradient-ember": "linear-gradient(180deg, #ff6b00 0%, #8b4513 100%)",
        "gradient-fire": "linear-gradient(135deg, #ff6b00 0%, #ffd700 50%, #ff8c00 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
