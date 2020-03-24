const TerserPlugin = require("terser-webpack-plugin");
const isProduction = require("../shared").isProduction;

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

const minification = {
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
};

module.exports.returnOptimization = mode => {
  const config = isProduction(mode) ? minification : {};

  return {
    ...splitChunks,
    ...config
  };
};
