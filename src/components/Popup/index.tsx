import { SIZE } from "@/constants/size";
import React from "react";
import { PopupButton, PopupContent, PopupWrapper } from "./Popup.styled";

export interface PopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClosing: () => void;
  size?: SIZE;
}

export const Popup = ({ children, isOpen, size, onClosing }: PopupProps) => {
  if (!isOpen) return null;

  return (
    <PopupWrapper data-testid="popup" isOpen={isOpen} onClick={onClosing}>
      <PopupContent size={size}>
        <PopupButton size={24} color="white" />
        {children}
      </PopupContent>
    </PopupWrapper>
  );
};
