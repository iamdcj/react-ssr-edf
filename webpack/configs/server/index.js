const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const isProduction = require("../shared").isProduction;
const path = require("path");
const resolve = require("../shared").resolve;

// Config. vars
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
    new CleanWebpackPlugin(["public", "server"], {
      root: path.join(__dirname, "../../../")
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
