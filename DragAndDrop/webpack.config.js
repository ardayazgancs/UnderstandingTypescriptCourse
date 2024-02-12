module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};