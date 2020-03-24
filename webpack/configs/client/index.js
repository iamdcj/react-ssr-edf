const webpack = require("webpack");
const path = require("path");
const resolve = require("../shared").resolve;
const plugins = require("../shared/plugins");
const optimization = require("../shared/optimization");
const isProduction = require("../shared").isProduction;
const publicPath = "../../../public";
const entry = "./src/client/index.tsx";

console.log(path.resolve(__dirname));

module.exports = (mode, definePlugin) => ({
  name: "client",
  target: "web",
  mode,
  entry,
  watch: !isProduction(mode),
  watchOptions: {
    ignored: ["/node_modules/"]
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
