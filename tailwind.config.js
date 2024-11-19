 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#4338ca',
          '50': '#eef2ff',
          '100': '#e0e7ff',
          '200': '#c7d2fe',
          '900': '#312e81'
        },
        secondary: {
          DEFAULT: '#14b8a6',
          '50': '#ecfeff',
          '100': '#cffafe',
          '900': '#064e3b'
        },
        dark: {
          DEFAULT: '#18181b',
          '50': '#f4f4f5',
          '900': '#27272a'
        },
        light: {
          DEFAULT: '#f4f4f5',
          '50': '#fafafa',
          '900': '#171717'
        }
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'subtle-bounce': 'subtle-bounce 2s infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        'subtle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}