module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico|svg|woff|woff2|eot|ttf|otf|txt)$/,
        exclude: /(node_modules)/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]"
        }
      }
    ]
  }
};
