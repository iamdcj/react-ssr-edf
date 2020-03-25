import React from "react";

import loadable, { LoadableComponent } from "@loadable/component";

import ErrorBoundary from "../_errors/_boundary";

import { Fragment } from "../../../_types";

const returnComponent = (
  data: Fragment,
  index: number,
  componentCount: number
) => {
  const { id } = data.template;

  if (!id) {
    return null;
  }

  const Component: LoadableComponent<any> = loadable(() =>
    import(`../presentation/${id}`)
  );

  // This feels dirty
  try {
    Component.load();
  } catch (error) {
    console.log(error.message);
    return null;
  }

  return (
    <Component
      {...data.content}
      firstComponent={index === 0}
      lastComponent={index + 1 === componentCount}
    />
  );
};

const ComponentSwitch = ({ components }: { components: Fragment[] }) => (
  <>
    {components.map((component: Fragment, index: number) => (
      <ErrorBoundary key={index}>
        {returnComponent(component, index, components.length) || null}
      </ErrorBoundary>
    ))}
  </>
);

export default ComponentSwitch;
