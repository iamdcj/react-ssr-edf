import React from "react";

//* COMPONENTS
import RegionSwitch from "../regions/_region-switch";

const DefaultLayout = ({ regions, ...rest }) => (
  <RegionSwitch regions={regions} {...rest} />
);

export default DefaultLayout;
