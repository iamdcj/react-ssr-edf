import React from "react";

//* REDUX
import { Provider } from "react-redux";

//* ROUTING
import { StaticRouter } from "react-router";

//* COMPONENTS
import Router from "../_router/router";

const AppServer = ({
  path,
  context,
  store
}: {
  path: string;
  context: any;
  store: any;
}) => (
  <Provider store={store}>
    <StaticRouter location={path} context={context}>
      <Router />
    </StaticRouter>
  </Provider>
);

export default AppServer;
