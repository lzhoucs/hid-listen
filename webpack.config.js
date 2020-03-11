const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: "app.[contenthash].js"
  },
  devtool: "source-map",
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: [webpackExternals()],
  plugins: [
    new CleanWebpackPlugin()
  ]
};
