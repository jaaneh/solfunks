module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        'sf-yellow': '#FFFD82',
        'sf-primary': '#2D3047',
        'sf-secondary': '#1B998B',
        'sf-one': '#FF9B71',
        'sf-two': '#E84855'
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(3px)'
          }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            maxWidth: 'none',

            p: {
              color: theme('colors.gray.800')
            },
            a: {
              color: theme('colors.gray.700'),
              '&:hover': {
                textDecoration: 'underline'
              }
            },
            h3: {
              color: theme('colors.gray.600'),
              '&:hover': {
                color: theme('colors.gray.600')
              }
            }
          }
        }
      })
    }
  },
  daisyui: {
    themes: ['lofi'],
    styled: false
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
