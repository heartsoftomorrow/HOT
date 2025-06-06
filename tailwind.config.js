/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC0000',
        secondary: '#FFFFFF',
        accent: {
          light: '#F5F5F5',
          medium: '#E0E0E0',
        },
        text: '#333333',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'red-white-flow': 'linear-gradient(135deg, rgba(204,0,0,0.05) 0%, rgba(255,255,255,0.9) 50%, rgba(204,0,0,0.05) 100%)',
        'red-subtle': 'linear-gradient(160deg, rgba(204,0,0,0.03) 0%, rgba(255,255,255,0.95) 100%)',
        'white-red-soft': 'linear-gradient(45deg, rgba(255,255,255,0.9) 0%, rgba(204,0,0,0.05) 100%)',
      },
      animation: {
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 