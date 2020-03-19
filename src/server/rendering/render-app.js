import React from "react";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { hydrateApplication } from "../../_management/actions/hydrateApplication";

//* - COMPONENTS
import App from "../App";
import Document from "./document";

const path = require("path");
const statsFile = path.resolve("public/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile });

export const renderApp = (req, res) => {
  hydrateApplication(req)
    .then(data => {
      const context = {};
      let markup = "";

      try {
        markup = renderToString(
          <ChunkExtractorManager extractor={extractor}>
            <App path={req.path} context={context} store={store} />
          </ChunkExtractorManager>
        );
      } catch (error) {
        markup = "";
      }

      const helmet = Helmet.renderStatic();
      const document = Document(helmet, markup, data, extractor);

      res.send(document);
    })
    .catch(error => {
      console.error("RENDER APP: ", error.message);
    });
};
