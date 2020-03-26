const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const shared = require("../shared");

const publicPath = "../../../server";

module.exports = (mode, definePlugin) => ({
  name: "server",
  target: "node",
  watch: true,
  mode,
  entry: "./src/server/index.ts",
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: "index.js",
    publicPath: "/"
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
});
