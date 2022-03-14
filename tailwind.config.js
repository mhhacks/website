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
        }
      },
      fontFamily: {
        primary: ['"Josefin Sans"', 'sans-serif'],
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
