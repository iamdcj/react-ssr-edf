import styled from "@emotion/styled";
import { css } from "@emotion/core";

export const resetButton = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const primary = ({ theme, active }) => css`
  background-color: rgb(0, 150, 220);
  background: ${active ? theme.palette.brand.f : theme.palette.brand.b};
  border-color: ${active ? theme.palette.brand.f : theme.palette.brand.b};
  color: ${theme.palette.white};
  transition-property: all;

  &:disabled {
    pointer-events: none;
    background: ${theme.palette.brand.d};
    border-color: ${theme.palette.brand.d};
    color: ${theme.palette.white};
  }
`;

export const secondary = ({ theme }) => css`
  border-color: ${theme.palette.brand.b};
  color: ${theme.palette.brand.b};
  transition-property: all;
  transition-duration: 500ms;
  border-style: solid;

  &:disabled {
    pointer-events: none;
    background: ${theme.white};
    border-color: ${theme.palette.brand.d};
    color: ${theme.palette.brand.d};
  }
`;

export const buttonStyles = {
  primary,
  secondary
};

export const ButtonText = styled.span``;

const returnVariant = ({ variant }: { variant: string }) =>
  buttonStyles[variant];

export const StyledButton = styled.button`
  ${resetButton}
  ${(props: any) => `
    display: inline-flex;
    align-items: center;
    padding: ${props.hovered ? "15px 30px" : "15px 20px"};
    border-style: solid;
    border-width: 1px;
    border-radius: 30px;
    border-color: currentColor;
    background: none;
    color: ${props.theme.palette.black};
    font-size: ${props.theme.typography.sizes.small};
    font-weight: ${props.theme.typography.weights.strong};
    line-height: ${props.theme.typography.leading.smallest};
    text-align: center;
    transition: all 500ms ease-in-out;
    text-decoration: none;
  `};

  ${returnVariant}

  > svg {
    margin-left: 10px;
  }

  &:hover {
    padding: 15px 30px;
  }

  & + button {
    margin-left: 10px;
  }
`;
