const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const publicPath = "../../public";

const copyFiles = [
  {
    from: "./src/client/assets/images",
    to: path.resolve(__dirname, publicPath),
    toType: "dir"
  },
  {
    from: "./src/client/assets/static",
    to: path.resolve(__dirname, publicPath),
    toType: "dir"
  },
  {
    from: "./src/client/assets/data",
    to: path.resolve(__dirname, publicPath),
    toType: "dir"
  }
];

module.exports.output = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, publicPath),
    filename: "app.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/"
  }
};

module.exports.plugins = [
  new CleanWebpackPlugin(["public"], {
    root: path.join(__dirname, "../../")
  }),
  new CopyPlugin(copyFiles)
];

module.exports.splitChunks = {
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

module.exports.rules = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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

module.exports.resolve = {
  resolve: {
    extensions: ["*", ".js", ".jsx", ".txt"]
  }
};
