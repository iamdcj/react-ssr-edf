import React from "react";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { hydrateApplication } from "../../_management/actions/hydrateApplication";
import { ServerStyleSheet } from "styled-components";
import { ServerGet } from "../../_types";

import App from "../App";
import Document from "./document";

const sheet = new ServerStyleSheet();
const path = require("path");
const statsFile = path.resolve("public/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile });

export const renderApp = ({ req, res }: ServerGet) => {
  hydrateApplication(req)
    .then((data: any) => {
      const context = {};
      let markup = "";

      try {
        markup = renderToString(
          sheet.collectStyles(
            <ChunkExtractorManager extractor={extractor}>
              <App path={req.path} context={context} store={data} />
            </ChunkExtractorManager>
          )
        );
      } catch (error) {
        markup = "";
      }

      const helmet = Helmet.renderStatic();
      const styleTags = sheet.getStyleTags();
      const scriptTags = extractor.getScriptTags();

      const document = Document({
        helmet,
        markup,
        data,
        styleTags,
        scriptTags
      });

      res.send(document);
    })
    .catch(error => {
      console.error("RENDER APP: ", error.message);
    });
};
