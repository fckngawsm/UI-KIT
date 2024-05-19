import { SIZE } from "@/constants/size";
import { XCircle } from "@phosphor-icons/react";
import styled from "styled-components";
import { POPUP_WIDTH } from "./Popup.constants";

interface LocalPopupProps {
  size?: SIZE;
  isOpen: boolean;
}

export const PopupWrapper = styled.div<LocalPopupProps>`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition:
    visibility 0.3s,
    opacity 0.4s linear;
  width: 100%;
`;

export const PopupContent = styled.div<{ size?: SIZE }>`
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  position: relative;
  display: block;
  width: 100%;
  max-width: ${({ size }) => (size ? POPUP_WIDTH[size] : "auto")};
  color: black;
  background-color: #fff;
  align-self: center;
  box-sizing: border-box;
  padding: 34px;
`;

export const PopupButton = styled(XCircle)`
  position: absolute;
  top: -25px;
  right: -25px;
  display: block;
  cursor: pointer;
`;
