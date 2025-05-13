/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#e315de',
          light: '#f04df3',
          dark: '#6a006f',
        },
        secondary: {
          DEFAULT: '#f7e7f7',
          dark: '#d8c0d8',
        },
        background: {
          dark: '#0e0e2c',
          darker: '#07071a',
        },
        success: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        warning: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#dc2626',
        },
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(14, 14, 44, 0.8), rgba(14, 14, 44, 0.95)), url('https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        'cyber-gradient': 'linear-gradient(to right, #e315de, #6a006f)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(227, 21, 222, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(227, 21, 222, 0.8)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};