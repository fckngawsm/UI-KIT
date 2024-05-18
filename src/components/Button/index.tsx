import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./Button.styled";
import { VARIANT } from "./Button.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VARIANT;
  textIsUpper?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  variant,
  children,
  textIsUpper,
  disabled,
}: ButtonProps) => (
  <StyledButton textIsUpper={textIsUpper} variant={variant} disabled={disabled}>
    {children}
  </StyledButton>
);
