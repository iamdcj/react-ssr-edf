import React from "react";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router";

import Router from "../_router/router";

const AppServer = ({ path, context, store }) => (
  <StaticRouter location={path} context={context}>
    <Router />
  </StaticRouter>
);

export default AppServer;
