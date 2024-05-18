import { PADDING } from "@/constants/padding";
import React, { ButtonHTMLAttributes, useState } from "react";
import { StyledButton } from "./Button.styled";
import { VARIANT } from "./Button.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VARIANT;
  size?: PADDING;
  textIsUpper?: boolean;
  isDisabled?: boolean;
  isHover?: boolean;
  isActive?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  variant = "filled",
  children,
  textIsUpper,
  isDisabled,
  size = "s",
}: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  return (
    <StyledButton
      textIsUpper={textIsUpper}
      variant={variant}
      isDisabled={isDisabled}
      size={size}
      isHover={isHover}
      isActive={buttonIsActive}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={() => setButtonIsActive(true)}
      onMouseUp={() => setButtonIsActive(false)}
    >
      {children}
    </StyledButton>
  );
};
