import { BACKGROUND_COLOR } from "@/constants/background-color";
import { COLOR } from "@/constants/color";
import { TEXT_COLOR } from "@/constants/text-color";
import { darkenColor } from "@/utlis/darkenColor";
import styled from "styled-components";
import { ButtonProps } from "./index";

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ variant }) =>
    variant ? BACKGROUND_COLOR[variant] : "gray"};
  border: ${({ variant }) =>
    variant === "outlined" ? `1px solid ${COLOR.violet}` : "none"};
  color: ${({ variant }) => (variant ? TEXT_COLOR[variant] : COLOR.white)};
  text-transform: ${({ textIsUpper }) =>
    textIsUpper ? "uppercase" : "lowercase"};
  border-radius: ${({ variant }) => (variant === "elevated" ? "15px" : "5px")};
  box-shadow: ${({ variant }) =>
    variant === "elevated" ? "0 6px 16px rgba(0, 0, 0, 0.2)" : "none"};
  transition:
    box-shadow 0.3s ease,
    color 0.3s ease;
  padding: 10px 20px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  &:hover {
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);

    background-color: ${({ variant }) =>
      variant ? darkenColor(BACKGROUND_COLOR[variant]) : "inherit"};
  }
`;
