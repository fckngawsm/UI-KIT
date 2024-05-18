import styled from "styled-components";
import { ButtonProps } from "./index";

export const StyledButton = styled.button<ButtonProps>`
  background: ${({ variant }) => (variant === "outlined" ? "#3369F3" : "gray")};
  border: ${({ variant }) =>
    variant === "outlined" ? "1px solid black" : "none"};
  color: white;
  padding: 10px 20px;
  text-transform: ${({ textIsUpper }) =>
    textIsUpper ? "uppercase" : "lowercase"};
  border-radius: 5px;
  cursor: pointer;
`;
