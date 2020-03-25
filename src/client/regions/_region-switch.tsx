import React from "react";

import ErrorBoundary from "../components/_errors/_boundary";
import ComponentSwitch from "../components/componentSwitch";

import { Region, Fragment } from "../../_types";

const RegionSwitch = ({ regions }: { regions: Region[] }) => (
  <main>
    {regions.map(({ fragments }: { fragments: Fragment[] }, index: number) => (
      <ErrorBoundary key={`region-${index}`}>
        <ComponentSwitch components={fragments} />
      </ErrorBoundary>
    ))}
  </main>
);

export default RegionSwitch;
