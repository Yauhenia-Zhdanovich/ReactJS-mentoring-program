const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    test: /\.(js|jsx)$/, exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: ['url-loader?limit=10000', 'img-loader']
  },
  {
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
]
