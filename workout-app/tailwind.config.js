/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'reenie': ['Reenie Beanie', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      keyframes: {
        slideDown: {
          '0%' : { transform: 'translateY(-100%)'},
          '100%' : { transform: 'translateY(0)'}
        },
        slideUp: {
          '0%' : { transform: 'translateY(100%)'},
          '100%': { transform: 'translateY(0)'}
        }
      },
      animation: {
        slideDown: 'slideDown 3s ease-out forwards',
        slideUp: 'slideUp 3s ease-out forwards',
      }
    },
  },
  plugins: [],
}
