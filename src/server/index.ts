import { app, port } from "./_utilities/serverConfig";
import { renderApp } from "./rendering/render-app";
import { renderSitemap } from "./rendering/render-sitemap";
import returnError from "./errors/returnError";
import open from "open";
import { ENV } from "../_constants";

app.get("*/sitemap.xml", (_, res) => {
  try {
    renderSitemap(res);
  } catch (error) {
    returnError(error, res);
  }
});

app.get("*", (req, res) => {
  try {
    renderApp({ req, res });
  } catch (error) {
    returnError(error, res);
  }
});

console.log(ENV);

if (ENV === "development") {
  open("http://localhost:3000");
}

app.listen(port, () =>
  console.info(`Coming to you live via http://localhost:${port}`)
);
