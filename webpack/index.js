const dotenv = require("dotenv").config();
const server = require("./configs/server");
const client = require("./configs/client");

module.exports = () => {
  const envVars = dotenv.parsed;
  const { ENV = "production" } = envVars;
  const isProduction = ENV === "production";

  return isProduction
    ? [client("production"), server("production")]
    : [client("development"), server("development")];
};
