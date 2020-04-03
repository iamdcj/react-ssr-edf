import React from "react";

import { connect } from "react-redux";

import loadable from "@loadable/component";

import { GlobalStyles } from "./_styles";

import { Composition, Region, Metadata } from "../_types";

import { ThemeProvider } from "emotion-theming";

import Theme from "./_styles/theme";

// Hidden
import Head from "./components/globals/head";
import RouteChange from "./components/globals/route-change";

// Rendered
import RegionSwitch from "./regions/_region-switch";
const Header = loadable(() => import("./components/globals/header"));
const Footer = loadable(() => import("./components/globals/footer"));

const AppClient = ({
  regions,
  metadata,
}: {
  regions: Region[];
  metadata: Metadata;
}) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <RouteChange />
      <Head {...metadata} />
      <Header />
      {regions && <RegionSwitch regions={regions} />}
      <Footer />
    </ThemeProvider>
  );
};

const mapStateToProps = ({ composition }: { composition: Composition }) => ({
  metadata: composition.metadata,
  regions: composition.regions,
});

export default connect(mapStateToProps, null)(AppClient);
