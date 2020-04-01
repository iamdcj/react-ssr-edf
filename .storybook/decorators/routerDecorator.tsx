// RouterDecorator.js
import React from "react";

import { MemoryRouter } from "react-router";

const RouterDecorator = storyFn => {
  return <MemoryRouter>{storyFn()}</MemoryRouter>;
};

export default RouterDecorator;
