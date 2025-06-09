import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hot-red': '#FF3B3F',
        'hot-red-light': '#FF6B6F',
        'hot-gray': '#F8F9FA',
        'hot-text': '#2D3748',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'aura': '0 0 20px rgba(255, 59, 63, 0.15)',
        'aura-hover': '0 0 30px rgba(255, 59, 63, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config 