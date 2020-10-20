import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

import path from 'path';

import rules from './rules';

module.exports = {
  entry: './src/index.js',
  module: {
    rules
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css', 'jsx']
  },
  plugins: [
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: path.resolve('src/index.html'),
      }),
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ]
}
