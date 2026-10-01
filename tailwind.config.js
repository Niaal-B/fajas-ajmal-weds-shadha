export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        night: '#08170f',
        forest: '#0f3324',
        'door-back': '#0f3324',
        gold: { DEFAULT: '#b8903e', light: '#e6c77a', dark: '#8a5a1e' },
        ivory: '#f7efdc',
        ink: { DEFAULT: '#5a3412', deep: '#2b2116', soft: '#5e5446' },
        paper: { DEFAULT: '#faf4e6', card: '#fdf9f0' },
        cream: '#f3e9d2',
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        display: ['Cinzel', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        arabic: ['Amiri', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
};
