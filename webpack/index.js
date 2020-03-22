const dotenv = require("dotenv").config();
const server = require("./configs/server");
const client = require("./configs/client");

module.exports = () => {
  const envVars = dotenv.parsed;
  const { ENV = "production" } = envVars;

  console.log(client(envVars, ENV));

  return [client(envVars, ENV), server(ENV)];
};
