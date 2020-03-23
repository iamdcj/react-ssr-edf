const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|js)x?$/,
    exclude: /(node_modules)/,
    use: ["babel-loader"]
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
