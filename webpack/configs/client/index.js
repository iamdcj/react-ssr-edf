const dev = require("./dev");
const prod = require("./prod");

module.exports = mode => {
  const isProduction = mode === "production";

  return isProduction ? prod : dev;
};
