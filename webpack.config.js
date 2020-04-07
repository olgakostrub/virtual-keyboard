/* eslint-disable */
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: './src/script.js',
    path: path.resolve(__dirname, ''),
  },
  mode: 'development',
};
