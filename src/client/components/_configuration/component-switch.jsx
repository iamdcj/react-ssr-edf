import React from "react";

//* DEPs.
import loadable from "@loadable/component";

import ErrorBoundary from "../_errors/_boundary";

const returnComponent = (data, index, withinTab, componentCount = 0) => {
  const componentName = data.template.name;
  let Component = null;

  if (!componentName) {
    return Component;
  }

  Component = loadable(() => import(`../presentation/${componentName}`));

  return (
    <ErrorBoundary key={`${data.guid}${data.fragmentId}`}>
      <Component
        firstComponent={index === 0}
        lastComponent={index + 1 === componentCount}
      />
    </ErrorBoundary>
  );
};

const ComponentSwitch = ({ fragments: components, withinTab = false }) =>
  components.map((component, index) =>
    returnComponent(component, index, withinTab, components.length)
  );

export default ComponentSwitch;
