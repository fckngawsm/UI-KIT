// src/Button.tsx
import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${props => (props.primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button: React.FC<ButtonProps> = ({ primary = false, children }) => (
  <StyledButton primary={primary}>{children}</StyledButton>
);

