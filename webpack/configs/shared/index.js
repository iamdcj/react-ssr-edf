module.exports.resolve = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".txt"]
  }
};

module.exports.isProduction = mode => mode === "production";
