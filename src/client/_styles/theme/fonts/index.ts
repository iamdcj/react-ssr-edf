const defaultFont = `
  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Inter-Regular.woff") format("woff2"),
        url("/fonts/Inter-Regular.woff2") format("woff");
  }
`;

export const fonts = {
  fontFace: {
    defaultFont
  },
  fontFamilies: {
    copy: "Helvetica, sans-serif"
  }
};
