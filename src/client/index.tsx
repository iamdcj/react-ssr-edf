import React from "react";
import { loadableReady } from "@loadable/component";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "../_router/router";

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
