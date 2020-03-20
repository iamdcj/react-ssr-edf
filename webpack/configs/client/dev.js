const webpack = require("webpack");
const shared = require("../shared");

module.exports = {
  mode: "development",
  ...shared.output,
  optimization: {
    ...shared.splitChunks
  },
  plugins: [
    ...shared.plugins,
    new webpack.DefinePlugin({
      __ClientSide__: true,
      __isDevelop__: true
    })
  ],
  devtool: "source-map",
  ...shared.rules,
  ...shared.resolve
};
