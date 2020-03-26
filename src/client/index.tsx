import React from "react";
import { loadableReady } from "@loadable/component";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "../_router/router";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";

const cache = createCache();

const AppEntry = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

const _Root = document.getElementById("root");
loadableReady(() =>
  hydrate(
    <CacheProvider value={cache}>
      <AppEntry />
    </CacheProvider>,
    _Root
  )
);

if (module.hot) {
  module.hot.accept();
}
