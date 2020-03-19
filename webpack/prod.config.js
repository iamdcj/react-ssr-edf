const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");
const shared = require("./shared");
const serverConfig = require("./server.config");

//* - BUNDLE REPORTS
let date = new Date();
date = date.toLocaleDateString().replace(/\//g, "-");

module.exports = () => {
  const client = {
    ...shared.output,
    optimization: {
      ...shared.splitChunks,
      minimizer: [
        new OptimizeCSSAssetsPlugin(),
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
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: `../bundle-reports/${date}-bundle-report.html`,
        openAnalyzer: false
      }),
      new webpack.DefinePlugin({
        __ClientSide__: true,
        __isDevelop__: false
      })
    ],
    ...shared.rules,
    ...shared.resolve
  };

  const server = {
    ...serverConfig,
    plugins: [
      new webpack.DefinePlugin({
        __ClientSide__: false,
        __isDevelop__: false
      })
    ]
  };

  return [client, server];
};
