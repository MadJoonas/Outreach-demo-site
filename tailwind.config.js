/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#A52A2A',
        'burnt-orange': '#CC5500',
        charcoal: '#1A1A1A',
        'dark-bg': '#121212',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'chunkfive': ['chunkfive', 'serif'],
        'rowdies': ['Rowdies', 'cursive'],
        'bebas': ['"Bebas Neue"', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      }
    },
  },
  plugins: [],
};