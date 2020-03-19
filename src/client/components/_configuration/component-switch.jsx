import React from "react";
import ErrorBoundary from "../_errors/_boundary";

const returnComponent = (data, index, withinTab, componentCount) => {
  let Component;

  try {
    Component = require(`../presentation/${data.name}`);
  } catch (error) {
    console.error(error);
    Component = null;
  }

  const keyGuid = data.guid;
  const isFirst = index === 0;
  const isLast = index + 1 === componentCount;

  return (
    <ErrorBoundary key={`component-${keyGuid}${index}`}>
      {Component?.default ? (
        <RenderComponent
          Component={Component.default}
          data={data}
          withinTab={withinTab}
          firstComponent={isFirst}
          lastComponent={isLast}
        />
      ) : null}
    </ErrorBoundary>
  );
};

const RenderComponent = ({ Component, data, ...rest }) => (
  <Component {...data} {...rest} />
);

const ComponentSwitch = ({ components, withinTab = false }) =>
  components.map((component, index) =>
    returnComponent(component, index, withinTab, components.length)
  );

export default ComponentSwitch;
