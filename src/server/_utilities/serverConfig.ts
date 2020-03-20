import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import expressStaticGzip from "express-static-gzip";

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

export { app, port };
