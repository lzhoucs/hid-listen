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
  // plugins: []
};
