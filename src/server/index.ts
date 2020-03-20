import { app, port } from "./_utilities/serverConfig";
import { renderApp } from "./rendering/render-app";

app.get("*", (req, res) => {
  if (!req || !res) return;
  renderApp({ req, res });
});

app.listen(port, () =>
  console.info(`Coming to you live via http://localhost:${port}`)
);
