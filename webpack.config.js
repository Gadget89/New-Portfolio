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


// old code
// const path = require('path');
//
// module.exports = {
//   entry: "./js/index.js",
//   devtool: "source-map",
//   output: {
//       path: path.resolve(__dirname, 'public/dist'),
//       filename: "bundle.js"
//   },
//
// module: {
//       loaders: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           loader: 'babel-loader?presets[]=es2015&presets[]=react'
//         }
//       ]
//     }
// }
//
//
