const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const shared = require("../shared");

const publicPath = "../../../public";

const plugins = [
  new CleanWebpackPlugin(["public", "server"], {
    root: path.join(__dirname, "../../../")
  }),
  new CopyPlugin([
    {
      from: "./src/client/assets/",
      to: path.resolve(__dirname, publicPath),
      toType: "dir"
    }
  ]),
  new LoadablePlugin()
];

module.exports.returnPlugins = mode => {
  const extraConfig = shared.isProduction(mode)
    ? [
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
      ]
    : [];

  return [...plugins, ...extraConfig];
};
