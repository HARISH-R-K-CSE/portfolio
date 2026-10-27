/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        oled: {
          bg: '#05070c',
          panel: '#0b0f19',
          card: '#111827',
          border: '#1f293d',
          accent: '#10b981', // Emerald terminal
          cyan: '#06b6d4',
          amber: '#f59e0b',
          rose: '#f43f5e',
          text: '#e2e8f0',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-start infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
