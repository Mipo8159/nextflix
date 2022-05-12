module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },
    extend: {
      spacing: {
        3.5: '12px',
        81: '325px',
        160: '40rem',
        100: '357px',
      },
      colors: {
        green: {
          DEFAULT: '#186d47',
        },
      },
    },

    extend: {
      textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    function ({addComponents}) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {maxWidth: '640px'},
          '@screen md': {maxWidth: '768px'},
          '@screen lg': {maxWidth: '975px'},
          '@screen xl': {maxWidth: '1080px'},
          '@screen 2xl': {maxWidth: '1280px'},
        },
      })
    },
  ],
}
