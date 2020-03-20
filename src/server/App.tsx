import React from "react";
import { StaticRouter } from "react-router";

import Router from "../_router/router";

const AppServer = ({ path, context }: { path: string; context: any }) => (
  <StaticRouter location={path} context={context}>
    <Router />
  </StaticRouter>
);

export default AppServer;
