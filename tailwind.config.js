// tailwind.config.mjs (ECMAScript Module)

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 🧠 Primary Fonts (variable)
        body: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-ibm-plex-mono)', ...defaultTheme.fontFamily.mono],
        redacted: ['var(--font-redacted)', 'sans-serif'],
        pirata: ['var(--font-pirata)', 'serif'],
        pressstart: ['var(--font-pressstart)', ...defaultTheme.fontFamily.mono],

        // 🧬 Custom + Chaos Fonts
        megavolt: ['megavolt', ...defaultTheme.fontFamily.sans],
        ocrA: ['ocr-a-std', 'monospace'],
        panel: ['panel-mono', 'monospace'],
        unifraktur: ['"UnifrakturMaguntia"', 'cursive'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-16.5deg) scale(1)' },
          '50%': { transform: 'rotate(-1.5deg) scale(1.2)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
module.exports = config;