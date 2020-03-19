import React from "react";

import ErrorBoundary from "../components/_errors/_boundary";

const RegionSwitch = ({ regions, metadata }) =>
  regions.map((region, index) => (
    <ErrorBoundary>
      <ComponentSwitch components={components} />
    </ErrorBoundary>
  ));

export default RegionSwitch;
