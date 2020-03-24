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
  entry: [
    "webpack-hot-middleware/client?name=client",
    "./src/client/index.tsx"
  ],
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: "app.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/"
  },
  optimization: {
    ...optimization.returnOptimization(mode)
  },
  plugins: [
    ...plugins.returnPlugins(mode),
    definePlugin,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: "source-map",
  ...rules,
  ...shared.resolve
});
