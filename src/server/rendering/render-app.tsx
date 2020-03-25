import React from "react";

// Dependencies
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { hydrateApplication } from "../../_management/actions/hydrateApplication";
import { CacheProvider } from "@emotion/core";
import { ServerGet } from "../../_types";
import createEmotionServer from "create-emotion-server";
import createCache from "@emotion/cache";

import App from "../App";
import HTML from "./document";

// Styles
const cache = createCache();
const { extractCritical } = createEmotionServer(cache);

const path = require("path");
const statsFile = path.resolve("public/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile });

export const renderApp = ({ req, res }: ServerGet) => {
  if (!req || !res) {
    throw Error("Nothing to work with");
  }

  hydrateApplication(".")
    .then((data: any) => {
      const context = {};
      let markup = "";
      let styleIDs: string[] | null = null;
      let stylesheet: string = "";

      try {
        const app = (
          <ChunkExtractorManager extractor={extractor}>
            <CacheProvider value={cache}>
              <App path={req.path} context={context} />
            </CacheProvider>
          </ChunkExtractorManager>
        );

        const { html, ids, css } = extractCritical(renderToString(app));

        styleIDs = ids;
        stylesheet = css;
        markup = html;
      } catch (error) {
        console.error("Rendering Error");
      }

      const helmet = Helmet.renderStatic();

      const styles = { styleIDs, stylesheet };
      const scriptTags = extractor.getScriptTags();

      console.log(styles);

      const document = HTML({
        helmet,
        markup,
        data,
        styles,
        scriptTags
      });

      res.send(document);
    })
    .catch(error => {
      throw Error(error.message);
    });
};
