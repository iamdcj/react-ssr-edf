// themeDecorator.js
import React from "react";
import { ThemeProvider } from "emotion-theming";

import Theme from "../../src/client/_styles/theme";

import { GlobalStyles } from "../../src/client/_styles";

const ThemeDecorator = storyFn => {
  console.log(storyFn);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  );
};

export default ThemeDecorator;
