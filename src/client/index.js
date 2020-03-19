import React from "react";
import { hydrate } from "react-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";

import Router from "../_router/router";

const store = window.__GEP_COMPOSITION_DTA__;

console.log(store);
const _InitialData = document.getElementById("initialData");
if (_InitialData) {
  _InitialData.parentNode.removeChild(_InitialData);
  delete window.__GEP_COMPOSITION_DTA__;
}

const AppEntry = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

hydrate(<AppEntry />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
