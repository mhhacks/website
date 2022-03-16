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
      },
      keyframes: {
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
