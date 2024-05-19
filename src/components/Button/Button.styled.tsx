import { BACKGROUND_COLOR } from "@/constants/background-color";
import { COLOR } from "@/constants/color";
import { TEXT_COLOR } from "@/constants/text-color";
import { darkenColor } from "@/utlis/darkenColor";
import styled from "styled-components";
import { BUTTON_PADDING } from "./Button.constants";
import { ButtonProps } from "./index";

interface LocalButtonProps extends ButtonProps {
  $isHover?: boolean;
  $isActive?: boolean;
  $fullWidth?: boolean;
}

export const StyledButton = styled.button<LocalButtonProps>`
  /* Задний фон */
  background-color: ${({ variant, $isHover, $isActive }) => {
    if ($isActive && variant) {
      return darkenColor(BACKGROUND_COLOR[variant], 20);
    }
    if (variant && $isHover) {
      return darkenColor(BACKGROUND_COLOR[variant], 10);
    }
    return variant ? BACKGROUND_COLOR[variant] : "gray";
  }};

  /* Граница */
  border: ${({ variant }) =>
    variant === "outlined" ? `1px solid ${COLOR.violet}` : "none"};

  /* Цвет текста */
  color: ${({ variant }) => (variant ? TEXT_COLOR[variant] : COLOR.white)};

  /* Преобразование текста в верхний или нижний регистр */
  text-transform: ${({ $textIsUpper }) =>
    $textIsUpper ? "uppercase" : "lowercase"};

  /* Радиус скругления углов */
  border-radius: ${({ variant }) => (variant === "elevated" ? "15px" : "5px")};

  /* Тень */
  box-shadow: ${({ variant }) =>
    variant === "elevated" ? "0 6px 16px rgba(0, 0, 0, 0.2)" : "none"};

  /* Переходы для плавных изменений */
  transition:
    box-shadow 0.3s ease,
    color 0.3s ease,
    background-color 0.3s ease;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  /* Отступы */
  padding: ${({ size }) => (size ? BUTTON_PADDING[size] : BUTTON_PADDING.s)};

  /* Прозрачность и курсор */
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};
`;
