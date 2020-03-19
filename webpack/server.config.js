const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    path: path.resolve(__dirname, "../server"),
    filename: "index.js"
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  externals: nodeExternals(),
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
