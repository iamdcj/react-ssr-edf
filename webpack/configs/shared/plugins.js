const webpack = require("webpack");
const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const shared = require("../shared");

const publicPath = "../../../public";

const basePlugins = [
  new CopyPlugin([
    {
      from: "./src/client/assets/",
      to: path.resolve(__dirname, publicPath),
      toType: "dir"
    }
  ]),
  new LoadablePlugin()
];

const productionPlugins = [
  new CompressionPlugin({
    filename: "[path].br[query]",
    algorithm: "brotliCompress",
    test: /\.(js|css|html|svg)$/,
    compressionOptions: {
      level: 11
    },
    threshold: 10240,
    minRatio: 0.8,
    deleteOriginalAssets: false
  })
];

module.exports.returnPlugins = mode => {
  const config = shared.isProduction(mode) ? productionPlugins : [];

  return [...basePlugins, ...config];
};
