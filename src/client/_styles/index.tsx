import React from "react";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

export const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}
    `}
  />
);
