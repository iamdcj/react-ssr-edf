const webpack = require("webpack");

module.exports.resolve = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".txt"]
  }
};

module.exports.isProduction = mode => mode === "production";

module.exports.returnDefinePlugin = (env, isBrowser) => {
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`DEPT_EDF_${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  const vars = {
    ...envKeys,
    isBrowser
  };

  return new webpack.DefinePlugin(vars);
};
