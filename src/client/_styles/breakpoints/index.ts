export const breakpoints = {
  mobile: 375,
  tablet: 768,
  tabletLarge: 1024,
  desktop: 1280,
  desktopLarge: 1600,
};

export const minBp = (breakpoint: string) =>
  `(min-width: ${breakpoints[breakpoint]}px)`;
export const maxBp = (breakpoint: string) =>
  `(max-width: ${breakpoints[breakpoint] - 1}px)`;
