/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Original Webnith Brand Colors
        primary: {
          DEFAULT: '#2446e6',
          50: '#F0F5FF',
          100: '#E0EBFF',
          200: '#C7D7FE',
          300: '#A4BCFD',
          400: '#8098F9',
          500: '#2446e6',
          600: '#1533c9',
          700: '#0e2299',
          800: '#091870',
          900: '#051150',
        },
        'primary-dark': '#1533c9',
        'accent': '#ff914d',
        'brand-purple': '#7b3dff',
        'brand-teal': '#00e6c3',
        
        // Modern adaptations for dark theme
        'neon-blue': '#5c7cff',
        'neon-purple': '#7b3dff',
        'neon-pink': '#ff914d',
        'neon-cyan': '#00e6c3',
        'cyber-yellow': '#FFD60A',
        'deep-space': '#0A0E27',
        'midnight': '#0e1530',
        'slate-dark': '#2D3250',
        'slate-light': '#424769',
        'ghost-white': '#F8F9FF',
        'frost': '#E5E9F8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 27% 37%, hsla(225, 79%, 52%, 0.3) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(264, 100%, 62%, 0.3) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(173, 100%, 45%, 0.3) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(27, 100%, 65%, 0.3) 0px, transparent 50%)',
        'cyber-grid': 'linear-gradient(rgba(66, 71, 105, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(66, 71, 105, 0.3) 1px, transparent 1px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(36, 70, 230, 0.5), 0 0 40px rgba(36, 70, 230, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(36, 70, 230, 0.8), 0 0 60px rgba(36, 70, 230, 0.5)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(36, 70, 230, 0.5)',
        'glow-lg': '0 0 40px rgba(36, 70, 230, 0.6)',
        'neon': '0 0 5px theme(colors.neon-blue), 0 0 20px theme(colors.neon-blue)',
        'neon-purple': '0 0 5px theme(colors.neon-purple), 0 0 20px theme(colors.neon-purple)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}

