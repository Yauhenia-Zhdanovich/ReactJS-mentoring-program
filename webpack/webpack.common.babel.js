import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

import rules from './rules';

module.exports = {
  entry: './src/index.js',
  module: {
    rules
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.scss', '.css']
  },
  plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        title: 'Output Management',
      }),
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ]
}
