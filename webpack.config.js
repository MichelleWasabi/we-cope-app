const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  // module: {
  //   rules: [
  //       {
  //         loader: 'babel-loader',
  //         test: /\.(js|jsx)$/,
  //         exclude: /node_modules/
  //       },
  //       {
  //         test: /\.(css|scss)$/, use: [{
  //             loader: "style-loader" // creates style nodes from JS strings
  //         }, {
  //             loader: "css-loader",
  //             options: {
  //               name: '[name].[ext]',
  //               outputPath: 'images/'
  //             }
  //         }, {
  //             loader: "sass-loader" // compiles Sass to CSS
  //         }]
  //       }
  //       ]
  //     },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
    },
    loader: 
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  sassLoader: {
    data: '@import "variables";',
    includePaths: [
      path.resolve(__dirname, "./src/styles/base")
    ]
  }
  };