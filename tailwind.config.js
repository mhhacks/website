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
        co: {
          red: '#BF2C34',
          blue: '#102E82',
          yellow: '#F6D047'
        }
      },
      fontFamily: {
        primary: ['Barlow', 'sans-serif'],
        heading: ['Changa', 'sans-serif'],
      },
      animation: {
        pulsate: 'pulsate 5s ease-in-out infinite both',
      },
      keyframes: {
        pulsate: {
          'from, to': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.8)',
          },
        }
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
