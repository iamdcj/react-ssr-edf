const path = require("path");

module.exports = {
  addons: ["@storybook/addon-viewport/register"],
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async config => {
    const rules = config.module.rules;
    const plugins = config.module;

    // SB's File Loader conflicts with SVGR
    const fileLoaderRule = rules.find(rule => rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          ["react-app", { flow: false, typescript: true }],
          require.resolve("@emotion/babel-preset-css-prop")
        ]
      }
    });

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};
