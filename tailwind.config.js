/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // './src/**/*.{js,ts,jsx,tsx,mdx}', // Remove if not using src
  ],
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
        'almond-cream': '#F6F1EB',
        'warm-taupe': '#D6C3B1',
        'clay-beige': '#B89F8C',
        'espresso-brown': '#4A3F35',
        'burnt-sienna': '#A25C3F',
        'sage-olive': '#9A9A7D',
        border: "hsl(30 28% 77%)", // warm-taupe
        input: "hsl(30 28% 77%)", // warm-taupe
        ring: "hsl(20 44% 44%)", // burnt-sienna
        background: "hsl(36 50% 97%)", // almond-cream
        foreground: "hsl(25 15% 27%)", // espresso-brown
        primary: {
          DEFAULT: "hsl(20 44% 44%)", // burnt-sienna
          foreground: "hsl(36 50% 97%)", // almond-cream (for text on primary buttons)
        },
        secondary: {
          DEFAULT: "hsl(30 28% 77%)", // warm-taupe
          foreground: "hsl(25 15% 27%)", // espresso-brown (for text on secondary elements)
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "hsl(26 21% 63%)", // clay-beige
          foreground: "hsl(25 15% 40%)", // slightly lighter espresso-brown for muted text
        },
        accent: {
          DEFAULT: "hsl(75 13% 54%)", // sage-olive
          foreground: "hsl(36 50% 97%)", // almond-cream (for text on accent elements)
        },
        popover: {
          DEFAULT: "hsl(36 50% 97%)", // almond-cream
          foreground: "hsl(25 15% 27%)", // espresso-brown
        },
        card: {
          DEFAULT: "hsl(30 28% 82%)", // slightly lighter warm-taupe or almond-cream
          foreground: "hsl(25 15% 27%)", // espresso-brown
        },
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hero-bg": "url('/landing.jpeg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
