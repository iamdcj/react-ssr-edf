const webpack = require("webpack");
const path = require("path");
const shared = require("../shared");
const rules = require("../shared/rules");
const plugins = require("../shared/plugins");
const optimization = require("../shared/optimization");

const publicPath = "../../../public";

module.exports = (mode, definePlugin) => ({
  name: "client",
  target: "web",
  mode,
  entry: ["./src/client/index.tsx", "webpack-hot-middleware/client"],
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: "app.js",
    chunkFilename: "[name].chunk.js",
    publicPath: ""
  },
  optimization: {
    ...optimization.returnOptimization(mode)
  },
  plugins: [
    ...plugins.returnPlugins(mode),
    definePlugin,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "source-map",
  ...rules,
  ...shared.resolve
});
