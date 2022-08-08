module.exports = {
  mode: 'jit',
  purge: {
    content: [],
  },
  darkMode: false,
  theme: {
    // color names generated using: https://colornamer.robertcooper.me/
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'burj-khalifa-fountain': '#D4DEE7',
      'extraordinary-abundance-of-tinge': '#E6E6E6',
      'obsidian-shard': '#040415',
      'patriot-blue': '#35365C',
      accolade: '#8193B2',
      'cool-green': '#999999', // grey instead of green
      'spandex-green': '#33B257',
      'retro-blue': '#2D61F7',
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1480px',
      '3xl': '1600px',
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      zIndex: {
        '-10': '-10',
        '-0': '0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: '#app',
}
