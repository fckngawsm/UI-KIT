import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.styled";
import { VARIANT } from "./Button.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VARIANT;
  textIsUpper?: boolean;
  children: React.ReactNode;
}

export const Button = ({ variant, children, textIsUpper }: ButtonProps) => (
  <StyledButton textIsUpper={textIsUpper} variant={variant}>
    {children}
  </StyledButton>
);
