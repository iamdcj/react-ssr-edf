const webpack = require("webpack");
const dotenv = require("dotenv").config();

const server = require("./configs/server");
const dev = require("./configs/dev");
const prod = require("./configs/prod");

module.exports = () => {
  const envVars = dotenv.parsed;
  const { ENV = "production" } = envVars;
  const isProduction = ENV === "production";

  return isProduction ? [prod, server] : [dev, server];
};
