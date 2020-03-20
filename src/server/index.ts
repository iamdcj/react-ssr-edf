import { app, port } from "./_utilities/serverConfig";
import { renderApp } from "./rendering/render-app";
import { renderSitemap } from "./rendering/render-sitemap";

app.get("*/sitemap.xml", (_, res) => {
  try {
    renderSitemap(res);
  } catch (error) {
    res.send("500");
  }
});

app.get("*", (req, res) => {
  try {
    renderApp({ req, res });
  } catch (error) {
    res.send("500");
  }
});

app.listen(port, () =>
  console.info(`Coming to you live via http://localhost:${port}`)
);
