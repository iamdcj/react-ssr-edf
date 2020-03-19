import React from "react";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";

import { hydrateApplication } from "../../_management/actions/hydrateApplication";

//* - COMPONENTS
import App from "../App";
import Document from "./document";

export default (req, res) => {
  const promise = hydrateApplication(req);

  promise
    .then(data => {
      const context = {};
      let markup = "";

      try {
        markup = renderToString(
          <App path={req.path} context={context} store={data} />
        );
      } catch (error) {
        markup = "";
      }

      const helmet = Helmet.renderStatic();
      const document = Document(helmet, markup, data);

      res.send(document);
    })
    .catch(error => {
      console.error("RENDER APP: ", error.message);
    });
};
