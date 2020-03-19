import React, { Fragment } from "react";

import ErrorBoundary from "../components/_errors/_boundary";

import Main from "./main";

const RegionSwitch = ({ regions, metadata }) =>
  regions.map((region, index) => (
    <ErrorBoundary>
      <ComponentSwitch components={components} />
    </ErrorBoundary>
  ));

export default RegionSwitch;
