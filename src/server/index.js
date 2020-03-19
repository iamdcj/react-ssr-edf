import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressStaticGzip from "express-static-gzip";

import render from "./rendering/render-app";

const app = express();
const port = 3000;

app.use(cors());
app.use(cookieParser());
app.use(
  "/",
  expressStaticGzip("public", {
    index: false,
    enableBrotli: true,
    orderPreference: ["br", "gz"]
  })
);

app.get("*", (req, res, next) => {
  if (!res || !res) return;
  render(req, res, next);
});

app.listen(port, () =>
  console.info(`Coming to you live via http://localhost:${port}`)
);
