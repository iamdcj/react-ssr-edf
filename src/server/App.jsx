import React from "react";

import { StaticRouter } from "react-router";

//* COMPONENTS
import Router from "../_router/router";

const AppServer = ({ path, context, store }) => (
  <Provider store={store}>
    <StaticRouter location={path} context={context}>
      <Router />
    </StaticRouter>
  </Provider>
);

export default AppServer;
