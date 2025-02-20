/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          mint: '#B5E1D9',
          dark: '#1A1A1A',
          light: '#F5FFFE'
        }
      },
      aspectRatio: {
        '4/3': '4 / 3'
      },
    },
  },
  plugins: [],
};
