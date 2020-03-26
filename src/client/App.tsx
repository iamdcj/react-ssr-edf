import React from "react";
import loadable from "@loadable/component";

import { GlobalStyles } from "./_styles";

// Hidden
import Head from "./components/global/head";
import RouteChange from "./components/global/route-change";

// Rendered
const RegionSwitch = loadable(() => import("./regions/_region-switch"));
const Header = loadable(() => import("./components/global/header"));
const Footer = loadable(() => import("./components/global/footer"));

const AppClient = () => (
  <>
    <GlobalStyles />
    <Head />
    <RouteChange />
    <Header />
    <RegionSwitch regions={[]} />
    <Footer />
  </>
);

export default AppClient;
