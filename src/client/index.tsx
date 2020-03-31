import React from "react";
import { hydrate } from "react-dom";

// Store
import { Provider } from "react-redux";
import { CreateStore, GetStore } from "../_management/store";
import { STORE } from "../_constants";

// Router
import { BrowserRouter } from "react-router-dom";
import Router from "../_router/router";

// Styles and ting
import { loadableReady } from "@loadable/component";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";

CreateStore(window[STORE]);

const store = GetStore();

const cache = createCache();

const AppEntry = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

const _Root = document.getElementById("root");
loadableReady(() => {
  hydrate(
    <CacheProvider value={cache}>
      <Provider store={store}>
        <AppEntry />
      </Provider>
    </CacheProvider>,
    _Root
  );
  console.log(document.querySelector("html")?.innerHTML);
});
