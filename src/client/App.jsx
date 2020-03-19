import React from "react";

//* - COMPONENTS -
import ErrorBoundary from "./components/_errors/_boundary";

import Head from "./components/global/head";
import RouteChange from "./components/global/route-change";

const AppClient = () => (
  <>
    <Head />
    <RouteChange />
  </>
);

export default AppClient;
