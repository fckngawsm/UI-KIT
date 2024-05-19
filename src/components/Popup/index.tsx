import { SIZE } from "@/constants/size";
import React, { useEffect, useState } from "react";
import { PopupButton, PopupContent, PopupWrapper } from "./Popup.styled";

export interface PopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClosing: () => void;
  size?: SIZE;
}

export const Popup = ({ children, isOpen, size, onClosing }: PopupProps) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    if (!open) return;

    const timerId = setTimeout(() => {
      setOpen(false);
      onClosing?.();
    }, 30000);

    return () => clearTimeout(timerId);
  }, [isOpen, onClosing]);

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
