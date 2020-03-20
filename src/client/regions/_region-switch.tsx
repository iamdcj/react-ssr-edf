import React from "react";

import ErrorBoundary from "../components/_errors/_boundary";
import ComponentSwitch from "client/components/_configuration/component-switch";

const RegionSwitch = ({ regions }) =>
  regions.map(({ fragments }, index: number) => (
    <ErrorBoundary key={`region-${index}`}>
      <ComponentSwitch components={fragments} />
    </ErrorBoundary>
  ));

export default RegionSwitch;
