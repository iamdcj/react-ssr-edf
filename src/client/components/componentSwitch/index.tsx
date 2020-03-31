import React from "react";

import loadable, { LoadableComponent } from "@loadable/component";

import { Fragment } from "../../../_types";
import { manifest } from "./manifest";

import ErrorBoundary from "../_errors/_boundary";

const returnComponent = (
  data: Fragment,
  index: number,
  componentCount: number
) => {
  const { id } = data.template;

  if (!id || !manifest.includes(id)) {
    return null;
  }

  const Component: LoadableComponent<any> = loadable(() =>
    import(`../presentation/${id}`)
  );

  return (
    <Component
      {...data.content}
      firstComponent={index === 0}
      lastComponent={index + 1 === componentCount}
    />
  );
};

const ComponentSwitch = ({
  components,
  id
}: {
  components: Fragment[];
  id: string;
}) => (
  <>
    {components.map((component: Fragment, index: number) => (
      <ErrorBoundary key={`${index}-${id}-${component.id}`}>
        {returnComponent(component, index, components.length) || null}
      </ErrorBoundary>
    ))}
  </>
);

export default ComponentSwitch;
