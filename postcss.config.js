const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Добавьте необходимые расширения
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}