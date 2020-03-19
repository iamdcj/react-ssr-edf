import React from "react";

//* - DEPENDCIES -
import classNames from "classnames";

//* COMPONENTS
import RegionSwitch from "../regions/_region-switch";

const DefaultLayout = ({ regions, ...rest }) => RegionSwitch regions={regions} {...rest} />

export default DefaultLayout;
