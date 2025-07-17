const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-ibm-plex-mono)', ...fontFamily.mono],
        inter: ['var(--font-inter)', ...fontFamily.sans],
        pirata: ['var(--font-pirata)', ...fontFamily.serif],
        megavolt: ['megavolt', ...fontFamily.sans],
        ocrA: ['ocr-a-std', 'monospace'], 
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-16.5deg) scale(1)' },
          '50%': { transform: 'rotate(-1.5deg) scale(1.2)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}