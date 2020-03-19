// DEPs.
const serverConfig = require("./server.config");
const webpack = require("webpack");
const shared = require("./shared");

module.exports = () => {
  const client = {
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

  const server = {
    ...serverConfig,
    plugins: [
      new webpack.DefinePlugin({
        __ClientSide__: false,
        __isDevelop__: true
      })
    ]
  };

  return [client, server];
};
