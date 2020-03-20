const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const shared = require("../shared");

module.exports = {
  mode: "production",
  ...shared.output,
  optimization: {
    ...shared.splitChunks,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          },
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },
  plugins: [
    ...shared.plugins,
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
    }),
    new webpack.DefinePlugin({
      __ClientSide__: true,
      __isDevelop__: false
    })
  ],
  ...shared.rules,
  ...shared.resolve
};
