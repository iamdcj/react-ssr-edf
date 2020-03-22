import React from "react";

import Head from "./components/global/head";
import RouteChange from "./components/global/route-change";
import BasicText from "./components/presentation/BasicText";

const AppClient = () => (
  <>
    <Head />
    <RouteChange />
    <BasicText title="React EDF" />
  </>
);

export default AppClient;
