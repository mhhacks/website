module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  // darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: {
        },
        text: {
          DEFAULT: '#000',
        },
        primary: {
          DEFAULT: '#F6D047',
          variant: '#f5d976',
        },
        secondary: {
          DEFAULT: '#102E82',
        },
        co: {
          red: '#BF2C34',
          blue: '#102E82',
          yellow: '#F6D047'
        }
      },
      fontFamily: {
        primary: ['Barlow', 'sans-serif'],
        heading: ['Changa', 'sans-serif'],
        'brand': ['"Bungee Outline"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        pulsate: 'pulsate 5s ease-in-out infinite both',
        pop: 'pop 200ms ease-out',
        'moving-bg': 'movingBackground 20s ease infinite',
      },
      keyframes: {
        pulsate: {
          'from, to': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.8)',
          },
        },
        pop: {
          'from, to': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
            filter: 'blur(2px)',
          },
        },
        movingBackground: {
          '0%': {backgroundPosition: '0% 0%'},
          '50%':{backgroundPosition: '100% 100%'},
          '100%':{backgroundPosition: '0% 0%'}
        },
      },
      backgroundSize: {
        'oversize': '200% 200%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
