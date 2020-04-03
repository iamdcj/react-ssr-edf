import React, { FC } from "react";

import { StyledButton, ButtonText } from "./Button.styles";
import Icon from "../Icon";

interface ButtonProps {
  disabled?: boolean;
  icon?: string;
  text: string;
  hideText?: boolean;
  variant?: string;
  active?: boolean;
  hovered?: boolean; // storybook purposes
}

const Button: FC<ButtonProps> = ({
  disabled,
  icon,
  text,
  hideText,
  variant = "primary",
  ...props
}) => (
  <StyledButton disabled={disabled} icon={icon} variant={variant} {...props}>
    <ButtonText hideText={hideText}>{text}</ButtonText>
    {icon && <Icon name={icon} width="20" />}
  </StyledButton>
);

export default Button;
