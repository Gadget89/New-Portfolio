const path = require('path');

const config = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {test: /\.css$/, use: 'css-loader'},
      {exclude: /node_modules/}
    ]
  }
};

module.exports = config;
