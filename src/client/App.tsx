import React from "react";
import loadable from "@loadable/component";

// Hidden
import Head from "./components/global/head";
import RouteChange from "./components/global/route-change";

// Rendered
const Header = loadable(() => import("./components/global/header"));
const Footer = loadable(() => import("./components/global/footer"));

const AppClient = () => (
  <>
    <Head />
    <RouteChange />
    <Header />
    <Footer />
  </>
);

export default AppClient;
