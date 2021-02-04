module.exports = {
  purge: {
    // enabled: true, //antes de pasar a producccion *npm run production*
    content: [
      './src/**/*.html',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
