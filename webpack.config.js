const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './static',
    hot: true
  },
  plugins: [
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/,  loader: "babel-loader" }
    ]
  }
};