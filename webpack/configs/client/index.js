const webpack = require("webpack");
const path = require("path");
const resolve = require("../shared").resolve;
const plugins = require("../shared/plugins");
const optimization = require("../shared/optimization");
const isProduction = require("../shared").isProduction;
const publicPath = "../../../public";

const entry = "./index.tsx";

console.log(path.resolve(__dirname));

module.exports = (mode, definePlugin) => ({
  name: "client",
  target: "web",
  mode,
  context: path.resolve(__dirname, "../../../src/client"),
  watchOptions: {
    ignored: ["/node_modules/"]
  },
  entry: ["webpack-dev-server/client?http://localhost:3001", entry],
  devServer: {
    proxy: {
      "**": {
        target: `http://localhost:3001`
      }
    },
    open: true,
    hot: true,
    inline: true,
    port: 3000,
    hot: true
  },
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: "app.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/"
  },
  optimization: {
    ...optimization.returnOptimization(mode)
  },
  plugins: [definePlugin, ...plugins.returnPlugins(mode)],
  devtool: isProduction(mode) ? "" : "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico|svg|woff|woff2|eot|ttf|otf|txt)$/,
        exclude: /(node_modules)/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  },
  ...resolve
});
