module.exports = [
  {
    test: /\.js$/, exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: ['url-loader?limit=10000', 'img-loader']
  },
  {
    test: /\.css$/,
    use: [
        {
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
        },
    ]
  },
  {
    test: /\.s(a|c)ss$/,
    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
  },
]
