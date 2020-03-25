import { app, port } from "./_utilities/serverConfig";
import { renderApp } from "./rendering/render-app";
import { renderSitemap } from "./rendering/render-sitemap";
import returnError from "./errors/returnError";

app.get("*/sitemap.xml", (_, res) => {
  try {
    renderSitemap(res);
  } catch (error) {
    returnError(error, res);
  }
});

app.get("/", (req, res) => {
  try {
    renderApp({ req, res });
  } catch (error) {
    returnError(error, res);
  }
});

app.listen(3001, () =>
  console.info(`Coming to you live via http://localhost:${3001}`)
);
