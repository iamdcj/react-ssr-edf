import React from "react";

//* COMPONENTS
import RegionSwitch from "../regions/_region-switch";

import { Region } from "../../_types";

const DefaultLayout = ({ regions, ...rest }: { regions: Region[] }) => (
  <RegionSwitch regions={regions} {...rest} />
);

export default DefaultLayout;
