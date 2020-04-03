// themeDecorator.js
import React from "react";
import { css } from "@emotion/core";

const WrapperDecorator = storyFn => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "100%",
        overflow: "hidden"
      }}
    >
      {storyFn()}
    </div>
  );
};

export default WrapperDecorator;
