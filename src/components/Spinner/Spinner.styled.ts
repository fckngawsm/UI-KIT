import styled, { keyframes } from "styled-components";
import { SpinnerProps } from ".";
import { SPINNER_SIZE } from "./Spinner.constants";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const prixClipFix = keyframes`
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
`;

export const AnimatedSpinner = styled.div<SpinnerProps>`
  width: ${({ size }) => (size ? SPINNER_SIZE[size] : "48px")};
  height: ${({ size }) => (size ? SPINNER_SIZE[size] : "48px")};
  border-radius: 50%;
  position: relative;
  animation: ${rotate} ${({ animationTime }) => animationTime}s linear infinite;

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: ${({ spinnerColor }) => `5px solid ${spinnerColor}`};
    animation: ${prixClipFix} ${({ animationTime }) => animationTime}s linear
      infinite;
  }
`;
