import React from "react";

import loadable from "@loadable/component";

import ErrorBoundary from "../_errors/_boundary";

const returnComponent = (data: any, index: number, componentCount: number) => {
  const { id } = data.template;
  let Component = null;
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

const ComponentSwitch = ({ fragments }: any) =>
  fragments.map((component: any, index: number) =>
    returnComponent(component, index, fragments.length)
  );

export default ComponentSwitch;
