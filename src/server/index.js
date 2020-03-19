import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressStaticGzip from "express-static-gzip";

import { renderApp } from "./rendering/render-app";

const server = express();
const port = 3000;

server.use(cors());
server.use(cookieParser());
server.use(
  "/",
  expressStaticGzip("public", {
    index: false,
    enableBrotli: true,
    orderPreference: ["br", "gz"]
  })
);

server.get("*", (req, res) => {
  if (!res || !res) return;
  renderApp(req, res);
});

server.listen(port, () =>
  console.info(`Coming to you live via http://localhost:${port}`)
);
