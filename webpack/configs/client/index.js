const webpack = require("webpack");
const path = require("path");
const shared = require("../shared");
const rules = require("../shared/rules");
const plugins = require("../shared/plugins");
const optimization = require("../shared/optimization");

const publicPath = "../../../public";

module.exports = (env, mode) => ({
  mode,
  entry: "./src/client/index.tsx",
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: "app.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/"
  },
  optimization: {
    ...optimization.returnOptimization(mode)
  },
  plugins: [...plugins.returnPlugins(env, mode)],
  devtool: "source-map",
  ...rules,
  ...shared.resolve
});
