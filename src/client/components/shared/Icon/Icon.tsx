import React from "react";

import loadable from "@loadable/component";

export interface IconProps {
  name: string;
  width?: string;
  height?: string;
  color?: string;
}

const manifest = ["placeholder"];

const SVG = ({ name, ...rest }: { name: string }) => {
  if (!manifest.includes(name)) {
    return null;
  }

  const Component = loadable(
    () => import(`../../../assets/icons/${name}.svg`),
    {
      fallback: <></>,
    }
  );

  return <Component {...rest} />;
};

const Icon: React.SFC<IconProps> = ({ name = "logo", ...rest }) => {
  return <SVG name={name} {...rest} />;
};

export default Icon;
