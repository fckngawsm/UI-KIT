import { SIZE } from "@/constants/size";
import React from "react";
import { PopupButton, PopupContent, PopupWrapper } from "./Popup.styled";

export interface PopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  size?: SIZE;
}

export const Popup = ({ children, isOpen, size }: PopupProps) => {
  if (!isOpen) return null;

  return (
    <PopupWrapper isOpen={isOpen}>
      <PopupContent size={size}>
        <PopupButton size={24} color="white" />

        {children}
      </PopupContent>
    </PopupWrapper>
  );
};
