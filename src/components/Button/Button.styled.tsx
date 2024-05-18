import { BACKGROUND_COLOR } from "@/constants/background-color";
import { COLOR } from "@/constants/color";
import { TEXT_COLOR } from "@/constants/text-color";
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
  padding: 10px 20px;
  cursor: pointer;
`;
