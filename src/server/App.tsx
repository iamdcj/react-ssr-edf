import React from "react";
import { StaticRouter } from "react-router";

import Router from "../_router/router";

const AppServer = ({ path, context }) => (
  <StaticRouter location={path} context={context}>
    <Router />
  </StaticRouter>
);

export default AppServer;
