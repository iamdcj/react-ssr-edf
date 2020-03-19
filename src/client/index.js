import React from "react";
import { loadableReady } from "@loadable/component";

import { hydrate } from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";

import Router from "../_router/router";
import { reconcileData } from "./_helpers/hydration";

const data = reconcileData();

const AppEntry = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

const _Root = document.getElementById("root");
loadableReady(() => hydrate(<AppEntry />, _Root));

if (module.hot) {
  module.hot.accept();
}
