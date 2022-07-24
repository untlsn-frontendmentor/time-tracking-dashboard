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
          intense: 'hsl(246,80%,60%)',
        },
        text: 'hsl(236, 100%, 87%)',
      },
    },
  },
  plugins: [],
};
