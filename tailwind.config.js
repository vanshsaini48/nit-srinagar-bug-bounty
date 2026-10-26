/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        poster: {
          black: "#000000",
          void: "#030712",
          surface: "#080E1A",
          card: "#0C1425",
          cardBorder: "#1E293B",
          cyan: "#00E5FF",
          cyanGlow: "#00F0FF",
          cyanDark: "#0284C7",
          bisBlue: "#0B5394",
          gold: "#FFB800",
          silver: "#E2E8F0",
          bronze: "#F97316",
          alert: "#EF4444",
        }
      },
      fontFamily: {
        poster: ['"Chakra Petch"', '"Orbitron"', 'system-ui', 'sans-serif'],
        display: ['"Rajdhani"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyan-glow': '0 0 25px -5px rgba(0, 229, 255, 0.45)',
        'cyan-glow-lg': '0 0 50px -10px rgba(0, 229, 255, 0.55)',
        'cyan-box': 'inset 0 0 15px rgba(0, 229, 255, 0.25)',
      }
    },
  },
  plugins: [],
}
