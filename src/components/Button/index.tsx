import { PADDING } from "@/constants/padding";
import React, { ButtonHTMLAttributes, useState } from "react";
import { StyledButton } from "./Button.styled";
import { VARIANT } from "./Button.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VARIANT;
  size?: PADDING;
  $textIsUpper?: boolean;
  isDisabled?: boolean;
  $fullWidth?: boolean;
  // isSubmiting?: boolean; // todo
  children: React.ReactNode;
}

export const Button = ({
  children,
  $textIsUpper,
  isDisabled,
  variant = "filled",
  $fullWidth = false,
  size = "s",
}: ButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  const [buttonIsActive, setButtonIsActive] = useState(false);
  return (
    <StyledButton
      variant={variant}
      isDisabled={isDisabled}
      size={size}
      $isHover={isHover}
      $fullWidth={$fullWidth}
      $isActive={buttonIsActive}
      $textIsUpper={$textIsUpper}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={() => setButtonIsActive(true)}
      onMouseUp={() => setButtonIsActive(false)}
    >
      {children}
    </StyledButton>
  );
};
