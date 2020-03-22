const shared = require("../shared");

const splitChunks = {
  splitChunks: {
    chunks: "all",
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendor"
      }
    }
  }
};

module.exports.returnOptimization = mode => {
  const extraConfig = shared.isProduction(mode)
    ? {
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
      }
    : {};

  return {
    ...splitChunks,
    ...extraConfig
  };
};
