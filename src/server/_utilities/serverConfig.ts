import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressStaticGzip from "express-static-gzip";
import { PORT } from "../../_constants";

const app = express();
const port = PORT || 3001;

const webpack = require("webpack");
const webpackConfig = require("../../../webpack");
const compiler = webpack(webpackConfig()[0]);

app
  .use(
    require("webpack-dev-middleware")(compiler, {
      serverSideRender: true,
      publicPath: ""
    })
  )
  .use(require("webpack-hot-middleware")(compiler))
  .use(cors())
  .use(cookieParser())
  .use(
    "/",
    expressStaticGzip("public", {
      index: false,
      enableBrotli: true,
      orderPreference: ["br", "gz"]
    })
  );

export { app, port };
