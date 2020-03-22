import React, { JSXElementConstructor } from "react";

import loadable, { LoadableComponent } from "@loadable/component";

import ErrorBoundary from "../_errors/_boundary";

import { Fragment } from "../../../_types";

const returnComponent = (
  data: Fragment,
  index: number,
  componentCount: number
) => {
  const { id } = data.template;

  // to fix
  let Component:
    | LoadableComponent<{}>
    | React.ComponentType
    | null
    | any = null;
  let key: string | number = index;

  if (!name) {
    return Component;
  }

  Component = loadable(() => import(`../presentation/${id}`));
  key = `${data.id}-${index}`;

  return (
    <ErrorBoundary key={key}>
      <Component
        firstComponent={index === 0}
        lastComponent={index + 1 === componentCount}
      />
    </ErrorBoundary>
  );
};

const ComponentSwitch = ({ components }: { components: Fragment[] }) => (
  <>
    {components.map((component: Fragment, index: number) => (
      <>{returnComponent(component, index, components.length)}</>
    ))}
  </>
);

export default ComponentSwitch;
