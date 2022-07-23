module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          main: 'hsl(235, 46%, 20%)',
          dark: 'hsl(226, 43%, 10%)',
          light: 'hsl(235, 45%, 61%)',
        },
        text: 'hsl(236, 100%, 87%)',
        box: {
          blue: 'hsl(246, 80%, 60%)',
          orange: 'hsl(15, 100%, 70%)',
          cyan: 'hsl(195, 74%, 62%)',
          red: 'hsl(348, 100%, 68%)',
          lime: 'hsl(145, 58%, 55%)',
          violet: 'hsl(264, 64%, 52%)',
          yellow: 'hsl(43, 84%, 65%)',
        },
      },
    },
  },
  plugins: [],
};
