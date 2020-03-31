import React from "react";

import { ServerGet } from "../../_types";

// Dependencies
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { CacheProvider } from "@emotion/core";
import createEmotionServer from "create-emotion-server";
import createCache from "@emotion/cache";

// Components
import App from "../App";
import HTML from "./document";
import returnError from "../errors/returnError";

// Style Config.
import { CreateStore, GetStore } from "../../_management/store";
const cache = createCache();
const { extractCritical } = createEmotionServer(cache);

// Chunks Config.
const path = require("path");
const statsFile = path.resolve("public/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile });

// Data Fetching
import { hydrateApplication } from "../../_management/hydrateApplication";

export const renderApp = ({ req, res }: ServerGet) => {
  if (!req || !res) {
    throw Error("Nothing to work with");
  }

  CreateStore();
  const store = GetStore();

  const fetchData = store.dispatch(hydrateApplication(res, req));

  fetchData
    .then(() => {
      const context = {};
      let markup = "";
      let styleIDs: string[] | null = null;
      let stylesheet: string = "";

      try {
        const app = (
          <CacheProvider value={cache}>
            <ChunkExtractorManager extractor={extractor}>
              <App path={req.path} context={context} store={store} />
            </ChunkExtractorManager>
          </CacheProvider>
        );

        const { html, ids, css } = extractCritical(renderToString(app));

        styleIDs = ids;
        stylesheet = css;
        markup = html;
      } catch (error) {
        console.error(error.message);
      }

      const data = store.getState();
      const helmet = Helmet.renderStatic();
      const styles = { styleIDs, stylesheet };
      const scriptTags = extractor.getScriptTags();

      const document = HTML({
        helmet,
        markup,
        data,
        styles,
        scriptTags
      });

      res.send(document);
    })
    .catch((error: Error) => {
      console.error(error.message);
      returnError(error, res);
    });
};
