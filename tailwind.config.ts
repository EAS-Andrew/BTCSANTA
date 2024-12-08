import type { Config } from "tailwindcss";

export default {
  content: [
    "pages/**/*.{js,ts,jsx,tsx,mdx}",
    "components/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0.3' }
        }
      },
      animation: {
        'fall': 'fall linear infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
