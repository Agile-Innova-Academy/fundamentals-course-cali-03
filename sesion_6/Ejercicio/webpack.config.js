const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mini_css_extract_plugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [mini_css_extract_plugin.loader, 'css-loader',]
      },
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new mini_css_extract_plugin({ filename: 'css/index.css' }),
  ],
};