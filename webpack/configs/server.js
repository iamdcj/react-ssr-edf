const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const shared = require("./shared");

module.exports = {
  target: "node",
  entry: "./src/server/index.ts",
  output: {
    path: path.resolve(__dirname, "../../server"),
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
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  externals: nodeExternals(),
  ...shared.resolve
};
