const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['main.js']
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
        chunks: 'all'
    }
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 20000000,
    maxEntrypointSize: 8500000,
    assetFilter: assetFilename => {
        return (
            assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
        );
    }
  }
};
