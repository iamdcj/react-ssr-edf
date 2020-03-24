import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressStaticGzip from "express-static-gzip";
import { PORT } from "../../_constants";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const app = express();
const port = PORT || 3001;
const webpackConfig = require("../../../webpack");
const compiler = webpack(webpackConfig());

app
  .use(
    webpackDevMiddleware(compiler, {
      serverSideRender: true,
      publicPath: "/"
    })
  )
  .use(webpackHotMiddleware(compiler))
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
