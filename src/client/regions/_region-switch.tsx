import React from "react";

import ErrorBoundary from "../components/_errors/_boundary";
import ComponentSwitch from "client/components/component-switch";

import { Region, Fragment } from "../../_types";

const RegionSwitch = ({ regions }: { regions: Region[] }) => (
  <>
    {regions.map(({ fragments }: { fragments: Fragment[] }, index: number) => (
      <ErrorBoundary key={`region-${index}`}>
        <ComponentSwitch components={fragments} />
      </ErrorBoundary>
    ))}
  </>
);

export default RegionSwitch;
