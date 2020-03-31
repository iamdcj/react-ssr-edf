const dotenv = require("dotenv").config();
const server = require("./configs/server");
const client = require("./configs/client");
const { returnDefinePlugin } = require("./configs/shared");

module.exports = () => {
  const envVars = dotenv.parsed;
  const { ENV = "production" } = envVars;

  return [
    server(ENV, returnDefinePlugin(envVars, false)),
    client(ENV, returnDefinePlugin(envVars, true))
  ];
};
