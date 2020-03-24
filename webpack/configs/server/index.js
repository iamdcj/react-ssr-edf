const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const isProduction = require("../shared").isProduction;
const path = require("path");
const resolve = require("../shared").resolve;

const entry = "./src/server/index.ts";
const serverPath = "../../../server";

module.exports = (mode, definePlugin) => ({
  name: "server",
  target: "node",
  watch: !isProduction(mode),
  mode,
  entry,
  output: {
    path: path.resolve(__dirname, serverPath),
    filename: "index.js"
  },
  plugins: [
    definePlugin,
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
  ...resolve
});
